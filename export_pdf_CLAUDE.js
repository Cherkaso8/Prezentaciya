/**
 * export_pdf_CLAUDE.js — экспорт питч-дека «Интерференция» (poster) в PDF
 *
 * Стратегия:
 *   1. Puppeteer рендерит каждый слайд 1920×1080 → PNG-скриншот
 *   2. pdf-lib собирает PNG в PDF без перекомпрессии (нет артефактов на красном)
 *
 * Запуск: node export_pdf_CLAUDE.js
 */

const { createRequire } = require('module');
const { execFileSync }  = require('child_process');
const path   = require('path');
const fs     = require('fs');
const https  = require('https');
const http   = require('http');
const os     = require('os');

// Используем node_modules из проекта РУССКИЙ — там уже стоят puppeteer-core и pdf-lib
const requireFrom = createRequire(
  '/Users/cherkaso8/Desktop/ClaudeP/Кино/Русский/РУССКИЙ — Pitch Design System/package.json'
);
const puppeteer      = requireFrom('puppeteer-core');
const { PDFDocument } = requireFrom('pdf-lib');

// Chrome for Testing — берём первую найденную версию
const CHROME_BASE = path.join(process.env.HOME, '.cache/puppeteer/chrome');
function findChrome() {
  const builds = fs.readdirSync(CHROME_BASE).filter(d => d.startsWith('mac_arm-'));
  if (!builds.length) throw new Error('Chrome for Testing не найден в ~/.cache/puppeteer/chrome');
  const build = builds.sort().pop();
  return path.join(CHROME_BASE, build, 'chrome-mac-arm64',
    'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing');
}

const BASE_URL       = 'http://localhost:8765/variants/poster/deck.html';
const SCRIPT_DIR     = __dirname;
const FONT_CACHE_DIR = path.join(SCRIPT_DIR, '_font_cache');
const OUTPUT_PDF     = path.join(SCRIPT_DIR, 'Интерференция_питч_CLAUDE.pdf');

// Шрифты, которые использует poster вариант
const GF_URL = 'https://fonts.googleapis.com/css2?'
  + 'family=Oswald:wght@400;500;600;700'
  + '&family=Bebas+Neue'
  + '&family=Big+Shoulders+Display:wght@700;800;900'
  + '&family=Anton'
  + '&family=Rozha+One'
  + '&family=Abril+Fatface'
  + '&family=DM+Sans:wght@400;500;600;700'
  + '&family=Space+Mono:wght@400;700'
  + '&display=swap';

// ── helpers ───────────────────────────────────────────────────────────────────

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'text/css,*/*' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end',  () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

const fetchText = url => fetchBuffer(url).then(b => b.toString('utf8'));

// ── font cache ────────────────────────────────────────────────────────────────

async function buildFontCache() {
  if (!fs.existsSync(FONT_CACHE_DIR)) fs.mkdirSync(FONT_CACHE_DIR, { recursive: true });
  const cssPath = path.join(FONT_CACHE_DIR, 'fonts.css');

  if (fs.existsSync(cssPath)) {
    console.log('  Кэш шрифтов уже есть — переиспользуем.');
    return cssPath;
  }

  console.log('  Загружаем Google Fonts CSS…');
  const css = await fetchText(GF_URL).catch(() => null);
  if (!css) { console.warn('  ⚠ Google Fonts недоступен — шрифты будут системными'); return null; }

  const matches = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/g)];
  console.log(`  Найдено файлов шрифтов: ${matches.length}`);

  const pairs = await Promise.all(matches.map(async ([, url]) => {
    const name  = url.split('/').pop().split('?')[0];
    const local = path.join(FONT_CACHE_DIR, name);
    if (!fs.existsSync(local)) {
      const buf = await fetchBuffer(url).catch(() => null);
      if (buf) fs.writeFileSync(local, buf);
    }
    return [url, local];
  }));

  let patchedCss = css;
  for (const [remoteUrl, localPath] of pairs) {
    if (!fs.existsSync(localPath)) continue;
    const b64 = fs.readFileSync(localPath).toString('base64');
    patchedCss = patchedCss.replace(remoteUrl, `data:font/woff2;base64,${b64}`);
  }

  fs.writeFileSync(cssPath, patchedCss);
  return cssPath;
}

// ── main ──────────────────────────────────────────────────────────────────────

(async () => {
  // 1. Шрифты
  console.log('1/4  Кэшируем шрифты…');
  const localFontCss = await buildFontCache();

  // 2. Браузер
  console.log('2/4  Запускаем Chrome…');
  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--font-render-hinting=none',
      '--force-color-profile=srgb',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 4 });

  // Перехватываем запросы к Google Fonts — подставляем локальный кэш
  if (localFontCss) {
    const patchedCssText = fs.readFileSync(localFontCss, 'utf8');
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('fonts.googleapis.com')) {
        req.respond({ status: 200, contentType: 'text/css; charset=utf-8', body: patchedCssText });
      } else if (url.includes('fonts.gstatic.com')) {
        req.abort();
      } else {
        req.continue();
      }
    });
  }

  // 3. Загружаем дек
  console.log('3/4  Загружаем дек…');
  await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 60_000 });

  // Ждём: шрифты + Babel-компиляция JSX + React-рендер
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 3000));

  // Прячем оверлей навигации (в shadow DOM)
  await page.evaluate(() => {
    const stage = document.querySelector('deck-stage');
    if (stage && stage.shadowRoot) {
      const s = document.createElement('style');
      s.textContent = '.overlay, .tapzones { display: none !important; }';
      stage.shadowRoot.appendChild(s);
    }
  });
  await new Promise(r => setTimeout(r, 200));

  const slideCount = await page.evaluate(() => {
    const stage = document.querySelector('deck-stage');
    return stage ? stage.length : 0;
  });
  console.log(`   Слайдов: ${slideCount}`);

  // 4. Скриншоты в 2× ретина (3840×2160)
  console.log('4/4  Снимаем слайды 2× retina…');
  const slideBuffers = [];

  for (let i = 0; i < slideCount; i++) {
    await page.evaluate(idx => {
      document.querySelector('deck-stage').goTo(idx);
    }, i);
    await new Promise(r => setTimeout(r, 300));

    const raw = await page.screenshot({
      type: 'jpeg',
      quality: 92,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });

    // Чуть приглушаем насыщенность (−6%) через Pillow чтобы красный не горел
    const tmpIn  = path.join(os.tmpdir(), `slide_${i}_raw.jpg`);
    const tmpOut = path.join(os.tmpdir(), `slide_${i}_out.jpg`);
    fs.writeFileSync(tmpIn, raw);
    execFileSync('python3', ['-c', `
from PIL import Image, ImageEnhance
img = Image.open("${tmpIn}").convert("RGB")
img = ImageEnhance.Color(img).enhance(0.88)
img.save("${tmpOut}", "JPEG", quality=92, subsampling=2)
`]);
    const buf = fs.readFileSync(tmpOut);
    slideBuffers.push(buf);
    process.stdout.write(`   слайд ${i + 1}/${slideCount}\r`);
  }
  console.log(`\n   Готово — ${slideCount} слайдов`);

  await browser.close();

  // Собираем PDF — 2× PNG в 1920×1080 страницах = ретина-качество
  console.log('   Собираем PDF…');
  const pdfDoc = await PDFDocument.create();
  for (const buf of slideBuffers) {
    const img = await pdfDoc.embedJpg(buf);
    const pg  = pdfDoc.addPage([1920, 1080]);
    pg.drawImage(img, { x: 0, y: 0, width: 1920, height: 1080 });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PDF, pdfBytes);

  const sizeMB = (fs.statSync(OUTPUT_PDF).size / 1_048_576).toFixed(1);
  console.log(`\n✓  PDF сохранён: ${OUTPUT_PDF}`);
  console.log(`   Размер: ${sizeMB} MB  |  Слайдов: ${slideCount}`);
  console.log('   4× JPEG q92, 7680×4320 px на слайд');
})().catch(err => { console.error('ОШИБКА:', err); process.exit(1); });

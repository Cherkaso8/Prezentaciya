# Алгоритм экспорта PDF питч-дека

## Команда запуска

```bash
cd "/Users/cherkaso8/Desktop/Интерференция/Интерференция 2"
# убедиться что сервер запущен:
python3 -m http.server 8765 &
node export_pdf_CLAUDE.js
```

Результат: `Интерференция_питч_CLAUDE.pdf`

---

## Технический стек

| Компонент | Откуда берём |
|-----------|-------------|
| `puppeteer-core` | node_modules из проекта `РУССКИЙ — Pitch Design System` |
| `pdf-lib` | то же |
| Chrome for Testing | `~/.cache/puppeteer/chrome/mac_arm-*/` |
| Python / Pillow | системный Python3 |

---

## Параметры (выверены экспериментально)

### Viewport и скриншоты
- `deviceScaleFactor: 4` → физические пиксели **7680×4320** на слайд
- Clip в **CSS-пикселях**: `{ x:0, y:0, width:1920, height:1080 }`
- Формат: **JPEG quality 92**
- ⚠️ Clip всегда в CSS-пикселях, не физических — иначе половина слайда будет пустой

### Цветокоррекция
- После скриншота: **−12% насыщенности** через `ImageEnhance.Color(img).enhance(0.88)`
- Без коррекции красный (#c7361f) и жёлтый (#ead6a3) «горят» на P3-дисплее Mac
- JPEG chroma subsampling дополнительно приглушает цвета

### Chrome flags
```
--force-color-profile=srgb
--no-sandbox
--disable-setuid-sandbox
--disable-dev-shm-usage
--font-render-hinting=none
```

### Тайминги
- После `networkidle0`: ждём **3000ms** (Babel компилирует JSX + React рендерит)
- Между слайдами: **300ms**

---

## Шрифты (локальный кэш)

При первом запуске скрипт скачивает шрифты из Google Fonts и кэширует в `_font_cache/`.
Все последующие запуски — **полностью офлайн**.

Интерцептор запросов:
- `fonts.googleapis.com` → подставляем локальный CSS с base64-шрифтами
- `fonts.gstatic.com` → `req.abort()`

---

## Навигация по слайдам

`deck-stage` — web component с shadow DOM. Для экспорта:

```js
// Прячем оверлей навигации (в shadow DOM)
stage.shadowRoot.appendChild(style('.overlay, .tapzones { display:none !important }'))

// Переходим к слайду
document.querySelector('deck-stage').goTo(idx)

// Количество слайдов
document.querySelector('deck-stage').length
```

---

## Почему JPEG, а не PNG

Старый финальный PDF (`Интерференция_питч.pdf`) был сгенерирован с JPEG 7680×4320.
JPEG chroma subsampling естественно приглушает насыщенность — именно это убирает
эффект «горящих» цветов при просмотре на P3-дисплее в Preview.app.

PNG давал технически точные sRGB-пиксели, но Preview без ICC-профиля интерпретировал
DeviceRGB как дисплейное P3, отчего цвета выглядели слишком яркими.

---

## Итоговые характеристики PDF

| Параметр | Значение |
|----------|---------|
| Страниц | 21 |
| Размер страницы | 1920×1080 pt |
| Разрешение изображений | 7680×4320 px |
| Формат изображений | JPEG 92% |
| Размер файла | ~65 MB |

// V1 — Плёнка-нуар. Slides: synopsis, tone, wrap.

// ── 12. Synopsis section ───────────────────────────────────────
function S12_SynopsisSection() {
  return (
    <SectionTitle
      bgImage="../../assets/ref-scene-solitude.png"
      overline="Часть 2"
      kicker="Короткий синопсис сериала"
    >
      Синопсис
    </SectionTitle>
  );
}

// ── 13. Synopsis body ──────────────────────────────────────────
function S13_Synopsis() {
  return (
    <NoirFrame>
      <SlideHeading>Короткий синопсис</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 64, flex: 1, alignItems: 'start' }}>
        <div>
          <Body style={{ fontSize: 22, lineHeight: 1.75, maxWidth: 'none' }}>
            <p style={{ margin: '0 0 20px' }}>
              Оливия — одинокая криминальная курьер около 40 лет. Устала от жизни, хочет всё бросить
              и уехать в Крым к морю. Её последняя работа оказывается ловушкой — на неё нападают,
              но она случайно спасается и прячет на себе 8-летнюю сироту Машу, свидетельницу покушения.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              Параллельно трое айтишников — Сухой, Гуддини и Тимур, сын криминального босса Олега, —
              решают ограбить собственного отца Тимура, чтобы доказать свою самостоятельность.
              План срывается: один из курьеров гибнет, второй исчезает с товаром.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              Оливия, преследуемая и своими, и чужими, вынужденно берёт Машу в напарницы.
              Вместе они разматывают цепочку: от мелких посредников до самого Олега,
              который и не подозревает, что за покушением стоит его собственный сын.
            </p>
            <p style={{ margin: 0 }}>
              Чем ближе финал, тем яснее: Оливия становится Маше той матерью, которой у неё не было.
              А Олег — медленно убивает сына равнодушием. Интерференция: одна волна усиливает,
              другая — гасит.
            </p>
          </Body>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ height: 310, position: 'relative' }}>
            <CineImage src="../../assets/ref-peaky-thomas.png" filter="warm" />
          </div>
          <div style={{ height: 310, position: 'relative' }}>
            <CineImage src="../../assets/ref-scene-solitude.png" filter="cool" />
          </div>
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 14. Story arc (3 acts) ─────────────────────────────────────
function S14_Arc() {
  const acts = [
    {
      n: 'I', t: 'Покушение',
      eps: 'Серии 1–2',
      text: 'Оливия готовится уйти на покой. Последний заказ оборачивается засадой. Случайно спасённая Маша становится единственной свидетельницей. Параллельно — план Сухого, Гуддини и Тимура.',
    },
    {
      n: 'II', t: 'Расследование',
      eps: 'Серии 3–4',
      text: 'Оливия с Машей уходят в тень, распутывают цепочку посредников. Связь между ними крепнет. Олег ищет предателя в своём окружении и всё больше приближает Артёма.',
    },
    {
      n: 'III', t: 'Интерференция',
      eps: 'Серии 5–6',
      text: 'Оливия выходит на Олега. Тимур ломается под грузом содеянного. Волны пересекаются — одни жизни усиливают другие, другие гаснут. Финал — в Крыму.',
    },
  ];
  return (
    <NoirFrame>
      <SlideHeading>Арка · три акта</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 44, flex: 1 }}>
        {acts.map((a) => (
          <div key={a.n} style={{
            border: `1px solid ${NOIR.rule}`,
            padding: '36px 32px',
            background: 'rgba(255,255,255,0.015)',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              fontFamily: FONTS.logo, fontSize: 96,
              color: NOIR.accent,
              lineHeight: 1, marginBottom: 18,
              letterSpacing: '0.02em',
            }}>{a.n}</div>
            <div style={{
              fontFamily: FONTS.section, fontSize: 32,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: NOIR.ink, marginBottom: 8,
            }}>{a.t}</div>
            <div style={{
              fontFamily: FONTS.body, fontSize: 16, color: NOIR.accent,
              letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 22,
            }}>{a.eps}</div>
            <Body style={{ fontSize: 20, lineHeight: 1.6 }}>{a.text}</Body>
          </div>
        ))}
      </div>
    </NoirFrame>
  );
}

// ── 15. Tone & visual ──────────────────────────────────────────
function S15_Tone() {
  const pillars = [
    { k: 'Свет',     v: 'Низкий ключ. Сочная темнота. Единственный источник в кадре.' },
    { k: 'Цвет',     v: 'Десатурированные охра и пыльная бирюза. Ржавчина как акцент.' },
    { k: 'Камера',   v: 'Длинный фокус, неспешные наезды, «подглядывание» из-за углов.' },
    { k: 'Монтаж',   v: 'Длинные сцены с напряжением. Резкий врез там, где нужно рвануть.' },
    { k: 'Музыка',   v: 'Электронный пост-панк · гитары с дилеем · советская эстрада наизнанку.' },
    { k: 'Юмор',     v: 'Сухой, по-гай-ричи. Через диалоги и ситуации, не через гэги.' },
  ];
  return (
    <NoirFrame>
      <SlideHeading>Тон и визуал</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, flex: 1, alignItems: 'start' }}>
        <div>
          {pillars.map(({ k, v }, i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr',
              padding: '18px 0',
              borderBottom: i < pillars.length - 1 ? `1px solid ${NOIR.rule}` : 'none',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: FONTS.section, fontSize: 18,
                letterSpacing: '0.35em', textTransform: 'uppercase',
                color: NOIR.accent,
              }}>{k}</div>
              <div style={{
                fontFamily: FONTS.body, fontSize: 22, lineHeight: 1.55,
                color: NOIR.ink,
              }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { src: '../../assets/ref-peaky-thomas.png', f: 'warm' },
            { src: '../../assets/ref-scene-solitude.png', f: 'cool' },
            { src: '../../assets/ref-oleg-face.png', f: 'mono' },
            { src: '../../assets/ref-olivia-art.png', f: 'cool' },
          ].map((img, i) => (
            <div key={i} style={{ height: 300, position: 'relative' }}>
              <CineImage src={img.src} filter={img.f} />
            </div>
          ))}
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 16. Audience & positioning ─────────────────────────────────
function S16_Audience() {
  return (
    <NoirFrame>
      <SlideHeading>Аудитория · позиционирование</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, flex: 1, alignItems: 'start' }}>
        <div>
          <div style={{
            fontFamily: FONTS.section, fontSize: 18, letterSpacing: '0.35em',
            color: NOIR.accent, textTransform: 'uppercase', marginBottom: 20,
          }}>Целевая аудитория</div>
          <div style={{
            fontFamily: FONTS.accent, fontStyle: 'italic',
            fontSize: 44, lineHeight: 1.35, color: NOIR.ink, marginBottom: 40,
          }}>25–45 лет</div>
          <Body style={{ fontSize: 23, lineHeight: 1.7 }}>
            Зрители, выросшие на «Бригаде», «Бумере» и «Острых козырьках». Ценят плотный сюжет,
            персонажей с биографией, мрачный юмор и атмосферу. Готовы к неоднозначным героям
            и финалам без «хеппи-энда».
          </Body>
        </div>
        <div>
          <div style={{
            fontFamily: FONTS.section, fontSize: 18, letterSpacing: '0.35em',
            color: NOIR.accent, textTransform: 'uppercase', marginBottom: 20,
          }}>Референсы</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              ['Острые козырьки', 'атмосфера, типаж'],
              ['Леон', 'дуэт «взрослый + ребёнок»'],
              ['Карты, деньги, два ствола', 'стиль рассказа, юмор'],
              ['Фарго', 'смешение жанров'],
            ].map(([t, d]) => (
              <div key={t} style={{
                border: `1px solid ${NOIR.rule}`,
                padding: '22px 20px',
                background: 'rgba(255,255,255,0.015)',
              }}>
                <div style={{
                  fontFamily: FONTS.section, fontSize: 22,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: NOIR.ink, marginBottom: 8,
                }}>{t}</div>
                <div style={{
                  fontFamily: FONTS.body, fontSize: 16,
                  color: NOIR.inkDim, letterSpacing: '0.08em',
                }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 17. Team ───────────────────────────────────────────────────
function S17_Team() {
  const team = [
    ['АВТОР · ШОУРАННЕР', '[Имя автора]'],
    ['РЕЖИССЁР', '[Имя режиссёра]'],
    ['ОПЕРАТОР-ПОСТАНОВЩИК', '[Имя]'],
    ['ХУДОЖНИК-ПОСТАНОВЩИК', '[Имя]'],
    ['КОМПОЗИТОР', '[Имя]'],
    ['ПРОДЮСЕР', '[Имя продюсера]'],
  ];
  return (
    <NoirFrame>
      <SlideHeading>Команда</SlideHeading>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          {team.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '340px 1fr',
              padding: '24px 0',
              borderBottom: i < team.length - 1 ? `1px solid ${NOIR.rule}` : 'none',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: FONTS.section, fontSize: 17,
                letterSpacing: '0.32em', textTransform: 'uppercase',
                color: NOIR.accent,
              }}>{k}</div>
              <div style={{
                fontFamily: FONTS.body, fontSize: 24, color: NOIR.ink,
              }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ height: 600, position: 'relative' }}>
          <Placeholder label="Фото команды / бэкстейдж" w="100%" h="100%" />
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 18. Closing / contact ──────────────────────────────────────
function S18_Closing() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#000',
      overflow: 'hidden',
    }}>
      <img src="../../assets/poster-hero.png" alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'saturate(0.4) contrast(1.15) brightness(0.5)',
        }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.95) 100%)',
      }} />
      <GrainLayer opacity={0.18} />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 5,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 140px',
      }}>
        <div style={{
          fontFamily: FONTS.section, fontSize: 20, letterSpacing: '0.6em',
          color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', marginBottom: 36,
        }}>Спасибо</div>
        <h1 style={{
          fontFamily: FONTS.logo, fontWeight: 900,
          fontSize: 140, letterSpacing: '0.05em',
          color: '#f1e8d8', margin: 0, lineHeight: 1,
          textShadow: '0 4px 40px rgba(0,0,0,0.8)',
        }}>ИНТЕРФЕРЕНЦИЯ</h1>
        <div style={{
          fontFamily: FONTS.accent, fontStyle: 'italic',
          fontSize: 34, color: 'rgba(255,255,255,0.75)', marginTop: 28,
          maxWidth: 900,
        }}>
          «Одна волна может усилить другую. Может полностью её уничтожить.»
        </div>
        <div style={{ width: 120, height: 1, background: 'rgba(255,255,255,0.3)', margin: '64px 0 48px' }} />
        <div style={{
          display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 60,
          fontFamily: FONTS.body, fontSize: 18,
          color: 'rgba(255,255,255,0.85)',
        }}>
          <div>
            <div style={{ fontFamily: FONTS.section, fontSize: 13, letterSpacing: '0.35em', color: NOIR.accent, textTransform: 'uppercase', marginBottom: 8 }}>Контакт</div>
            <div>[Имя]</div>
          </div>
          <div>
            <div style={{ fontFamily: FONTS.section, fontSize: 13, letterSpacing: '0.35em', color: NOIR.accent, textTransform: 'uppercase', marginBottom: 8 }}>Email</div>
            <div>[email@example.com]</div>
          </div>
          <div>
            <div style={{ fontFamily: FONTS.section, fontSize: 13, letterSpacing: '0.35em', color: NOIR.accent, textTransform: 'uppercase', marginBottom: 8 }}>Телефон</div>
            <div>[+7 ___ ___ __ __]</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  S12_SynopsisSection, S13_Synopsis, S14_Arc,
  S15_Tone, S16_Audience, S17_Team, S18_Closing,
});

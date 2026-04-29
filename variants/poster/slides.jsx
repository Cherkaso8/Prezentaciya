// V3 — Киноплакатный. 18 слайдов.

const PTOTAL = 21;

// ── 01. Title — full-bleed постер, крупный логотип штампом ──────
function P01_Title() {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: POS.ink, overflow: 'hidden',
    }}>
      <img src="../../assets/poster-hero.png" alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'none',
        }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg,
          rgba(28,26,24,0.5) 0%,
          rgba(28,26,24,0.15) 30%,
          rgba(28,26,24,0.15) 60%,
          rgba(28,26,24,0.92) 100%)`,
      }} />
      {/* paper/halftone overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.18, mixBlendMode: 'multiply',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.08  0 0 0 0 0.06  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>")`,
      }} />

      {/* top tape */}
      <div style={{
        position: 'absolute', top: 54, left: 0, right: 0, textAlign: 'center',
        fontFamily: POS_FONTS.slab, fontSize: 17, letterSpacing: '0.6em',
        textTransform: 'uppercase', fontWeight: 500,
        color: POS.cream,
      }}>
        <span style={{ display: 'inline-block', padding: '12px 40px', background: POS.accent, color: POS.cream }}>
          Оригинальный сериал · 2026 · питч-презентация
        </span>
      </div>

      {/* main title bottom */}
      <div style={{
        position: 'absolute', left: 90, right: 90, bottom: 90, zIndex: 5,
      }}>
        <div style={{ marginBottom: 28 }}>
          <span style={{
            display: 'inline-block', padding: '10px 20px 8px',
            background: POS.cream, color: POS.accent,
            fontFamily: POS_FONTS.slab, fontWeight: 700,
            fontSize: 18, letterSpacing: '0.4em', textTransform: 'uppercase',
            transform: 'rotate(-2deg)',
          }}>Криминальная драма</span>
        </div>
        <h1 style={{
          fontFamily: POS_FONTS.slab, fontWeight: 700,
          fontSize: 230, lineHeight: 0.88, letterSpacing: '-0.02em',
          textTransform: 'uppercase', whiteSpace: 'nowrap',
          color: POS.cream, margin: 0,
          textShadow: '0 6px 0 rgba(199, 54, 31, 0.35)', textAlign: 'center',
        }}>Интерференция</h1>
        <div style={{
          marginTop: 36, display: 'flex', alignItems: 'baseline',
          gap: 30, borderTop: `3px solid ${POS.cream}`, paddingTop: 24,
        }}>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 500,
            fontSize: 22, letterSpacing: '0.4em', textTransform: 'uppercase',
            color: POS.cream,
          }}>8 серий · 45–50 мин</div>
          <div style={{ flex: 1 }} />
          <div style={{
            fontFamily: POS_FONTS.display, fontStyle: 'italic',
            fontSize: 33, lineHeight: 1.3, color: POS.cream, opacity: 0.88,
            maxWidth: 1000, textAlign: 'right',
          }}>
            «Люди, как волны, способны либо усиливать друг друга,<br/>либо разрушать, оставляя лишь пену на песке…»
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 02. Epigraph ──────────────────────────────────────────────
function P02_Epigraph() {
  return (
    <PosFrame bg={POS.ink} ink={POS.cream}>
      <PosMeta index={2} total={PTOTAL} section="Эпиграф" dark />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1500, margin: '0 auto' }}>
        <div style={{ marginBottom: 30 }}>
          <PosStamp rot={-2} color={POS.accent} bg={POS.cream}>Интерференция /физ./</PosStamp>
        </div>
        <div style={{
          fontFamily: POS_FONTS.display,
          fontStyle: 'italic', fontWeight: 400,
          fontSize: 78, lineHeight: 1.1,
          color: POS.cream, textWrap: 'balance',
        }}>
          свойство <span style={{ color: POS.accent }}>наложения волн</span>, которое приводит к&nbsp;усилению или&nbsp;ослаблению их&nbsp;амплитуд.
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 50, alignItems: 'center' }}>
          <div style={{ width: 80, height: 4, background: POS.accent }} />
          <PosBody size={24} color="rgba(243,233,203,0.85)">
            Одна волна может как усилить другую, «подталкивая» её, так и полностью её уничтожить.
            Точно так же как и мы — в отношениях друг с другом и с нашими детьми.
          </PosBody>
        </div>
      </div>
    </PosFrame>
  );
}

// ── 03. Format ────────────────────────────────────────────────
function P03_Format() {
  const rows = [
    ['Жанр', 'Криминальная драма'],
    ['Настроение', 'Экшен · комедия · неонуар'],
    ['Формат', 'Горизонтальный сериал'],
    ['Объём', '8 серий · 45–50 минут'],
    ['Сезоны', '1 сезон · возможность продолжения'],
    ['Место', 'Москва · 2026'],
  ];
  return (
    <PosFrame>
      <PosMeta index={3} total={PTOTAL} section="Формат" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'stretch', marginTop: 30 }}>
        <div>
          <PosHead kicker="Спецификации" size={120}>Формат</PosHead>
          <div style={{ marginTop: 40 }}>
            {rows.map(([k, v]) => (
              <div key={k} style={{
                display: 'grid', gridTemplateColumns: '240px 1fr',
                padding: '18px 0',
                borderTop: `2px solid ${POS.ink}`,
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 700,
                  fontSize: 15, letterSpacing: '0.35em', textTransform: 'uppercase',
                  color: POS.accent,
                }}>{k}</div>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 600,
                  fontSize: 34, textTransform: 'uppercase',
                  color: POS.ink, letterSpacing: '0.01em',
                }}>{v}</div>
              </div>
            ))}
            <div style={{ borderTop: `2px solid ${POS.ink}` }} />
          </div>
        </div>
        <div style={{ position: 'relative', border: `4px solid ${POS.ink}` }}>
          <PosImage src="../../assets/refs/drive-ref.png" filter="none" />
          <div style={{
            position: 'absolute', left: 20, bottom: 20,
            padding: '10px 18px 8px', background: POS.accent, color: POS.cream,
            fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 13,
            letterSpacing: '0.35em', textTransform: 'uppercase',
          }}>Тональный референс</div>
        </div>
      </div>
    </PosFrame>
  );
}

// ── 04. Logline ───────────────────────────────────────────────
function P04_Logline() {
  return (
    <PosFrame bg={POS.accent} ink={POS.cream}>
      <PosMeta index={4} total={PTOTAL} section="Логлайн" dark />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1500, margin: '0 auto' }}>
        <div style={{ marginBottom: 30 }}>
          <PosStamp rot={-2} color={POS.accent} bg={POS.cream}>Логлайн</PosStamp>
        </div>
        <div style={{
          fontFamily: POS_FONTS.slab, fontWeight: 600,
          fontSize: 62, lineHeight: 1.1, textTransform: 'uppercase',
          letterSpacing: '-0.005em',
          color: POS.cream,
          textWrap: 'pretty',
        }}>
          Желающая уйти на покой <span style={{ color: POS.ink }}>криминальный курьер</span> становится жертвой покушения и случайно спасает <span style={{ color: POS.ink }}>восьмилетнюю сироту</span>, ставшую свидетелем этого.
        </div>
        <div style={{
          marginTop: 40, paddingTop: 28, borderTop: `3px solid rgba(243,233,203,0.35)`,
          fontFamily: POS_FONTS.display, fontStyle: 'italic', fontWeight: 400,
          fontSize: 36, lineHeight: 1.35, color: 'rgba(243,233,203,0.92)',
          maxWidth: 1400,
        }}>
          Они вынуждены объединиться, чтобы узнать, кто за ними охотится.
        </div>
      </div>
    </PosFrame>
  );
}

// ── 05. Core idea ─────────────────────────────────────────────
function P05_CoreIdea() {
  return (
    <PosFrame>
      <PosMeta index={5} total={PTOTAL} section="Идея" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'start', marginTop: 30 }}>
        <div>
          <PosHead kicker="Основная идея" size={120}>О чём<br/>это на самом деле</PosHead>
          <PosBody size={24} style={{ marginTop: 40, maxWidth: 700 }}>
            За хитросплетением сюжета в стиле <b>Гая Ричи</b> — история о людях, которые не умеют быть родителями.
            <br /><br />
            Оливия не хотела ни за кого отвечать, но становится для Маши единственным взрослым.
            Олег хотел «нормального наследника», но своим неприятием сам ведёт сына к гибели.
          </PosBody>
        </div>
        <div>
          <div style={{
            padding: 40, background: POS.ink, color: POS.cream,
            border: `4px solid ${POS.ink}`,
          }}>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 500,
              fontSize: 14, letterSpacing: '0.4em', textTransform: 'uppercase',
              color: POS.accent, marginBottom: 20,
            }}>Ключевой конфликт</div>
            <div style={{
              fontFamily: POS_FONTS.display, fontStyle: 'italic', fontWeight: 400,
              fontSize: 32, lineHeight: 1.3, color: POS.cream,
            }}>
              Человек, которого Оливия считала семьёй, хочет её убить. Девочка, от которой она пыталась избавиться, становится единственной причиной не сдаться.
            </div>
          </div>
          <div style={{ height: 340, marginTop: 20, border: `4px solid ${POS.ink}` }}>
            <PosImage src="../../assets/refs/sketchbook-02.png" filter="none" />
          </div>
        </div>
      </div>
    </PosFrame>
  );
}

// ── 05b. Три крючка ──────────────────────────────────────────
function P_WhySee() {
  const hooks = [
    { n: '01', title: 'Новый мир',
      text: 'Криминальная доставка — узнаваемая бытовая система, внутри которой спрятан теневой рынок.' },
    { n: '02', title: 'Женщина и ребёнок',
      text: 'Курьер-одиночка и сирота — эмоциональная связка с сильным зрительским потенциалом.' },
    { n: '03', title: 'Отцы и дети',
      text: 'Оливия становится матерью чужому ребёнку. Олег уничтожает собственного сына.' },
  ];
  return (
    <PosFrame>
      <PosMeta index={6} total={PTOTAL} section="Продажа" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginTop: 30 }}>
        <div>
          <PosHead kicker="Почему это надо смотреть" size={100}>Три<br/>крючка</PosHead>
          <div style={{
            marginTop: 40, padding: '28px 32px',
            background: POS.ink, color: POS.cream,
          }}>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 500,
              fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
              color: POS.accent, marginBottom: 14,
            }}>Формула сериала</div>
            <div style={{
              fontFamily: POS_FONTS.display, fontStyle: 'italic', fontWeight: 400,
              fontSize: 30, lineHeight: 1.3, color: POS.cream,
            }}>
              «Это "Леон" в мире криминальной доставки, рассказанный с энергией Гая Ричи и болью семейной драмы.»
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 20 }}>
          {hooks.map((h) => (
            <div key={h.n} style={{
              display: 'grid', gridTemplateColumns: '72px 1fr',
              gap: 24, alignItems: 'start',
              padding: '28px 32px', border: `3px solid ${POS.ink}`,
            }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700,
                fontSize: 64, lineHeight: 1, color: POS.accent,
              }}>{h.n}</div>
              <div>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 700,
                  fontSize: 26, textTransform: 'uppercase',
                  letterSpacing: '0.02em', color: POS.ink,
                  marginBottom: 10,
                }}>{h.title}</div>
                <PosBody size={19}>{h.text}</PosBody>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PosFrame>
  );
}

// ── 06. Chars section (FULL BLEED stamp) ──────────────────────
function P06_CharsSection() {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: POS.ink, overflow: 'hidden',
    }}>
      <PosMeta index={9} total={PTOTAL} section="Раздел 1" dark />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative' }}>
          <PosImage src="../../assets/ref-gentlemen.webp" filter="none" />
        </div>
        <div style={{
          padding: '110px 90px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 500,
            fontSize: 18, letterSpacing: '0.5em', textTransform: 'uppercase',
            color: POS.accent, marginBottom: 30,
          }}>Часть I</div>
          <h1 style={{
            fontFamily: POS_FONTS.slab, fontWeight: 700,
            fontSize: 260, lineHeight: 0.85, letterSpacing: '-0.015em',
            textTransform: 'uppercase',
            color: POS.cream, margin: 0,
          }}>Персо-<br/>нажи</h1>
          <div style={{ width: 120, height: 6, background: POS.accent, marginTop: 40 }} />
        </div>
      </div>
    </div>
  );
}

// ── Char full-page template ───────────────────────────────────
function PCharFull({ idx, name, age, role, body, wants, img, stripColor = POS.accent, imgPos = 'center top' }) {
  return (
    <PosFrame>
      <PosMeta index={idx} total={PTOTAL} section="Персонажи" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '580px 1fr', gap: 70, alignItems: 'start', marginTop: 40 }}>
        <div>
          <div style={{ height: 720, position: 'relative', border: `4px solid ${POS.ink}`, overflow: 'hidden' }}>
            {img ? <img src={img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: imgPos, transform: 'scale(1.15)', transformOrigin: 'center top' }} /> : <PosPlaceholder label={name} />}
            <div style={{
              position: 'absolute', bottom: 20, left: 20,
              padding: '10px 18px 8px', background: stripColor, color: POS.cream,
              fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 14,
              letterSpacing: '0.4em', textTransform: 'uppercase',
            }}>{age}</div>
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 500,
            fontSize: 14, letterSpacing: '0.5em', textTransform: 'uppercase',
            color: stripColor, marginBottom: 16,
          }}>{role}</div>
          <h2 style={{
            fontFamily: POS_FONTS.slab, fontWeight: 700,
            fontSize: 180, lineHeight: 0.85, textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: POS.ink, margin: '0 0 30px 0',
          }}>{name}</h2>
          <div style={{ width: 100, height: 5, background: stripColor, marginBottom: 30 }} />
          <PosBody size={22} style={{ marginBottom: 34, maxWidth: 720 }}>{body}</PosBody>
          {wants && (
            <div style={{
              padding: 28, border: `3px solid ${POS.ink}`, background: POS.cream,
            }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 13,
                letterSpacing: '0.5em', textTransform: 'uppercase',
                color: POS.accent, marginBottom: 12,
              }}>Хочет</div>
              <div style={{
                fontFamily: POS_FONTS.display, fontStyle: 'italic', fontWeight: 400,
                fontSize: 28, lineHeight: 1.35, color: POS.ink,
              }}>{wants}</div>
            </div>
          )}
        </div>
      </div>
    </PosFrame>
  );
}

function P07_Olivia() { return <PCharFull idx={10} name="Оливия" age="38 лет" role="Криминальный курьер"
  img="../../assets/refs/olivia-02.png"
  body={<>Доставляет товар, послания, договора. Решает вопросы силой в случае необходимости. Одинокая, замкнутая, скрытная.<br/><br/>Страдает от выгорания и износа суставов — что сильно мешает в работе. Речь короткая, общается неохотно. Одевается практично: худи, капюшоны, куртки, джинсы, ботинки.</>}
  wants="Уйти на покой и уехать к морю. Но в Маше начинает видеть себя в начале пути." />; }

function P08_Masha() { return <PCharFull idx={11} name="Маша" age="8 лет" role="Сирота · попрошайка" imgPos="center 55%"
  img="../../assets/refs/masha-05.png" stripColor={POS.ink}
  body={<>Слишком маленькая, чтобы постоять за себя — вынуждена терпеть агрессию старших. Стремится казаться взрослее, сильнее.<br/><br/>Хочет быть кому-то нужной. Собирается уехать, но никак не решается. Очарована Оливией — единственной, кто была к ней добра.</>}
  wants="Найти маму — ту, которой у неё никогда не было." />; }

function P09_Oleg() { return <PCharFull idx={12} name="Олег" age="60 лет" role="Глава организации · работодатель Оливии"
  img="../../assets/refs/oleg-01.jpg"
  body={<>Заурядный внешний вид скрывает жестокого, расчётливого главу организации по отмыву, обналичиванию и транспортировке нелегальных денег.<br/><br/>Его попытка вытолкнуть сына из криминального мира приводит к обратному: Тимур входит в этот мир под чужой маской — и становится жертвой отцовской слепоты.</>}
  wants="Нормального наследника." />; }

// ── 10. Дуэт Сухой + Гуддини ─────────────────────────────────
function P10_Trio() {
  return (
    <PosFrame>
      <PosMeta index={13} total={PTOTAL} section="Персонажи" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 20 }}>

        {/* Левая колонка — одна картинка на двоих */}
        <div style={{ position: 'relative', border: `4px solid ${POS.ink}` }}>
          <PosImage src="../../assets/refs/sukhoy-guddini.jpg" filter="none" />
          <div style={{
            position: 'absolute', top: 18, left: 18,
            padding: '10px 16px 8px', background: POS.ink, color: POS.cream,
            fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 13,
            letterSpacing: '0.4em', textTransform: 'uppercase',
          }}>25–30</div>
        </div>

        {/* Правая колонка — оба персонажа */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
          <PosHead kicker="Двое друзей · наивные стартаперы" size={80}>Сухой &amp; Гуддини</PosHead>

          {[
            { name: 'Сухой', role: 'Уволенный айтишник · мечтатель',
              text: 'Устал убирать в чужих квартирах. Хочет запустить стартап, но нет капитала. Энергичный, уверенный в себе — инициирует затею.' },
            { name: 'Гуддини', role: 'Уволенный айтишник · напарник',
              text: 'Напарник Сухого. Тихий, зажатый — но разбирается во всём лучше. Из-за неуверенности отказывается от своих убеждений.' },
          ].map((p) => (
            <div key={p.name} style={{ borderTop: `2px solid ${POS.ink}`, paddingTop: 18, marginTop: 18 }}>
              <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: POS.accent, marginBottom: 4 }}>{p.role}</div>
              <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 52, lineHeight: 0.9, textTransform: 'uppercase', color: POS.ink, marginBottom: 10 }}>{p.name}</div>
              <PosBody size={18}>{p.text}</PosBody>
            </div>
          ))}

          <div style={{ marginTop: 24, padding: '16px 20px', background: POS.ink, color: POS.cream, fontFamily: POS_FONTS.display, fontStyle: 'italic', fontSize: 19, lineHeight: 1.4 }}>
            Воруют у Оливии — и запускают цепочку событий, которую уже не смогут остановить.
          </div>

          <div style={{ marginTop: 10, padding: '14px 20px', border: `2px solid ${POS.ink}`, background: POS.cream, display: 'flex', alignItems: 'baseline', gap: 20 }}>
            <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 12, letterSpacing: '0.5em', textTransform: 'uppercase', color: POS.accent, flexShrink: 0 }}>Хотят</div>
            <div style={{ fontFamily: POS_FONTS.display, fontStyle: 'italic', fontWeight: 400, fontSize: 22, lineHeight: 1.3, color: POS.ink }}>Запустить стартап.</div>
          </div>
        </div>

      </div>
    </PosFrame>
  );
}

// ── 11. Тимур + Делец (парная карточка) ──────────────────────
function P11_ArtemDelets() {
  const pair = [
    {
      name: 'Тимур', age: '25–30', role: 'Сын Олега · айти',
      img: '../../assets/refs/timur-02.webp', stripColor: POS.accent, imgStyle: { objectPosition: 'center 25%' },
      body: 'Ведёт легальный, спокойный образ жизни — не связан с деятельностью отца. Давление неудачных отношений пускает его «во все тяжкие» и в финале приводит к главной трагедии.',
      wants: 'Одобрение отца.',
    },
    {
      name: 'Делец', age: '20–25', role: 'Отшельник · игроман · хаб',
      img: '../../assets/refs/delets-02.png', stripColor: POS.ink,
      body: <>Похож на делового растамана. <b>Хаб преступного мира</b>: помогает купить, продать, связаться с наёмником. Работает со всеми, преследует исключительно свои меркантильные интересы.</>,
      wants: 'Больше денег.',
    },
  ];
  return (
    <PosFrame>
      <PosMeta index={14} total={PTOTAL} section="Персонажи" />
      <PosHead kicker="Катализатор и его проводник" size={104}>Тимур &amp; Делец</PosHead>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 36 }}>
        {pair.map((p) => (
          <div key={p.name} style={{ border: `4px solid ${POS.ink}`, display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 300, position: 'relative', borderBottom: `4px solid ${POS.ink}`, background: POS.bgAlt }}>
              {p.img ? <PosImage src={p.img} filter="crush" style={p.imgStyle || {}} /> : <PosPlaceholder label={p.name} style={{ border: 'none' }} />}
              <div style={{
                position: 'absolute', top: 18, left: 18,
                padding: '10px 16px 8px', background: p.stripColor, color: POS.cream,
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 13,
                letterSpacing: '0.4em', textTransform: 'uppercase',
              }}>{p.age}</div>
            </div>
            <div style={{ padding: 36, flex: 1, background: POS.cream, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 14,
                letterSpacing: '0.45em', textTransform: 'uppercase',
                color: p.stripColor, marginBottom: 10,
              }}>{p.role}</div>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700,
                fontSize: 80, lineHeight: 0.9, textTransform: 'uppercase',
                color: POS.ink, marginBottom: 14,
              }}>{p.name}</div>
              <div style={{ width: 60, height: 4, background: p.stripColor, marginBottom: 20 }} />
              <PosBody size={20} style={{ marginBottom: 20, flex: 1 }}>{p.body}</PosBody>
              <div style={{
                padding: '16px 20px', border: `2px solid ${POS.ink}`, background: POS.bg,
              }}>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 11,
                  letterSpacing: '0.5em', textTransform: 'uppercase',
                  color: POS.accent, marginBottom: 6,
                }}>Хочет</div>
                <div style={{
                  fontFamily: POS_FONTS.display, fontStyle: 'italic',
                  fontSize: 22, lineHeight: 1.3, color: POS.ink,
                }}>{p.wants}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PosFrame>
  );
}

// ── 12. Synopsis section ──────────────────────────────────────
function P12_SynopsisSection() {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: POS.accent, color: POS.cream, overflow: 'hidden',
    }}>
      <PosMeta index={15} total={PTOTAL} section="Раздел 2" dark />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{
          padding: '110px 90px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 500,
            fontSize: 18, letterSpacing: '0.5em', textTransform: 'uppercase',
            color: POS.cream, opacity: 0.75, marginBottom: 30,
          }}>Часть II</div>
          <h1 style={{
            fontFamily: POS_FONTS.slab, fontWeight: 700,
            fontSize: 260, lineHeight: 0.85, letterSpacing: '-0.015em',
            textTransform: 'uppercase',
            color: POS.cream, margin: 0,
          }}>Сино-<br/>псис</h1>
          <div style={{ width: 120, height: 6, background: POS.ink, marginTop: 40 }} />
        </div>
        <div style={{ position: 'relative', borderLeft: `6px solid ${POS.ink}`, overflow: 'hidden' }}>
          <img src="../../assets/refs/synopsis-hero.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% center', transform: 'scaleX(-1)' }} />
        </div>
      </div>
    </div>
  );
}

// ── 13. Synopsis body ─────────────────────────────────────────
function P13_Synopsis() {
  return (
    <PosFrame>
      <PosMeta index={16} total={PTOTAL} section="Синопсис" />
      <PosHead kicker="Краткое содержание" size={100}>Синопсис</PosHead>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 60, alignItems: 'start', marginTop: 40 }}>
        <div>
          <PosBody size={22} style={{ lineHeight: 1.65 }}>
            <p style={{ margin: '0 0 14px' }}>
              <span style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 26, letterSpacing: '0.05em', color: POS.accent, textTransform: 'uppercase', marginRight: 10 }}>Оливия</span>
              — одинокая криминальная курьер около 40 лет. Хочет всё бросить и уехать. Её последняя работа оказывается ловушкой — на неё нападают подручные её босса Олега. Но ей удаётся спастись и случайно спасти 8-летнюю сироту Машу, единственную свидетельницу покушения. Вместе они отправляются на поиски нападавших, постепенно всё больше сближаясь.
            </p>
            <p style={{ margin: '0 0 14px' }}>
              Параллельно двое безработных айтишников — Сухой и Гуддини — решают запустить стартап. В поисках стартового капитала они обворовывают квартиру Оливии, вынося вместе с деньгами и компромат на Олега.
            </p>
            <p style={{ margin: '0 0 14px' }}>
              Олегу приходится разруливать козни партнёров, решать вопрос с пропавшим общаком и гоняться за выжившей Оливией — совсем не обращая внимания на кризис в отношениях с сыном Тимуром.
            </p>
            <p style={{ margin: '0 0 14px' }}>
              Тимур жаждет его одобрения, но так и не получая его, решает доказать себе и отцу свою мужественность — и помогает Сухому и Гуддини.
            </p>
            <p style={{ margin: 0 }}>
              Чем ближе финал, тем яснее: Оливия становится Маше той матерью, которой у неё не было. А Олег — медленно убивает сына равнодушием.
              <span style={{ fontFamily: POS_FONTS.display, fontStyle: 'italic', color: POS.accent }}> Интерференция. </span>
              Одна волна усиливает, другая — гасит.
            </p>
          </PosBody>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16, height: 620 }}>
          <div style={{ border: `4px solid ${POS.ink}`, overflow: 'hidden' }}>
            <PosImage src="../../assets/refs/tone-ref-top.png" filter="none" style={{ objectPosition: 'center 15%' }} />
          </div>
          <div style={{ border: `4px solid ${POS.ink}`, overflow: 'hidden' }}>
            <PosImage src="../../assets/ref-scene-solitude.png" filter="crush" />
          </div>
        </div>
      </div>
    </PosFrame>
  );
}

// ── 14.5 Pilot ───────────────────────────────────────────────
function P_Pilot() {
  const events = [
    'Оливия решает уйти — Олег одновременно отдаёт приказ её убить',
    'Убийцы промахиваются: случайно убивают Антиквара',
    'Маша — единственный свидетель, видевший лица убийц',
    'Оливия берёт Машу с собой',
    'Сухой и Гуддини залезают в квартиру Оливии за стартовым капиталом',
  ];
  return (
    <PosFrame bg={POS.ink} ink={POS.cream}>
      <PosMeta index={15} total={PTOTAL} section="Пилот" dark />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, marginTop: 20 }}>
        <div>
          <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 14, letterSpacing: '0.5em', textTransform: 'uppercase', color: POS.accent, marginBottom: 16 }}>Серия 01</div>
          <h1 style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 130, lineHeight: 0.88, textTransform: 'uppercase', color: POS.cream, margin: '0 0 28px 0' }}>Пилот</h1>
          <div style={{ width: 80, height: 4, background: POS.accent, marginBottom: 30 }} />
          <PosBody size={21} color="rgba(243,233,203,0.9)" style={{ lineHeight: 1.7 }}>
            Оливия узнаёт, что суставы разрушаются — профессия её убивает.
            Она решает уйти на покой и сообщает об этом Олегу.
            <br/><br/>
            Тот просит выполнить последний заказ — забрать виниловую пластинку.
            И одновременно отдаёт приказ её убить.
            <br/><br/>
            Убийцы промахиваются. Случайный свидетель — 8-летняя беспризорница Маша.
            Три независимые истории запускаются в одну ночь — и сходятся в одной точке.
          </PosBody>
        </div>
        <div style={{ paddingTop: 110 }}>
          <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 12, letterSpacing: '0.5em', textTransform: 'uppercase', color: POS.accent, marginBottom: 24 }}>Ключевые события</div>
          {events.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(243,233,203,0.12)' }}>
              <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 28, lineHeight: 1, color: POS.accent, minWidth: 36, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
              <PosBody size={21} color="rgba(243,233,203,0.9)">{t}</PosBody>
            </div>
          ))}
        </div>
      </div>
    </PosFrame>
  );
}

// ── 15. Arc ───────────────────────────────────────────────────
function P14_Arc() {
  const acts = [
    { n: 'I',   t: 'Экспозиция',        eps: '1–2', dark: false,
      text: 'Оливия хочет выйти из криминального мира и исчезнуть. Последнее задание превращается в ловушку, а случайная девочка Маша становится свидетелем и нежеланным попутчиком.' },
    { n: 'II',  t: 'Сближение',         eps: '3–4', dark: true,
      text: 'Пока угроза сжимается вокруг них, Маша перестаёт быть обузой и становится частью жизни Оливии. Между ними рождается связь, которую Оливия не готова признать.' },
    { n: 'III', t: 'Перелом',           eps: '5–6', dark: false,
      text: 'Оливия впервые становится спасённой не собой, а Машей. На один вечер они почти становятся семьёй — и именно этот ложный покой делает будущий разрыв болезненным.' },
    { n: 'IV',  t: 'Обрушение и финал', eps: '7–8', dark: true,
      text: 'Оливия узнаёт о предательстве Олега, кого она считала семьёй, и хочет убить. Сломленная, она отталкивает Машу — но слишком поздно понимает, что именно та стала её единственной причиной жить.' },
  ];
  const eps = [
    ['01', 'Ловушка',          'Оливия профессионал, которая хочет выйти из игры. Маша — случайная помеха.'],
    ['02', 'Вынужденный союз', 'Оливия пытается избавиться от Маши, но девочка остаётся рядом и становится впервые полезной.'],
    ['03', 'Связь',            'Маша пытается быть полезной. Оливия держит дистанцию. А угроза вокруг только множится.'],
    ['04', 'Доверие',          'Совместная опасность превращает их из случайных попутчиков в команду.'],
    ['05', 'Одиночество Маши', 'Оливия в изоляции. Маша впервые действует самостоятельно вопреки недружелюбному миру.'],
    ['06', 'Ложный покой',     'Оливия узнаёт о нормальной жизни. Маша впервые позволяет себе привязанность.'],
    ['07', 'Предательство',    'Оливия узнаёт, что её хочет убить тот, кого она считала семьёй. От боли она отталкивает Машу.'],
    ['08', 'Финал',            'Оливия впервые выбирает не выживание, а Машу — и платит за это жизнью. Маша остаётся с её главным наследием: позволить себе жить.'],
  ];
  return (
    <PosFrame>
      <PosMeta index={17} total={PTOTAL} section="Арка" />
      <PosHead kicker="Четыре акта · восемь серий" size={100}>Драматургия</PosHead>

      {/* 4 акта */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 20, marginTop: 32 }}>
        {acts.map((a) => (
          <div key={a.n} style={{
            border: `4px solid ${POS.ink}`, padding: 26,
            background: a.dark ? POS.ink : POS.cream,
            color: a.dark ? POS.cream : POS.ink,
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              marginBottom: 6,
            }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700,
                fontSize: 120, lineHeight: 0.85, color: POS.accent,
              }}>{a.n}</div>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 600,
                fontSize: 14, letterSpacing: '0.35em', textTransform: 'uppercase',
                color: a.dark ? 'rgba(243,233,203,0.7)' : POS.accent,
              }}>Серии&nbsp;{a.eps}</div>
            </div>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 700,
              fontSize: 32, lineHeight: 0.95, textTransform: 'uppercase',
              marginBottom: 14,
            }}>{a.t}</div>
            <div style={{ width: 40, height: 3, background: a.dark ? POS.accent : POS.ink, marginBottom: 14 }} />
            <PosBody size={18} color={a.dark ? 'rgba(243,233,203,0.9)' : POS.ink}>{a.text}</PosBody>
          </div>
        ))}
      </div>

      {/* Лента 8 серий */}
      <div style={{
        marginTop: 24, border: `3px solid ${POS.ink}`, background: POS.cream,
        display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)',
      }}>
        {eps.map(([n, t, sub], i) => (
          <div key={n} style={{
            padding: '18px 14px',
            borderLeft: i === 0 ? 'none' : `2px solid ${POS.ink}`,
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 700,
              fontSize: 36, lineHeight: 1, color: POS.accent,
              marginBottom: 6,
            }}>{n}</div>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 700,
              fontSize: 17, lineHeight: 1, textTransform: 'uppercase',
              letterSpacing: '0.02em', color: POS.ink, marginBottom: 8,
            }}>{t}</div>
            <div style={{
              fontFamily: POS_FONTS.body, fontSize: 16, lineHeight: 1.4,
              color: POS.ink, opacity: 0.8,
            }}>{sub}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 14,
        fontFamily: POS_FONTS.display, fontStyle: 'italic',
        fontSize: 18, lineHeight: 1.35, color: POS.ink, opacity: 0.75,
      }}>
        Две линии — внешнее напряжение и эмоциональное — сходятся и обрываются одновременно в финале.
      </div>
    </PosFrame>
  );
}

// ── 15. Tone ──────────────────────────────────────────────────
// ── Движок серии ──────────────────────────────────────────────
function P_EpisodeEngine() {
  const mechanics = [
    { n: '01', label: 'Каждая серия — крючок',
      text: 'Локальный узел закрывается в последние минуты — и сразу открывает новый. Зритель не выходит, он нажимает «следующую».' },
    { n: '02', label: 'Масштаб угрозы растёт',
      text: 'С1–2: личное выживание. С3–4: криминальная интрига. С5–6: война внутри организации. С7–8: всё рушится одновременно.' },
    { n: '03', label: 'Эмоциональный центр не размывается',
      text: 'За 8 серий — один главный вопрос: сможет ли Оливия позволить себе кого-то любить? Зритель всегда знает, за кем идёт.' },
    { n: '04', label: 'Ставка удваивается в финале',
      text: 'Оливия выбирает Машу — и платит за это жизнью. Жанровая история превращается в эмоциональное событие.' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* Левая — тёмная */}
      <div style={{ background: POS.ink, padding: '90px 70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', borderRight: `6px solid ${POS.accent}` }}>
        <PosMeta index={18} total={PTOTAL} section="Движок сезона" dark />
        <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 16, letterSpacing: '0.5em', textTransform: 'uppercase', color: POS.accent, marginBottom: 16, marginTop: 60 }}>8 серий · горизонтальный сезон</div>
        <h1 style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 108, lineHeight: 0.88, textTransform: 'uppercase', color: POS.cream, margin: '0 0 24px 0' }}>Движок<br/>сезона</h1>
        <div style={{ width: 70, height: 5, background: POS.accent, marginBottom: 32 }} />
        <PosBody size={24} color="rgba(243,233,203,0.85)" style={{ lineHeight: 1.65 }}>
          Каждая серия закрывает локальный узел и тут же открывает новый уровень угрозы. Напряжение растёт нелинейно — и никогда не отпускает.
        </PosBody>
        <div style={{ marginTop: 36, padding: '20px 26px', border: `2px solid ${POS.accent}`, background: 'rgba(199,54,31,0.08)' }}>
          <div style={{ fontFamily: POS_FONTS.display, fontStyle: 'italic', fontSize: 24, lineHeight: 1.4, color: POS.cream, opacity: 0.9 }}>
            «Это сериал, который можно продать одним кадром, одним трейлером — и одним сарафанным тезисом.»
          </div>
        </div>
      </div>
      {/* Правая — охра */}
      <div style={{ background: POS.bg, padding: '90px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {mechanics.map(({ n, label, text }) => (
          <div key={n} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: `2px solid ${POS.accent}`, display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, alignItems: 'start' }}>
            <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 36, lineHeight: 1, color: POS.accent }}>{n}</div>
            <div>
              <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 18, letterSpacing: '0.04em', textTransform: 'uppercase', color: POS.ink, marginBottom: 10 }}>{label}</div>
              <div style={{ fontFamily: POS_FONTS.body, fontSize: 22, lineHeight: 1.55, color: POS.ink }}>{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function P15_Tone() {
  const rows = [
    ['Свет',   'мотивированный и агрессивный. Неон, фары, экран телефона. Единственный источник в кадре. Тени не мягкие — они скрывают.'],
    ['Цвет',   'три цвета в конфликте: жёлтый (мир доставки, деньги, ловушка), красный (насилие, акцент, советский знак), холодный синий (ночь, одиночество, финал). Палитра не создаёт уют — она создаёт давление.'],
    ['Камера', 'длинный фокус, персонаж под наблюдением. Зритель видит больше, чем герой. Неспешный наезд — до момента, когда всё рвётся.'],
    ['Экшн',   'без супергероики. Удар — это больно. Погоня — это одышка. Каждое столкновение оставляет след. Насилие случается быстро и выглядит некрасиво.'],
  ];
  return (
    <PosFrame>
      <PosMeta index={19} total={PTOTAL} section="Визуал" />
      <PosHead kicker="Как это выглядит и звучит" size={100}>Тон и визуал</PosHead>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start', marginTop: 40 }}>
        <div>
          {rows.map(([k, v]) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '180px 1fr',
              padding: '16px 0',
              borderTop: `2px solid ${POS.ink}`,
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 28,
                textTransform: 'uppercase', letterSpacing: '0.02em',
                color: POS.accent,
              }}>{k}</div>
              <PosBody size={19}>{v}</PosBody>
            </div>
          ))}
          <div style={{ borderTop: `2px solid ${POS.ink}` }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            ['../../assets/refs/tone-ref-top2.png', 'none'],
            ['../../assets/refs/tone-ref-bottom.png', 'none'],
            ['../../assets/ref-masha-kid.png', 'none'],
            ['../../assets/ref-olivia-art.png', 'none'],
          ].map(([src, f], i) => (
            <div key={i} style={{ height: 280, border: `3px solid ${POS.ink}` }}>
              <PosImage src={src} filter={f} />
            </div>
          ))}
        </div>
      </div>
    </PosFrame>
  );
}

// ── 16. Мир криминальных курьеров ────────────────────────────
function P16_CourierWorld() {
  const features = [
    ['NFT-сумка', 'Цифровой аватар курьера, подтверждающий его статус и доступ в сеть.'],
    ['Промокод-терминал', 'Активация в любом приложении доставки. Встроено в повседневность.'],
    ['Крипто-кошелёк', 'Расчёт вне банков, вне надзора, поверх любых границ.'],
    ['Сотни пунктов', 'Одна организация с сотнями точек по стране. Сетевая архитектура.'],
  ];
  return (
    <div style={{
      position: 'absolute', inset: 0, background: POS.ink, color: POS.cream, overflow: 'hidden',
    }}>
      {/* hero image — сумка во весь левый край */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '52%',
        overflow: 'hidden',
      }}>
        <img src="../../assets/refs/courier-bag-02.png" alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.05) brightness(0.95) saturate(1.05)',
          }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(90deg, rgba(28,26,24,0) 0%, rgba(28,26,24,0) 65%, rgba(28,26,24,0.7) 90%, rgba(28,26,24,1) 100%)`,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, rgba(28,26,24,0.3) 0%, rgba(28,26,24,0) 25%, rgba(28,26,24,0) 70%, rgba(28,26,24,0.55) 100%)`,
        }} />
      </div>

      {/* paper grain — поверх всего, лёгкий */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
        opacity: 0.18, mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='7'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.8  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>")`,
      }} />

      <PosMeta index={7} total={PTOTAL} section="Мир" dark />

      {/* плашка-подпись на картинке, нижний левый угол */}
      <div style={{
        position: 'absolute', left: 40, bottom: 80, zIndex: 4,
        padding: '18px 28px 16px', background: POS.yellow, color: POS.ink,
        fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 20,
        letterSpacing: '0.4em', textTransform: 'uppercase',
      }}>Никто не знает что внутри</div>

      {/* правая колонка — контент поверх */}
      <div style={{
        position: 'absolute', top: 140, right: 90, bottom: 70, width: 860,
        zIndex: 5, display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          fontFamily: POS_FONTS.slab, fontWeight: 500,
          fontSize: 16, letterSpacing: '0.5em', textTransform: 'uppercase',
          color: POS.yellow, marginBottom: 14,
        }}>Вселенная сериала</div>

        <h1 style={{
          fontFamily: POS_FONTS.slab, fontWeight: 700,
          fontSize: 108, lineHeight: 0.88, letterSpacing: '-0.015em',
          textTransform: 'uppercase', color: POS.cream, margin: '0 0 22px 0',
        }}>Мир криминальных<br/>курьеров</h1>

        <div style={{ width: 120, height: 5, background: POS.yellow, marginBottom: 22 }} />

        <PosBody size={22} color="rgba(243,233,203,0.9)" style={{ marginBottom: 22 }}>
          Одна организация. Сотни пунктов доставки по стране. Нейтральная служба,
          через которую идут товары, послания и деньги — между кем угодно, мимо кого угодно.
        </PosBody>

        <div style={{
          padding: '16px 22px', border: `3px solid ${POS.yellow}`,
          background: 'rgba(255, 204, 0, 0.08)', marginBottom: 26,
        }}>
          <div style={{
            fontFamily: POS_FONTS.display, fontStyle: 'italic',
            fontSize: 22, lineHeight: 1.35, color: POS.cream,
          }}>
            «Джон Уик в мире доставки. Только доставляют не смерть — доставляют <b style={{ color: POS.yellow, fontStyle: 'normal' }}>всё</b>, что не доставит Яндекс.»
          </div>
        </div>

        {/* фичи — 2×2 компактно */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          border: `3px solid ${POS.yellow}`, background: POS.yellow,
        }}>
          {features.map(([k, v], i) => (
            <div key={k} style={{
              padding: '16px 18px', background: POS.yellow, color: POS.ink,
              borderRight: i % 2 === 0 ? `2px solid ${POS.ink}` : 'none',
              borderBottom: i < 2 ? `2px solid ${POS.ink}` : 'none',
            }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 13,
                letterSpacing: '0.04em', color: POS.accent, marginBottom: 4,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 22,
                textTransform: 'uppercase', letterSpacing: '0.01em',
                color: POS.ink, marginBottom: 6,
              }}>{k}</div>
              <div style={{
                fontFamily: POS_FONTS.body, fontSize: 16,
                lineHeight: 1.4, color: POS.ink,
              }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 17. Audience ──────────────────────────────────────────────
function P17_Audience() {
  return (
    <PosFrame>
      <PosMeta index={20} total={PTOTAL} section="Аудитория" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start', marginTop: 30 }}>
        <div>
          <PosHead kicker="Целевая аудитория" size={100}>Для кого</PosHead>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 700,
            fontSize: 220, lineHeight: 0.85, color: POS.accent,
            margin: '20px 0 12px', letterSpacing: '-0.02em',
          }}>25–45</div>
          <PosBody size={22} style={{ maxWidth: 540, marginBottom: 22 }}>
            Зрители, выросшие на «Бригаде», «Бумере» и «Острых козырьках». Ценят плотный сюжет,
            персонажей с биографией, мрачный юмор. Готовы к неоднозначным героям и финалам без «хеппи-энда».
          </PosBody>
          <div style={{
            padding: '18px 22px', border: `3px solid ${POS.ink}`,
            background: POS.cream, maxWidth: 540,
          }}>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 12,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: POS.accent, marginBottom: 8,
            }}>+ потенциал охвата</div>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 40, lineHeight: 1,
              color: POS.ink, marginBottom: 8, letterSpacing: '-0.01em',
            }}>18–25</div>
            <PosBody size={20}>
              18–25 — молодая аудитория, которая считывает одиночество, желание вырваться, деньги, токсичных родителей и попытку стать взрослым раньше времени.
            </PosBody>
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 500,
            fontSize: 14, letterSpacing: '0.5em', textTransform: 'uppercase',
            color: POS.accent, marginBottom: 24, marginTop: 20,
          }}>Референсы</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              ['Леон', 'сердце истории · опасный взрослый + потерянный ребёнок', POS.ink, POS.cream],
              ['Карты, деньги, два ствола', 'криминальная механика, юмор, темп', POS.cream, POS.ink],
              ['Фарго', 'баланс чёрной комедии и трагедии', POS.cream, POS.ink],
              ['Барри', 'герой из насильственной профессии, который хочет выйти, но не может', POS.ink, POS.cream],
            ].map(([t, d, bg, fg]) => (
              <div key={t} style={{
                padding: '30px 24px', background: bg, color: fg,
                border: `4px solid ${POS.ink}`,
                minHeight: 230,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 700,
                  fontSize: 36, lineHeight: 0.95, textTransform: 'uppercase',
                }}>{t}</div>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 15,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: bg === POS.ink ? POS.accent : POS.accent,
                }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PosFrame>
  );
}

// ── 17. Team ──────────────────────────────────────────────────
// ── Почему сейчас ────────────────────────────────────────────
function P_WhyNow() {
  const blocks = [
    {
      label: 'Мир изменился.',
      text: 'Преступность больше не выглядит как преступность. Яндекс.Доставка, крипто-кошельки, промокоды — легальная оболочка для нелегального содержимого. Зритель узнаёт свой город.',
    },
    {
      label: 'Пара, которой нет.',
      text: 'Женщина под сорок и восьмилетняя беспризорница — в российском криминальном сериале такого дуэта не было. Это не экшн с напарниками. Это история о том, можно ли стать родителем, если всю жизнь выживал один.',
    },
    {
      label: 'Ставка.',
      text: 'Олег убьёт Олю, если она не исчезнет. Оля исчезнет, если бросит Машу. Маша умрёт, если Оля исчезнет. Три человека тянут друг друга вниз — и вверх одновременно.',
    },
  ];
  return (
    <PosFrame bg={POS.ink} ink={POS.cream}>
      <PosMeta index={8} total={PTOTAL} section="Почему сейчас" dark />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        <PosHead kicker="Три причины" size={110} color={POS.cream} accentColor={POS.yellow}>Почему сейчас</PosHead>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {blocks.map(({ label, text }, i) => (
            <div key={i} style={{ borderTop: '2px solid rgba(243,233,203,0.15)', paddingTop: 30, paddingBottom: 30 }}>
              <PosBody size={28} color={POS.cream} style={{ lineHeight: 1.65 }}>
                <span style={{ fontFamily: POS_FONTS.display, fontStyle: 'italic', fontWeight: 400, color: POS.yellow }}>{label}</span>
                {' '}{text}
              </PosBody>
            </div>
          ))}
          <div style={{ borderTop: '2px solid rgba(243,233,203,0.15)' }} />
        </div>
      </div>
    </PosFrame>
  );
}

// ── Почему смотреть ───────────────────────────────────────────
function P_WhyWatch() {
  const reasons = [
    { n: '01', head: 'Жанр как упаковка, не как суть', body: 'Криминал здесь — способ рассказать про доверие, вину и то, как люди ломают друг друга. Зритель получает экшн и уходит с чем-то большим.' },
    { n: '02', head: 'Пара, которой не было в российском кино', body: 'Профессиональный преступник и восьмилетняя беспризорница. Не мать и дочь — но именно это делает их связь настоящей.' },
    { n: '03', head: 'Мир, который узнаёшь', body: 'Яндекс.Доставка как теневой логистический хаб. Крипта вместо кэша. Промокоды вместо паролей. Всё это уже существует — сериал просто показывает изнанку.' },
    { n: '04', head: 'Финал, о котором говорят', body: 'Не хэппи-энд и не трагедия. Каждый получает именно то, что заслужил своими выборами. Это то, что зритель пересказывает друзьям.' },
  ];
  return (
    <PosFrame>
      <PosMeta index={6} total={PTOTAL} section="Почему смотреть" />
      <PosHead kicker="Для зрителя" size={90}>Почему смотреть</PosHead>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28 }}>
        {reasons.map(({ n, head, body }) => (
          <div key={n} style={{ border: `4px solid ${POS.ink}`, padding: '22px 26px', background: POS.cream, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 32, color: POS.accent, lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 22, textTransform: 'uppercase', color: POS.ink, lineHeight: 1.1 }}>{head}</div>
            <div style={{ width: 36, height: 3, background: POS.accent }} />
            <PosBody size={20}>{body}</PosBody>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 28, padding: '22px 36px',
        background: POS.accent, color: POS.cream,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: POS_FONTS.display, fontStyle: 'italic',
          fontSize: 28, lineHeight: 1.3, color: POS.cream, textAlign: 'center',
        }}>
Объединяет то, почему мы смотрим зарубежные сериалы — и то, почему всё равно возвращаемся к отечественным.
        </div>
      </div>
    </PosFrame>
  );
}


function P18_Team() {
  const team = [
    ['Автор · шоураннер', 'Сергей Черкасов'],
    ['Режиссёр', 'Сергей Черкасов'],
    ['Оператор-постановщик', 'Дмитрий Бобко'],
    ['Продюсер', 'Алексей Голубев'],
  ];
  return (
    <PosFrame>
      <PosMeta index={21} total={PTOTAL} section="Команда" />
      <PosHead kicker="Кто делает" size={100}>Команда</PosHead>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'start', marginTop: 40 }}>
        <div>
          {team.map(([k, v]) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '360px 1fr',
              padding: '22px 0',
              borderTop: `2px solid ${POS.ink}`,
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 14,
                letterSpacing: '0.35em', textTransform: 'uppercase',
                color: POS.accent,
              }}>{k}</div>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700,
                fontSize: 38, textTransform: 'uppercase',
                color: POS.ink, letterSpacing: '0.01em',
              }}>{v}</div>
            </div>
          ))}
          <div style={{ borderTop: `2px solid ${POS.ink}` }} />
        </div>
        <div style={{ height: 600, border: `4px solid ${POS.ink}` }}>
          <PosPlaceholder label="Фото команды / бэкстейдж" style={{ border: 'none' }} />
        </div>
      </div>
    </PosFrame>
  );
}

// ── 19. Closing (зеркало титульника) ─────────────────────────
function P19_Closing() {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: POS.ink, overflow: 'hidden',
    }}>
      <img src="../../assets/poster-hero.png" alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'none',
        }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg,
          rgba(28,26,24,0.5) 0%,
          rgba(28,26,24,0.15) 30%,
          rgba(28,26,24,0.15) 60%,
          rgba(28,26,24,0.92) 100%)`,
      }} />
      {/* paper/halftone overlay — идентичный титульнику */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.18, mixBlendMode: 'multiply',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.08  0 0 0 0 0.06  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>")`,
      }} />

      {/* top tape — тэглайн */}
      <div style={{
        position: 'absolute', top: 36, left: 0, right: 0, textAlign: 'center',
        fontFamily: POS_FONTS.display, fontSize: 28, fontStyle: 'italic',
        color: POS.cream,
      }}>
        <span style={{ display: 'inline-block', padding: '16px 60px', background: POS.accent, color: POS.cream }}>
          История, которая оставит след, а не потратит время
        </span>
      </div>

      {/* main title bottom — точно как титульник */}
      <div style={{
        position: 'absolute', left: 90, right: 90, bottom: 90, zIndex: 5,
      }}>
        <div style={{ marginBottom: 28 }}>
          <span style={{
            display: 'inline-block', padding: '10px 20px 8px',
            background: POS.cream, color: POS.accent,
            fontFamily: POS_FONTS.slab, fontWeight: 700,
            fontSize: 18, letterSpacing: '0.4em', textTransform: 'uppercase',
            transform: 'rotate(-2deg)',
          }}>Криминальная драма</span>
        </div>
        <h1 style={{
          fontFamily: POS_FONTS.slab, fontWeight: 700,
          fontSize: 230, lineHeight: 0.88, letterSpacing: '-0.02em',
          textTransform: 'uppercase', whiteSpace: 'nowrap',
          color: POS.cream, margin: 0,
          textShadow: '0 6px 0 rgba(199, 54, 31, 0.35)', textAlign: 'center',
        }}>Интерференция</h1>
        <div style={{
          marginTop: 36, display: 'grid', gridTemplateColumns: 'auto 1fr auto',
          gap: 48, alignItems: 'center',
          borderTop: `3px solid ${POS.cream}`, paddingTop: 28,
        }}>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 500,
            fontSize: 16, letterSpacing: '0.4em', textTransform: 'uppercase',
            color: POS.cream, opacity: 0.6, whiteSpace: 'nowrap',
          }}>8 серий · 45–50 мин</div>
          <div style={{
            fontFamily: POS_FONTS.slab, fontWeight: 500,
            fontSize: 18, letterSpacing: '0.45em', textTransform: 'uppercase',
            color: POS.cream, textAlign: 'center', opacity: 0.7,
          }}>Спасибо · ждём обратной связи</div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 22,
              color: POS.cream, letterSpacing: '0.02em', marginBottom: 8,
            }}>Сергей Черкасов</div>
            <a href="mailto:cherkaso8@icloud.com" style={{
              display: 'block', fontFamily: POS_FONTS.slab, fontSize: 20, color: POS.cream,
              opacity: 0.85, letterSpacing: '0.02em', marginBottom: 4,
              textDecoration: 'none',
            }}>cherkaso8@icloud.com</a>
            <a href="tel:+79295000354" style={{
              display: 'block', fontFamily: POS_FONTS.slab, fontSize: 20, color: POS.cream,
              opacity: 0.85, letterSpacing: '0.02em',
              textDecoration: 'none',
            }}>+7 929 500 03 54</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  P01_Title, P02_Epigraph, P03_Format, P04_Logline, P05_CoreIdea, P_WhySee,
  P06_CharsSection, P07_Olivia, P08_Masha, P09_Oleg, P10_Trio, P11_ArtemDelets,
  P12_SynopsisSection, P13_Synopsis, P_Pilot, P14_Arc, P_EpisodeEngine, P15_Tone, P16_CourierWorld,
  P17_Audience, P_WhyNow, P_WhyWatch, P18_Team, P19_Closing,
});

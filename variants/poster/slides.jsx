// V3 — Киноплакатный. 18 слайдов.

const PTOTAL = 20;

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
    ['Сезоны', '1 сезон · заявлен 2-й'],
    ['Место', 'Москва · Крым · 2025'],
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
                  fontFamily: POS_FONTS.slab, fontWeight: 500,
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
          <PosImage src="../../assets/ref-scene-solitude.png" filter="hot" />
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
          Желающая уйти на покой <span style={{ color: POS.ink }}>криминальная курьерша</span> становится жертвой покушения и случайно спасает назойливую <span style={{ color: POS.ink }}>восьмилетнюю сироту</span>, ставшую свидетелем этого.
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
            За хитросплетением сюжета в стиле <b>Гая Ричи</b> кроется драма, затрагивающая вопросы
            отцов и детей, ответственности, взросления, и влияния общественных стереотипов на наши действия.
            <br /><br />
            Ассоциальная криминальная курьер становится лучшим родителем для незнакомой девочки,
            чем отец для родного сына, которого буквально убивает своим неприятием.
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
              Молодые люди, жаждущие успеха, бездумно поддаются чужим стереотипам — и губят свои жизни с хорошими побуждениями.
            </div>
          </div>
          <div style={{ height: 340, marginTop: 20, border: `4px solid ${POS.ink}` }}>
            <PosImage src="../../assets/refs/sketchbook-01.png" filter="none" />
          </div>
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
      <PosMeta index={7} total={PTOTAL} section="Раздел 1" dark />
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
function PCharFull({ idx, name, age, role, body, wants, img, stripColor = POS.accent }) {
  return (
    <PosFrame>
      <PosMeta index={idx} total={PTOTAL} section="Персонажи" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '580px 1fr', gap: 70, alignItems: 'start', marginTop: 40 }}>
        <div>
          <div style={{ height: 720, position: 'relative', border: `4px solid ${POS.ink}` }}>
            {img ? <PosImage src={img} filter="crush" /> : <PosPlaceholder label={name} />}
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
                color: stripColor, marginBottom: 12,
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

function P07_Olivia() { return <PCharFull idx={8} name="Оливия" age="38 лет" role="Криминальный курьер"
  img="../../assets/refs/olivia-01.jpeg"
  body={<>Доставляет товар, послания, договора. Решает вопросы силой в случае необходимости. Одинокая, замкнутая, скрытная.<br/><br/>Страдает от выгорания и износа суставов — что сильно мешает в работе. Речь короткая, общается неохотно. Одевается практично: худи, капюшоны, куртки, джинсы, ботинки.</>}
  wants="Уйти на покой и уехать к морю. Но в Маше начинает видеть себя в начале пути." />; }

function P08_Masha() { return <PCharFull idx={9} name="Маша" age="8 лет" role="Сирота · попрошайка"
  img="../../assets/refs/masha-01.png" stripColor={POS.ink}
  body={<>Слишком маленькая, чтобы постоять за себя — вынуждена терпеть агрессию старших. Стремится казаться взрослее, сильнее.<br/><br/>Хочет быть кому-то нужной. Собирается уехать, но никак не решается. Очарована Оливией — единственной, кто была к ней добра.</>}
  wants="Найти маму — ту, которой у неё никогда не было." />; }

function P09_Oleg() { return <PCharFull idx={10} name="Олег" age="60 лет" role="Глава организации · работодатель Оливии"
  img="../../assets/refs/oleg-01.jpg"
  body={<>Заурядный внешний вид скрывает жестокого, расчётливого главу организации по отмыву, обналичиванию и транспортировке нелегальных денег.<br/><br/>Не принимает сына — что на самом деле есть попытка защитить, вытеснив из своего мира. Своими руками, отстраняя сына, толкал его к гибели. <b>В финале собственноручно расстреливает его</b>, не узнав сына под маской.</>}
  wants="Нормального наследника." />; }

// ── 10. Дуэт Сухой + Гуддини ─────────────────────────────────
function P10_Trio() {
  const duo = [
    { name: 'Сухой', role: 'Уволенный айтишник · мечтатель', img: null, color: POS.ink,
      text: 'Устал убирать в чужих квартирах. Хочет запустить свой стартап, но нет стартового капитала. Энергичный, уверенный в себе, инициирует затею.' },
    { name: 'Гуддини', role: 'Уволенный айтишник · напарник', img: null, color: POS.ink,
      text: 'Напарник Сухого. Тихий, зажатый — но разбирается во всём лучше. Из-за неуверенности отказывается от своих убеждений.' },
  ];
  return (
    <PosFrame>
      <PosMeta index={11} total={PTOTAL} section="Персонажи" />
      <PosHead kicker="Двое друзей · наивные стартаперы" size={104}>Сухой &amp; Гуддини</PosHead>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 36 }}>
        {duo.map((p) => (
          <div key={p.name} style={{ border: `4px solid ${POS.ink}`, display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 440, position: 'relative', borderBottom: `4px solid ${POS.ink}`, background: POS.bgAlt }}>
              {p.img ? <PosImage src={p.img} filter="crush" /> : <PosPlaceholder label={p.name} style={{ border: 'none' }} />}
              <div style={{
                position: 'absolute', top: 18, left: 18,
                padding: '10px 16px 8px', background: p.color, color: POS.cream,
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 13,
                letterSpacing: '0.4em', textTransform: 'uppercase',
              }}>25–30</div>
            </div>
            <div style={{ padding: 36, flex: 1, background: POS.cream, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 14,
                letterSpacing: '0.45em', textTransform: 'uppercase',
                color: p.color, marginBottom: 10,
              }}>{p.role}</div>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700,
                fontSize: 108, lineHeight: 0.9, textTransform: 'uppercase',
                color: POS.ink, marginBottom: 18,
              }}>{p.name}</div>
              <div style={{ width: 60, height: 4, background: POS.accent, marginBottom: 20 }} />
              <PosBody size={22}>{p.text}</PosBody>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 24, padding: '18px 24px', background: POS.ink, color: POS.cream,
        fontFamily: POS_FONTS.display, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4,
      }}>
        Воруют у Оливии. Пытаясь отмыть деньги, влезают в сомнительное дело — и, сами того не зная, приводят к гибели Тимура.
      </div>
    </PosFrame>
  );
}

// ── 11. Тимур + Делец (парная карточка) ──────────────────────
function P11_ArtemDelets() {
  const pair = [
    {
      name: 'Тимур', age: '25–30', role: 'Сын Олега · айти',
      img: '../../assets/refs/timur-01.webp', stripColor: POS.accent,
      body: 'Ведёт легальный, спокойный образ жизни — не связан с деятельностью отца. Давление неудачных отношений пускает его «во все тяжкие» и в финале приводит к главной трагедии.',
      wants: 'Получить признание отца.',
    },
    {
      name: 'Делец', age: '20–25', role: 'Отшельник · игроман · хаб',
      img: null, stripColor: POS.ink,
      body: <>Похож на делового растамана. <b>Хаб преступного мира</b>: помогает купить, продать, связаться с наёмником. Работает со всеми, преследует исключительно свои меркантильные интересы.</>,
      wants: 'Денег.',
    },
  ];
  return (
    <PosFrame>
      <PosMeta index={12} total={PTOTAL} section="Персонажи" />
      <PosHead kicker="Катализатор и его проводник" size={104}>Тимур &amp; Делец</PosHead>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 36 }}>
        {pair.map((p) => (
          <div key={p.name} style={{ border: `4px solid ${POS.ink}`, display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 420, position: 'relative', borderBottom: `4px solid ${POS.ink}`, background: POS.bgAlt }}>
              {p.img ? <PosImage src={p.img} filter="crush" /> : <PosPlaceholder label={p.name} style={{ border: 'none' }} />}
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
                fontSize: 108, lineHeight: 0.9, textTransform: 'uppercase',
                color: POS.ink, marginBottom: 18,
              }}>{p.name}</div>
              <div style={{ width: 60, height: 4, background: p.stripColor, marginBottom: 20 }} />
              <PosBody size={20} style={{ marginBottom: 20, flex: 1 }}>{p.body}</PosBody>
              <div style={{
                padding: '16px 20px', border: `2px solid ${POS.ink}`, background: POS.bg,
              }}>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 11,
                  letterSpacing: '0.5em', textTransform: 'uppercase',
                  color: p.stripColor, marginBottom: 6,
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
      <PosMeta index={13} total={PTOTAL} section="Раздел 2" dark />
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
        <div style={{ position: 'relative', borderLeft: `6px solid ${POS.ink}` }}>
          <PosImage src="../../assets/ref-scene-solitude.png" filter="red" />
        </div>
      </div>
    </div>
  );
}

// ── 13. Synopsis body ─────────────────────────────────────────
function P13_Synopsis() {
  return (
    <PosFrame>
      <PosMeta index={14} total={PTOTAL} section="Синопсис" />
      <PosHead kicker="Краткое содержание" size={100}>Синопсис</PosHead>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 60, alignItems: 'start', marginTop: 40 }}>
        <div>
          <PosBody size={19} style={{ lineHeight: 1.65 }}>
            <p style={{ margin: '0 0 14px' }}>
              <span style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 26, letterSpacing: '0.05em', color: POS.accent, textTransform: 'uppercase', marginRight: 10 }}>Оливия</span>
              — одинокая криминальная курьер около 40 лет. Устала, хочет всё бросить и уехать в Крым к морю.
              Её последняя работа оказывается ловушкой — на неё нападают, но она случайно спасается и прячет
              на себе 8-летнюю сироту Машу, свидетельницу покушения.
            </p>
            <p style={{ margin: '0 0 14px' }}>
              Параллельно трое айтишников — Сухой, Гуддини и Тимур, сын криминального босса Олега, —
              решают ограбить собственного отца Тимура, чтобы доказать свою самостоятельность.
              План срывается: один из курьеров гибнет, второй исчезает с товаром.
            </p>
            <p style={{ margin: '0 0 14px' }}>
              Оливия, преследуемая и своими, и чужими, вынужденно берёт Машу в напарницы.
              Вместе они разматывают цепочку: от мелких посредников до самого Олега,
              который и не подозревает, что за покушением стоит его собственный сын.
            </p>
            <p style={{ margin: 0 }}>
              Чем ближе финал, тем яснее: Оливия становится Маше той матерью, которой у неё не было.
              А Олег — медленно убивает сына равнодушием.
              <span style={{ fontFamily: POS_FONTS.display, fontStyle: 'italic', color: POS.accent }}> Интерференция. </span>
              Одна волна усиливает, другая — гасит.
            </p>
          </PosBody>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16, height: 620 }}>
          <div style={{ border: `4px solid ${POS.ink}`, overflow: 'hidden' }}>
            <PosImage src="../../assets/ref-peaky-thomas.png" filter="hot" />
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
              <PosBody size={18} color="rgba(243,233,203,0.85)">{t}</PosBody>
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
    ['08', 'Финал',            'Оливия выбирает Машу, но платит за это жизнью. Маша остаётся с её главным наследием: позволить себе жить.'],
  ];
  return (
    <PosFrame>
      <PosMeta index={15} total={PTOTAL} section="Арка" />
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
            <PosBody size={15} color={a.dark ? 'rgba(243,233,203,0.9)' : POS.ink}>{a.text}</PosBody>
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
              fontFamily: POS_FONTS.body, fontSize: 12, lineHeight: 1.35,
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
  const items = [
    { label: 'Локальный вопрос',       italic: true,
      text: 'Выживут ли Оля и Маша следующие 24 часа — не разлетевшись в разные стороны?' },
    { label: 'Эмоциональный вопрос',   italic: true,
      text: 'Доверится ли Оля Маше хоть на сантиметр — или продолжит тащить её как балласт?' },
    { label: 'Поворот в конце',         italic: false,
      text: 'Оля впервые использует Машу как союзника — и это срабатывает. След ведёт внутрь организации Олега.' },
    { label: 'Как это двигает арку',    italic: false,
      text: 'Вынужденный контакт даёт трещину в броне Оливии. Маша перестаёт быть проблемой — она становится переменной.' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.05fr 1fr' }}>
      <div style={{ background: POS.ink, padding: '90px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <PosMeta index={17} total={PTOTAL} section="Движок" dark />
        <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 14, letterSpacing: '0.5em', textTransform: 'uppercase', color: POS.accent, marginBottom: 16, marginTop: 60 }}>На примере серии 02</div>
        <h1 style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 90, lineHeight: 0.88, textTransform: 'uppercase', color: POS.cream, margin: '0 0 28px 0' }}>Движок<br/>серии</h1>
        <div style={{ width: 70, height: 4, background: POS.accent, marginBottom: 28 }} />
        <PosBody size={19} color="rgba(243,233,203,0.8)" style={{ lineHeight: 1.65 }}>
          Стриминговый байер должен понять: каждая серия — законченная единица с собственным напряжением и при этом часть большой машины.
        </PosBody>
      </div>
      <div style={{ background: POS.yellow, padding: '90px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
        {items.map(({ label, text, italic }, i) => (
          <div key={label} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '2px solid rgba(28,26,24,0.14)' }}>
            <div style={{ fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 11, letterSpacing: '0.45em', textTransform: 'uppercase', color: POS.ink, opacity: 0.55, marginBottom: 7 }}>{label}</div>
            <div style={{ fontFamily: italic ? POS_FONTS.display : POS_FONTS.body, fontStyle: italic ? 'italic' : 'normal', fontSize: italic ? 22 : 19, lineHeight: 1.45, color: POS.ink }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


function P15_Tone() {
  const rows = [
    ['Свет',   'Низкий ключ. Сочная темнота. Единственный источник в кадре.'],
    ['Цвет',   'Десатурированные охра и пыльная бирюза. Ржавчина как акцент.'],
    ['Камера', 'Длинный фокус, неспешные наезды, «подглядывание» из-за углов.'],
    ['Монтаж', 'Длинные сцены с напряжением. Резкий врез, где нужно рвануть.'],
    ['Музыка', 'Электронный пост-панк · гитары с дилеем · советская эстрада наизнанку.'],
    ['Юмор',   'Сухой, по-гай-ричи. Через диалоги и ситуации, не через гэги.'],
  ];
  return (
    <PosFrame>
      <PosMeta index={16} total={PTOTAL} section="Визуал" />
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
            ['../../assets/ref-peaky-thomas.png', 'none'],
            ['../../assets/ref-scene-solitude.png', 'none'],
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
      {/* желтая фирменная полоса сверху */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 12,
        background: POS.yellow, zIndex: 3,
      }} />

      {/* hero image — сумка во весь левый край */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '52%',
        overflow: 'hidden',
      }}>
        <img src="../../assets/refs/courier-bag-01.png" alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.05) brightness(0.95) saturate(1.05)',
          }} />
        {/* мягкий растушёванный край справа — чтобы картинка уходила в чёрный фон слайда */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(90deg, rgba(28,26,24,0) 0%, rgba(28,26,24,0) 65%, rgba(28,26,24,0.7) 90%, rgba(28,26,24,1) 100%)`,
        }} />
        {/* лёгкое виньетирование снизу */}
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

      <PosMeta index={6} total={PTOTAL} section="Мир" dark />

      {/* плашка-подпись на картинке, нижний левый угол */}
      <div style={{
        position: 'absolute', left: 40, bottom: 40, zIndex: 4,
        padding: '12px 18px 10px', background: POS.yellow, color: POS.ink,
        fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 13,
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
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 18,
                textTransform: 'uppercase', letterSpacing: '0.01em',
                color: POS.ink, marginBottom: 4,
              }}>{k}</div>
              <div style={{
                fontFamily: POS_FONTS.body, fontSize: 13,
                lineHeight: 1.35, color: POS.ink,
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
      <PosMeta index={17} total={PTOTAL} section="Аудитория" />
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
            <PosBody size={16}>
              За счёт персонажей Маши, Сухого и Гуддини — молодая аудитория находит своих героев.
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
                minHeight: 180,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 700,
                  fontSize: 32, lineHeight: 0.95, textTransform: 'uppercase',
                }}>{t}</div>
                <div style={{
                  fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 12,
                  letterSpacing: '0.35em', textTransform: 'uppercase',
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
function P18_Team() {
  const team = [
    ['Автор · шоураннер', '[Имя автора]'],
    ['Режиссёр', '[Имя режиссёра]'],
    ['Оператор-постановщик', '[Имя]'],
    ['Художник-постановщик', '[Имя]'],
    ['Композитор', '[Имя]'],
    ['Продюсер', '[Имя продюсера]'],
  ];
  return (
    <PosFrame>
      <PosMeta index={18} total={PTOTAL} section="Команда" />
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

      <PosMeta index={19} total={PTOTAL} section="Контакты" dark />

      {/* top tape — зеркало титульника, но «Спасибо · контакты» */}
      <div style={{
        position: 'absolute', top: 54, left: 0, right: 0, textAlign: 'center',
        fontFamily: POS_FONTS.slab, fontSize: 17, letterSpacing: '0.6em',
        textTransform: 'uppercase', fontWeight: 500,
        color: POS.cream,
      }}>
        <span style={{ display: 'inline-block', padding: '12px 40px', background: POS.accent, color: POS.cream }}>
          Спасибо · ждём обратной связи
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
            fontFamily: POS_FONTS.display, fontStyle: 'italic',
            fontSize: 27, lineHeight: 1.2, color: POS.cream,
            textAlign: 'center',
          }}>История, которая оставит след, а не потратит время</div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 22,
              color: POS.cream, letterSpacing: '0.02em', marginBottom: 6,
            }}>Сергей Черкасов</div>
            <div style={{
              fontFamily: POS_FONTS.slab, fontSize: 17, color: POS.cream,
              opacity: 0.85, letterSpacing: '0.02em', marginBottom: 3,
            }}>cherkaso8@icloud.com</div>
            <div style={{
              fontFamily: POS_FONTS.slab, fontSize: 17, color: POS.cream,
              opacity: 0.85, letterSpacing: '0.02em',
            }}>+7 929 500 03 54</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  P01_Title, P02_Epigraph, P03_Format, P04_Logline, P05_CoreIdea,
  P06_CharsSection, P07_Olivia, P08_Masha, P09_Oleg, P10_Trio, P11_ArtemDelets,
  P12_SynopsisSection, P13_Synopsis, P_Pilot, P14_Arc, P_EpisodeEngine, P15_Tone, P16_CourierWorld,
  P17_Audience, P19_Closing,
});

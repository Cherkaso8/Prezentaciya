// Парная версия слайдов персонажей — для сравнения.
// Компонент PCharPair: две фигуры рядом с мета-подписью о связи.

function PCharPair({ idx, pairKicker, pairTitle, pairSubtitle, left, right, mirrorColor = POS.accent }) {
  // left/right: { name, age, role, img, body, wants, stripColor }
  return (
    <PosFrame>
      <PosMeta index={idx} total={PPTOTAL} section="Персонажи" />

      {/* Заголовок пары */}
      <div style={{ marginBottom: 16 }}>
        <div style={{
          fontFamily: POS_FONTS.slab, fontWeight: 500,
          fontSize: 14, letterSpacing: '0.5em', textTransform: 'uppercase',
          color: mirrorColor, marginBottom: 10,
        }}>{pairKicker}</div>
        <h1 style={{
          fontFamily: POS_FONTS.slab, fontWeight: 700,
          fontSize: 104, lineHeight: 0.9, textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          color: POS.ink, margin: 0,
        }}>{pairTitle}</h1>
        {pairSubtitle && (
          <div style={{
            fontFamily: POS_FONTS.display, fontStyle: 'italic',
            fontSize: 26, color: POS.ink, opacity: 0.7, marginTop: 10,
          }}>{pairSubtitle}</div>
        )}
      </div>

      <div style={{ width: 120, height: 5, background: mirrorColor, marginBottom: 24 }} />

      <div style={{
        flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44,
        alignItems: 'stretch',
      }}>
        {[left, right].map((p, i) => (
          <div key={i} style={{
            border: `4px solid ${POS.ink}`, display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ height: 360, position: 'relative', borderBottom: `4px solid ${POS.ink}`, background: POS.bgAlt }}>
              {p.img ? <PosImage src={p.img} filter="crush" /> : <PosPlaceholder label={p.name} style={{ border: 'none' }} />}
              <div style={{
                position: 'absolute', bottom: 16, left: 16,
                padding: '9px 16px 7px', background: p.stripColor || POS.accent, color: POS.cream,
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 13,
                letterSpacing: '0.4em', textTransform: 'uppercase',
              }}>{p.age}</div>
            </div>
            <div style={{ padding: 28, flex: 1, background: POS.cream, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 12,
                letterSpacing: '0.4em', textTransform: 'uppercase',
                color: p.stripColor || POS.accent, marginBottom: 6,
              }}>{p.role}</div>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700,
                fontSize: 78, lineHeight: 0.9, textTransform: 'uppercase',
                color: POS.ink, marginBottom: 12,
              }}>{p.name}</div>
              <div style={{ width: 50, height: 3, background: p.stripColor || POS.accent, marginBottom: 14 }} />
              <PosBody size={16} style={{ marginBottom: 16, flex: 1 }}>{p.body}</PosBody>
              {p.wants && (
                <div style={{
                  padding: '14px 18px', border: `2px solid ${POS.ink}`, background: POS.bg,
                }}>
                  <div style={{
                    fontFamily: POS_FONTS.slab, fontWeight: 600, fontSize: 10,
                    letterSpacing: '0.5em', textTransform: 'uppercase',
                    color: p.stripColor || POS.accent, marginBottom: 6,
                  }}>Хочет</div>
                  <div style={{
                    fontFamily: POS_FONTS.display, fontStyle: 'italic',
                    fontSize: 19, lineHeight: 1.3, color: POS.ink,
                  }}>{p.wants}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </PosFrame>
  );
}

// ── Пара: Оливия & Маша ─── найденная мать ─────────────────────
function PP07_OliviaMasha() {
  return (
    <PCharPair idx={7}
      pairKicker="Пара I · найденная мать"
      pairTitle="Оливия & Маша"
      pairSubtitle="«Мать, которой у Маши не было»"
      mirrorColor={POS.accent}
      left={{
        name: 'Оливия', age: '38 лет', role: 'Криминальный курьер',
        img: '../../assets/refs/olivia-01.jpeg', stripColor: POS.accent,
        body: <>Одинокая, замкнутая, скрытная. Страдает от выгорания и износа суставов. Всё время мечтает бросить и уехать к морю. В Маше начинает видеть себя в начале пути.</>,
        wants: 'Уйти на покой и уехать к морю.',
      }}
      right={{
        name: 'Маша', age: '8 лет', role: 'Сирота · попрошайка',
        img: '../../assets/refs/masha-01.png', stripColor: POS.ink,
        body: <>Слишком маленькая, чтобы постоять за себя. Хочет быть кому-то нужной. Очарована Оливией — единственной, кто была к ней добра.</>,
        wants: 'Найти маму — ту, которой у неё никогда не было.',
      }}
    />
  );
}

// ── Пара: Олег & Тимур ─── отец, убивший сына ──────────────────
function PP08_OlegTimur() {
  return (
    <PCharPair idx={8}
      pairKicker="Пара II · отвергнутый сын"
      pairTitle="Олег & Тимур"
      pairSubtitle="«Отец, который убил, отстраняя»"
      mirrorColor={POS.ink}
      left={{
        name: 'Олег', age: '60 лет', role: 'Глава организации',
        img: '../../assets/refs/oleg-01.jpg', stripColor: POS.ink,
        body: <>Жестокий, расчётливый глава организации по отмыву нелегальных денег. Не принимает сына — что на самом деле есть попытка защитить, вытеснив из своего мира. В финале собственноручно расстреливает Тимура, не узнав под маской.</>,
        wants: 'Нормального наследника. Работодатель Оливии.',
      }}
      right={{
        name: 'Тимур', age: '25–30', role: 'Сын Олега · айти',
        img: '../../assets/refs/timur-01.webp', stripColor: POS.accent,
        body: <>Ведёт легальный, спокойный образ жизни. Никак не связан с деятельностью отца. Давление неудачных отношений пускает его «во все тяжкие» — и в финале приводит к главной трагедии.</>,
        wants: 'Получить признание отца.',
      }}
    />
  );
}

// ── Дуэт: Сухой & Гуддини (без Тимура — он с отцом) ────────────
function PP09_SukhoyGuddini() {
  const g = [
    { name: 'Сухой', role: 'Уборщик · мечтатель', stripColor: POS.ink,
      body: 'Устал убирать в чужих квартирах. Хочет запустить свой стартап, но нет стартового капитала. Энергичный, уверенный в себе — инициирует затею.' },
    { name: 'Гуддини', role: 'Уборщик · напарник', stripColor: POS.ink,
      body: 'Напарник Сухого. Тихий, зажатый — но разбирается во всём лучше. Из-за неуверенности отказывается от своих убеждений.' },
  ];
  return (
    <PosFrame>
      <PosMeta index={9} total={PPTOTAL} section="Персонажи" />
      <PosHead kicker="Дуэт · наивные стартаперы" size={104}>Сухой &amp; Гуддини</PosHead>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, marginTop: 24 }}>
        {g.map((p) => (
          <div key={p.name} style={{ border: `4px solid ${POS.ink}`, display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 440, position: 'relative', borderBottom: `4px solid ${POS.ink}`, background: POS.bgAlt }}>
              <PosPlaceholder label={p.name} style={{ border: 'none' }} />
              <div style={{
                position: 'absolute', bottom: 16, left: 16,
                padding: '9px 16px 7px', background: p.stripColor, color: POS.cream,
                fontFamily: POS_FONTS.slab, fontWeight: 700, fontSize: 13,
                letterSpacing: '0.4em', textTransform: 'uppercase',
              }}>25–30</div>
            </div>
            <div style={{ padding: 32, flex: 1, background: POS.cream }}>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 500, fontSize: 13,
                letterSpacing: '0.4em', textTransform: 'uppercase',
                color: POS.accent, marginBottom: 8,
              }}>{p.role}</div>
              <div style={{
                fontFamily: POS_FONTS.slab, fontWeight: 700,
                fontSize: 90, lineHeight: 0.9, textTransform: 'uppercase',
                color: POS.ink, marginBottom: 14,
              }}>{p.name}</div>
              <div style={{ width: 54, height: 4, background: POS.accent, marginBottom: 18 }} />
              <PosBody size={19}>{p.body}</PosBody>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 22, padding: '16px 22px', background: POS.ink, color: POS.cream,
        fontFamily: POS_FONTS.display, fontStyle: 'italic', fontSize: 20, lineHeight: 1.4,
      }}>
        Воруют у Оливии. Пытаясь отмыть деньги, влезают в сомнительное дело — и, сами того не зная, приводят к гибели Тимура.
      </div>
    </PosFrame>
  );
}

// ── Обёртки: переопределяют индекс мета-раннера для слайдов 10..17 ──
// В парной колоде 17 слайдов (вместо 18), поэтому слайды после персонажей
// сдвигаются на -1. Перехватываем PosMeta через прокси: клонируем дерево
// и подменяем пропсы у найденного PosMeta-элемента.
//
// Проще: рендерим оригинальный компонент в контексте, где PosMeta оборачиваем.
// Поскольку PosMeta — глобальная функция, заменим её для рендера парных.

function withRemappedMeta(Orig, newIndex, newTotal) {
  return function Wrapped() {
    // Сохраняем оригинал, подменяем на время рендера
    const OriginalMeta = window.PosMeta;
    window.PosMeta = function PatchedMeta(props) {
      return OriginalMeta({ ...props, index: newIndex, total: newTotal });
    };
    const el = Orig();
    window.PosMeta = OriginalMeta;
    return el;
  };
}

// Применяем к слайдам 10..18 (парная колода = 18 слайдов)
const PP10_Delets         = withRemappedMeta(P11_ArtemDelets,    10, 18);
const PP11_SynopsisSect   = withRemappedMeta(P12_SynopsisSection,11, 18);
const PP12_Synopsis       = withRemappedMeta(P13_Synopsis,       12, 18);
const PP13_Arc            = withRemappedMeta(P14_Arc,            13, 18);
const PP14_Tone           = withRemappedMeta(P15_Tone,           14, 18);
const PP15_Courier        = withRemappedMeta(P16_CourierWorld,   15, 18);
const PP16_Audience       = withRemappedMeta(P17_Audience,       16, 18);
const PP17_Team           = withRemappedMeta(P18_Team,           17, 18);
const PP18_Closing        = withRemappedMeta(P19_Closing,        18, 18);

// Также обёртки для слайдов 01..06 — только для total (индексы у них уже ок)
const PP01_Title      = withRemappedMeta(P01_Title,        1, 18);
const PP02_Epigraph   = withRemappedMeta(P02_Epigraph,     2, 18);
const PP03_Format    = withRemappedMeta(P03_Format,       3, 18);
const PP04_Logline    = withRemappedMeta(P04_Logline,      4, 18);
const PP05_CoreIdea   = withRemappedMeta(P05_CoreIdea,     5, 18);
const PP06_CharsSect  = withRemappedMeta(P06_CharsSection, 6, 18);

Object.assign(window, {
  PCharPair, PP07_OliviaMasha, PP08_OlegTimur, PP09_SukhoyGuddini,
  PP01_Title, PP02_Epigraph, PP03_Format, PP04_Logline, PP05_CoreIdea, PP06_CharsSect,
  PP10_Delets, PP11_SynopsisSect, PP12_Synopsis, PP13_Arc, PP14_Tone,
  PP15_Courier, PP16_Audience, PP17_Team, PP18_Closing,
});

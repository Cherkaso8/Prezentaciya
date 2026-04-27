// V2 — Минимализм. All 18 slides, one file.

const TOTAL = 18;

// ── 01. Title — тёмная обложка, крупный серифный логотип ──────
function M01_Title() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: MIN.ink,
      color: MIN.bg,
      padding: 110,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <MinChrome index={1} total={TOTAL} section="Обложка" dark />
      <div style={{
        position: 'absolute', inset: '110px 0 0 0',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch',
        height: 'calc(100% - 110px)',
      }}>
        {/* left — poster */}
        <div style={{ position: 'relative', margin: '0 0 110px 110px' }}>
          <img src="../../assets/poster-hero.png" alt=""
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0.55) contrast(1.05)',
            }} />
        </div>
        {/* right — title */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '30px 110px 110px 90px',
        }}>
          <div>
            <div style={{
              fontFamily: MIN_FONTS.body,
              fontSize: 13, letterSpacing: '0.5em',
              color: 'rgba(244,241,236,0.55)',
              textTransform: 'uppercase', marginBottom: 40,
            }}>Криминальная драма · 6 серий · 2026</div>
            <h1 style={{
              fontFamily: MIN_FONTS.display,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 148,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: MIN.bg,
              margin: 0,
            }}>Интер­<br/>ференция</h1>
            <div style={{
              width: 60, height: 3, background: MIN.accent,
              margin: '40px 0',
            }} />
            <div style={{
              fontFamily: MIN_FONTS.display,
              fontStyle: 'italic',
              fontSize: 32, lineHeight: 1.35,
              color: 'rgba(244,241,236,0.8)',
              maxWidth: 540,
            }}>
              Одна волна может усилить другую. <br />
              Может полностью её уничтожить.
            </div>
          </div>
          <div style={{
            fontFamily: MIN_FONTS.body, fontSize: 13,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(244,241,236,0.4)',
          }}>
            Питч-презентация · конфиденциально
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 02. Epigraph ──────────────────────────────────────────────
function M02_Epigraph() {
  return (
    <MinFrame>
      <MinChrome index={2} total={TOTAL} section="Эпиграф" />
      <div style={{
        flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.2fr',
        gap: 100, alignItems: 'center',
      }}>
        <div>
          <MinLabel>Интерференция · физ.</MinLabel>
          <div style={{
            fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 300,
            fontSize: 68, lineHeight: 1.1, letterSpacing: '-0.02em',
            color: MIN.ink, textWrap: 'balance',
          }}>
            свойство наложения волн, которое приводит к&nbsp;усилению или ослаблению их амплитуд.
          </div>
        </div>
        <div>
          <div style={{ width: 40, height: 2, background: MIN.accent, marginBottom: 30 }} />
          <MinBody size={26} style={{ maxWidth: 580 }}>
            Одна волна может усилить другую, «подпитывая» её.<br />
            Может полностью её уничтожить.
            <br /><br />
            <span style={{ color: MIN.inkDim }}>
              Точно так же как и мы в отношениях друг с другом и нашими детьми.
            </span>
          </MinBody>
        </div>
      </div>
    </MinFrame>
  );
}

// ── 03. Format ────────────────────────────────────────────────
function M03_Format() {
  const rows = [
    ['Жанр', 'Криминальная драма'],
    ['Настроение', 'Экшен · комедия · неонуар'],
    ['Формат', 'Горизонтальный сериал'],
    ['Объём', '6 серий · 50–55 минут'],
    ['Сезоны', '1 сезон · заявлен 2-й'],
    ['Место и время', 'Москва · Крым · 2025'],
  ];
  return (
    <MinFrame>
      <MinChrome index={3} total={TOTAL} section="Формат" />
      <MinTitle kicker="Что это" size={88}>Формат</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 100 }}>
        <div>
          {rows.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '280px 1fr',
              padding: '22px 0',
              borderTop: `1px solid ${MIN.rule}`,
              borderBottom: i === rows.length - 1 ? `1px solid ${MIN.rule}` : 'none',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: MIN_FONTS.body, fontSize: 14,
                letterSpacing: '0.25em', textTransform: 'uppercase',
                color: MIN.inkDim,
              }}>{k}</div>
              <div style={{
                fontFamily: MIN_FONTS.display, fontWeight: 400,
                fontSize: 28, color: MIN.ink, fontStyle: 'italic',
              }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative' }}>
          <MinImage src="../../assets/ref-scene-solitude.png" />
          <div style={{
            position: 'absolute', left: 0, bottom: -34,
            fontFamily: MIN_FONTS.body, fontSize: 12,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: MIN.inkDim,
          }}>Fig. 01 · Тональный референс</div>
        </div>
      </div>
    </MinFrame>
  );
}

// ── 04. Logline ───────────────────────────────────────────────
function M04_Logline() {
  return (
    <MinFrame>
      <MinChrome index={4} total={TOTAL} section="Логлайн" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1400 }}>
        <MinLabel>Логлайн</MinLabel>
        <div style={{ width: 60, height: 2, background: MIN.accent, marginBottom: 40 }} />
        <div style={{
          fontFamily: MIN_FONTS.display,
          fontWeight: 300,
          fontSize: 54, lineHeight: 1.25,
          letterSpacing: '-0.015em',
          color: MIN.ink,
          textWrap: 'pretty',
        }}>
          Желающая уйти на покой криминальная курьер становится жертвой покушения.
          Она случайно спасает восьмилетнюю сироту, видевшую лица нападавших.
          <span style={{ color: MIN.inkDim }}> Им предстоит вместе выяснить, кто стоит за нападением — чтобы вернуться к своим жизням, которые уже не будут прежними.</span>
        </div>
      </div>
    </MinFrame>
  );
}

// ── 05. Core idea ─────────────────────────────────────────────
function M05_CoreIdea() {
  return (
    <MinFrame>
      <MinChrome index={5} total={TOTAL} section="Идея" />
      <MinTitle kicker="Основная идея">О чём это</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, alignItems: 'start' }}>
        <MinBody size={24} style={{ maxWidth: 640 }}>
          За хитросплетением сюжета в стиле Гая Ричи кроется драма, затрагивающая
          вопросы отцов и детей, ответственности, взросления и влияния общественных
          стереотипов на наши действия.
          <br /><br />
          Ассоциальная криминальная курьер становится лучшим родителем для незнакомой
          девочки, чем родной отец — для своего сына, которого буквально убивает
          своим неприятием.
        </MinBody>
        <div>
          <MinLabel>Ключевой конфликт</MinLabel>
          <div style={{
            fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 300,
            fontSize: 34, lineHeight: 1.35, color: MIN.ink, marginBottom: 32,
          }}>
            Молодые люди, жаждущие успеха, бездумно поддаются чужим стереотипам —
            и губят свои жизни с хорошими побуждениями.
          </div>
          <div style={{ height: 260, position: 'relative' }}>
            <MinImage src="../../assets/ref-peaky-thomas.png" />
          </div>
        </div>
      </div>
    </MinFrame>
  );
}

// ── 06. Characters section divider ────────────────────────────
function M06_CharsSection() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: MIN.ink, color: MIN.bg,
      padding: 110,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <MinChrome index={6} total={TOTAL} section="Раздел 1" dark />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
        <div>
          <div style={{
            fontFamily: MIN_FONTS.body, fontSize: 13,
            letterSpacing: '0.4em', textTransform: 'uppercase',
            color: 'rgba(244,241,236,0.55)', marginBottom: 30,
          }}>Раздел I</div>
          <h1 style={{
            fontFamily: MIN_FONTS.display, fontWeight: 300, fontStyle: 'italic',
            fontSize: 180, lineHeight: 0.9, letterSpacing: '-0.03em',
            color: MIN.bg, margin: 0,
          }}>Персо­<br/>нажи</h1>
          <div style={{ width: 60, height: 3, background: MIN.accent, marginTop: 40 }} />
        </div>
        <div style={{ height: 620 }}>
          <MinImage src="../../assets/ref-olivia-art.png" style={{ filter: 'saturate(0.4) contrast(1.1) brightness(0.85)' }} />
        </div>
      </div>
    </div>
  );
}

// ── Character full-page: Оливия ───────────────────────────────
function CharFull({ idx, name, age, role, img, body, wants }) {
  return (
    <MinFrame>
      <MinChrome index={idx} total={TOTAL} section="Персонажи" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '560px 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <div style={{ height: 720, position: 'relative' }}>
            {img ? <MinImage src={img} /> : <MinPlaceholder label={name} />}
          </div>
          <div style={{
            fontFamily: MIN_FONTS.body, fontSize: 12, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: MIN.inkDim, marginTop: 18,
          }}>Fig. · {name}</div>
        </div>
        <div>
          <MinLabel>{age} · {role}</MinLabel>
          <h2 style={{
            fontFamily: MIN_FONTS.display, fontWeight: 300, fontStyle: 'italic',
            fontSize: 120, lineHeight: 0.95, letterSpacing: '-0.03em',
            color: MIN.ink, margin: '0 0 30px 0',
          }}>{name}</h2>
          <div style={{ width: 40, height: 2, background: MIN.accent, marginBottom: 36 }} />
          <MinBody size={22} style={{ marginBottom: 32, maxWidth: 620 }}>{body}</MinBody>
          {wants && (
            <div>
              <MinLabel>Хочет</MinLabel>
              <div style={{
                fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 300,
                fontSize: 28, lineHeight: 1.4, color: MIN.ink, maxWidth: 620,
              }}>{wants}</div>
            </div>
          )}
        </div>
      </div>
    </MinFrame>
  );
}

function M07_Olivia() {
  return <CharFull idx={7} name="Оливия" age="38 лет" role="Криминальная курьер"
    img="../../assets/ref-olivia-art.png"
    body={<>Доставляет товар, посылки, долги. Решает вопросы силой в случае необходимости. Одинокая, замкнутая, скрытная. Страдает от выгорания и износа суставов.<br/><br/>Речь короткая, общается неохотно, предпочитает молчать. Одевается практично: худи, капюшоны, куртки, джинсы, ботинки. Всё время хочет бросить и уехать жить на моря.</>}
    wants="Уйти на покой. Но видит в Маше себя в начале пути — и не уверена, что готова к этому возврату." />;
}

function M08_Masha() {
  return <CharFull idx={8} name="Маша" age="8 лет" role="Сирота · попрошайка"
    img="../../assets/ref-masha-kid.png"
    body={<>Маленькая, хрупкая, находчивая. Старается казаться больше, сильнее, смелее, лишь бы к ней не приставали. Никому не доверяет. Знает только жестокость по отношению к себе.<br/><br/>Очарована Оливией — единственной, кто была добра к ней. Пытается стать полезной и войти в её команду. Оливия для Маши — и билет в другую жизнь, и какая-то замена мамы.</>}
    wants="Сбежать, но не решается. Мечтает о маме, которой у неё никогда не было." />;
}

function M09_Oleg() {
  return <CharFull idx={9} name="Олег" age="60 лет" role="Босс · глава организации"
    img="../../assets/ref-oleg-face.png"
    body={<>Худой, вытянутый, спокойный, загадочный. Контролирует любую ситуацию: обволакивающий тембр, лёгкая хрипотца, жёсткая сдержка истинных мыслей.<br/><br/>Терпеть не может современное поколение, считая его бесхарактерным, испорченным. Не принимает своего сына Тимура. Считает его «не имеющим достойного наследства».</>}
    wants="Нормального наследника — из-за чего испытывает отцовские чувства к своему помощнику Артёму." />;
}

// ── 10. Trio: Сухой / Гуддини / Тимур ─────────────────────────
function M10_Trio() {
  const g = [
    { name: 'Сухой', age: '25–30', role: 'Айтишник', img: '../../assets/ref-macho-botan.jpg',
      text: 'Энергичный, раскованный, уверенный в себе. Должен быть всегда прав, всегда впереди. Именно поэтому инициирует их с Гуддини затею.' },
    { name: 'Гуддини', age: '25–30', role: 'Айтишник', img: null,
      text: 'Тихий, зажатый, недалёкий. Разбирается во всём лучше Сухого, но из-за неуверенности постоянно отказывается от своих убеждений.' },
    { name: 'Тимур', age: '25', role: 'Айтишник · сын Олега', img: '../../assets/ref-young-man.jpg',
      text: 'Успешный специалист, ведёт легальный образ жизни. Вырос в «золотой клетке», всё детство практически не видел отца. Хочет получить признание отца.' },
  ];
  return (
    <MinFrame>
      <MinChrome index={10} total={TOTAL} section="Персонажи" />
      <MinTitle kicker="Трио">Сухой · Гуддини · Тимур</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 50 }}>
        {g.map((p) => (
          <div key={p.name}>
            <div style={{ height: 420, marginBottom: 24 }}>
              {p.img ? <MinImage src={p.img} /> : <MinPlaceholder label={p.name} />}
            </div>
            <MinLabel>{p.age} · {p.role}</MinLabel>
            <div style={{
              fontFamily: MIN_FONTS.display, fontWeight: 300, fontStyle: 'italic',
              fontSize: 42, lineHeight: 1, letterSpacing: '-0.02em',
              color: MIN.ink, marginBottom: 20,
            }}>{p.name}</div>
            <div style={{ width: 30, height: 2, background: MIN.accent, marginBottom: 20 }} />
            <MinBody size={18}>{p.text}</MinBody>
          </div>
        ))}
      </div>
    </MinFrame>
  );
}

// ── 11. Артём · Делец ─────────────────────────────────────────
function M11_ArtemDelets() {
  const p = [
    { name: 'Артём', age: '30', role: 'Правая рука Олега',
      text: 'Суровый, беспощадный. На первый взгляд слегка туповат — но на самом деле хитёр и расчётлив.',
      wants: 'Занять место Олега.' },
    { name: 'Делец', age: '20–25', role: 'Отшельник · игроман',
      text: '«Палочка-выручалочка» преступного мира: найти, узнать, свести заказчика с исполнителем, отмыть, купить, продать на чёрном рынке.',
      wants: 'Денег.' },
  ];
  return (
    <MinFrame>
      <MinChrome index={11} total={TOTAL} section="Персонажи" />
      <MinTitle kicker="Окружение">Артём · Делец</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100 }}>
        {p.map((x) => (
          <div key={x.name}>
            <div style={{ height: 400, marginBottom: 28 }}>
              <MinPlaceholder label={`${x.name} — фото актёра`} />
            </div>
            <MinLabel>{x.age} · {x.role}</MinLabel>
            <div style={{
              fontFamily: MIN_FONTS.display, fontWeight: 300, fontStyle: 'italic',
              fontSize: 60, lineHeight: 0.95, letterSpacing: '-0.02em',
              color: MIN.ink, marginBottom: 24,
            }}>{x.name}</div>
            <div style={{ width: 40, height: 2, background: MIN.accent, marginBottom: 24 }} />
            <MinBody size={21} style={{ marginBottom: 22 }}>{x.text}</MinBody>
            <MinLabel>Хочет</MinLabel>
            <div style={{
              fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 300,
              fontSize: 26, color: MIN.ink,
            }}>{x.wants}</div>
          </div>
        ))}
      </div>
    </MinFrame>
  );
}

// ── 12. Synopsis section divider ──────────────────────────────
function M12_SynopsisSection() {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: MIN.ink, color: MIN.bg,
      padding: 110, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <MinChrome index={12} total={TOTAL} section="Раздел 2" dark />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
        <div style={{ height: 620 }}>
          <MinImage src="../../assets/ref-scene-solitude.png" style={{ filter: 'saturate(0.4) contrast(1.1) brightness(0.85)' }} />
        </div>
        <div>
          <div style={{ fontFamily: MIN_FONTS.body, fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.55)', marginBottom: 30 }}>Раздел II</div>
          <h1 style={{
            fontFamily: MIN_FONTS.display, fontWeight: 300, fontStyle: 'italic',
            fontSize: 180, lineHeight: 0.9, letterSpacing: '-0.03em',
            color: MIN.bg, margin: 0,
          }}>Сино­<br/>псис</h1>
          <div style={{ width: 60, height: 3, background: MIN.accent, marginTop: 40 }} />
        </div>
      </div>
    </div>
  );
}

// ── 13. Synopsis body ─────────────────────────────────────────
function M13_Synopsis() {
  return (
    <MinFrame>
      <MinChrome index={13} total={TOTAL} section="Синопсис" />
      <MinTitle kicker="Краткое содержание" size={76}>Короткий синопсис</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div style={{ columnCount: 1 }}>
          <MinBody size={20} style={{ lineHeight: 1.65 }}>
            <p style={{ margin: '0 0 18px' }}>
              Оливия — одинокая криминальная курьер около 40 лет. Устала от жизни, хочет всё бросить
              и уехать в Крым к морю. Её последняя работа оказывается ловушкой — на неё нападают,
              но она случайно спасается и прячет на себе 8-летнюю сироту Машу, свидетельницу покушения.
            </p>
            <p style={{ margin: '0 0 18px' }}>
              Параллельно трое айтишников — Сухой, Гуддини и Тимур, сын криминального босса Олега, —
              решают ограбить собственного отца Тимура, чтобы доказать свою самостоятельность.
              План срывается: один из курьеров гибнет, второй исчезает с товаром.
            </p>
            <p style={{ margin: '0 0 18px' }}>
              Оливия, преследуемая и своими, и чужими, вынужденно берёт Машу в напарницы.
              Вместе они разматывают цепочку: от мелких посредников до самого Олега,
              который и не подозревает, что за покушением стоит его собственный сын.
            </p>
            <p style={{ margin: 0 }}>
              Чем ближе финал, тем яснее: Оливия становится Маше той матерью, которой у неё не было.
              А Олег — медленно убивает сына равнодушием.
            </p>
          </MinBody>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr 1fr', gap: 20, height: 700 }}>
          <MinImage src="../../assets/ref-peaky-thomas.png" />
          <MinImage src="../../assets/ref-scene-solitude.png" />
        </div>
      </div>
    </MinFrame>
  );
}

// ── 14. Arc ───────────────────────────────────────────────────
function M14_Arc() {
  const acts = [
    { n: 'I', t: 'Покушение', eps: 'Серии 1–2',
      text: 'Оливия готовится уйти на покой. Последний заказ оборачивается засадой. Случайно спасённая Маша становится единственной свидетельницей. Параллельно — план Сухого, Гуддини и Тимура.' },
    { n: 'II', t: 'Расследование', eps: 'Серии 3–4',
      text: 'Оливия с Машей уходят в тень, распутывают цепочку посредников. Связь между ними крепнет. Олег ищет предателя в своём окружении и всё больше приближает Артёма.' },
    { n: 'III', t: 'Интерференция', eps: 'Серии 5–6',
      text: 'Оливия выходит на Олега. Тимур ломается под грузом содеянного. Волны пересекаются — одни жизни усиливают другие, другие гаснут. Финал — в Крыму.' },
  ];
  return (
    <MinFrame>
      <MinChrome index={14} total={TOTAL} section="Арка" />
      <MinTitle kicker="Три акта · шесть серий">Драматургия</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 50, alignItems: 'start' }}>
        {acts.map((a) => (
          <div key={a.n}>
            <div style={{
              fontFamily: MIN_FONTS.display, fontWeight: 300,
              fontSize: 120, lineHeight: 0.9, color: MIN.accent,
              marginBottom: 16, letterSpacing: '-0.02em',
            }}>{a.n}</div>
            <MinLabel>{a.eps}</MinLabel>
            <div style={{
              fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 300,
              fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em',
              color: MIN.ink, marginBottom: 24,
            }}>{a.t}</div>
            <div style={{ width: 40, height: 1, background: MIN.rule, marginBottom: 24 }} />
            <MinBody size={19}>{a.text}</MinBody>
          </div>
        ))}
      </div>
    </MinFrame>
  );
}

// ── 15. Tone ──────────────────────────────────────────────────
function M15_Tone() {
  const rows = [
    ['Свет',   'Низкий ключ. Сочная темнота. Единственный источник в кадре.'],
    ['Цвет',   'Десатурированные охра и пыльная бирюза. Ржавчина как акцент.'],
    ['Камера', 'Длинный фокус, неспешные наезды, «подглядывание» из-за углов.'],
    ['Монтаж', 'Длинные сцены с напряжением. Резкий врез там, где нужно рвануть.'],
    ['Музыка', 'Электронный пост-панк · гитары с дилеем · советская эстрада наизнанку.'],
    ['Юмор',   'Сухой, по-гай-ричи. Через диалоги и ситуации, не через гэги.'],
  ];
  return (
    <MinFrame>
      <MinChrome index={15} total={TOTAL} section="Визуал" />
      <MinTitle kicker="Как это выглядит и звучит">Тон и визуал</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>
        <div>
          {rows.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '170px 1fr',
              padding: '16px 0',
              borderTop: `1px solid ${MIN.rule}`,
              borderBottom: i === rows.length - 1 ? `1px solid ${MIN.rule}` : 'none',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 400,
                fontSize: 26, color: MIN.accent,
              }}>{k}</div>
              <MinBody size={19}>{v}</MinBody>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            '../../assets/ref-peaky-thomas.png',
            '../../assets/ref-scene-solitude.png',
            '../../assets/ref-oleg-face.png',
            '../../assets/ref-olivia-art.png',
          ].map((src, i) => (
            <div key={i} style={{ height: 300 }}><MinImage src={src} /></div>
          ))}
        </div>
      </div>
    </MinFrame>
  );
}

// ── 16. Audience ──────────────────────────────────────────────
function M16_Audience() {
  return (
    <MinFrame>
      <MinChrome index={16} total={TOTAL} section="Аудитория" />
      <MinTitle kicker="Позиционирование">Для кого это</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 100, alignItems: 'start' }}>
        <div>
          <MinLabel>Целевая аудитория</MinLabel>
          <div style={{
            fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 300,
            fontSize: 140, lineHeight: 0.9, letterSpacing: '-0.03em',
            color: MIN.ink, marginBottom: 40,
          }}>25–45</div>
          <MinBody size={22} style={{ maxWidth: 520 }}>
            Зрители, выросшие на «Бригаде», «Бумере» и «Острых козырьках». Ценят плотный сюжет,
            персонажей с биографией, мрачный юмор и атмосферу. Готовы к неоднозначным героям
            и финалам без «хеппи-энда».
          </MinBody>
        </div>
        <div>
          <MinLabel>Референсы</MinLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              ['Острые козырьки', 'атмосфера, типаж'],
              ['Леон', '«взрослый + ребёнок»'],
              ['Карты, деньги, два ствола', 'стиль рассказа, юмор'],
              ['Фарго', 'смешение жанров'],
            ].map(([t, d]) => (
              <div key={t} style={{
                borderTop: `1px solid ${MIN.rule}`,
                padding: '22px 0',
              }}>
                <div style={{
                  fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 400,
                  fontSize: 30, lineHeight: 1.1, color: MIN.ink, marginBottom: 8,
                }}>{t}</div>
                <div style={{
                  fontFamily: MIN_FONTS.body, fontSize: 14,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: MIN.inkDim,
                }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MinFrame>
  );
}

// ── 17. Team ──────────────────────────────────────────────────
function M17_Team() {
  const team = [
    ['Автор · шоураннер', '[Имя автора]'],
    ['Режиссёр', '[Имя режиссёра]'],
    ['Оператор-постановщик', '[Имя]'],
    ['Художник-постановщик', '[Имя]'],
    ['Композитор', '[Имя]'],
    ['Продюсер', '[Имя продюсера]'],
  ];
  return (
    <MinFrame>
      <MinChrome index={17} total={TOTAL} section="Команда" />
      <MinTitle kicker="Кто делает">Команда</MinTitle>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 100, alignItems: 'start' }}>
        <div>
          {team.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '360px 1fr',
              padding: '24px 0',
              borderTop: `1px solid ${MIN.rule}`,
              borderBottom: i === team.length - 1 ? `1px solid ${MIN.rule}` : 'none',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: MIN_FONTS.body, fontSize: 13,
                letterSpacing: '0.25em', textTransform: 'uppercase',
                color: MIN.inkDim,
              }}>{k}</div>
              <div style={{
                fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 400,
                fontSize: 30, color: MIN.ink,
              }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ height: 600 }}>
          <MinPlaceholder label="Фото команды / бэкстейдж" />
        </div>
      </div>
    </MinFrame>
  );
}

// ── 18. Closing ───────────────────────────────────────────────
function M18_Closing() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: MIN.ink, color: MIN.bg,
      padding: 110,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      overflow: 'hidden',
    }}>
      <MinChrome index={18} total={TOTAL} section="Контакты" dark />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: MIN_FONTS.body, fontSize: 13, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.55)', marginBottom: 30 }}>Спасибо</div>
        <h1 style={{
          fontFamily: MIN_FONTS.display, fontWeight: 300, fontStyle: 'italic',
          fontSize: 220, lineHeight: 0.9, letterSpacing: '-0.03em',
          color: MIN.bg, margin: 0,
        }}>Интер­ференция</h1>
        <div style={{ width: 80, height: 3, background: MIN.accent, margin: '50px 0' }} />
        <div style={{
          fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontWeight: 300,
          fontSize: 38, color: 'rgba(244,241,236,0.7)', maxWidth: 1100,
        }}>Одна волна может усилить другую. Может полностью её уничтожить.</div>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80,
        paddingTop: 40, borderTop: '1px solid rgba(244,241,236,0.18)',
      }}>
        <div>
          <div style={{ fontFamily: MIN_FONTS.body, fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.5)', marginBottom: 10 }}>Контакт</div>
          <div style={{ fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontSize: 26, color: MIN.bg }}>[Имя]</div>
        </div>
        <div>
          <div style={{ fontFamily: MIN_FONTS.body, fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.5)', marginBottom: 10 }}>Email</div>
          <div style={{ fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontSize: 26, color: MIN.bg }}>[email@example.com]</div>
        </div>
        <div>
          <div style={{ fontFamily: MIN_FONTS.body, fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.5)', marginBottom: 10 }}>Телефон</div>
          <div style={{ fontFamily: MIN_FONTS.display, fontStyle: 'italic', fontSize: 26, color: MIN.bg }}>[+7 ___ ___ __ __]</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  M01_Title, M02_Epigraph, M03_Format, M04_Logline, M05_CoreIdea,
  M06_CharsSection, M07_Olivia, M08_Masha, M09_Oleg, M10_Trio, M11_ArtemDelets,
  M12_SynopsisSection, M13_Synopsis, M14_Arc, M15_Tone, M16_Audience,
  M17_Team, M18_Closing,
});

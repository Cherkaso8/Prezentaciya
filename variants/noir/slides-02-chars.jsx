// V1 — Плёнка-нуар. Slides: Characters section.

// ── 06. Characters section header ──────────────────────────────
function S06_CharsSection() {
  return (
    <SectionTitle bgImage="../../assets/poster-hero.png" overline="Часть 1">
      Персонажи
    </SectionTitle>
  );
}

// ── 07. Оливия ─────────────────────────────────────────────────
function S07_Olivia() {
  return (
    <NoirFrame>
      <SlideHeading>Оливия · 38 лет</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '540px 1fr', gap: 70, flex: 1, alignItems: 'start' }}>
        <div style={{ height: 660, position: 'relative' }}>
          <CineImage src="../../assets/ref-olivia-art.png" filter="cool" />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '40px 20px 18px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)',
            fontFamily: FONTS.section, fontSize: 22,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: NOIR.ink, textAlign: 'center',
          }}>Оливия</div>
        </div>
        <div>
          <div style={{
            fontFamily: FONTS.body, fontSize: 20, color: NOIR.accent,
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18,
          }}>Криминальная курьер</div>
          <Body style={{ fontSize: 25, lineHeight: 1.65, marginBottom: 28 }}>
            Доставляет товар, посылки, долгоиграл. Решает вопросы силой в случае необходимости.
            Одинокая, замкнутая, скрытная. Страдает от выгорания и износа суставов — что сильно
            мешает в работе.
            <br /><br />
            Речь короткая, общается неохотно, предпочитает молчать. Одевается практично и приватно,
            скрываясь от окружающих. Худи с мехом, капюшоны, куртки, джинсы, ботинки, кроссовки.
            Всё время хочет бросить и уехать жить на моря.
          </Body>
          <div style={{
            fontFamily: FONTS.accent, fontStyle: 'italic',
            fontSize: 26, lineHeight: 1.5,
            color: NOIR.inkDim,
            borderLeft: `2px solid ${NOIR.accent}`, paddingLeft: 22,
          }}>
            <span style={{ fontFamily: FONTS.section, fontStyle: 'normal', fontSize: 16, letterSpacing: '0.3em', color: NOIR.accent, textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Хочет</span>
            Со временем начинает видеть в Маше себя в начале пути — и не уверена, что сосёмы рада.
          </div>
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 08. Маша ───────────────────────────────────────────────────
function S08_Masha() {
  return (
    <NoirFrame>
      <SlideHeading>Маша · 8 лет</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '540px 1fr', gap: 70, flex: 1, alignItems: 'start' }}>
        <div style={{ height: 660, position: 'relative' }}>
          <CineImage src="../../assets/ref-masha-kid.png" filter="warm" />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '40px 20px 18px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)',
            fontFamily: FONTS.section, fontSize: 22,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: NOIR.ink, textAlign: 'center',
          }}>Маша</div>
        </div>
        <div>
          <div style={{
            fontFamily: FONTS.body, fontSize: 20, color: NOIR.accent,
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18,
          }}>Сирота · попрошайка</div>
          <Body style={{ fontSize: 25, lineHeight: 1.65, marginBottom: 28 }}>
            Маленькая, хрупкая, находчивая. Старается казаться больше, сильнее, смелее, лишь бы
            к ней не приставали. Никому не доверяет. Знает только жестокость по отношению к себе.
            <br /><br />
            Очарована Оливией. Она единственная, кто была добра к Маше.
            Пытается стать полезной и стать частью команды Оливии. Она для Маши и билет в другую
            жизнь, и как бы какая-то замена мамы.
          </Body>
          <div style={{
            fontFamily: FONTS.accent, fontStyle: 'italic',
            fontSize: 26, lineHeight: 1.5,
            color: NOIR.inkDim,
            borderLeft: `2px solid ${NOIR.accent}`, paddingLeft: 22,
          }}>
            <span style={{ fontFamily: FONTS.section, fontStyle: 'normal', fontSize: 16, letterSpacing: '0.3em', color: NOIR.accent, textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Хочет</span>
            Сбежать, но не решается. Мечтает о маме, которой у неё никогда не было.
          </div>
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 09. Олег ───────────────────────────────────────────────────
function S09_Oleg() {
  return (
    <NoirFrame>
      <SlideHeading>Олег · 60 лет</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '540px 1fr', gap: 70, flex: 1, alignItems: 'start' }}>
        <div style={{ height: 660, position: 'relative' }}>
          <CineImage src="../../assets/ref-oleg-face.png" filter="warm" />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '40px 20px 18px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)',
            fontFamily: FONTS.section, fontSize: 22,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: NOIR.ink, textAlign: 'center',
          }}>Олег</div>
        </div>
        <div>
          <div style={{
            fontFamily: FONTS.body, fontSize: 20, color: NOIR.accent,
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18,
          }}>Босс Оливии · глава организации</div>
          <Body style={{ fontSize: 25, lineHeight: 1.65, marginBottom: 28 }}>
            Худой, вытянутый, спокойный, загадочный. В любой ситуации он ловит положения,
            обволакивающий тембр с лёгкой хрипотцой и обсесивная сдержка истинных мыслей Олега.
            <br /><br />
            Терпеть не может современное поколение, считая их бесхарактерными, испорченными,
            не способными к жизни. Не принимает своего сына Тимура. Считает его «не имеющим
            достойного наследства». Сам для Маши и билет в другую жизнь.
          </Body>
          <div style={{
            fontFamily: FONTS.accent, fontStyle: 'italic',
            fontSize: 26, lineHeight: 1.5,
            color: NOIR.inkDim,
            borderLeft: `2px solid ${NOIR.accent}`, paddingLeft: 22,
          }}>
            <span style={{ fontFamily: FONTS.section, fontStyle: 'normal', fontSize: 16, letterSpacing: '0.3em', color: NOIR.accent, textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Хочет</span>
            Нормального наследника из-за чего испытывает отцовские чувства к своему помощнику Артёму.
          </div>
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 10. Сухой · Гуддини · Тимур (trio) ─────────────────────────
function S10_Trio() {
  const guys = [
    {
      name: 'Сухой', age: '25–30 лет', role: 'Айтишник',
      img: '../../assets/ref-macho-botan.jpg',
      text: 'Энергичный, раскованный, тренирует уверенный в себе. Должен быть всегда прав, всегда впереди. Именно из-за чего инициирует их с Гуддини затею.',
    },
    {
      name: 'Гуддини', age: '25–30 лет', role: 'Айтишник',
      img: null,
      text: 'Тихий, зажатый, недалёкий. Не верит в себя. Генеральный тостер. Разбирается во всём лучше Сухого, но из-за неуверенного постоянно оказывается от своих убеждений.',
    },
    {
      name: 'Тимур', age: '25 лет', role: 'Айтишник · сын Олега',
      img: '../../assets/ref-young-man.jpg',
      text: 'Успешный специалист. Обыкновенная внешность. Ведёт легальный образ жизни. Вырос в «золотой клетке», всё детство практически не видел отца. Хочет получить признание отца.',
    },
  ];
  return (
    <NoirFrame>
      <SlideHeading>Сухой · Гуддини · Тимур</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 44, flex: 1 }}>
        {guys.map((g) => (
          <div key={g.name} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 360, position: 'relative', marginBottom: 22 }}>
              {g.img ? <CineImage src={g.img} filter="warm" /> : <Placeholder label={g.name} w="100%" h="100%" />}
            </div>
            <div style={{
              fontFamily: FONTS.section, fontSize: 28,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: NOIR.ink, marginBottom: 6,
            }}>{g.name}</div>
            <div style={{
              fontFamily: FONTS.body, fontSize: 16, color: NOIR.accent,
              letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16,
            }}>{g.age} · {g.role}</div>
            <Body style={{ fontSize: 20, lineHeight: 1.55 }}>{g.text}</Body>
          </div>
        ))}
      </div>
    </NoirFrame>
  );
}

// ── 11. Артём + Делец ──────────────────────────────────────────
function S11_ArtemDelets() {
  const pair = [
    {
      name: 'Артём', age: '30 лет', role: 'Правая рука Олега',
      text: 'Суровый, беспощадный. На первый взгляд слегка туповат — но на самом деле хитёр и расчётлив.',
      wants: 'Занять место Олега.',
    },
    {
      name: 'Делец', age: '20–25 лет', role: 'Отшельник · игроман',
      text: 'Смахивает на растамана-хипи. Является «палочкой-выручалочкой» преступного мира — найти, узнать, свести заказчика с исполнителем, отмыть, купить, продать на чёрном рынке.',
      wants: 'Денег.',
    },
  ];
  return (
    <NoirFrame>
      <SlideHeading>Артём · Делец</SlideHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, flex: 1 }}>
        {pair.map((p) => (
          <div key={p.name}>
            <div style={{ height: 360, marginBottom: 28, position: 'relative' }}>
              <Placeholder label={`${p.name} — фото актёра`} w="100%" h="100%" />
            </div>
            <div style={{
              fontFamily: FONTS.section, fontSize: 34,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: NOIR.ink, marginBottom: 8,
            }}>{p.name}</div>
            <div style={{
              fontFamily: FONTS.body, fontSize: 18, color: NOIR.accent,
              letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20,
            }}>{p.age} · {p.role}</div>
            <Body style={{ fontSize: 24, lineHeight: 1.6, marginBottom: 22 }}>{p.text}</Body>
            <div style={{
              fontFamily: FONTS.accent, fontStyle: 'italic',
              fontSize: 26, lineHeight: 1.5,
              color: NOIR.inkDim,
              borderLeft: `2px solid ${NOIR.accent}`, paddingLeft: 22,
            }}>
              <span style={{ fontFamily: FONTS.section, fontStyle: 'normal', fontSize: 15, letterSpacing: '0.3em', color: NOIR.accent, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Хочет</span>
              {p.wants}
            </div>
          </div>
        ))}
      </div>
    </NoirFrame>
  );
}

Object.assign(window, { S06_CharsSection, S07_Olivia, S08_Masha, S09_Oleg, S10_Trio, S11_ArtemDelets });

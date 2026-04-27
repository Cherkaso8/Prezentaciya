// V1 — Плёнка-нуар. Slide definitions.

// ── 01. Title ──────────────────────────────────────────────────
function S01_Title() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#000',
      overflow: 'hidden',
    }}>
      {/* full-bleed poster */}
      <img src="../../assets/poster-hero.png" alt="Интерференция"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'saturate(0.85) contrast(1.05) brightness(0.85)',
        }} />
      {/* protection gradient top+bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.92) 100%)
        `,
      }} />
      <GrainLayer opacity={0.16} />

      {/* top chip */}
      <div style={{
        position: 'absolute', top: 54, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
        zIndex: 5,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 18,
          fontFamily: FONTS.body,
          fontSize: 16, letterSpacing: '0.45em',
          color: 'rgba(255,255,255,0.75)',
          textTransform: 'uppercase',
        }}>
          <span style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.5)' }} />
          <span>Питч · Сериал · 2026</span>
          <span style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.5)' }} />
        </div>
      </div>

      {/* logo + sub */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 110,
        textAlign: 'center', zIndex: 5,
      }}>
        <h1 style={{
          fontFamily: FONTS.logo,
          fontWeight: 900,
          fontSize: 180,
          letterSpacing: '0.06em',
          color: '#f1e8d8',
          textShadow: '0 4px 40px rgba(0,0,0,0.85), 0 1px 0 rgba(255,255,255,0.1)',
          margin: 0, lineHeight: 0.95,
          WebkitTextStroke: '1.5px rgba(255,255,255,0.08)',
        }}>ИНТЕРФЕРЕНЦИЯ</h1>
        <div style={{
          fontFamily: FONTS.section,
          fontSize: 22,
          letterSpacing: '0.6em',
          color: 'rgba(255,255,255,0.78)',
          textTransform: 'uppercase',
          marginTop: 22,
        }}>Криминальная драма · 6 серий</div>
        <div style={{
          fontFamily: FONTS.accent,
          fontStyle: 'italic',
          fontSize: 30,
          color: 'rgba(255,255,255,0.65)',
          marginTop: 18,
        }}>«Одна волна может усилить другую. Может полностью её уничтожить.»</div>
      </div>
    </div>
  );
}

// ── 02. Epigraph / definition ──────────────────────────────────
function S02_Epigraph() {
  return (
    <NoirFrame>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', padding: '0 80px',
      }}>
        <div style={{
          fontFamily: FONTS.section, fontSize: 18, letterSpacing: '0.55em',
          color: NOIR.accent, textTransform: 'uppercase', marginBottom: 40,
        }}>Интерференция <span style={{ color: NOIR.inkFaint, marginLeft: 10 }}>/ физ. /</span></div>
        <div style={{
          fontFamily: FONTS.accent,
          fontSize: 52, fontStyle: 'italic', fontWeight: 400,
          lineHeight: 1.35,
          color: NOIR.ink,
          maxWidth: 1280,
          textWrap: 'balance',
        }}>
          свойство наложения волн, которое приводит к усилению или ослаблению их амплитуд.
        </div>
        <div style={{ width: 120, height: 1, background: NOIR.rule, margin: '64px 0' }} />
        <Body style={{ fontSize: 30, textAlign: 'center', maxWidth: 1100 }}>
          Одна волна может усилить другую, «подпитывая» её. Может полностью её уничтожить.
          <br /><br />
          Точно так же как и мы в отношениях друг с другом и нашими детьми.
        </Body>
      </div>
    </NoirFrame>
  );
}

// ── 03. Format ─────────────────────────────────────────────────
function S03_Format() {
  const rows = [
    ['ЖАНР', 'Криминальная драма'],
    ['НАСТРОЕНИЕ', 'Экшен · комедия · неонуар'],
    ['ФОРМАТ', 'Горизонтальный сериал'],
    ['ОБЪЁМ', '6 серий · 50–55 минут'],
    ['СЕЗОНЫ', '1 сезон · заявлен 2-й'],
    ['МЕСТО', 'Москва · Крым · 2025'],
  ];
  return (
    <NoirFrame>
      <SlideHeading>Формат</SlideHeading>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          {rows.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '220px 1fr',
              padding: '22px 0',
              borderBottom: i < rows.length - 1 ? `1px solid ${NOIR.rule}` : 'none',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: FONTS.section, fontSize: 18, letterSpacing: '0.35em',
                color: NOIR.accent, textTransform: 'uppercase',
              }}>{k}</div>
              <div style={{
                fontFamily: FONTS.body, fontSize: 26, color: NOIR.ink,
              }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ height: 640, position: 'relative' }}>
          <CineImage src="../../assets/ref-scene-solitude.png" filter="cool" />
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            padding: '40px 20px 16px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.88) 100%)',
            fontFamily: FONTS.body, fontSize: 15,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: NOIR.inkDim, textAlign: 'center',
          }}>Референс · низкий ключ</div>
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 04. Logline ────────────────────────────────────────────────
function S04_Logline() {
  return (
    <NoirFrame>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        maxWidth: 1280, margin: '0 auto', textAlign: 'center',
      }}>
        <div style={{
          fontFamily: FONTS.section, fontSize: 24, letterSpacing: '0.55em',
          color: NOIR.accent, textTransform: 'uppercase', marginBottom: 64,
        }}>Логлайн</div>
        <div style={{
          fontFamily: FONTS.accent, fontStyle: 'italic',
          fontSize: 44, lineHeight: 1.45, color: NOIR.ink,
          textWrap: 'pretty',
        }}>
          Желающая уйти на покой одинокая криминальная курьер становится жертвой покушения.
          Она случайно спасает восьмилетнюю сироту, видевшую лица нападавших. Им предстоит вместе
          выяснить, кто стоит за нападением — чтобы вернуться к своим жизням, которые уже не будут прежними.
        </div>
      </div>
    </NoirFrame>
  );
}

// ── 05. Core idea ──────────────────────────────────────────────
function S05_CoreIdea() {
  return (
    <NoirFrame>
      <SlideHeading>Основная идея</SlideHeading>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
        <Body style={{ fontSize: 28, lineHeight: 1.7 }}>
          За хитросплетением сюжета в стиле Гая Ричи кроется драма,
          затрагивающая вопросы отцов и детей, ответственности, взросления,
          и влияния общественных стереотипов на наши действия.
          <br /><br />
          Ассоциальная криминальная курьер становится лучшим родителем для
          незнакомой девочки, чем родной отец — для своего сына, которого
          буквально убивает своим неприятием.
        </Body>
        <div>
          <div style={{
            fontFamily: FONTS.section, fontSize: 18, letterSpacing: '0.35em',
            color: NOIR.accent, textTransform: 'uppercase', marginBottom: 20,
          }}>Ключевой конфликт</div>
          <div style={{
            fontFamily: FONTS.accent, fontStyle: 'italic',
            fontSize: 36, lineHeight: 1.45, color: NOIR.ink,
            borderLeft: `2px solid ${NOIR.accent}`, paddingLeft: 30,
            marginBottom: 40,
          }}>
            Молодые люди, жаждущие успеха, бездумно поддаются чужим стереотипам,
            губят свои жизни с хорошими побуждениями — максимально отдаляясь от того,
            ради чего всё затевалось.
          </div>
          <div style={{ height: 240, position: 'relative' }}>
            <CineImage src="../../assets/ref-peaky-thomas.png" filter="warm" />
          </div>
        </div>
      </div>
    </NoirFrame>
  );
}

Object.assign(window, { S01_Title, S02_Epigraph, S03_Format, S04_Logline, S05_CoreIdea });

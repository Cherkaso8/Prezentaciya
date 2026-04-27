// V1 — Плёнка-нуар. Design tokens + shared slide components.
// Typography: Cinzel (titles, Peaky-style), Oswald (headings),
// Special Elite (body, typewriter), Cormorant (accent serif).

const NOIR = {
  bg:        '#0f0d0b',
  bgLight:   '#1a1614',
  ink:       '#e8e0d4',
  inkDim:    'rgba(232, 224, 212, 0.58)',
  inkFaint:  'rgba(232, 224, 212, 0.3)',
  rule:      'rgba(232, 224, 212, 0.18)',
  accent:    '#b84a2b',    // ржавый, в духе пятен плёнки
  accentDim: 'rgba(184, 74, 43, 0.7)',
};

const TYPE = {
  display:   'title: 140,   section: 96,  number: 220',
  title:     128,
  section:   88,
  h1:        64,
  h2:        44,
  h3:        32,
  body:      26,
  bodyLg:    30,
  small:     20,
  caption:   18,
  logoMain:  180,   // «ИНТЕРФЕРЕНЦИЯ» на титуле
};

const SPACE = {
  frameX:    140,
  frameTop:  110,
  frameBot:  110,
  gap:       56,
  itemGap:   28,
};

const FONTS = {
  logo:    `'Cinzel', 'Trajan Pro', Georgia, serif`,
  section: `'Oswald', 'Helvetica Neue', sans-serif`,
  body:    `'Special Elite', 'Courier Prime', ui-monospace, monospace`,
  accent:  `'Cormorant Garamond', Georgia, serif`,
};

// ── Film strip perforation edges ─────────────────────────────
function FilmEdge({ side = 'left' }) {
  const holes = Array.from({ length: 14 });
  return (
    <div style={{
      position: 'absolute', top: 0, bottom: 0, [side]: 0,
      width: 54,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-around',
      padding: '28px 0',
      background: 'rgba(0,0,0,0.35)',
      borderRight: side === 'left' ? `1px solid ${NOIR.rule}` : 'none',
      borderLeft:  side === 'right' ? `1px solid ${NOIR.rule}` : 'none',
      zIndex: 3, pointerEvents: 'none',
    }}>
      {holes.map((_, i) => (
        <div key={i} style={{
          width: 26, height: 34, borderRadius: 4,
          background: '#050403',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)',
        }} />
      ))}
    </div>
  );
}

// ── Grain + vignette layer ────────────────────────────────────
function GrainLayer({ opacity = 0.22 }) {
  return (
    <>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        opacity,
        mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)',
      }} />
    </>
  );
}

// ── Slide frame: dark grungy bg + perforations + content well ─
function NoirFrame({ children, variant = 'default', bg }) {
  const isSection = variant === 'section';
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: bg || `
        radial-gradient(ellipse at 30% 20%, rgba(60,45,32,0.25) 0%, transparent 55%),
        linear-gradient(180deg, #18130f 0%, #0a0806 100%)
      `,
      color: NOIR.ink,
      fontFamily: FONTS.body,
      overflow: 'hidden',
    }}>
      {/* concrete texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.35, zIndex: 1, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='c'><feTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' seed='7'/><feColorMatrix values='0 0 0 0 0.05  0 0 0 0 0.04  0 0 0 0 0.03  0 0 0 1.3 0'/></filter><rect width='100%25' height='100%25' filter='url(%23c)'/></svg>")`,
        mixBlendMode: 'normal',
      }} />
      <FilmEdge side="left" />
      <FilmEdge side="right" />
      <div style={{
        position: 'absolute',
        top: isSection ? 0 : SPACE.frameTop,
        bottom: isSection ? 0 : SPACE.frameBot,
        left: 54 + (isSection ? 0 : SPACE.frameX - 54),
        right: 54 + (isSection ? 0 : SPACE.frameX - 54),
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {children}
      </div>
      <GrainLayer />
    </div>
  );
}

// ── Placeholder for missing imagery ────────────────────────────
function Placeholder({ label, w, h, style }) {
  return (
    <div style={{
      width: w, height: h,
      display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      background: `
        repeating-linear-gradient(135deg,
          rgba(255,255,255,0.02) 0 10px,
          rgba(255,255,255,0.05) 10px 20px),
        #1a1614`,
      border: `1px solid ${NOIR.rule}`,
      color: NOIR.inkFaint,
      fontFamily: FONTS.body,
      fontSize: 13,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: 20,
      ...style,
    }}>
      <div>
        <div style={{ fontSize: 11, opacity: 0.6, marginBottom: 6 }}>[ PLACEHOLDER ]</div>
        <div>{label}</div>
      </div>
    </div>
  );
}

// ── Image with sepia/desat treatment ───────────────────────────
function CineImage({ src, alt, style, fit = 'cover', filter = 'default' }) {
  const filters = {
    default: 'saturate(0.55) contrast(1.08) brightness(0.88)',
    warm:    'saturate(0.65) contrast(1.1) brightness(0.85) sepia(0.12)',
    cool:    'saturate(0.4) contrast(1.1) brightness(0.8) hue-rotate(-6deg)',
    mono:    'grayscale(0.85) contrast(1.12) brightness(0.9)',
    none:    'none',
  };
  return (
    <img src={src} alt={alt || ''}
      style={{
        width: '100%', height: '100%',
        objectFit: fit,
        filter: filters[filter] || filters.default,
        display: 'block',
        ...style,
      }} />
  );
}

// ── Section header (big title on dark) ─────────────────────────
function SectionTitle({ children, bgImage, overline, kicker }) {
  return (
    <NoirFrame variant="section">
      {bgImage && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <CineImage src={bgImage} filter="mono" style={{ opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(8,6,4,0.7) 0%, rgba(8,6,4,0.55) 50%, rgba(8,6,4,0.85) 100%)' }} />
        </div>
      )}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 5,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: `${SPACE.frameTop}px ${SPACE.frameX}px`,
      }}>
        {overline && (
          <div style={{
            fontFamily: FONTS.body,
            fontSize: TYPE.caption,
            letterSpacing: '0.5em',
            color: NOIR.inkDim,
            marginBottom: 40,
            textTransform: 'uppercase',
          }}>{overline}</div>
        )}
        <h1 style={{
          fontFamily: FONTS.section,
          fontWeight: 600,
          fontSize: TYPE.section,
          letterSpacing: '0.28em',
          color: NOIR.ink,
          textTransform: 'uppercase',
          margin: 0,
          textAlign: 'center',
          textShadow: '0 2px 18px rgba(0,0,0,0.6)',
        }}>{children}</h1>
        {kicker && (
          <div style={{
            fontFamily: FONTS.accent,
            fontStyle: 'italic',
            fontSize: TYPE.h3,
            color: NOIR.inkDim,
            marginTop: 44,
            textAlign: 'center',
            maxWidth: 900,
          }}>{kicker}</div>
        )}
      </div>
    </NoirFrame>
  );
}

// ── Body slide title ───────────────────────────────────────────
function SlideHeading({ children, align = 'center' }) {
  return (
    <h2 style={{
      fontFamily: FONTS.section,
      fontWeight: 500,
      fontSize: TYPE.h1,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: NOIR.ink,
      textAlign: align,
      margin: 0,
      paddingBottom: 28,
      borderBottom: `1px solid ${NOIR.rule}`,
      marginBottom: 44,
    }}>{children}</h2>
  );
}

// ── Two columns: text + image ──────────────────────────────────
function Body({ children, style, maxWidth = 780 }) {
  return (
    <div style={{
      fontFamily: FONTS.body,
      fontSize: TYPE.body,
      lineHeight: 1.7,
      color: NOIR.ink,
      maxWidth,
      textWrap: 'pretty',
      ...style,
    }}>{children}</div>
  );
}

// ── Character card ─────────────────────────────────────────────
function CharCard({ name, age, role, bio, wants, img, imgLabel, imgFilter = 'default', imgFit = 'cover' }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 40,
      alignItems: 'start',
      paddingBottom: 32,
      borderBottom: `1px solid ${NOIR.rule}`,
      marginBottom: 32,
    }}>
      <div style={{ width: 380, height: 440, position: 'relative', background: '#0a0806' }}>
        {img ? (
          <CineImage src={img} filter={imgFilter} fit={imgFit} />
        ) : (
          <Placeholder label={imgLabel || name} w="100%" h="100%" />
        )}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '40px 16px 14px',
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)',
          fontFamily: FONTS.section,
          fontSize: 22,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: NOIR.ink,
          textAlign: 'center',
        }}>{name}</div>
      </div>
      <div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 18, color: NOIR.accent,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          {age} · {role}
        </div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 22, lineHeight: 1.65,
          color: NOIR.ink, marginBottom: 20,
        }}>{bio}</div>
        {wants && (
          <div style={{
            fontFamily: FONTS.accent, fontStyle: 'italic',
            fontSize: 24, lineHeight: 1.5,
            color: NOIR.inkDim,
            borderLeft: `2px solid ${NOIR.accent}`,
            paddingLeft: 18,
          }}>
            <span style={{ fontFamily: FONTS.section, fontStyle: 'normal', fontSize: 16, letterSpacing: '0.25em', color: NOIR.accent, textTransform: 'uppercase', marginRight: 12 }}>ХОЧЕТ</span>
            {wants}
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, {
  NOIR, TYPE, SPACE, FONTS,
  NoirFrame, SectionTitle, SlideHeading, Body, CharCard,
  CineImage, Placeholder, FilmEdge, GrainLayer,
});

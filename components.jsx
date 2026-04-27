// V3 — Киноплакатный. Плакат в духе Saul Bass / Тарантино / Rocknrolla.
// Жирные сплошные цвета, огромная типографика, «штампованные» формы.
// Палитра: выжженная охра, кровавый красный, угольный, кремовый.

const POS = {
  bg: '#ead6a3', // пергамент / выцветшая охра
  bgAlt: '#d8bf82',
  ink: '#1c1a18',
  inkDim: 'rgba(28, 26, 24, 0.7)',
  accent: '#c7361f', // kino-red
  accent2: '#1c1a18',
  cream: '#f3e9cb',
  yellow: '#ffcc00' // «курьерский» жёлтый — только для слайда «Мир курьеров»
};

const POS_FONTS = {
  // импакт-заголовки — очень жирный конденс
  slab: `'Oswald', 'Bebas Neue', Impact, sans-serif`,
  display: `'Abril Fatface', 'Playfair Display', Georgia, serif`,
  body: `'DM Sans', 'Helvetica Neue', sans-serif`,
  mono: `'Space Mono', ui-monospace, monospace`
};

// ── Frame ─────────────────────────────────────────────────────
function PosFrame({ children, bg, ink, pad = 90, style }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: bg || POS.bg,
      color: ink || POS.ink,
      fontFamily: POS_FONTS.body,
      overflow: 'hidden',
      padding: pad,
      display: 'flex', flexDirection: 'column',
      ...style
    }}>
      {/* paper grain */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: 0.18, mixBlendMode: 'multiply',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.08  0 0 0 0 0.06  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>")`
      }} />
      {children}
    </div>);

}

// ── Page meta (top runner) ────────────────────────────────────
function PosMeta({ index, total, section, dark = false }) {
  const color = dark ? 'rgba(243,233,203,0.75)' : POS.ink;
  return (
    <div style={{
      position: 'absolute', top: 36, left: 90, right: 90,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: POS_FONTS.slab,
      fontSize: 15, letterSpacing: '0.35em',
      textTransform: 'uppercase', fontWeight: 500,
      color, zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 10, height: 10, background: POS.accent, borderRadius: 0 }} />
        Интерференция
      </div>
      <div>{section}</div>
      <div style={{ fontVariantNumeric: 'tabular-nums' }}>
        № {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>);

}

// ── Big stamp title (SUPER impact) ────────────────────────────
function PosHead({ children, kicker, align = 'left', color = POS.ink, accentColor = POS.accent, size = 140 }) {
  return (
    <div style={{ textAlign: align, marginBottom: 30 }}>
      {kicker &&
      <div style={{
        fontFamily: POS_FONTS.slab,
        fontSize: 16, letterSpacing: '0.5em',
        textTransform: 'uppercase', fontWeight: 500,
        color: accentColor, marginBottom: 18
      }}>{kicker}</div>
      }
      <h1 style={{
        fontFamily: POS_FONTS.slab,
        fontWeight: 700,
        fontSize: size, lineHeight: 0.88,
        letterSpacing: '-0.005em',
        textTransform: 'uppercase',
        color,
        margin: 0,
        textWrap: 'balance'
      }}>{children}</h1>
    </div>);

}

function PosBody({ children, size = 22, style, color }) {
  return (
    <div style={{
      fontFamily: POS_FONTS.body,
      fontSize: size, lineHeight: 1.55, fontWeight: 400,
      color: color || POS.ink,
      textWrap: 'pretty',
      ...style
    }}>{children}</div>);

}

// ── Big numeral (for chapter numbers) ─────────────────────────
function PosNum({ children, color = POS.accent, size = 280 }) {
  return (
    <div style={{
      fontFamily: POS_FONTS.slab,
      fontWeight: 700, fontSize: size,
      lineHeight: 0.8, color,
      letterSpacing: '-0.02em'
    }}>{children}</div>);

}

// ── Image with duotone-ish crush ──────────────────────────────
function PosImage({ src, alt, style, filter = 'crush', fit = 'cover' }) {
  const filters = {
    crush: 'saturate(0.5) contrast(1.2) brightness(0.85) sepia(0.12)',
    hot: 'saturate(0.8) contrast(1.25) brightness(0.9) sepia(0.25) hue-rotate(-5deg)',
    red: 'saturate(0.4) contrast(1.3) brightness(0.85) sepia(0.4) hue-rotate(-25deg)',
    mono: 'grayscale(0.85) contrast(1.25) brightness(0.95) sepia(0.15)',
    none: 'none'
  };
  return (
    <img src={src} alt={alt || ''} style={{
      width: '100%', height: '100%', objectFit: fit,
      filter: filters[filter] || filters.crush,
      display: 'block', ...style
    }} />);

}

// ── Placeholder ───────────────────────────────────────────────
function PosPlaceholder({ label, style }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: POS.bgAlt,
      border: `3px solid ${POS.ink}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: POS_FONTS.slab,
      fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase',
      color: POS.ink, padding: 20,
      ...style, textAlign: "center"
    }}>
      <div>
        <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 6 }}>[ PLACEHOLDER ]</div>
        <div>{label}</div>
      </div>
    </div>);

}

// ── Red stamp (for "presents", "chapter", etc.) ───────────────
function PosStamp({ children, rot = -3, color = POS.accent, bg = POS.cream }) {
  return (
    <div style={{
      display: 'inline-block',
      padding: '14px 26px 12px',
      background: bg,
      color,
      border: `3px solid ${color}`,
      fontFamily: POS_FONTS.slab, fontWeight: 700,
      fontSize: 22, letterSpacing: '0.35em',
      textTransform: 'uppercase',
      transform: `rotate(${rot}deg)`
    }}>{children}</div>);

}

Object.assign(window, {
  POS, POS_FONTS,
  PosFrame, PosMeta, PosHead, PosBody, PosNum,
  PosImage, PosPlaceholder, PosStamp
});
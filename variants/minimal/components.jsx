// V2 — Минимализм. Редакционная вёрстка, как у артбука.
// Типографика: Fraunces (display), Inter (body).
// Грид: 12 колонок, много воздуха, тонкие линии.

const MIN = {
  bg:       '#f4f1ec',     // тёплый не-белый, как бумага
  bgAlt:    '#ebe7e0',
  ink:      '#14110d',
  inkDim:   'rgba(20, 17, 13, 0.55)',
  inkFaint: 'rgba(20, 17, 13, 0.28)',
  rule:     'rgba(20, 17, 13, 0.14)',
  accent:   '#c8381e',      // кинематографичный красный
};

const MIN_FONTS = {
  display: `'Fraunces', 'Times New Roman', Georgia, serif`,
  body:    `'Inter', -apple-system, 'Helvetica Neue', sans-serif`,
  mono:    `'JetBrains Mono', ui-monospace, monospace`,
};

// ── Frame ─────────────────────────────────────────────────────
function MinFrame({ children, pad = 110, bg, dark = false }) {
  const bgColor = bg || (dark ? MIN.ink : MIN.bg);
  const textColor = dark ? MIN.bg : MIN.ink;
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: bgColor,
      color: textColor,
      fontFamily: MIN_FONTS.body,
      padding: pad,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

// ── Page header (tiny, consistent, top of every slide) ────────
function MinChrome({ index, total, section, dark = false }) {
  const c = dark ? 'rgba(244,241,236,0.6)' : MIN.inkDim;
  return (
    <div style={{
      position: 'absolute', top: 44, left: 110, right: 110,
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      fontFamily: MIN_FONTS.body,
      fontSize: 13,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: c,
    }}>
      <div>Интерференция <span style={{ color: dark ? 'rgba(244,241,236,0.3)' : MIN.inkFaint, margin: '0 10px' }}>·</span> питч</div>
      <div>{section}</div>
      <div style={{ fontVariantNumeric: 'tabular-nums' }}>
        <span style={{ color: dark ? MIN.bg : MIN.ink }}>{String(index).padStart(2, '0')}</span>
        <span style={{ opacity: 0.5, margin: '0 4px' }}>/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

// ── Big display title (editorial, left-aligned) ───────────────
function MinTitle({ children, kicker, dark = false, size = 96 }) {
  return (
    <div style={{ marginBottom: 60 }}>
      {kicker && (
        <div style={{
          fontFamily: MIN_FONTS.body,
          fontSize: 13, letterSpacing: '0.4em',
          color: dark ? 'rgba(244,241,236,0.6)' : MIN.accent,
          textTransform: 'uppercase',
          marginBottom: 28,
        }}>{kicker}</div>
      )}
      <h1 style={{
        fontFamily: MIN_FONTS.display,
        fontWeight: 300,
        fontStyle: 'italic',
        fontSize: size,
        lineHeight: 0.98,
        letterSpacing: '-0.02em',
        color: dark ? MIN.bg : MIN.ink,
        margin: 0,
        textWrap: 'balance',
      }}>{children}</h1>
    </div>
  );
}

// ── Body text ─────────────────────────────────────────────────
function MinBody({ children, size = 22, style, dark = false }) {
  return (
    <div style={{
      fontFamily: MIN_FONTS.body,
      fontWeight: 400,
      fontSize: size,
      lineHeight: 1.55,
      color: dark ? 'rgba(244,241,236,0.88)' : MIN.ink,
      textWrap: 'pretty',
      ...style,
    }}>{children}</div>
  );
}

// ── Small meta label ──────────────────────────────────────────
function MinLabel({ children, dark = false }) {
  return (
    <div style={{
      fontFamily: MIN_FONTS.body,
      fontSize: 12,
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(244,241,236,0.55)' : MIN.inkDim,
      marginBottom: 14,
    }}>{children}</div>
  );
}

// ── Image treatment (duotone-ish, desaturated) ────────────────
function MinImage({ src, alt, style, fit = 'cover' }) {
  return (
    <img src={src} alt={alt || ''} style={{
      width: '100%', height: '100%',
      objectFit: fit,
      filter: 'saturate(0.55) contrast(1.03)',
      display: 'block',
      ...style,
    }} />
  );
}

// ── Placeholder ───────────────────────────────────────────────
function MinPlaceholder({ label, style }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: MIN.bgAlt,
      border: `1px dashed ${MIN.inkFaint}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: MIN_FONTS.body, fontSize: 12,
      letterSpacing: '0.25em', textTransform: 'uppercase',
      color: MIN.inkDim,
      padding: 24, textAlign: 'center',
      ...style,
    }}>
      <div>
        <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 6 }}>[ PLACEHOLDER ]</div>
        <div>{label}</div>
      </div>
    </div>
  );
}

// ── Horizontal rule with accent ───────────────────────────────
function MinRule({ dark = false }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      margin: '20px 0',
    }}>
      <div style={{ width: 40, height: 2, background: MIN.accent }} />
      <div style={{ flex: 1, height: 1, background: dark ? 'rgba(244,241,236,0.2)' : MIN.rule }} />
    </div>
  );
}

Object.assign(window, {
  MIN, MIN_FONTS,
  MinFrame, MinChrome, MinTitle, MinBody, MinLabel,
  MinImage, MinPlaceholder, MinRule,
});

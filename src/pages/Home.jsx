import { Link } from 'react-router-dom'

function GeometricPhoto() {
  return (
    <div className="geo-photo-wrap fade-up fade-up-2">
      {/* Concentric arcs — the geometric signature */}
      <svg
        className="geo-circles"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="250" cy="250" r="234" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="250" r="192" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="250" r="108" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Dot grid accents */}
      <div className="geo-dots geo-dots--br" aria-hidden="true" />
      <div className="geo-dots geo-dots--tl" aria-hidden="true" />

      {/* Profile photo */}
      <img
        src="/assets/images/martin.png"
        alt="Martín Durán"
        className="geo-photo-img"
      />
    </div>
  )
}

const companies = [
  { name: 'Uber',               logo: 'https://logo.clearbit.com/uber.com' },
  { name: 'Holafly',            logo: 'https://logo.clearbit.com/holafly.com' },
  { name: 'HubSpot',            logo: 'https://logo.clearbit.com/hubspot.com' },
  { name: 'Johnson & Johnson',  logo: 'https://logo.clearbit.com/jnj.com' },
]

export default function Home() {
  return (
    <div>

      {/* ── Hero — 2-col: text + geometric photo ── */}
      <div className="home-hero-grid">

        {/* Text column */}
        <div className="fade-up fade-up-1">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-nav)',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              margin: '0 0 1.25rem 0',
            }}
          >
            KB Product Lead, Uber · ex-HubSpot
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 7.5vw, 68px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              color: 'var(--color-foreground)',
              margin: '0 0 1.5rem 0',
            }}
          >
            Martín<br />Durán
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.9vw, 17px)',
              lineHeight: 1.65,
              letterSpacing: 'var(--tracking-body)',
              color: 'var(--color-primary)',
              margin: '0 0 2.5rem 0',
              maxWidth: '360px',
            }}
          >
            From demand generation to product — with a decade in organic search connecting the two.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn btn-primary">
              About me <span aria-hidden="true">→</span>
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Photo + geometry */}
        <GeometricPhoto />

      </div>

      {/* ── Narrative bio ── */}
      <p
        className="fade-up fade-up-3"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(16px, 2.2vw, 19px)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: 'var(--tracking-body)',
          color: 'var(--color-foreground)',
          margin: 'clamp(2.5rem, 5vw, 4rem) 0 0',
        }}
      >
        My career follows a logic that only makes sense in reverse: finance
        taught me systems, marketing taught me people, and product gave me the
        tools to build for both. These days I lead the Knowledge Base product
        at Uber, where 44,000 support agents rely on search to do their jobs.
      </p>

      {/* ── Companies logo strip ── */}
      <div className="companies-section fade-up fade-up-4">
        <p className="companies-label">Some of the companies I've worked for</p>
        <div className="companies-strip">
          {companies.map(({ name, logo }) => (
            <img
              key={name}
              src={logo}
              alt={name}
              className="company-logo"
            />
          ))}
        </div>
      </div>

    </div>
  )
}

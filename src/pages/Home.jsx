import { Link } from 'react-router-dom'
import DiamondSeparator from '../components/DiamondSeparator'

export default function Home() {
  return (
    <div className="prose" style={{ textAlign: 'center', paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: 'clamp(2rem, 5vw, 4rem)' }}>

      {/* ── Name — STIX Two Text italic: the typographic statement ── */}
      <h1
        className="fade-up fade-up-1"
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(44px, 10vw, 72px)',
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: 'var(--color-foreground)',
          margin: '0 0 1.25rem 0',
        }}
      >
        Martín Durán
      </h1>

      {/* ── Tagline ── */}
      <p
        className="fade-up fade-up-2"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(14px, 2vw, 16px)',
          letterSpacing: 'var(--tracking-body)',
          lineHeight: 1.55,
          color: 'var(--color-primary)',
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '0.5rem',
        }}
      >
        From demand generation to product — with a decade in organic search connecting the two.
      </p>

      {/* ── Current role ── */}
      <p
        className="fade-up fade-up-3"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: 'var(--tracking-nav)',
          textTransform: 'uppercase',
          color: 'var(--color-secondary)',
          margin: 0,
        }}
      >
        KB Product Lead, Uber · ex-HubSpot
      </p>

      {/* ── Diamond separator ── */}
      <div className="fade-up fade-up-4">
        <DiamondSeparator />
      </div>

      {/* ── Bio paragraph — STIX Two Text for the literary feel ── */}
      <p
        className="fade-up fade-up-5"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 400,
          fontSize: 'clamp(16px, 2.2vw, 19px)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: '0',
          color: 'var(--color-foreground)',
          textAlign: 'left',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2.5rem',
        }}
      >
        My career follows a logic that only makes sense in reverse: finance
        taught me systems, marketing taught me people, and product gave me the
        tools to build for both. These days I lead the Knowledge Base product
        at Uber, where 44,000 support agents rely on search to do their jobs.
      </p>

      {/* ── CTAs ── */}
      <div
        className="fade-up fade-up-5"
        style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Link to="/about" className="btn btn-primary">
          About me <span aria-hidden="true">→</span>
        </Link>
        <Link to="/projects" className="btn btn-secondary">
          Projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}

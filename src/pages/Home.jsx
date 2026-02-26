import { Link } from 'react-router-dom'
import DiamondSeparator from '../components/DiamondSeparator'

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1
        className="font-sans font-bold m-0"
        style={{
          fontSize: 'clamp(36px, 8vw, 54px)',
          letterSpacing: 'var(--tracking-heading)',
          lineHeight: 'var(--leading-heading)',
          color: 'var(--color-foreground)',
        }}
      >
        Martín Durán
      </h1>

      <p
        className="font-sans font-medium mt-4 mb-0"
        style={{
          fontSize: 'clamp(17px, 2.5vw, 20px)',
          letterSpacing: 'var(--tracking-body)',
          color: 'var(--color-primary)',
        }}
      >
        From demand generation to product — with a decade in organic search connecting the two.
      </p>

      <p
        className="font-sans font-medium mt-2 mb-0 text-sm"
        style={{ letterSpacing: 'var(--tracking-body)', color: 'var(--color-primary)' }}
      >
        KB Product Lead at Uber · ex-HubSpot
      </p>

      <DiamondSeparator className="my-10" />

      <p
        className="font-serif font-normal text-left mx-auto"
        style={{
          fontSize: 'clamp(16px, 2vw, 18px)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: '0',
          maxWidth: '520px',
          color: 'var(--color-foreground)',
        }}
      >
        My career follows a logic that only makes sense in reverse: finance
        taught me systems, marketing taught me people, and product gave me the
        tools to build for both. These days I lead the Knowledge Base product
        at Uber, where 44,000 support agents rely on search to do their jobs.
      </p>

      <div className="flex gap-4 justify-center mt-10">
        <Link
          to="/about"
          className="inline-block font-sans font-semibold text-sm no-underline transition-opacity hover:opacity-75"
          style={{
            backgroundColor: 'var(--color-foreground)',
            color: 'var(--color-background)',
            padding: '0.75rem 1.5rem',
            letterSpacing: 'var(--tracking-body)',
          }}
        >
          About me
        </Link>
        <Link
          to="/projects"
          className="inline-block font-sans font-semibold text-sm no-underline transition-colors"
          style={{
            border: '1px solid var(--color-foreground)',
            color: 'var(--color-foreground)',
            padding: '0.75rem 1.5rem',
            letterSpacing: 'var(--tracking-body)',
          }}
        >
          Projects
        </Link>
      </div>
    </div>
  )
}

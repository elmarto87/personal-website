import DiamondSeparator from '../components/DiamondSeparator'

export default function ToolStack() {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: 'clamp(28px, 5vw, 40px)',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          color: 'var(--color-foreground)',
          margin: '0 0 0.75rem 0',
        }}
      >
        Tool Stack
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(15px, 1.9vw, 17px)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: 'var(--tracking-body)',
          color: 'var(--color-primary)',
          margin: 0,
        }}
      >
        The software, services, and workflows I rely on every day.
      </p>

      <div className="prose">
        <DiamondSeparator />
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(13px, 1.6vw, 14px)',
            fontWeight: 400,
            color: 'var(--color-secondary)',
            letterSpacing: 'var(--tracking-body)',
            margin: 0,
          }}
        >
          Coming soon.
        </p>
      </div>
    </div>
  )
}

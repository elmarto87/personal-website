export default function Footer() {
  return (
    <footer
      style={{
        padding: '2.5rem var(--gutter) 3rem',
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--wide-width)',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderTop: '1px solid var(--color-secondary)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: 'var(--tracking-nav)',
            textTransform: 'uppercase',
            color: 'var(--color-secondary)',
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Martín Durán
        </p>

        <nav>
          <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { href: 'https://www.linkedin.com/in/martinduranm', label: 'LinkedIn' },
              { href: 'mailto:martinduranm2@gmail.com', label: 'Email' },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: 'var(--tracking-nav)',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    transition: 'color var(--duration-fast) ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-foreground)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-primary)'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

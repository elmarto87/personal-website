import { Link, NavLink } from 'react-router-dom'

/* Geometric logomark — concentric circles motif */
function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-label="Martín Durán — home"
    >
      <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="14" cy="14" r="7"    stroke="currentColor" strokeWidth="1.25" />
      <circle cx="14" cy="14" r="2.5"  fill="currentColor" />
    </svg>
  )
}

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-background)',
        borderBottom: '1px solid var(--color-secondary)',
        padding: '1.1rem var(--gutter)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--wide-width)',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Geometric logomark — links home */}
        <Link
          to="/"
          style={{
            color: 'var(--color-foreground)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity var(--duration-fast) ease',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.55'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          aria-label="Home"
        >
          <LogoMark />
        </Link>

        {/* Nav */}
        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { to: '/about',    label: 'About' },
              { to: '/projects', label: 'Projects & Missions' },
              { to: '/apps',     label: 'Apps' },
              { to: '/tools',    label: 'Tool Stack' },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '14px',
                    letterSpacing: 'var(--tracking-body)',
                    textDecoration: 'none',
                    color: isActive ? 'var(--color-foreground)' : 'var(--color-primary)',
                    transition: 'color var(--duration-fast) ease',
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

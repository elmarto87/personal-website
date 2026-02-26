import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="px-5 pt-10 pb-0">
      <div
        className="flex items-center justify-between gap-8"
        style={{ maxWidth: 'var(--wide-width)', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Link
          to="/"
          className="font-sans font-medium text-base no-underline hover:underline"
          style={{ color: 'var(--color-foreground)', letterSpacing: 'var(--tracking-body)' }}
        >
          Martín Durán
        </Link>

        <nav>
          <ul className="flex gap-7 list-none m-0 p-0">
            {[
              { to: '/about', label: 'About' },
              { to: '/projects', label: 'Projects' },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className="font-sans font-medium text-sm no-underline hover:underline"
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-foreground)' : 'var(--color-primary)',
                    letterSpacing: 'var(--tracking-body)',
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

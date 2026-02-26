export default function Footer() {
  return (
    <footer className="px-5 pb-12 mt-20">
      <div
        className="flex flex-wrap items-center justify-between gap-4 pt-6"
        style={{
          maxWidth: 'var(--wide-width)',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderTop: '1px solid var(--color-secondary)',
        }}
      >
        <p
          className="font-sans font-medium text-sm m-0"
          style={{ color: 'var(--color-primary)', letterSpacing: 'var(--tracking-body)' }}
        >
          © {new Date().getFullYear()} Martín Durán
        </p>

        <nav>
          <ul className="flex gap-6 list-none m-0 p-0">
            {[
              { href: 'https://www.linkedin.com/in/martinduranm', label: 'LinkedIn' },
              { href: 'mailto:martinduranm2@gmail.com', label: 'Email' },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-sans font-medium text-sm no-underline hover:underline"
                  style={{ color: 'var(--color-primary)' }}
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

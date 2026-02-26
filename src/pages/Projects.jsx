import { Link } from 'react-router-dom'
import DiamondSeparator from '../components/DiamondSeparator'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div>
      <h1
        className="font-sans font-bold mt-0"
        style={{
          fontSize: 'clamp(28px, 5vw, 40px)',
          letterSpacing: 'var(--tracking-heading)',
          lineHeight: 'var(--leading-heading)',
          color: 'var(--color-foreground)',
        }}
      >
        Projects
      </h1>
      <p
        className="font-serif font-normal"
        style={{
          fontSize: 'clamp(15px, 1.8vw, 17px)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: '0',
          color: 'var(--color-primary)',
        }}
      >
        A selection of work, experiments, and side projects.
      </p>

      <DiamondSeparator />

      {projects.length === 0 ? (
        <div className="text-center py-16">
          <p
            className="font-serif font-normal"
            style={{
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              lineHeight: 'var(--leading-body)',
              letterSpacing: '0',
              color: 'var(--color-primary)',
            }}
          >
            Projects are on their way — check back soon.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 font-sans font-medium text-sm no-underline transition-colors hover:underline"
            style={{
              border: '1px solid var(--color-secondary)',
              color: 'var(--color-primary)',
              padding: '0.625rem 1.25rem',
              letterSpacing: 'var(--tracking-body)',
            }}
          >
            Learn about my work →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6"
              style={{ border: '1px solid var(--color-secondary)' }}
            >
              <h2
                className="font-sans font-bold mt-0 mb-2"
                style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  letterSpacing: 'var(--tracking-heading)',
                  lineHeight: 'var(--leading-heading)',
                  color: 'var(--color-foreground)',
                }}
              >
                {project.title}
              </h2>
              <p
                className="font-serif text-sm mb-4"
                style={{ lineHeight: 'var(--leading-body)', letterSpacing: '0', color: 'var(--color-primary)' }}
              >
                {project.description}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold text-sm no-underline hover:underline"
                  style={{ color: 'var(--color-foreground)', letterSpacing: 'var(--tracking-body)' }}
                >
                  View →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

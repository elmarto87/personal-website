import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DiamondSeparator from '../components/DiamondSeparator'
import { projectSections } from '../data/projects'

function SectionHeading({ children }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 'clamp(11px, 1.4vw, 13px)',
        letterSpacing: 'var(--tracking-nav)',
        textTransform: 'uppercase',
        color: 'var(--color-primary)',
        margin: '0 0 0.35rem 0',
      }}
    >
      {children}
    </h2>
  )
}

function ProjectCard({ project }) {
  return (
    <div style={{ borderTop: '1px solid var(--color-secondary)', paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: 'clamp(14px, 1.8vw, 16px)',
          letterSpacing: 'var(--tracking-heading)',
          lineHeight: 'var(--leading-tight)',
          color: 'var(--color-foreground)',
          margin: '0 0 0.4rem 0',
        }}
      >
        {project.title}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(13px, 1.6vw, 15px)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: 'var(--tracking-body)',
          color: 'var(--color-primary)',
          margin: project.url ? '0 0 0.75rem 0' : 0,
        }}
      >
        {project.description}
      </p>
      {project.tags && project.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: project.url ? '0.75rem' : 0 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="skill-chip" style={{ fontSize: '11px', padding: '0.2rem 0.6rem' }}>
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: 'var(--tracking-body)',
            color: 'var(--color-foreground)',
            textDecoration: 'none',
          }}
        >
          View →
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [location.state])

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
        Projects & Missions
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
        A record of meaningful work, across every company I've been part of.
      </p>

      <div className="prose">
        {projectSections.map((section) => (
          <div key={section.id}>
            <DiamondSeparator />

            <div id={section.id}>
              <SectionHeading>{section.company}</SectionHeading>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: 'var(--color-primary)',
                  margin: '0 0 1.5rem 0',
                }}
              >
                {section.period}
              </p>

              {section.projects.length === 0 ? (
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
              ) : (
                <div>
                  {section.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

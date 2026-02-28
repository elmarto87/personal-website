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

function CampaignCard({ campaign }) {
  return (
    <a
      href={campaign.url}
      target="_blank"
      rel="noopener noreferrer"
      className="campaign-card"
    >
      {campaign.thumbnail && (
        <img
          src={campaign.thumbnail}
          alt={campaign.title}
          style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', marginBottom: '1rem' }}
        />
      )}
      <p className="campaign-card-source">Kickstarter</p>
      <p className="campaign-card-title">{campaign.title}</p>
      <p className="campaign-card-subtitle">{campaign.subtitle}</p>
      <p className="campaign-card-status">✓ Successfully funded</p>
    </a>
  )
}

function ExperimentCard({ experiment }) {
  return (
    <div className="experiment-card">
      {experiment.thumbnail && (
        <img
          src={experiment.thumbnail}
          alt=""
          style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
        />
      )}
      <div className="experiment-card-body">
        <p className="experiment-card-label">
          Bias: {experiment.bias} · Lever: {experiment.lever}
        </p>
        <p className="experiment-card-description">{experiment.description}</p>
        <p className="experiment-card-status">✓ Winner</p>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const hasCampaigns = project.campaigns && project.campaigns.length > 0
  const hasExperiments = project.experiments && project.experiments.length > 0
  const hasImages = project.images && project.images.length > 0
  const hasUrl = project.url && !hasCampaigns && !hasExperiments

  return (
    <div style={{ borderTop: '1px solid var(--color-secondary)', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{ display: 'block', width: '100%', marginBottom: '1.25rem', border: '1px solid var(--color-secondary)' }}
        />
      )}

      {hasImages && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', border: '1px solid var(--color-secondary)' }}
            />
          ))}
        </div>
      )}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: 'clamp(15px, 1.8vw, 17px)',
          letterSpacing: 'var(--tracking-heading)',
          lineHeight: 'var(--leading-tight)',
          color: 'var(--color-foreground)',
          margin: '0 0 0.75rem 0',
        }}
      >
        {project.title}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(14px, 1.7vw, 16px)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: 'var(--tracking-body)',
          color: 'var(--color-primary)',
          margin: '0 0 1rem 0',
        }}
      >
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: hasCampaigns ? '1.5rem' : hasUrl ? '1rem' : 0 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="skill-chip" style={{ fontSize: '11px', padding: '0.2rem 0.6rem' }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {hasCampaigns && (
        <div className="campaign-grid">
          {project.campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      )}

      {hasExperiments && (
        <div className="experiment-grid">
          {project.experiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>
      )}

      {hasUrl && (
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

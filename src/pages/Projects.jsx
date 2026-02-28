import { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import DiamondSeparator from '../components/DiamondSeparator'
import { projectSections } from '../data/projects'

/* ── Lightbox ─────────────────────────────── */

function Lightbox({ item, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-panel" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

        {item.thumbnail && (
          <img src={item.thumbnail} alt="" className="lightbox-img" />
        )}

        <div className="lightbox-body">
          {item.label && (
            <p className="lightbox-label">{item.label}</p>
          )}
          {item.title && (
            <p className="lightbox-title">{item.title}</p>
          )}
          <p className="lightbox-description">{item.description}</p>

          {item.metrics && item.metrics.length > 0 && (
            <ul className="lightbox-metrics">
              {item.metrics.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          )}

          {item.status && (
            <p className="lightbox-status">{item.status}</p>
          )}

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="lightbox-link"
            >
              {item.urlLabel ?? 'View →'}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Section heading ──────────────────────── */

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

/* ── Campaign card (Kickstarter) ──────────── */

function CampaignCard({ campaign, onExpand }) {
  return (
    <div
      className="campaign-card"
      onClick={() => onExpand({
        thumbnail: campaign.thumbnail,
        title: campaign.title,
        description: campaign.subtitle,
        status: '✓ Successfully funded',
        url: campaign.url,
        urlLabel: 'View on Kickstarter →',
      })}
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
      <span className="card-expand-hint">Expand ↗</span>
    </div>
  )
}

/* ── Experiment card (CRO A/B tests) ─────── */

function ExperimentCard({ experiment, onExpand }) {
  return (
    <div
      className="experiment-card"
      onClick={() => onExpand({
        thumbnail: experiment.thumbnail,
        label: `Bias: ${experiment.bias} · Lever: ${experiment.lever}`,
        description: experiment.description,
        status: '✓ Winner',
      })}
    >
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
        <span className="card-expand-hint">Expand ↗</span>
      </div>
    </div>
  )
}

/* ── Case study card (Skale clients) ─────── */

function CaseCard({ caseStudy, onExpand }) {
  return (
    <div
      className="experiment-card"
      onClick={() => onExpand({
        thumbnail: caseStudy.thumbnail,
        label: caseStudy.type,
        title: caseStudy.client,
        description: caseStudy.description,
        metrics: caseStudy.metrics,
        status: '✓ Results verified',
        url: caseStudy.url,
        urlLabel: 'View case study →',
      })}
    >
      {caseStudy.thumbnail && (
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.client}
          style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
        />
      )}
      <div className="experiment-card-body">
        <p className="experiment-card-label">{caseStudy.type}</p>
        <p className="case-card-client">{caseStudy.client}</p>
        <p className="experiment-card-description">{caseStudy.description}</p>
        <ul className="case-card-metrics">
          {caseStudy.metrics.slice(0, 2).map((m, i) => <li key={i}>{m}</li>)}
        </ul>
        <p className="experiment-card-status">✓ Results</p>
        <span className="card-expand-hint">Expand ↗</span>
      </div>
    </div>
  )
}

/* ── Project card ─────────────────────────── */

function ProjectCard({ project }) {
  const [lightboxItem, setLightboxItem] = useState(null)
  const closeLightbox = useCallback(() => setLightboxItem(null), [])

  const hasCampaigns  = project.campaigns  && project.campaigns.length  > 0
  const hasExperiments = project.experiments && project.experiments.length > 0
  const hasCases      = project.cases       && project.cases.length       > 0
  const hasUrl        = project.url && !hasCampaigns && !hasExperiments && !hasCases

  return (
    <div style={{ borderTop: '1px solid var(--color-secondary)', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{ display: 'block', width: '100%', marginBottom: '1.25rem', border: '1px solid var(--color-secondary)' }}
        />
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
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
            <CampaignCard key={campaign.id} campaign={campaign} onExpand={setLightboxItem} />
          ))}
        </div>
      )}

      {hasExperiments && (
        <div className="experiment-grid">
          {project.experiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} onExpand={setLightboxItem} />
          ))}
        </div>
      )}

      {hasCases && (
        <div className="experiment-grid">
          {project.cases.map((c) => (
            <CaseCard key={c.id} caseStudy={c} onExpand={setLightboxItem} />
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

      {lightboxItem && <Lightbox item={lightboxItem} onClose={closeLightbox} />}
    </div>
  )
}

/* ── Page ─────────────────────────────────── */

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

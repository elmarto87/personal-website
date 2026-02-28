import { Link } from 'react-router-dom'

function yearRange(startDate, endDate) {
  const sy = startDate.slice(0, 4)
  if (!endDate) return { top: sy, bottom: 'now' }
  const ey = endDate.slice(0, 4)
  if (sy === ey) return { top: sy, bottom: null }
  return { top: sy, bottom: ey }
}

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => {
        const { top, bottom } = yearRange(item.startDate, item.endDate)
        const isCurrent = item.endDate === null

        return (
          <div key={item.id} className="timeline-entry">
            {/* ── Year column ── */}
            <div className="timeline-year-col">
              <span className="timeline-year">
                {top}
                {bottom && (
                  <>
                    <br />
                    <span style={{ color: isCurrent ? 'var(--color-foreground)' : undefined }}>
                      {bottom}
                    </span>
                  </>
                )}
              </span>
            </div>

            {/* ── Vertical rule + dot ── */}
            <div className="timeline-rule-col">
              <div className={`timeline-dot${isCurrent ? ' timeline-dot--current' : ''}`} />
            </div>

            {/* ── Content ── */}
            <div className="timeline-content-col">
              <p className="timeline-title">{item.title}</p>
              <div className="timeline-company-row">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="timeline-company-logo"
                  />
                )}
                <p className="timeline-company">{item.company}</p>
              </div>
              <p className="timeline-period">{item.period}</p>

              {item.bullets && item.bullets.length > 0 && (
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}

              {item.projectsId && (
                <Link
                  to="/projects"
                  state={{ scrollTo: item.projectsId }}
                  className="timeline-projects-link"
                >
                  Projects &amp; missions →
                </Link>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

import DiamondSeparator from '../components/DiamondSeparator'
import Timeline from '../components/Timeline'
import { career } from '../data/career'
import { education } from '../data/education'
import { skills } from '../data/skills'

/* Section heading — shared style */
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
        margin: '0 0 1.5rem 0',
      }}
    >
      {children}
    </h2>
  )
}

export default function About() {
  return (
    <div>

      {/* ── Bio Header — uses full wide-width ── */}
      <div
        style={{
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
          marginBottom: '0',
        }}
        className="bio-grid"
      >
        {/* Profile photo — geometric decoration matching home page */}
        <div className="geo-photo-wrap">
          <svg
            className="geo-circles"
            viewBox="0 0 500 500"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="250" cy="250" r="234" stroke="currentColor" strokeWidth="1" />
            <circle cx="250" cy="250" r="192" stroke="currentColor" strokeWidth="1" />
            <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="1" />
            <circle cx="250" cy="250" r="108" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="geo-dots geo-dots--br" aria-hidden="true" />
          <div className="geo-dots geo-dots--tl" aria-hidden="true" />
          <img
            src="/assets/images/martin.jpg"
            alt="Martín Durán"
            className="geo-photo-img"
          />
        </div>

        {/* Bio text */}
        <div style={{ paddingTop: '0.25rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 40px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--color-foreground)',
              margin: '0 0 0.5rem 0',
            }}
          >
            Martín Durán
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-nav)',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              margin: '0 0 1.75rem 0',
            }}
          >
            KB Product Lead, Uber · ex-HubSpot
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.9vw, 17px)',
              lineHeight: 'var(--leading-body)',
              letterSpacing: 'var(--tracking-body)',
              color: 'var(--color-foreground)',
              margin: '0 0 1.15rem 0',
            }}
          >
            My career doesn't follow a straight line — I studied{' '}
            <strong>accounting and finance</strong> in{' '}
            <strong>Cali, Colombia</strong>, spent a year on a business
            exchange in <strong>Montpellier</strong>, and came back looking
            for work that sat at the edge of data and creativity. I found it
            in digital marketing, and specifically in{' '}
            <strong>SEO</strong>: the discipline where content, technology,
            and user intent meet.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.9vw, 17px)',
              lineHeight: 'var(--leading-body)',
              letterSpacing: 'var(--tracking-body)',
              color: 'var(--color-foreground)',
              margin: 0,
            }}
          >
            Since then I've led organic growth at <strong>HubSpot</strong>{' '}
            across Latin America and Spain, managed SEO and ASO teams at{' '}
            <strong>Holafly</strong>, and now lead the Knowledge Base product
            at <strong>Uber</strong> — a platform used by tens of thousands of
            support agents to find answers and resolve cases. Different
            companies, different scales —{' '}
            <strong>same question: how do you make information findable?</strong>
          </p>
        </div>
      </div>

      {/* ── Skills ── */}
      <div className="prose">
        <DiamondSeparator />
        <SectionHeading>Skills</SectionHeading>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(14px, 1.6vw, 15px)',
            lineHeight: 'var(--leading-body)',
            letterSpacing: 'var(--tracking-body)',
            color: 'var(--color-primary)',
            margin: '0 0 1.5rem 0',
          }}
        >
          A mix of strategic and hands-on, built over a decade of cross-functional work.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {skills.map((skill) => (
            <span key={skill.label} className="skill-chip">
              {skill.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Work timeline ── */}
      <div className="prose">
        <DiamondSeparator />
        <SectionHeading>Work</SectionHeading>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(14px, 1.6vw, 15px)',
            lineHeight: 'var(--leading-body)',
            letterSpacing: 'var(--tracking-body)',
            color: 'var(--color-primary)',
            margin: '0 0 2rem 0',
          }}
        >
          Eight years across startups, agencies, and enterprise. Most recent first.
        </p>

        <Timeline items={career} />
      </div>

      {/* ── Education ── */}
      <div className="prose">
        <DiamondSeparator />
        <SectionHeading>Education</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {education.map((item) => (
            <div key={item.id}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 1.8vw, 15px)',
                  letterSpacing: 'var(--tracking-heading)',
                  lineHeight: 'var(--leading-tight)',
                  color: 'var(--color-foreground)',
                  margin: '0 0 0.2rem 0',
                }}
              >
                {item.institution}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: 'var(--tracking-body)',
                  color: 'var(--color-primary)',
                  margin: '0 0 0.15rem 0',
                }}
              >
                {item.degree ?? item.programs?.join(' · ')} · {item.period}
              </p>
              {item.note && (
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: 'var(--color-primary)',
                    margin: 0,
                  }}
                >
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

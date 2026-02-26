import DiamondSeparator from '../components/DiamondSeparator'
import Timeline from '../components/Timeline'
import { career } from '../data/career'
import { education } from '../data/education'
import { skills } from '../data/skills'

export default function About() {
  return (
    <div>
      {/* ── Bio Header ── */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Photo placeholder — replace src once photo is available */}
        <div className="md:w-1/3 flex-shrink-0">
          <div
            className="w-full rounded-sm"
            style={{
              aspectRatio: '1 / 1',
              backgroundColor: 'var(--color-secondary)',
            }}
          />
        </div>

        <div className="md:w-2/3">
          <h1
            className="font-sans font-bold mt-0 mb-1"
            style={{
              fontSize: 'clamp(24px, 4vw, 32px)',
              letterSpacing: 'var(--tracking-heading)',
              lineHeight: 'var(--leading-heading)',
              color: 'var(--color-foreground)',
            }}
          >
            Martín Durán
          </h1>
          <p
            className="font-sans font-medium text-sm mb-5"
            style={{ color: 'var(--color-primary)', letterSpacing: 'var(--tracking-body)' }}
          >
            KB Product Lead at Uber · ex-HubSpot · Cali, Colombia
          </p>
          <p
            className="font-serif font-normal mt-0"
            style={{
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              lineHeight: 'var(--leading-body)',
              letterSpacing: '0',
              color: 'var(--color-foreground)',
            }}
          >
            My career doesn't follow a straight line — I studied accounting and
            finance in Cali, spent a year on a business exchange in Montpellier,
            and came back looking for work that sat at the edge of data and
            creativity. I found it in digital marketing, and specifically in SEO:
            the discipline where content, technology, and user intent meet.
          </p>
          <p
            className="font-serif font-normal"
            style={{
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              lineHeight: 'var(--leading-body)',
              letterSpacing: '0',
              color: 'var(--color-foreground)',
            }}
          >
            Since then I've led organic growth at HubSpot across Latin America
            and Spain, managed SEO and ASO teams at Holafly, and now lead the
            Knowledge Base product at Uber — a platform used by 44,000 support
            agents to find answers and resolve cases. The through-line starts
            earlier: at SuperDataScience, I ran end-to-end product launches and
            built the email and content campaigns that grew their audience from
            the ground up. Different companies, different scales — same question:
            how do you make information findable?
          </p>
        </div>
      </div>

      <DiamondSeparator />

      {/* ── Skills ── */}
      <div>
        <h2
          className="font-sans font-bold mt-0 mb-5"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            letterSpacing: 'var(--tracking-heading)',
            lineHeight: 'var(--leading-heading)',
          }}
        >
          Skills
        </h2>
        <p
          className="font-serif font-normal mt-0 mb-4"
          style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            lineHeight: 'var(--leading-body)',
            letterSpacing: '0',
            color: 'var(--color-primary)',
          }}
        >
          A mix of strategic and hands-on, built over a decade of cross-functional work.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.label}
              className="font-sans font-medium text-sm px-3 py-1"
              style={{
                border: '1px solid var(--color-secondary)',
                color: 'var(--color-primary)',
                letterSpacing: 'var(--tracking-body)',
              }}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>

      <DiamondSeparator />

      {/* ── Career Timeline ── */}
      <div>
        <h2
          className="font-sans font-bold mt-0 mb-8"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            letterSpacing: 'var(--tracking-heading)',
            lineHeight: 'var(--leading-heading)',
          }}
        >
          Work
        </h2>
        <p
          className="font-serif font-normal mt-0 mb-8"
          style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            lineHeight: 'var(--leading-body)',
            letterSpacing: '0',
            color: 'var(--color-primary)',
          }}
        >
          Eight years across startups, agencies, and enterprise. Most recent first.
        </p>
        <Timeline items={career} />
      </div>

      <DiamondSeparator />

      {/* ── Education ── */}
      <div>
        <h2
          className="font-sans font-bold mt-0 mb-6"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            letterSpacing: 'var(--tracking-heading)',
            lineHeight: 'var(--leading-heading)',
          }}
        >
          Education
        </h2>
        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.id}>
              <p
                className="font-sans font-bold m-0 mb-0.5"
                style={{
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  letterSpacing: 'var(--tracking-heading)',
                  lineHeight: 'var(--leading-heading)',
                  color: 'var(--color-foreground)',
                }}
              >
                {item.institution}
              </p>
              <p
                className="font-sans font-medium text-sm m-0 mb-0.5"
                style={{ color: 'var(--color-primary)', letterSpacing: 'var(--tracking-body)' }}
              >
                {item.degree ?? item.programs?.join(' · ')} · {item.period}
              </p>
              {item.note && (
                <p
                  className="font-serif text-sm italic m-0"
                  style={{ color: 'var(--color-primary)' }}
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

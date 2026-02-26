export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute top-2 bottom-2"
        style={{
          left: '7px',
          width: '1px',
          backgroundColor: 'var(--color-secondary)',
        }}
      />

      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.id} className="flex gap-6 relative">
            {/* Timeline dot */}
            <div className="flex-shrink-0 flex flex-col items-center pt-1.5" style={{ width: '15px' }}>
              <div
                className="rounded-full border-2"
                style={{
                  width: '15px',
                  height: '15px',
                  backgroundColor: item.endDate === null ? 'var(--color-foreground)' : 'var(--color-background)',
                  borderColor: item.endDate === null ? 'var(--color-foreground)' : 'var(--color-secondary)',
                }}
              />
            </div>

            {/* Content */}
            <div className="pb-2 flex-1">
              <p
                className="font-sans font-bold m-0 mb-0.5"
                style={{
                  fontSize: 'clamp(15px, 2vw, 17px)',
                  letterSpacing: 'var(--tracking-heading)',
                  lineHeight: 'var(--leading-heading)',
                  color: 'var(--color-foreground)',
                }}
              >
                {item.title}
              </p>
              <p
                className="font-sans font-semibold text-sm m-0 mb-0.5"
                style={{ color: 'var(--color-primary)', letterSpacing: 'var(--tracking-body)' }}
              >
                {item.company}
              </p>
              <p
                className="font-sans font-medium m-0 mb-3"
                style={{ fontSize: '13px', color: 'var(--color-primary)', letterSpacing: 'var(--tracking-body)' }}
              >
                {item.period}
              </p>

              {item.bullets && item.bullets.length > 0 && (
                <ul className="m-0 pl-4 space-y-1.5">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="font-serif font-normal text-sm"
                      style={{
                        lineHeight: 'var(--leading-body)',
                        letterSpacing: '0',
                        color: 'var(--color-foreground)',
                        opacity: 0.85,
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

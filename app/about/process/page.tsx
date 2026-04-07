import PageHeader from '@/components/PageHeader';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-geist)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
        marginBottom: '20px',
      }}
    >
      {children}
    </div>
  );
}

const steps = [
  {
    n: '01',
    t: 'Intake',
    d: 'We spend time — real time — understanding the role before we touch the market. That means aligning on compensation band, leveling, team context, the hiring manager\'s working style, what success looks like at 30 / 90 / 180 days, and what\'s gotten in the way of past hires. Bad searches start with a bad brief. We don\'t start sourcing until we\'re aligned.',
    duration: '1–2 days',
  },
  {
    n: '02',
    t: 'Market map',
    d: 'Before the first outreach goes out, we build a full picture of the candidate landscape — relevant companies, team structures, title conventions, and comp signals. You see this map. It anchors expectations on both sides and often surfaces candidates you wouldn\'t have thought to pursue.',
    duration: '2–4 days',
  },
  {
    n: '03',
    t: 'Outreach',
    d: 'Every candidate is reached directly and personally. No job posts. No inMails templated from a CRM. Each message is written to the specific person — why this role, why now, why them. Response rates on passive candidates are meaningfully higher when the outreach is real.',
    duration: 'Ongoing from week 1',
  },
  {
    n: '04',
    t: 'Screen',
    d: 'Candidates who express interest go through a structured screen before you see anyone. Technical depth, communication, motivation, compensation alignment, and any flags are all assessed and documented. You don\'t review a resume — you review a brief that includes our recommendation.',
    duration: '1–2 weeks',
  },
  {
    n: '05',
    t: 'Present',
    d: 'We present a shortlist of three to five candidates — not a stack of resumes with forwarding notes. Each presentation includes a written brief with background, our read on fit, interview recommendations, comp expectations, and a clear stance on whether we\'re recommending this person. You decide faster because the work is done.',
    duration: 'Week 2–3',
  },
  {
    n: '06',
    t: 'Close',
    d: 'We stay engaged through the offer stage — not just as messengers. We build offer strategy based on what we\'ve learned about the candidate\'s motivations, handle negotiation, anticipate counter-offers, and run reference checks in parallel. Day-90 check-ins are built in to catch issues before they become exits.',
    duration: '1–3 weeks to offer',
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Process."
        subtitle="How we run a search from kickoff to day 90. Every step has a purpose."
      />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-body)' }}>
          The AurOS process is the same on every search — retained or contingent, IC or leadership.
          Structure is how we deliver consistent results and how clients know exactly where a search
          stands at any given moment.
        </p>
      </section>

      {/* STEPS */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>The six stages</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((s, i) => (
              <div
                key={s.n}
                style={{
                  borderBottom: i < steps.length - 1 ? '1px solid var(--surface-divider)' : 'none',
                  paddingTop: '32px',
                  paddingBottom: '32px',
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '24px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-geist)',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'var(--color-emerald)',
                      letterSpacing: '0.5px',
                      paddingTop: '3px',
                    }}
                  >
                    {s.n}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {s.t}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-geist)',
                        fontSize: '11px',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {s.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-body)' }}>
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

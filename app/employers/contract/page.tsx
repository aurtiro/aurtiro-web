import Link from 'next/link';
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-geist)',
        fontSize: '10px',
        fontWeight: 500,
        borderRadius: '8px',
        padding: '3px 8px',
        color: 'var(--color-emerald)',
        background: 'rgba(77,168,130,0.10)',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Employers"
        title="Contract staffing."
        subtitle="Senior contractors deployed in 48–72 hours. Surge capacity, project work, and critical builds."
      />

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-body)' }}>
          Some problems need hands on keyboards this week. We maintain a bench of vetted senior
          engineers — available quickly, integrated smoothly, and scoped to exactly what you need.
        </p>
      </section>

      {/* USE CASES */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>When it fits</SectionLabel>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                title: 'Surge capacity',
                desc: 'A product deadline moved up, a team lead went out, or hiring is running three months behind. You need senior bandwidth now, not in six weeks.',
                tags: ['Immediate Start', 'Flexible Duration'],
              },
              {
                title: 'Project-scoped work',
                desc: 'Infrastructure migration, security audit, ML prototype, payment system rebuild. Defined scope, defined deliverables — a specialist who owns it.',
                tags: ['Defined Scope', 'Specialist Depth'],
              },
              {
                title: 'Bridge hire',
                desc: 'A permanent search is running but a critical seat is empty. A senior contractor keeps momentum while you close the right long-term hire.',
                tags: ['No Gap', 'Smooth Handoff'],
              },
              {
                title: 'Staff augmentation',
                desc: 'Embedded engineers who work alongside your team in your tools, your sprints, your meetings — indistinguishable from FTEs except on payroll.',
                tags: ['Embedded', 'Team Integrated'],
              },
              {
                title: 'Technical assessment',
                desc: 'A fractional CTO or principal-level engineer for a few weeks to audit your stack, unblock architectural decisions, or evaluate a team.',
                tags: ['Fractional', 'Architecture'],
              },
              {
                title: 'Pre-IPO / M&A prep',
                desc: 'Technical due diligence, documentation, SOC 2 readiness, or platform hardening ahead of a financing round or acquisition.',
                tags: ['Due Diligence', 'Compliance'],
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'var(--surface-card)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-body)', marginBottom: '14px' }}>
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DEPLOY */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>How we deploy</SectionLabel>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: '01', t: 'Scope call', d: 'We define the role, duration, start date, and how success is measured. Usually 30 minutes.' },
              { n: '02', t: 'Match', d: 'We surface two or three candidates from our bench who fit the scope. You meet them, not a resume.' },
              { n: '03', t: 'Deploy', d: 'Contractor starts within 48–72 hours of your go-ahead. W2 or 1099, hourly or weekly.' },
              { n: '04', t: 'Manage', d: 'We stay in contact throughout. If something isn\'t working, we replace without drama.' },
            ].map((s) => (
              <div key={s.n}>
                <div
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--color-emerald)',
                    letterSpacing: '0.5px',
                    marginBottom: '10px',
                  }}
                >
                  {s.n}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {s.t}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-body)' }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>Disciplines on our bench</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {[
              'Backend Engineering',
              'Infrastructure & DevOps',
              'Machine Learning',
              'Data Engineering',
              'Frontend Engineering',
              'Security Engineering',
              'Mobile (iOS / Android)',
              'Platform Engineering',
              'Embedded Systems',
              'Blockchain / Web3',
              'Fractional CTO',
              'Staff / Principal IC',
            ].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-32 text-center">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}
          >
            Tell us what you need.
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '32px' }}>
            Scope call takes 30 minutes. First candidate in front of you within 24 hours.
          </p>
          <Link
            href="/about/contact"
            style={{
              display: 'inline-block',
              background: 'var(--color-emerald)',
              color: '#141514',
              padding: '11px 28px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-geist)',
            }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

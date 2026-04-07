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
        title="Hire engineers."
        subtitle="Direct-hire placements for senior and staff engineering roles. Every candidate is sourced directly, technically vetted, and briefed on your team before introduction."
      />

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-body)' }}>
          We run contingent and retained searches for permanent engineering hires. No job boards,
          no spray-and-pray. Every candidate in front of you has already passed a structured screen
          and been briefed on who you are and what you're building.
        </p>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>Who this is for</SectionLabel>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                title: 'Series A–D startups',
                desc: 'Scaling from 5 to 50 engineers. You need people who can operate in ambiguity, own systems end-to-end, and compound the team\'s output — not someone who needs a roadmap handed to them.',
                tags: ['Staff IC', 'Senior Eng', 'Tech Lead'],
              },
              {
                title: 'Teams replacing a departure',
                desc: 'A senior engineer or manager left and the gap is already visible. Speed matters but so does quality. We run fast without cutting the corners that produce bad hires.',
                tags: ['Urgent', 'Senior Replacement'],
              },
              {
                title: 'New function build-out',
                desc: 'First ML engineer, first infrastructure hire, first security engineer. Rare skills with narrow pipelines — exactly the market where a direct-sourcing approach outperforms any job post.',
                tags: ['ML / AI', 'Infra', 'Security', 'Platform'],
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
                  {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>What you get</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Market map',
                desc: 'Before we source a single candidate, we map the full market — who\'s out there, where they work, what they earn. You see the landscape, not just a shortlist.',
              },
              {
                title: 'Passive-only sourcing',
                desc: 'We reach candidates who aren\'t on the market. That means less competition, higher close rates, and better signal about whether someone is genuinely excited about you.',
              },
              {
                title: 'Technical screens',
                desc: 'We run structured technical assessments before you spend a minute of your team\'s time. You only meet candidates who already passed.',
              },
              {
                title: 'Written candidate briefs',
                desc: 'No forwarded resumes. Each candidate comes with a concise written brief — their background, our read on fit, compensation expectations, and any gaps to probe.',
              },
              {
                title: 'Offer & close support',
                desc: 'We draft offer strategy, handle negotiation, and manage counter-offers. Most hiring managers haven\'t closed a senior hire in 18 months — we do this every week.',
              },
              {
                title: '90-day guarantee',
                desc: 'If the placement doesn\'t work out within 90 days, we restart the search at no additional fee. Full stop.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderTop: '1px solid var(--surface-divider)',
                  paddingTop: '24px',
                }}
              >
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-body)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES WE FILL */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>Roles we fill</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {[
              'Backend Engineer',
              'Staff / Principal Engineer',
              'Infrastructure / DevOps',
              'ML / AI Engineer',
              'Data Engineer',
              'Frontend Engineer',
              'Full-Stack Engineer',
              'Security Engineer',
              'Platform Engineer',
              'Engineering Manager',
              'Director of Engineering',
              'Head of Engineering',
            ].map((t) => <Tag key={t}>{t}</Tag>)}
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
            Tell us who you need.
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '32px' }}>
            A 20-minute intake call is all it takes to get started. We'll tell you what the market
            looks like and whether we can help.
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

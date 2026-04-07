import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

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

const roles = [
  {
    title: 'Staff Backend Engineer',
    company: 'Series B · Fintech',
    location: 'Remote (US)',
    comp: '$280–340K TC',
    tags: ['Go', 'Distributed Systems', 'Payments'],
    desc: 'Core payments infrastructure team. Own the reliability and scalability of a system processing $2B+ annually. Heavy distributed systems work — consensus protocols, event sourcing, real-time settlement. Looking for someone with strong opinions and the scars to back them.',
  },
  {
    title: 'Senior ML Engineer',
    company: 'Series C · Developer Tools',
    location: 'SF or Remote',
    comp: '$260–320K TC',
    tags: ['Python', 'LLM Fine-tuning', 'Inference'],
    desc: 'First ML hire. Building the AI layer on top of a product with strong organic traction. Greenfield — you\'ll design the infra, pick the stack, and own the roadmap. Close collaboration with the CTO. Wants someone who can ship fast and refine, not someone who needs six months to spec.',
  },
  {
    title: 'Principal Infrastructure Engineer',
    company: 'Series D · Healthcare',
    location: 'NYC or Remote',
    comp: '$300–380K TC',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'HIPAA'],
    desc: 'Platform team of four. Owns cloud architecture, IaC, and the internal developer platform. HIPAA environment with real compliance requirements. Looking for an engineer who can balance speed with auditability — and who enjoys building systems other engineers love to use.',
  },
  {
    title: 'Senior Security Engineer',
    company: 'Series B · SaaS',
    location: 'Remote (US)',
    comp: '$240–300K TC',
    tags: ['AppSec', 'SOC 2', 'Threat Modeling'],
    desc: 'First dedicated security hire. Scope includes product security, cloud security posture, and owning the SOC 2 Type II roadmap. Not a pure compliance role — you\'ll be embedded with product teams doing threat modeling and secure design reviews, not just auditing.',
  },
  {
    title: 'Engineering Manager, Data Platform',
    company: 'Series C · AdTech',
    location: 'NYC (Hybrid)',
    comp: '$250–310K TC',
    tags: ['Data Engineering', 'People Management', 'Spark', 'Snowflake'],
    desc: 'Team of six data engineers. Owns the ingestion, transformation, and serving layer that powers the core analytics product. Manager-track role — strong IC background required, now oriented toward growing a team and defining technical direction more than writing code every day.',
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Talent"
        title="Open roles."
        subtitle="A small number of curated engineering roles at companies we know well. We don't post roles we haven't personally vetted."
      />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-body)' }}>
          Most of our searches aren't posted publicly. If you don't see a fit below,{' '}
          <Link
            href="/talent/submit"
            style={{ color: 'var(--color-emerald)', textDecoration: 'none' }}
          >
            submit your profile
          </Link>{' '}
          and we'll reach out when something matches.
        </p>
      </section>

      {/* ROLES */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
          {roles.map((role) => (
            <div
              key={role.title}
              style={{
                background: 'var(--surface-card)',
                borderRadius: '14px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '4px',
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {role.title}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--color-emerald)',
                  }}
                >
                  {role.comp}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '14px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--text-caption)' }}>{role.company}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-caption)' }}>·</span>
                <span style={{ fontSize: '12px', color: 'var(--text-caption)' }}>{role.location}</span>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-body)', marginBottom: '14px' }}>
                {role.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {role.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <div
          style={{
            borderTop: '1px solid var(--surface-divider)',
            paddingTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            Don't see the right role?
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-body)' }}>
            Most of what we work on isn't listed here. Submit your profile and tell us what you're
            looking for — we'll reach out when there's a match.
          </p>
          <div>
            <Link
              href="/talent/submit"
              style={{
                display: 'inline-block',
                background: 'var(--color-emerald)',
                color: '#141514',
                padding: '10px 22px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 600,
                fontFamily: 'var(--font-geist)',
                marginTop: '8px',
              }}
            >
              Submit your profile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

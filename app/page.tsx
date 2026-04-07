import Link from 'next/link';

/* ─── Section label ─────────────────────────────────────────────────── */
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

/* ─── Capability tag ─────────────────────────────────────────────────── */
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

/* ─── AurOS capability card ─────────────────────────────────────────── */
function CapabilityCard({
  label,
  tags,
  description,
}: {
  label: string;
  tags: string[];
  description: string;
}) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        borderRadius: '14px',
        padding: '1.5rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '11px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'var(--color-emerald)',
          marginBottom: '12px',
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontSize: '13.5px',
          lineHeight: '1.65',
          color: 'var(--text-body)',
          marginBottom: '16px',
        }}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

/* ─── Pillar card ────────────────────────────────────────────────────── */
function PillarCard({
  title,
  desc,
  href,
  tags,
}: {
  title: string;
  desc: string;
  href: string;
  tags: string[];
}) {
  return (
    <Link
      href={href}
      className="block group transition-opacity hover:opacity-90"
      style={{
        background: 'linear-gradient(180deg, var(--surface-elevated), var(--surface-card))',
        borderRadius: '14px',
        padding: '1.75rem',
        minHeight: '220px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Emerald top bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40px',
          height: '2px',
          background: 'var(--color-emerald)',
          borderRadius: '0 0 2px 2px',
        }}
      />
      <h3
        style={{
          fontSize: '15px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '10px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '13.5px',
          lineHeight: '1.65',
          color: 'var(--text-body)',
          marginBottom: '20px',
        }}
      >
        {desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </Link>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-28 text-center">
        <div className="mb-6">
          <SectionLabel>Aurtiro</SectionLabel>
        </div>
        <h1
          className="tracking-tight mb-7"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            color: 'var(--text-primary)',
          }}
        >
          Analog white-glove
          <br />
          <span style={{ color: 'var(--text-subtitle)' }}>recruitment.</span>
        </h1>
        <p
          className="max-w-xl mx-auto mb-12"
          style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: 'var(--text-body)',
          }}
        >
          Senior-led technical search for engineering teams. Passive candidates only. No resume blasts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/employers/hire"
            style={{
              display: 'inline-block',
              background: 'var(--color-emerald)',
              color: '#141514',
              padding: '10px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-geist)',
              transition: 'opacity 0.15s',
            }}
          >
            Hire engineers
          </Link>
          <a
            href="#auros"
            style={{
              display: 'inline-block',
              color: 'var(--color-emerald)',
              background: 'rgba(77,168,130,0.08)',
              padding: '10px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'var(--font-geist)',
              transition: 'opacity 0.15s',
            }}
          >
            See how we operate
          </a>
        </div>
      </section>

      {/* AUROS */}
      <section id="auros" className="max-w-7xl mx-auto px-6 pb-28">
        <div
          style={{
            borderTop: '1px solid var(--surface-divider)',
            paddingTop: '64px',
          }}
        >
          <SectionLabel>AurOS</SectionLabel>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                marginBottom: '0',
              }}
            >
              Built on systems.
              <br />
              <span style={{ color: 'var(--text-subtitle)' }}>Led by people.</span>
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--text-body)',
                alignSelf: 'end',
              }}
            >
              Our operating system runs every search. Intake to offer, every touchpoint is structured,
              documented, and accountable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mt-10">
            <CapabilityCard
              label="Intake"
              description="We align on role definition, compensation band, team context, and what great looks like. No assumptions."
              tags={['Role Definition', 'Compensation Mapping', 'Stakeholder Alignment']}
            />
            <CapabilityCard
              label="Source"
              description="We map the full market and reach passive candidates directly. No job boards. No blasts. Every outreach is personalized."
              tags={['Market Mapping', 'Passive Outreach', 'Competitor Analysis']}
            />
            <CapabilityCard
              label="Vet"
              description="Structured technical and behavioral screens run before you see anyone. You only review candidates who already passed."
              tags={['Technical Screen', 'Behavioral Interview', 'Reference Check']}
            />
            <CapabilityCard
              label="Present"
              description="Concise, opinionated candidate briefs. Strengths, gaps, and our recommendation, not just a forwarded resume."
              tags={['Candidate Brief', 'Strength Analysis', 'Recommendation']}
            />
            <CapabilityCard
              label="Close"
              description="Offer strategy, negotiation support, and counter-offer handling. We stay engaged through day 90."
              tags={['Offer Strategy', 'Negotiation Support', 'Day 90 Checkin']}
            />
            <CapabilityCard
              label="Guarantee"
              description="If a placement does not work out within 90 days, we restart the search at no additional fee."
              tags={['90-Day Guarantee', 'Free Restart', 'Full Accountability']}
            />
          </div>
        </div>
      </section>

      {/* SERVICES / PILLARS */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div
          style={{
            borderTop: '1px solid var(--surface-divider)',
            paddingTop: '64px',
          }}
        >
          <SectionLabel>Engagement Models</SectionLabel>
          <h2
            className="mb-10"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'var(--text-primary)',
            }}
          >
            Three ways to work with us.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <PillarCard
              title="Retained Search"
              desc="Executive-level search for CTOs, VPs of Engineering, and heads of AI. Dedicated partner, exclusive engagement."
              href="/employers/retained"
              tags={['CTO', 'VP Engineering', 'Head of AI', 'Dedicated Partner']}
            />
            <PillarCard
              title="Direct Placement"
              desc="Permanent hires across the engineering stack. Vetted, briefed, and warm before you see them. Contingent or retained."
              href="/employers/hire"
              tags={['Permanent Hire', 'Engineering Stack', 'Contingent', 'Retained']}
            />
            <PillarCard
              title="Contract Staffing"
              desc="Senior contractors deployed in 48-72 hours for project work, surge capacity, and critical builds."
              href="/employers/contract"
              tags={['Contract', 'Project Work', 'Surge Capacity', 'Fast Deploy']}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div
          style={{
            borderTop: '1px solid var(--surface-divider)',
            paddingTop: '64px',
          }}
        >
          <SectionLabel>Process</SectionLabel>
          <h2
            className="mb-12"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'var(--text-primary)',
            }}
          >
            A deliberate process.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: '01', t: 'Intake', d: 'We align on role, team, and what great looks like.' },
              { n: '02', t: 'Source', d: 'We map the market and reach passive candidates directly.' },
              { n: '03', t: 'Vet', d: 'Structured technical and behavioral screens before you see anyone.' },
              { n: '04', t: 'Close', d: 'Offer negotiation, references, and engaged through day 90.' },
            ].map((s) => (
              <div key={s.n}>
                <div
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--color-emerald)',
                    letterSpacing: '0.5px',
                  }}
                >
                  {s.n}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
        <div
          style={{
            borderTop: '1px solid var(--surface-divider)',
            paddingTop: '64px',
          }}
        >
          <h2
            className="mb-5"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
            }}
          >
            Start a conversation.
          </h2>
          <p
            className="max-w-md mx-auto mb-10"
            style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body)' }}
          >
            Whether you are hiring or looking, the next step is a real conversation.
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

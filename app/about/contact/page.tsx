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
        marginBottom: '16px',
      }}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Contact."
        subtitle="The start of every engagement is a real conversation. No forms, no funnels."
      />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        {/* Primary contact */}
        <div
          style={{
            background: 'var(--surface-card)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '16px',
          }}
        >
          <SectionLabel>Email</SectionLabel>
          <a
            href="mailto:hello@aurtiro.com"
            className="contact-email-link"
            style={{
              fontSize: '22px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            hello@aurtiro.com
          </a>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-body)' }}>
            We reply within one business day. Include a few lines on what you're working on — whether
            you're hiring, looking, or just exploring.
          </p>
        </div>

        {/* Routing help */}
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {[
            {
              label: 'For employers',
              desc: 'Tell us the role, the team, and what hasn\'t worked in past searches. The more context the better.',
              href: '/employers/hire',
              cta: 'See how we work',
            },
            {
              label: 'For candidates',
              desc: 'A few lines on where you are, what you\'re looking for, and a LinkedIn or resume. That\'s all we need.',
              href: '/talent/submit',
              cta: 'Submit your profile',
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: 'var(--surface-elevated)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '8px',
                }}
              >
                {item.label}
              </div>
              <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--text-body)', marginBottom: '14px' }}>
                {item.desc}
              </p>
              <Link
                href={item.href}
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--color-emerald)',
                  textDecoration: 'none',
                }}
              >
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '40px' }}>
          <SectionLabel>What to expect</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { t: 'One business day reply', d: 'We read every inbound message and reply personally — not with an autoresponder or a calendly link.' },
              { t: 'No commitment required', d: 'The first conversation is exploratory. We\'ll tell you what we\'re seeing in the market and how we\'d approach the search. No pitch deck, no pressure.' },
              { t: 'Straight talk', d: 'If we can\'t help or aren\'t the right fit, we\'ll say so and point you in the right direction.' },
            ].map((item) => (
              <div key={item.t} style={{ display: 'flex', gap: '16px' }}>
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-emerald)',
                    flexShrink: 0,
                    marginTop: '7px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.t}.{' '}
                  </span>
                  <span style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-body)' }}>
                    {item.d}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

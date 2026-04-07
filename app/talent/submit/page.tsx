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
        eyebrow="For Talent"
        title="Submit your profile."
        subtitle="Confidentially share your background. We only introduce you to companies you've approved."
      />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-body)', marginBottom: '40px' }}>
          Most of the engineers we place weren't actively looking. They heard about an opportunity
          through us, learned more, and decided it was worth a conversation. Submitting your profile
          keeps you in that flow — no commitment, no pressure.
        </p>

        {/* How to submit */}
        <div
          style={{
            background: 'var(--surface-card)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '16px',
          }}
        >
          <SectionLabel>How to submit</SectionLabel>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '20px' }}>
            Email{' '}
            <a
              href="mailto:talent@aurtiro.com"
              style={{ color: 'var(--color-emerald)', textDecoration: 'none' }}
            >
              talent@aurtiro.com
            </a>{' '}
            with the following:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Resume or LinkedIn', desc: 'PDF, Word, or a URL — whatever you have.' },
              { label: 'What you\'re looking for', desc: 'Role type, seniority, preferred location or remote stance. Two sentences is fine.' },
              { label: 'Timing', desc: 'Actively looking, passively open, or just curious about the market? We treat all three differently.' },
              { label: 'Compensation target', desc: 'Optional but helpful. Base, total comp, or just a ballpark. We never share this without asking.' },
            ].map((item) => (
              <div
                key={item.label}
                style={{ display: 'flex', gap: '14px' }}
              >
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
                    {item.label}.{' '}
                  </span>
                  <span style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-body)' }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confidentiality */}
        <div
          style={{
            background: 'var(--surface-elevated)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '40px',
          }}
        >
          <SectionLabel>Confidentiality</SectionLabel>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-body)' }}>
            Your profile stays with us. We never share your name, resume, or contact information
            with a company without your explicit approval — for that specific company. We also
            don't contact references until you're at the offer stage and have given us the go-ahead.
          </p>
        </div>

        {/* What happens next */}
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '40px', marginBottom: '40px' }}>
          <SectionLabel>What happens next</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                n: '01',
                t: 'We review and reply',
                d: 'Every submission is read by a senior recruiter. We\'ll reply within one business day — with honest feedback on fit and the market, not a templated acknowledgement.',
              },
              {
                n: '02',
                t: 'Intro call',
                d: 'If there\'s a potential match, we\'ll set up a 20–30 minute call. We\'re learning about what matters to you, not screening you out.',
              },
              {
                n: '03',
                t: 'Active matching',
                d: 'We reach out when a role comes across our desk that fits what you\'re looking for. Nothing irrelevant, no bulk forwards.',
              },
              {
                n: '04',
                t: 'You decide',
                d: 'Every opportunity gets a summary before we connect you to the company. You approve each one. We never move faster than you want to move.',
              },
            ].map((s) => (
              <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: '16px' }}>
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
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {s.t}
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-body)' }}>
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Also see */}
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '32px' }}>
          <p style={{ fontSize: '13.5px', color: 'var(--text-body)' }}>
            Want to see what's currently open?{' '}
            <Link href="/talent/roles" style={{ color: 'var(--color-emerald)', textDecoration: 'none' }}>
              Browse open roles
            </Link>
            {' '}or read our{' '}
            <Link href="/talent/advice" style={{ color: 'var(--color-emerald)', textDecoration: 'none' }}>
              career advice
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

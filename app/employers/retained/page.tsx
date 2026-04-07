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
        title="Retained search."
        subtitle="Exclusive executive search for CTOs, VPs of Engineering, and heads of AI. One partner. One engagement. Done right."
      />

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-body)' }}>
          Retained search is for hires where the cost of a bad decision is measured in years, not
          quarters. We commit fully to the engagement — one partner owns it from kickoff to close,
          no handoffs, no competing priorities.
        </p>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>Who it's for</SectionLabel>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                title: 'First technical hire',
                desc: 'Founding CTO or VP Eng at seed or Series A. This person will define the culture, the stack, and the org for the next five years. Getting it right matters more than moving fast.',
              },
              {
                title: 'Replacing a departure',
                desc: 'CTO or VP exit — planned or not. You need a strong internal story, a confidential search, and a partner who can manage stakeholders while you keep the business running.',
              },
              {
                title: 'New function leader',
                desc: 'Head of AI, VP of Platform, VP of Security. You\'re building a function that didn\'t exist before. The candidate pool is shallow and the compensation is nuanced.',
              },
              {
                title: 'Board-level pressure',
                desc: 'Investors or the board have flagged technical leadership as a gap. The search needs rigor, pace, and reporting — not just a shortlist.',
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
                <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: 'var(--text-body)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>How it works</SectionLabel>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                t: 'Kickoff',
                d: 'Two to three hours with you and key stakeholders. We align on scope, success criteria, compensation philosophy, and what failure looks like. We won\'t start sourcing until we agree on what great looks like.',
              },
              {
                n: '02',
                t: 'Market map',
                d: 'We map every realistic candidate — titles, companies, tenure, comp signals. You see the landscape before we start outreach, not after.',
              },
              {
                n: '03',
                t: 'Outreach',
                d: 'Every candidate is reached directly and personally. No job postings. Outreach reflects your brand — not a form letter from a recruiting firm.',
              },
              {
                n: '04',
                t: 'Screen & brief',
                d: 'Structured technical and leadership interviews before you see anyone. Each candidate comes with a written brief — strengths, gaps, comp expectations, and our recommendation.',
              },
              {
                n: '05',
                t: 'Shortlist',
                d: 'You see three to five candidates. That\'s it. They\'ve all passed the bar. Your time goes into decision-making, not filtering.',
              },
              {
                n: '06',
                t: 'Close',
                d: 'Offer structure, negotiation, counter-offer management. We stay actively engaged through day 90 to protect the placement.',
              },
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

      {/* STRUCTURE */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>Engagement structure</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-body)' }}>
                A portion of the fee is paid at kickoff — which means we're fully aligned from day
                one. We don't run five retained searches at once. We run yours properly.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-body)', marginTop: '16px' }}>
                Fee structure and timeline are scoped in the kickoff conversation. Most retained
                executive searches close within 8–12 weeks from first candidate to signed offer.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 content-start">
              {[
                'Dedicated partner',
                'Exclusive engagement',
                'Market map delivered upfront',
                'Written candidate briefs',
                '90-day placement guarantee',
                'Stakeholder reporting',
                'Offer & negotiation support',
                '3-stage fee structure',
              ].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
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
            Start with a conversation.
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '32px' }}>
            Tell us about the role. We'll tell you what the market looks like and how we'd approach it.
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

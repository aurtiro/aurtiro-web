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

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Team."
        subtitle="Senior recruiters with engineering backgrounds. No junior sourcers. No handoffs."
      />

      {/* PHILOSOPHY */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-body)' }}>
          Every search at Aurtiro is led by a senior recruiter from intake to close — the same
          person who takes your kickoff call reviews every resume, conducts every screen, and
          writes every candidate brief. There's no bait-and-switch, no junior coordinator running
          the day-to-day.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-body)', marginTop: '20px' }}>
          Our recruiters come from engineering and operator backgrounds. They've hired engineers,
          been on hiring panels, read thousands of technical briefs, and understand what senior
          IC and leadership candidates actually care about — because they've been in those
          conversations from the other side.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>How we work</SectionLabel>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              {
                title: 'Senior-led, always',
                desc: 'The recruiter you meet on the intake call is the recruiter who runs the search. No handoffs to coordinators, no sourcing teams you never talk to.',
              },
              {
                title: 'Small book of business',
                desc: 'Each recruiter carries a deliberately small number of active searches at any time. More searches means worse searches. We\'d rather turn down work than do it badly.',
              },
              {
                title: 'No resume blasting',
                desc: 'We\'re not paid per submission. Every candidate presentation is a considered recommendation — we\'d rather send three than thirty.',
              },
              {
                title: 'Honest over comfortable',
                desc: 'If your compensation is below market, we\'ll tell you. If your process is too slow, we\'ll say so. We\'d rather have that conversation early than lose a candidate late.',
              },
              {
                title: 'Candidate experience matters',
                desc: 'Candidates remember how they were treated — even if they didn\'t get the job. We treat every passive candidate as a future client, because they often are.',
              },
              {
                title: 'Accountability through skin in the game',
                desc: 'We stand behind placements with a 90-day guarantee. If a hire doesn\'t work out in the first 90 days, we restart the search at no additional fee.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3
                  style={{
                    fontSize: '15px',
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

      {/* BACKGROUND */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div style={{ borderTop: '1px solid var(--surface-divider)', paddingTop: '48px' }}>
          <SectionLabel>Background</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-body)' }}>
              Aurtiro was built by recruiters who spent years inside high-growth engineering
              organizations — not agency desks. We know what it looks like when a search is run
              badly, and we built the process we wished existed.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-body)' }}>
              We're deliberately small. A boutique model means every client relationship is a
              senior relationship, every search gets full attention, and we're able to say no to
              work that isn't the right fit — for us or for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

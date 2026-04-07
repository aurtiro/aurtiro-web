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

const articles = [
  {
    tag: 'Compensation',
    title: 'How to negotiate a senior engineering offer without blowing it',
    body: [
      'Most engineers leave money on the table not because they failed to ask, but because they asked at the wrong moment or framed the conversation wrong. Compensation negotiation happens in the offer stage — not after you\'ve verbally accepted.',
      'The most effective move is a simple, calm counter: "I\'m genuinely excited about this role. Based on my research and current market, I was expecting the total comp to be closer to [X]. Is there flexibility?" That\'s it. No ultimatums, no competitor names unless you\'re actually prepared to walk, no apology for asking.',
      'Equity is almost always negotiable when base isn\'t. If you\'re at the top of a salary band, ask about refreshers, signing bonus, or an accelerated cliff instead. Companies have more flexibility there.',
    ],
  },
  {
    tag: 'Leveling',
    title: 'The difference between Senior and Staff — and why it matters for your search',
    body: [
      'Senior Engineer and Staff Engineer have the same title conventions across most companies but mean very different things in practice. Senior typically means you can own a project end-to-end within a team. Staff means you can drive multi-team, multi-quarter initiatives and are expected to operate without a manager providing direction.',
      'If you\'re currently a Senior Eng being considered for a Staff role, the hiring panel is asking whether you can operate at scope. The tell is whether your examples span multiple teams or just your own. Adjust your interview prep accordingly.',
      'The compensation gap between Senior and Staff at most Series B–D companies is $30–60K base and often 50–100% more equity. It\'s worth being deliberate about which level you\'re targeting rather than accepting whatever a company defaults to.',
    ],
  },
  {
    tag: 'Job Search',
    title: 'How to run a passive search without burning your current employer',
    body: [
      'Most senior engineers looking for their next role aren\'t desperate — they\'re curious. That\'s actually your strongest position. You can afford to be selective, move slowly, and walk away from anything that doesn\'t feel right.',
      'The practical risk in a passive search is confidentiality. Avoid applying to any company where you\'d be devastated if your manager found out. Reference check conversations are usually the leak point — companies call people in your network who then mention it.',
      'Working through a recruiter you trust adds a layer of confidentiality: your name doesn\'t go anywhere until you\'ve approved the specific company. You can also establish upfront that references aren\'t contacted until you\'re at the offer stage.',
    ],
  },
  {
    tag: 'Interviews',
    title: 'System design interviews at senior and staff level: what\'s actually being assessed',
    body: [
      'Most engineers prepare for system design by memorizing architectures. The interviewers don\'t care about your architecture — they care about how you reason through tradeoffs, how you handle ambiguity, and whether you ask the right clarifying questions before jumping to a solution.',
      'The candidate who spends the first five minutes scoping requirements, establishes constraints, and checks in before diving deep consistently outperforms the one who immediately starts drawing boxes. It signals the same behavior you\'d want in a senior engineer actually doing the job.',
      'At staff level, interviewers are also watching whether you consider the organizational and operational dimensions of a system — not just the technical ones. Who owns this? How does it get deployed and monitored? What happens when it breaks at 2am?',
    ],
  },
  {
    tag: 'Market',
    title: 'What senior engineering comp looks like in 2025',
    body: [
      'Total comp for Senior Engineers at well-funded Series B–D companies in major markets (SF, NYC, Seattle, remote-first) is currently $250–350K, with top-of-market at $380K+. Staff Engineers run $320–450K. These numbers have compressed modestly from 2021–22 peaks but remain well above pre-pandemic levels.',
      'Remote adds complexity. Many companies now adjust for location, which means a Senior Eng in Austin might see $220–280K at the same company that pays $300K+ in SF. This is worth surfacing early in any conversation — location-adjusted comp is not a lowball, but you need to know the policy before evaluating an offer.',
      'Equity is harder to value but matters more at earlier-stage companies. A Staff Eng joining a Series B at 0.15–0.3% of a company valued at $150M has a different risk/reward profile than 0.02% of a Series D at $1.5B. Neither is wrong — just different bets.',
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Talent"
        title="Career advice."
        subtitle="Straight answers on comp, leveling, and how to run a job search. From the people who see both sides of the table."
      />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-32">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {articles.map((article, i) => (
            <div
              key={article.title}
              style={{
                borderTop: '1px solid var(--surface-divider)',
                paddingTop: '48px',
                paddingBottom: i < articles.length - 1 ? '8px' : '0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '10px',
                  fontWeight: 500,
                  borderRadius: '8px',
                  padding: '3px 8px',
                  color: 'var(--color-emerald)',
                  background: 'rgba(77,168,130,0.10)',
                  display: 'inline-block',
                  marginBottom: '16px',
                }}
              >
                {article.tag}
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                }}
              >
                {article.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {article.body.map((para, j) => (
                  <p
                    key={j}
                    style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'var(--text-body)' }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

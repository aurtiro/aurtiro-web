import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Process."
        subtitle="How we run a search from kickoff to day 90."
      />
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        {[
          { n: '01', t: 'Intake', d: 'Deep kickoff on role, team, and success criteria.' },
          { n: '02', t: 'Market map', d: 'We map companies, teams, and candidates before outreach.' },
          { n: '03', t: 'Outreach', d: 'Personalized, direct outreach to passive candidates.' },
          { n: '04', t: 'Screen', d: 'Structured technical and behavioral screens.' },
          { n: '05', t: 'Present', d: 'Short, briefed shortlists — no resume floods.' },
          { n: '06', t: 'Close', d: 'Offer strategy, references, day-90 check-ins.' },
        ].map((s) => (
          <div key={s.n} className="flex gap-6 border-b border-line pb-6 last:border-0">
            <div className="text-xs font-mono text-muted w-8 shrink-0 pt-1">{s.n}</div>
            <div>
              <h3 className="font-semibold mb-1">{s.t}</h3>
              <p className="text-sm text-muted">{s.d}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

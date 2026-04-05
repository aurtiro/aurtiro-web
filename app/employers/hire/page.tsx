import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Employers"
        title="Hire engineers."
        subtitle="Direct-hire placements for senior and staff engineering roles across backend, ML, infra, and product."
      />
      <section className="max-w-3xl mx-auto px-6 py-16 prose prose-neutral">
        <p className="text-lg leading-relaxed text-ink/90">
          We run contingent and retained searches for permanent engineering hires. Every candidate is
          sourced directly, technically vetted, and briefed on your team before introduction.
        </p>
        <h2 className="text-xl font-semibold mt-12 mb-4">Who this is for</h2>
        <ul className="list-disc pl-6 space-y-2 text-ink/80 text-sm">
          <li>Series A–D startups hiring their first 10–50 engineers</li>
          <li>Teams replacing a senior departure under time pressure</li>
          <li>Companies building new functions (ML, infra, security)</li>
        </ul>
      </section>
    </>
  );
}

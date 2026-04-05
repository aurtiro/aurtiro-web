import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Contact."
        subtitle="The start of every engagement is a real conversation."
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="border border-line rounded-lg p-8">
          <div className="text-xs uppercase tracking-wider text-muted mb-2">Email</div>
          <a href="mailto:hello@aurtiro.com" className="text-2xl font-semibold hover:underline">
            hello@aurtiro.com
          </a>
          <p className="text-sm text-muted mt-6">
            Include a few lines on the role you're hiring for or the kind of work you're looking for.
            We reply within one business day.
          </p>
        </div>
      </section>
    </>
  );
}

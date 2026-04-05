import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Employers"
        title="Retained search."
        subtitle="Exclusive executive search for CTOs, VPs of Engineering, and heads of AI."
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/90">
          A dedicated partner and a defined timeline. For hires where getting it right matters more
          than moving fast.
        </p>
      </section>
    </>
  );
}

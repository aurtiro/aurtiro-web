import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Team."
        subtitle="Senior recruiters with engineering backgrounds. No junior sourcers."
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/90">
          Every search is led by a senior recruiter from intake to close.
        </p>
      </section>
    </>
  );
}

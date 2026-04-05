import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Employers"
        title="Contract staffing."
        subtitle="Senior contractors deployed in 48–72 hours. Surge capacity, project work, and critical builds."
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/90">
          When you need senior engineering horsepower fast, we ship vetted contractors from a
          curated bench. W2 or 1099, hourly or weekly.
        </p>
      </section>
    </>
  );
}

import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Talent"
        title="Career advice."
        subtitle="Straight answers on comp, leveling, and how to run a job search."
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/90">
          Longer-form resources and writing coming soon.
        </p>
      </section>
    </>
  );
}

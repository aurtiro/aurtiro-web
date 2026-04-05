import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Talent"
        title="Open roles."
        subtitle="A small number of curated engineering roles at companies we know well."
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/90">
          We don't post most roles publicly. Submit your profile and we'll reach out when there's a fit.
        </p>
      </section>
    </>
  );
}

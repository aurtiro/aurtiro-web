import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="For Talent"
        title="Submit your profile."
        subtitle="Confidentially share your background. We only share with companies you approve."
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/90">
          Email your resume or LinkedIn to{' '}
          <a href="mailto:hello@aurtiro.com" className="underline">hello@aurtiro.com</a> with a few
          lines about what you're looking for.
        </p>
      </section>
    </>
  );
}

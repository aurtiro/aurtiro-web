export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 border-b border-line">
      <div className="text-xs uppercase tracking-wider text-muted mb-4">{eyebrow}</div>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">{title}</h1>
      {subtitle && <p className="text-lg text-muted max-w-2xl leading-relaxed">{subtitle}</p>}
    </section>
  );
}

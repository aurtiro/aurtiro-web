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
    <section
      className="max-w-5xl mx-auto px-6 pt-24 pb-16"
      style={{ borderBottom: '1px solid var(--surface-divider)' }}
    >
      <div
        className="mb-4"
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
        }}
      >
        {eyebrow}
      </div>
      <h1
        className="mb-6 tracking-tight"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 600,
          lineHeight: 1.1,
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="max-w-2xl"
          style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: 'var(--text-body)',
          }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}

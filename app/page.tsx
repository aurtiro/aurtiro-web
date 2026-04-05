import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
          Analog white-glove
          <br />
          <span className="text-muted">recruitment.</span>
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto mb-12 leading-relaxed">
          Senior-led technical search for engineering teams. Passive candidates only. No resume blasts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/employers/hire"
            className="bg-ink text-paper px-6 py-3 text-sm font-medium rounded-md hover:bg-ink/90 transition"
          >
            Hire engineers
          </Link>
          <Link
            href="/talent/roles"
            className="border border-line px-6 py-3 text-sm font-medium rounded-md hover:border-ink transition"
          >
            Find work
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-line">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-wider text-muted mb-3">What we do</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Three engagement models.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {[
            {
              title: 'Retained Search',
              desc: 'Executive-level search for CTOs, VPs of Engineering, and heads of AI. Dedicated partner, exclusive engagement.',
              href: '/employers/retained',
            },
            {
              title: 'Direct Placement',
              desc: 'Permanent hires across the engineering stack. Contingent or retained — vetted, briefed, and warm before you see them.',
              href: '/employers/hire',
            },
            {
              title: 'Contract Staffing',
              desc: 'Senior contractors deployed in 48–72 hours for project work, surge capacity, and critical builds.',
              href: '/employers/contract',
            },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="bg-paper p-8 hover:bg-ink/[0.02] transition group"
            >
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
              <span className="text-sm text-accent group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink/[0.02] border-y border-line">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-muted mb-3">How it works</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A deliberate process.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '01', t: 'Intake', d: 'We align on role, team, and what great looks like.' },
              { n: '02', t: 'Source', d: 'We map the market and reach passive candidates directly.' },
              { n: '03', t: 'Vet', d: 'Structured technical and behavioral screens before you see anyone.' },
              { n: '04', t: 'Close', d: 'Offer negotiation, references, and engaged through day 90.' },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-xs font-mono text-muted mb-3">{s.n}</div>
                <h3 className="font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Start a conversation.
        </h2>
        <p className="text-muted mb-10 max-w-lg mx-auto">
          Whether you're hiring or looking, the next step is a real conversation.
        </p>
        <Link
          href="/about/contact"
          className="inline-block bg-ink text-paper px-8 py-3 text-sm font-medium rounded-md hover:bg-ink/90 transition"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}

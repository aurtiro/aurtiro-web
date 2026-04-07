import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(30,32,31,0.5)',
        borderTop: '1px solid var(--surface-divider)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--text-muted)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '4px',
                color: 'var(--text-subtitle)',
              }}
            >
              AURTIRO
            </span>
          </div>
          <p
            style={{
              fontSize: '12.5px',
              lineHeight: '1.65',
              color: 'var(--text-caption)',
            }}
          >
            Analog white-glove recruitment for engineering teams.
          </p>
        </div>

        {/* For Employers */}
        <div>
          <div
            className="mb-3"
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
            }}
          >
            For Employers
          </div>
          <ul className="space-y-2">
            {[
              { label: 'Hire Engineers', href: '/employers/hire' },
              { label: 'Contract Staffing', href: '/employers/contract' },
              { label: 'Retained Search', href: '/employers/retained' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="footer-link"
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '13px',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* For Talent */}
        <div>
          <div
            className="mb-3"
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
            }}
          >
            For Talent
          </div>
          <ul className="space-y-2">
            {[
              { label: 'Open Roles', href: '/talent/roles' },
              { label: 'Submit Resume', href: '/talent/submit' },
              { label: 'Career Advice', href: '/talent/advice' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="footer-link"
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '13px',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div
            className="mb-3"
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
            }}
          >
            Contact
          </div>
          <ul className="space-y-2">
            <li
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '13px',
                color: 'var(--text-body)',
              }}
            >
              San Francisco
            </li>
            <li>
              <a
                href="mailto:joe@aurtiro.com"
                className="footer-email-link"
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '13px',
                }}
              >
                joe@aurtiro.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--surface-divider)' }}>
        <div
          className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2"
          style={{
            fontFamily: 'var(--font-geist)',
            fontSize: '11.5px',
            color: 'var(--text-muted)',
          }}
        >
          <span>© {new Date().getFullYear()} Aurtiro. All rights reserved.</span>
          <Link href="/about/contact" className="footer-misc-link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

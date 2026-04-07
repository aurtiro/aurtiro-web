'use client';

import Link from 'next/link';
import { useState } from 'react';

type Item = { label: string; href: string; description?: string };
type Menu = { label: string; items: Item[] };

const menus: Menu[] = [
  {
    label: 'For Employers',
    items: [
      { label: 'Hire Engineers', href: '/employers/hire', description: 'Direct-hire placements for senior engineering roles.' },
      { label: 'Contract Staffing', href: '/employers/contract', description: 'Senior contractors deployed in 48-72 hours.' },
      { label: 'Retained Search', href: '/employers/retained', description: 'Executive search for CTOs, VPs, and heads of AI.' },
    ],
  },
  {
    label: 'For Talent',
    items: [
      { label: 'Open Roles', href: '/talent/roles', description: 'Curated roles at vetted companies.' },
      { label: 'Submit Resume', href: '/talent/submit', description: 'Confidentially share your profile.' },
      { label: 'Career Advice', href: '/talent/advice', description: 'Market insight from senior recruiters.' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'Team', href: '/about/team', description: 'Who we are.' },
      { label: 'Process', href: '/about/process', description: 'How we run a search.' },
      { label: 'Contact', href: '/about/contact', description: 'Start a conversation.' },
    ],
  },
];

export default function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'linear-gradient(180deg, rgba(45,48,47,0.85), rgba(35,38,37,0.65))',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(46,48,47,0.6)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 400,
              letterSpacing: '5px',
              fontSize: '13px',
              color: 'var(--text-primary)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
              borderRadius: '4px',
              padding: '4px 8px',
            }}
          >
            AURTIRO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 transition"
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '12.5px',
                  fontWeight: 400,
                  color: 'var(--text-body)',
                }}
                aria-expanded={openMenu === menu.label}
              >
                {menu.label}
                <svg className="w-3 h-3 opacity-50" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openMenu === menu.label && (
                <div className="absolute left-0 top-full pt-2 w-72">
                  <div
                    className="p-1.5 rounded-xl shadow-2xl"
                    style={{
                      background: 'var(--surface-elevated)',
                      border: '1px solid var(--surface-divider)',
                    }}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="nav-dropdown-item"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-geist)',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                          }}
                        >
                          {item.label}
                        </div>
                        {item.description && (
                          <div
                            className="mt-0.5"
                            style={{
                              fontFamily: 'var(--font-geist)',
                              fontSize: '11.5px',
                              color: 'var(--text-caption)',
                            }}
                          >
                            {item.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/about/contact"
            className="transition"
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '12.5px',
              fontWeight: 500,
              color: 'var(--color-emerald)',
              background: 'rgba(77,168,130,0.08)',
              borderRadius: '4px',
              padding: '6px 14px',
            }}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--text-body)' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: '1px solid var(--surface-divider)',
            background: 'var(--surface-base)',
          }}
        >
          <div className="px-6 py-5 space-y-6">
            {menus.map((menu) => (
              <div key={menu.label}>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {menu.label}
                </div>
                <div className="space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1.5"
                      style={{
                        fontFamily: 'var(--font-geist)',
                        fontSize: '13.5px',
                        color: 'var(--text-body)',
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/about/contact"
              className="block text-center rounded-lg py-2.5 transition"
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-emerald)',
                background: 'rgba(77,168,130,0.08)',
                borderRadius: '8px',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

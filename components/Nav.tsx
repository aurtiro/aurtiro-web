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
      { label: 'Contract Staffing', href: '/employers/contract', description: 'Senior contractors deployed in 48–72 hours.' },
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
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Aurtiro
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)}>
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
            >
              <button
                className="px-4 py-2 text-sm text-ink/80 hover:text-ink transition flex items-center gap-1"
                aria-expanded={openMenu === menu.label}
              >
                {menu.label}
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === menu.label && (
                <div className="absolute left-0 top-full pt-2 w-80">
                  <div className="bg-paper border border-line rounded-lg shadow-lg p-2">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2.5 rounded-md hover:bg-ink/5 transition"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="text-sm font-medium text-ink">{item.label}</div>
                        {item.description && (
                          <div className="text-xs text-muted mt-0.5">{item.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/about/contact"
            className="text-sm bg-ink text-paper px-4 py-2 rounded-md hover:bg-ink/90 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
        <div className="md:hidden border-t border-line bg-paper">
          <div className="px-6 py-4 space-y-6">
            {menus.map((menu) => (
              <div key={menu.label}>
                <div className="text-xs uppercase tracking-wider text-muted mb-2">{menu.label}</div>
                <div className="space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1.5 text-sm text-ink"
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
              className="block text-center text-sm bg-ink text-paper px-4 py-2.5 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

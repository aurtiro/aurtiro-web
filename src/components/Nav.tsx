import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BlinkingCursor from './BlinkingCursor';
import { COLORS } from '../lib/colors';

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Approach', to: '/approach' },
  { label: 'Employers', to: '/employers' },
  { label: 'Talent', to: '/talent' },
];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 ${COLORS.bg} border-b ${COLORS.border}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight uppercase hover:opacity-80 transition">
          Aurtiro<BlinkingCursor />
        </Link>

        {/* Desktop nav */}
        <div className={`hidden md:flex space-x-8 text-sm ${COLORS.muted}`}>
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:text-[#0366d6] transition ${isActive ? 'text-[#0366d6] font-semibold' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`${COLORS.accentBg} text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition rounded-sm`}
          >
            Contact
          </Link>
          {/* Mobile hamburger */}
          <button
            className={`md:hidden ${COLORS.text} hover:text-[#0366d6] transition`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden border-t ${COLORS.border} bg-white`}>
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-sm border-b ${COLORS.border} hover:text-[#0366d6] transition ${
                  isActive ? 'text-[#0366d6] font-semibold' : COLORS.muted
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className={`block px-6 py-3 text-sm ${COLORS.muted} hover:text-[#0366d6] transition`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

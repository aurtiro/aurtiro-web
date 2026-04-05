import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import { COLORS } from '../lib/colors';

const LINE_COUNT = 80;

const Layout = () => (
  <div className={`min-h-screen ${COLORS.bg} ${COLORS.text} font-mono relative`}>
    {/* Line number sidebar — decorative, desktop only */}
    <div
      className={`hidden md:block fixed left-0 top-0 bottom-0 w-12 border-r ${COLORS.border} ${COLORS.muted} text-xs leading-6 text-right pr-2 pt-6 select-none overflow-hidden`}
    >
      {Array.from({ length: LINE_COUNT }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>

    {/* Content pushed right on desktop for sidebar */}
    <div className="md:pl-12">
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer className={`border-t ${COLORS.border} py-8 mt-16`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className={`text-xs ${COLORS.muted}`}>
            © {new Date().getFullYear()} Aurtiro. All rights reserved.
          </span>
          <div className={`flex gap-6 text-xs ${COLORS.muted}`}>
            <a href="mailto:hello@aurtiro.com" className="hover:text-[#0366d6] transition">
              hello@aurtiro.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;

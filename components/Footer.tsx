import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold mb-3">Aurtiro</div>
          <p className="text-muted text-xs leading-relaxed">
            Analog white-glove recruitment for engineering teams.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted mb-3">For Employers</div>
          <ul className="space-y-2 text-ink/80">
            <li><Link href="/employers/hire" className="hover:text-ink">Hire Engineers</Link></li>
            <li><Link href="/employers/contract" className="hover:text-ink">Contract Staffing</Link></li>
            <li><Link href="/employers/retained" className="hover:text-ink">Retained Search</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted mb-3">For Talent</div>
          <ul className="space-y-2 text-ink/80">
            <li><Link href="/talent/roles" className="hover:text-ink">Open Roles</Link></li>
            <li><Link href="/talent/submit" className="hover:text-ink">Submit Resume</Link></li>
            <li><Link href="/talent/advice" className="hover:text-ink">Career Advice</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted mb-3">About</div>
          <ul className="space-y-2 text-ink/80">
            <li><Link href="/about/team" className="hover:text-ink">Team</Link></li>
            <li><Link href="/about/process" className="hover:text-ink">Process</Link></li>
            <li><Link href="/about/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} Aurtiro. All rights reserved.</span>
          <a href="mailto:hello@aurtiro.com" className="hover:text-ink">hello@aurtiro.com</a>
        </div>
      </div>
    </footer>
  );
}

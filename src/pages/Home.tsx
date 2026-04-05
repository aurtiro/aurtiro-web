import { Link } from 'react-router-dom';
import { Briefcase, Building2, Users, TerminalSquare, ArrowRight, Search, CheckCircle } from 'lucide-react';
import BlinkingCursor from '../components/BlinkingCursor';
import ServiceCard from '../components/ServiceCard';
import { COLORS } from '../lib/colors';

const Home = () => (
  <>
    {/* HERO */}
    <header className="relative pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <TerminalSquare className={`w-12 h-12 mx-auto mb-8 ${COLORS.accent}`} />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase">
          AURTIRO<BlinkingCursor />
        </h1>
        <p className={`text-lg md:text-xl ${COLORS.muted} mb-12 leading-relaxed max-w-2xl mx-auto`}>
          Technical recruiting for AI-era engineering teams. Senior-led searches, passive candidates only, no resume blasts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/employers"
            className={`flex items-center justify-center space-x-3 ${COLORS.accentBg} text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition rounded-sm tracking-wider uppercase`}
          >
            <Building2 className="w-4 h-4" />
            <span>Hire Talent</span>
          </Link>
          <Link
            to="/talent"
            className={`flex items-center justify-center space-x-3 bg-white ${COLORS.text} border ${COLORS.border} px-6 py-3 text-sm font-semibold hover:border-[#0366d6] hover:text-[#0366d6] transition rounded-sm tracking-wider uppercase`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Find Work</span>
          </Link>
        </div>
      </div>
    </header>

    {/* SERVICES */}
    <section className={`py-24 border-t ${COLORS.border}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2 uppercase">
          Services<BlinkingCursor />
        </h2>
        <p className={`${COLORS.muted} text-sm mb-12`}>
          Three engagement models. One standard of quality.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Users}
            title="Executive Search"
            description="Retained search for CTOs, VPs, and heads of AI."
          />
          <ServiceCard
            icon={Building2}
            title="Contract Staffing"
            description="Senior contractors deployed in 48–72 hours for project work."
          />
          <ServiceCard
            icon={TerminalSquare}
            title="Direct Placement"
            description="Permanent hires, screened and briefed before you see them."
          />
        </div>
        <div className="mt-10">
          <Link
            to="/services"
            className={`inline-flex items-center gap-2 text-sm ${COLORS.accent} hover:opacity-70 transition font-semibold uppercase tracking-wider`}
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className={`py-24 border-t ${COLORS.border} bg-white`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2 uppercase">
          How It Works<BlinkingCursor />
        </h2>
        <p className={`${COLORS.muted} text-sm mb-16`}>
          Three steps. No job boards, no resume floods.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Search,
              step: '01',
              title: 'Source',
              desc: 'We map the market and reach out to passive candidates directly. Your next hire isn\'t looking — we find them.',
            },
            {
              icon: CheckCircle,
              step: '02',
              title: 'Vet',
              desc: 'Every candidate passes a structured technical screen and behavioral interview before you see them.',
            },
            {
              icon: Briefcase,
              step: '03',
              title: 'Place',
              desc: 'We handle offer negotiation and stay engaged through day 90.',
            },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="relative">
              <div className={`text-4xl font-bold ${COLORS.muted} opacity-30 mb-4`}>{step}</div>
              <Icon className={`w-7 h-7 ${COLORS.accent} mb-3`} />
              <h3 className="text-base font-bold uppercase mb-2">{title}</h3>
              <p className={`${COLORS.muted} text-sm leading-relaxed`}>{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/approach"
            className={`inline-flex items-center gap-2 text-sm ${COLORS.accent} hover:opacity-70 transition font-semibold uppercase tracking-wider`}
          >
            Full methodology <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA STRIP */}
    <section className={`py-20 border-t ${COLORS.border}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold uppercase mb-4">
          Ready to start<BlinkingCursor />
        </h2>
        <p className={`${COLORS.muted} text-sm mb-10 leading-relaxed max-w-xl mx-auto`}>
          Hiring or looking — the conversation starts here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/employers"
            className={`flex items-center justify-center gap-2 ${COLORS.accentBg} text-white px-8 py-3 text-sm font-semibold hover:opacity-90 transition rounded-sm tracking-wider uppercase`}
          >
            <Building2 className="w-4 h-4" /> I'm Hiring
          </Link>
          <Link
            to="/talent"
            className={`flex items-center justify-center gap-2 bg-white ${COLORS.text} border ${COLORS.border} px-8 py-3 text-sm font-semibold hover:border-[#0366d6] hover:text-[#0366d6] transition rounded-sm tracking-wider uppercase`}
          >
            <Briefcase className="w-4 h-4" /> I'm Looking
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;

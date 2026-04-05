import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BlinkingCursor from '../components/BlinkingCursor';
import { COLORS } from '../lib/colors';

const steps = [
  {
    n: '01',
    title: 'Intake & Calibration',
    desc: 'Our intake is a deep-dive: who\'s on the team, what\'s worked, how your best engineers operate, and what the person in this role needs to do in their first 90 days. We leave with a calibrated picture, not a keyword list.',
    tag: 'No templates. Just listening.',
  },
  {
    n: '02',
    title: 'Market Mapping',
    desc: 'Before outreach, we map the landscape: where ideal candidates are now, how deep the pool is, and a ranked target list. This sets honest timeline expectations up front.',
    tag: 'Evidence before action.',
  },
  {
    n: '03',
    title: 'Direct Sourcing',
    desc: 'We don\'t post and wait. Every message is written for the individual and references something specific. Response rates are a function of quality, not volume.',
    tag: 'Outbound-first. Always.',
  },
  {
    n: '04',
    title: 'Rigorous Technical Screen',
    desc: 'Every candidate passes a structured technical evaluation before you see their name. The question we answer: can this person do this job, at this company, with this team? If we\'re not confident, they don\'t make the slate.',
    tag: 'No resume-forwarding.',
  },
  {
    n: '05',
    title: 'Cultural Calibration',
    desc: 'We run a behavioral interview mapped to your team\'s operating norms: how decisions get made, how disagreement is handled, how work gets communicated. Signal, not alignment theater.',
    tag: 'Behavioral depth, not vibes.',
  },
  {
    n: '06',
    title: 'White-Glove Presentation',
    desc: 'You don\'t get a stack of resumes. You get a written brief per candidate: background, assessment, motivation, comp expectations, and timeline. Enough to decide whether to invest an hour.',
    tag: 'Briefs, not resumes.',
  },
  {
    n: '07',
    title: 'Offer & Onboarding',
    desc: 'We coach candidates through negotiation, manage offer communication, and coordinate start dates. At 30 and 90 days, we check in with both sides. If anything\'s off, we\'d rather hear it early.',
    tag: 'Long game, not a transaction.',
  },
];

const differentiators = [
  {
    title: 'AI-era depth',
    desc: 'We know the difference between a fine-tuning engineer and a pretraining researcher, between a platform engineer who\'s shipped model serving and one who hasn\'t. It\'s the only thing we do.',
  },
  {
    title: 'Real relationships',
    desc: 'We build relationships with candidates over time, not sequences. Many of the people we place are ones we\'ve known for a year before the right role came up.',
  },
  {
    title: 'Speed without shortcuts',
    desc: 'We move fast because we\'re organized, not because we cut corners. The fastest path to the right hire, not the fastest path to a full inbox.',
  },
  {
    title: 'Named accountability',
    desc: 'One senior recruiter throughout. No coordinators, no hand-offs. Their name is on every candidate.',
  },
];

const Approach = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h1 className="text-3xl font-bold uppercase mb-2">
      The Aurtiro Method<BlinkingCursor />
    </h1>
    <p className={`${COLORS.muted} text-sm mb-16 max-w-xl leading-relaxed`}>
      A seven-step process built around quality, accountability, and speed — in that order.
    </p>

    {/* Steps */}
    <section className="mb-20">
      <div className="space-y-12">
        {steps.map(({ n, title, desc, tag }) => (
          <div key={n} className={`border-l-2 border-[#e1e4e8] pl-8 relative`}>
            <div className={`absolute -left-2 top-0 w-4 h-4 border-2 border-[#0366d6] bg-white rounded-sm`} />
            <div className={`text-xs ${COLORS.accent} font-bold uppercase tracking-widest mb-1`}>{n}</div>
            <h2 className="text-lg font-bold uppercase mb-3">{title}</h2>
            <p className={`${COLORS.muted} text-sm leading-relaxed mb-3`}>{desc}</p>
            <span className={`text-xs border ${COLORS.border} px-2 py-1 rounded-sm ${COLORS.muted} italic`}>{tag}</span>
          </div>
        ))}
      </div>
    </section>

    {/* What makes us different */}
    <section className={`border ${COLORS.border} bg-white rounded-sm p-8 mb-20`}>
      <h2 className="text-xl font-bold uppercase mb-8">What Makes Us Different</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {differentiators.map(({ title, desc }) => (
          <div key={title}>
            <h3 className={`text-sm font-bold uppercase ${COLORS.accent} mb-2`}>{title}</h3>
            <p className={`${COLORS.muted} text-sm leading-relaxed`}>{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <div className={`pt-8 border-t ${COLORS.border} flex flex-col sm:flex-row gap-4`}>
      <Link
        to="/employers"
        className={`flex items-center gap-2 ${COLORS.accentBg} text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-sm`}
      >
        Work With Us <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        to="/why-us"
        className={`flex items-center gap-2 bg-white ${COLORS.text} border ${COLORS.border} px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:border-[#0366d6] hover:text-[#0366d6] transition rounded-sm`}
      >
        Why Aurtiro
      </Link>
    </div>
  </div>
);

export default Approach;

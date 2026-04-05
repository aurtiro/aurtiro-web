import { Link } from 'react-router-dom';
import { Users, Building2, TerminalSquare, ArrowRight } from 'lucide-react';
import BlinkingCursor from '../components/BlinkingCursor';
import { COLORS } from '../lib/colors';

const services = [
  {
    id: 'executive',
    icon: Users,
    title: 'Executive Search',
    tagline: 'Retained search for engineering leaders.',
    intro:
      'CTOs and VPs of Engineering aren\'t on job boards. We find them, build the relationship, and make a calibrated introduction on your behalf.',
    model: 'Retained. Portion of fee paid upfront.',
    timeline: '60–90 days to signed offer. First slate in two weeks.',
    guarantee: 'Six months. If the leader leaves or is terminated, we re-run the search at no cost.',
    steps: [
      { n: '01', title: 'Deep Intake', desc: '90-minute calibration with you and key stakeholders. We define what "excellent" means beyond the JD.' },
      { n: '02', title: 'Market Mapping', desc: 'We identify viable candidates across target companies and size the pool before pitching.' },
      { n: '03', title: 'Direct Outreach', desc: 'Senior personal outreach to passive candidates. No mass emails, no job board postings.' },
      { n: '04', title: 'Assessment', desc: 'Structured leadership interviews. Written brief with every candidate.' },
      { n: '05', title: 'References', desc: 'Structured reference calls — back-channel where appropriate — before you make an offer.' },
      { n: '06', title: 'Offer & Onboarding', desc: 'We manage offer structure, coach negotiation, and check in at 30 and 90 days.' },
    ],
    included: ['Dedicated search lead', 'Written candidate briefs', 'Competitor intelligence report', 'Structured reference checks', '90-day onboarding support', 'Six-month guarantee'],
  },
  {
    id: 'contract',
    icon: Building2,
    title: 'Contract Staffing',
    tagline: 'Senior contractors deployed in days, not weeks.',
    intro:
      'When you need a staff ML engineer this week or a platform engineer before a launch, six weeks is too long. We keep an active network of senior contractors in AI, platform, and data engineering.',
    model: 'Contingency. W2 and C2C supported.',
    timeline: 'First slate in 48–72 hours. Start in 1–2 weeks.',
    guarantee: '30 days. If it doesn\'t work out, we replace at no cost.',
    steps: [
      { n: '01', title: 'Role Intake', desc: '30-minute call on scope, skills, and start date. Async via email if speed matters.' },
      { n: '02', title: 'Network Activation', desc: 'We reach out to our active contractor network — existing relationships, not cold lists.' },
      { n: '03', title: 'Technical Screening', desc: 'Structured screen for availability, rate, and fit before you see a resume.' },
      { n: '04', title: 'Slate Delivery', desc: '2–4 vetted candidates in 48–72 hours, each with a brief.' },
      { n: '05', title: 'Rapid Close', desc: 'Fast feedback loops. We manage the offer to minimize time-to-start.' },
    ],
    included: ['48–72 hour first slate', 'IC compliance review', 'Rate negotiation', 'Onboarding coordination', '30-day guarantee'],
  },
  {
    id: 'direct',
    icon: TerminalSquare,
    title: 'Direct Placement',
    tagline: 'Permanent hires, screened before you see them.',
    intro:
      'Most recruiters send as many resumes as possible. We send fewer, because we\'ve already done the work. Every candidate has passed a technical screen and behavioral interview.',
    model: 'Contingency. No upfront fee. Pay only on a hire.',
    timeline: 'First slate in one week. Closes in 3–6 weeks.',
    guarantee: '90 days. If they leave or are let go, we re-run the search at no cost.',
    steps: [
      { n: '01', title: 'Role Intake', desc: '45-minute call on team structure, stack, comp band, and what distinguishes your best engineers.' },
      { n: '02', title: 'Active Sourcing', desc: 'Direct outreach, not inbound. We target people excellent in their current role.' },
      { n: '03', title: 'Technical Screen', desc: 'Structured technical conversation before you see the candidate.' },
      { n: '04', title: 'Cultural Calibration', desc: 'Behavioral interview mapped to your team\'s operating norms.' },
      { n: '05', title: 'Candidate Brief', desc: 'Written summary: background, assessment, comp expectations, timeline.' },
      { n: '06', title: 'Offer Coordination', desc: 'We manage delivery, negotiation, and check in through day 30.' },
    ],
    included: ['Proactive sourcing only', 'Technical screen + written brief', 'Behavioral / culture interview', 'Offer negotiation support', '30-day onboarding check-in', '90-day guarantee'],
  },
];

const Services = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h1 className="text-3xl font-bold uppercase mb-2">
      Services<BlinkingCursor />
    </h1>
    <p className={`${COLORS.muted} text-sm mb-16 max-w-xl leading-relaxed`}>
      Three engagement models. One standard of quality.
    </p>

    {services.map(({ id, icon: Icon, title, tagline, intro, model, timeline, guarantee, steps, included }, idx) => (
      <section key={id} className={`${idx > 0 ? `mt-20 pt-20 border-t ${COLORS.border}` : ''}`}>
        <div className="flex items-start gap-4 mb-6">
          <Icon className={`w-8 h-8 ${COLORS.accent} mt-1 shrink-0`} />
          <div>
            <h2 className="text-2xl font-bold uppercase">{title}</h2>
            <p className={`${COLORS.muted} text-sm mt-1`}>{tagline}</p>
          </div>
        </div>

        <p className={`${COLORS.muted} text-sm leading-relaxed mb-10`}>{intro}</p>

        {/* Process Steps */}
        <h3 className={`text-xs uppercase font-bold ${COLORS.muted} tracking-widest mb-6`}>The Process</h3>
        <div className="space-y-6 mb-10">
          {steps.map(({ n, title: stepTitle, desc }) => (
            <div key={n} className="flex gap-5">
              <div className={`text-xl font-bold ${COLORS.muted} opacity-30 w-7 shrink-0`}>{n}</div>
              <div>
                <h4 className="text-sm font-bold uppercase mb-1">{stepTitle}</h4>
                <p className={`${COLORS.muted} text-sm leading-relaxed`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Meta row */}
        <div className={`grid md:grid-cols-3 gap-6 border ${COLORS.border} bg-white p-6 rounded-sm mb-8`}>
          <div>
            <div className={`text-xs uppercase font-bold ${COLORS.muted} mb-1`}>Engagement Model</div>
            <div className="text-sm">{model}</div>
          </div>
          <div>
            <div className={`text-xs uppercase font-bold ${COLORS.muted} mb-1`}>Timeline</div>
            <div className="text-sm">{timeline}</div>
          </div>
          <div>
            <div className={`text-xs uppercase font-bold ${COLORS.muted} mb-1`}>Guarantee</div>
            <div className="text-sm">{guarantee}</div>
          </div>
        </div>

        {/* What's included */}
        <h3 className={`text-xs uppercase font-bold ${COLORS.muted} tracking-widest mb-3`}>What's Included</h3>
        <ul className="flex flex-wrap gap-3 mb-8">
          {included.map(item => (
            <li key={item} className={`border ${COLORS.border} text-xs px-3 py-1 rounded-sm ${COLORS.muted}`}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    ))}

    {/* CTA */}
    <div className={`mt-20 pt-12 border-t ${COLORS.border} flex flex-col sm:flex-row gap-4`}>
      <Link
        to="/employers"
        className={`flex items-center gap-2 ${COLORS.accentBg} text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-sm`}
      >
        Start an Engagement <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        to="/contact"
        className={`flex items-center gap-2 bg-white ${COLORS.text} border ${COLORS.border} px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:border-[#0366d6] hover:text-[#0366d6] transition rounded-sm`}
      >
        Ask a Question
      </Link>
    </div>
  </div>
);

export default Services;

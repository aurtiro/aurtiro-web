import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award, Target, Users, Shield } from 'lucide-react';
import BlinkingCursor from '../components/BlinkingCursor';
import { COLORS } from '../lib/colors';

const advantages = [
  {
    icon: Target,
    title: 'Specialist Network',
    desc: 'Technical recruiting for AI-era engineering is the only thing we do. When you call us for an ML platform role, you\'re talking to someone who knows the difference between Triton kernels and CUDA abstraction layers — and has warm relationships with the people you want to meet.',
    proof: 'One vertical, deep network. Not a generalist shop.',
  },
  {
    icon: Zap,
    title: 'Speed With Precision',
    desc: 'Contract: 48–72 hours. Executive: two weeks. Direct placement: one week. We move fast because we stay organized and have real relationships, not because we lower the bar.',
    proof: 'Typical firms deliver contract slates in 2–3 weeks. We deliver in days.',
  },
  {
    icon: Shield,
    title: 'Guaranteed Quality',
    desc: 'Every placement carries a no-cost replacement window. Executive: 6 months. Direct: 90 days. Contract: 30 days. We back our assessments with our fees.',
    proof: 'Among the longest guarantees in the industry.',
  },
  {
    icon: Award,
    title: 'White-Glove Process',
    desc: 'One named, senior recruiter throughout. The person on your intake call is the one writing briefs and on the phone when offers go out.',
    proof: 'No hand-offs between account managers. Accountability is personal.',
  },
  {
    icon: Users,
    title: 'Candidate Experience',
    desc: 'Every candidate interaction — including declines — is handled with transparency and respect. Candidates talk. A good experience creates advocates, even when they don\'t get the role.',
    proof: 'Your employer brand compounds with every well-run search.',
  },
];

const comparisonRows = [
  { dimension: 'Proactive sourcing', aurtiro: 'Always', large: 'Sometimes', boards: 'Never' },
  { dimension: 'Technical screening', aurtiro: 'Structured, written brief', large: 'Resume review', boards: 'Self-reported' },
  { dimension: 'Named accountability', aurtiro: 'Single senior recruiter', large: 'Rotating team', boards: 'None' },
  { dimension: 'Passive candidate reach', aurtiro: 'Deep network + outbound', large: 'Database + job board', boards: 'Inbound only' },
  { dimension: 'Time to first slate', aurtiro: '48h–2 weeks', large: '2–4 weeks', boards: 'Ongoing' },
  { dimension: 'Placement guarantee', aurtiro: '30–180 days', large: '30–90 days', boards: 'None' },
];

const WhyUs = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h1 className="text-3xl font-bold uppercase mb-2">
      Why Aurtiro<BlinkingCursor />
    </h1>
    <p className={`${COLORS.muted} text-sm mb-16 max-w-xl leading-relaxed`}>
      Five reasons engineering leaders choose us over a large staffing firm or a job board.
    </p>

    {/* Advantage blocks */}
    <section className="mb-20 space-y-12">
      {advantages.map(({ icon: Icon, title, desc, proof }, idx) => (
        <div key={title} className={idx > 0 ? `pt-12 border-t ${COLORS.border}` : ''}>
          <div className="flex items-start gap-4">
            <Icon className={`w-7 h-7 ${COLORS.accent} mt-1 shrink-0`} />
            <div>
              <h2 className="text-lg font-bold uppercase mb-3">{title}</h2>
              <p className={`${COLORS.muted} text-sm leading-relaxed mb-4`}>{desc}</p>
              <p className={`text-xs italic border-l-2 border-[#0366d6] pl-3 ${COLORS.muted}`}>{proof}</p>
            </div>
          </div>
        </div>
      ))}
    </section>

    {/* Comparison table */}
    <section className="mb-20">
      <h2 className="text-xl font-bold uppercase mb-6">How We Compare</h2>
      <div className={`border ${COLORS.border} rounded-sm overflow-hidden`}>
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-b ${COLORS.border} bg-[#f8f9fb]`}>
              <th className={`text-left px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}></th>
              <th className={`text-left px-6 py-3 text-xs font-bold text-[#0366d6] uppercase`}>Aurtiro</th>
              <th className={`text-left px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}>Large Staffing Firm</th>
              <th className={`text-left px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}>Job Board</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(({ dimension, aurtiro, large, boards }) => (
              <tr key={dimension} className={`border-b ${COLORS.border} last:border-0`}>
                <td className={`px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}>{dimension}</td>
                <td className="px-6 py-3 text-sm font-semibold text-[#24292e]">{aurtiro}</td>
                <td className={`px-6 py-3 text-sm ${COLORS.muted}`}>{large}</td>
                <td className={`px-6 py-3 text-sm ${COLORS.muted}`}>{boards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* CTA */}
    <div className={`pt-8 border-t ${COLORS.border} flex flex-col sm:flex-row gap-4`}>
      <Link
        to="/employers"
        className={`flex items-center gap-2 ${COLORS.accentBg} text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-sm`}
      >
        Start a Search <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        to="/approach"
        className={`flex items-center gap-2 bg-white ${COLORS.text} border ${COLORS.border} px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:border-[#0366d6] hover:text-[#0366d6] transition rounded-sm`}
      >
        Our Methodology
      </Link>
    </div>
  </div>
);

export default WhyUs;

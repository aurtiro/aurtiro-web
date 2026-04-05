import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import BlinkingCursor from '../components/BlinkingCursor';
import { COLORS } from '../lib/colors';
import { submitForm } from '../lib/submissionService';

const steps = [
  {
    n: '01',
    title: 'Inquiry',
    desc: 'Submit the form or email us. We respond within one business day.',
  },
  {
    n: '02',
    title: 'Intake Call',
    desc: '45 minutes on the role, team, stack, culture, and what "excellent" looks like.',
  },
  {
    n: '03',
    title: 'Kickoff',
    desc: 'Align on strategy, set a timeline, start outreach the same day.',
  },
  {
    n: '04',
    title: 'First Slate',
    desc: 'Executive: 2 weeks. Direct Placement: 1 week. Contract: 48–72 hours.',
  },
];

const timelines = [
  { type: 'Executive Search', first: '2 weeks', close: '60–90 days', guarantee: '6-month replacement' },
  { type: 'Contract Staffing', first: '48–72 hours', close: '1–2 weeks', guarantee: '30-day guarantee' },
  { type: 'Direct Placement', first: '1 week', close: '3–6 weeks', guarantee: '90-day replacement' },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'How does your fee structure work?',
    a: 'Executive Search is retained — portion upfront, rest on placement. Contract and Direct Placement are contingency — you pay only on a hire. Rates are discussed during intake.',
  },
  {
    q: 'Do you require exclusivity?',
    a: 'Executive Search is exclusive. For Contract and Direct Placement we prefer exclusive or priority, but we can discuss. Exclusivity improves speed and quality.',
  },
  {
    q: 'What happens if the candidate doesn\'t work out?',
    a: 'Every placement carries a guarantee. Executive: 6 months. Direct Placement: 90 days. Contract: 30 days. If they leave within the window, we re-run the search at no cost.',
  },
  {
    q: 'What do you need to start?',
    a: 'A JD is a start, but we prefer a conversation. Team, recent hires, stack, cultural context. The intake call covers it.',
  },
  {
    q: 'How are you different from a large staffing agency?',
    a: 'Named senior recruiter, no hand-offs. No job boards. Direct outreach to passive candidates. Every candidate personally screened.',
  },
];

type EngagementType = 'Executive Search' | 'Contract Staffing' | 'Direct Placement';

interface FormState {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  engagementType: EngagementType;
  roleTitle: string;
  message: string;
}

const FAQ = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b ${COLORS.border}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center py-4 text-left text-sm font-semibold ${COLORS.text} hover:text-[#0366d6] transition`}
      >
        {q}
        {open ? <ChevronUp className="w-4 h-4 shrink-0 ml-4" /> : <ChevronDown className="w-4 h-4 shrink-0 ml-4" />}
      </button>
      {open && <p className={`${COLORS.muted} text-sm pb-4 leading-relaxed`}>{a}</p>}
    </div>
  );
};

const Employers = () => {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', company: '', title: '', email: '',
    phone: '', engagementType: 'Direct Placement', roleTitle: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitForm('employer', { ...form });
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full border ${COLORS.border} bg-white px-4 py-2 text-sm focus:outline-none focus:border-[#0366d6] rounded-sm`;
  const labelClass = `block text-xs uppercase font-semibold ${COLORS.muted} mb-1`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold uppercase mb-2">
        For Employers<BlinkingCursor />
      </h1>
      <p className={`${COLORS.muted} text-sm mb-16 max-w-xl leading-relaxed`}>
        We work with a limited number of engineering-led companies at a time so every search gets real attention.
      </p>

      {/* How to Engage */}
      <section className="mb-20">
        <h2 className="text-xl font-bold uppercase mb-10">How to Engage</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ n, title, desc }) => (
            <div key={n}>
              <div className={`text-3xl font-bold ${COLORS.muted} opacity-30 mb-2`}>{n}</div>
              <h3 className="text-sm font-bold uppercase mb-2">{title}</h3>
              <p className={`${COLORS.muted} text-xs leading-relaxed`}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className={`mb-20 border ${COLORS.border} rounded-sm overflow-hidden`}>
        <h2 className="text-xl font-bold uppercase px-6 py-4 border-b border-[#e1e4e8]">Timeline Expectations</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-b ${COLORS.border} bg-[#f8f9fb]`}>
              <th className={`text-left px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}>Engagement Type</th>
              <th className={`text-left px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}>First Slate</th>
              <th className={`text-left px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}>Typical Close</th>
              <th className={`text-left px-6 py-3 text-xs font-semibold ${COLORS.muted} uppercase`}>Guarantee</th>
            </tr>
          </thead>
          <tbody>
            {timelines.map(({ type, first, close, guarantee }) => (
              <tr key={type} className={`border-b ${COLORS.border} last:border-0`}>
                <td className="px-6 py-3 font-semibold">{type}</td>
                <td className={`px-6 py-3 ${COLORS.muted}`}>{first}</td>
                <td className={`px-6 py-3 ${COLORS.muted}`}>{close}</td>
                <td className={`px-6 py-3 ${COLORS.muted}`}>{guarantee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-xl font-bold uppercase mb-6">Frequently Asked Questions</h2>
        <div className={`border-t ${COLORS.border}`}>
          {faqs.map(faq => <FAQ key={faq.q} {...faq} />)}
        </div>
      </section>

      {/* Intake Form */}
      <section>
        <h2 className="text-xl font-bold uppercase mb-2">Start the Conversation</h2>
        <p className={`${COLORS.muted} text-sm mb-8`}>Tell us about the role. We'll respond within one business day.</p>

        {submitted ? (
          <div className={`border ${COLORS.border} bg-white p-8 rounded-sm text-center`}>
            <CheckCircle className={`w-10 h-10 ${COLORS.accent} mx-auto mb-4`} />
            <h3 className="text-base font-bold uppercase mb-2">We'll be in touch</h3>
            <p className={`${COLORS.muted} text-sm`}>Expect a reply within one business day to schedule your intake call.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>First Name *</label>
                <input type="text" required value={form.firstName} onChange={set('firstName')} className={inputClass} placeholder="Jane" />
              </div>
              <div>
                <label className={labelClass}>Last Name *</label>
                <input type="text" required value={form.lastName} onChange={set('lastName')} className={inputClass} placeholder="Smith" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Company *</label>
                <input type="text" required value={form.company} onChange={set('company')} className={inputClass} placeholder="Acme Corp" />
              </div>
              <div>
                <label className={labelClass}>Your Title *</label>
                <input type="text" required value={form.title} onChange={set('title')} className={inputClass} placeholder="VP of Engineering" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Work Email *</label>
                <input type="email" required value={form.email} onChange={set('email')} className={inputClass} placeholder="jane@acme.com" />
              </div>
              <div>
                <label className={labelClass}>Phone (optional)</label>
                <input type="tel" value={form.phone} onChange={set('phone')} className={inputClass} placeholder="+1 555 000 0000" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Engagement Type *</label>
                <select required value={form.engagementType} onChange={set('engagementType')} className={inputClass}>
                  <option value="Executive Search">Executive Search</option>
                  <option value="Contract Staffing">Contract Staffing</option>
                  <option value="Direct Placement">Direct Placement</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Role Title *</label>
                <input type="text" required value={form.roleTitle} onChange={set('roleTitle')} className={inputClass} placeholder="Staff ML Engineer" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Notes / Context</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={set('message')}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about the team, stack, timeline, or anything else that's relevant."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`${COLORS.accentBg} text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-sm disabled:opacity-50`}
            >
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Employers;

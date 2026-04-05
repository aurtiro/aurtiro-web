import { useState, useRef } from 'react';
import { CheckCircle, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import BlinkingCursor from '../components/BlinkingCursor';
import { COLORS } from '../lib/colors';
import { submitForm } from '../lib/submissionService';

const roleFamilies = [
  { area: 'Machine Learning & AI', roles: ['ML Engineer', 'Applied AI Engineer', 'Research Engineer', 'LLM Engineer', 'MLOps Engineer'] },
  { area: 'Platform & Infrastructure', roles: ['Staff / Principal SWE', 'Platform Engineer', 'Infrastructure Engineer', 'Site Reliability Engineer', 'DevOps / Cloud Engineer'] },
  { area: 'Data Engineering', roles: ['Data Engineer', 'Analytics Engineer', 'Data Architect', 'Streaming / Real-time Data Engineer'] },
  { area: 'Engineering Leadership', roles: ['VP of Engineering', 'CTO', 'Director of Engineering', 'Engineering Manager', 'Head of AI/ML'] },
  { area: 'Product & Full-Stack', roles: ['Senior / Staff Full-Stack Engineer', 'Frontend Engineer (complex systems)', 'Backend Engineer'] },
];

const processSteps = [
  { n: '01', title: 'Submit', desc: 'Fill out the form. We review every submission personally.' },
  { n: '02', title: 'Screen Call', desc: '20–30 minutes with a senior recruiter on your experience, goals, and what the right opportunity looks like.' },
  { n: '03', title: 'Technical Calibration', desc: 'Structured technical conversation where relevant. Not a whiteboard gauntlet.' },
  { n: '04', title: 'Client Introductions', desc: 'We present you only where there\'s genuine fit. Full brief on company, team, role, and comp before every call.' },
  { n: '05', title: 'Offer & Close', desc: 'We coach you through offers, handle negotiation, and stay available through day one.' },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'How long does the process take?',
    a: 'Typically 3–8 weeks from submission to offer. Contract roles can move in days.',
  },
  {
    q: 'Can I work with other recruiters?',
    a: 'Yes. We don\'t require exclusivity. Just tell us if you\'re interviewing elsewhere so we can coordinate.',
  },
  {
    q: 'Will you share my resume without asking?',
    a: 'Never. We always tell you where it\'s going and who the company is before any introduction.',
  },
  {
    q: 'Do you help with comp negotiation?',
    a: 'Yes. We brief you on market rates, coach the conversation, and handle back-and-forth on your behalf.',
  },
  {
    q: 'I\'m not actively looking. Can I still submit?',
    a: 'Yes — most of the candidates we place are passive. We\'ll reach out when something genuinely relevant comes up.',
  },
];

type EngagementPref = 'Full-Time' | 'Contract' | 'Open to Both';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  currentTitle: string;
  location: string;
  engagementPref: EngagementPref;
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

const Talent = () => {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', phone: '', linkedinUrl: '',
    currentTitle: '', location: '', engagementPref: 'Open to Both', message: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.size <= 5 * 1024 * 1024) setResume(f);
    else if (f) alert('File size must be 5MB or less.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitForm('talent', { ...form }, resume);
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full border ${COLORS.border} bg-white px-4 py-2 text-sm focus:outline-none focus:border-[#0366d6] rounded-sm`;
  const labelClass = `block text-xs uppercase font-semibold ${COLORS.muted} mb-1`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold uppercase mb-2">
        For Talent<BlinkingCursor />
      </h1>
      <p className={`${COLORS.muted} text-sm mb-16 max-w-xl leading-relaxed`}>
        We place senior engineers, technical leaders, and AI specialists at companies worth your time.
      </p>

      {/* Roles We Place */}
      <section className="mb-20">
        <h2 className="text-xl font-bold uppercase mb-8">Roles We Place</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roleFamilies.map(({ area, roles }) => (
            <div key={area} className={`border ${COLORS.border} bg-white p-5 rounded-sm`}>
              <h3 className={`text-xs font-bold uppercase ${COLORS.accent} mb-3`}>{area}</h3>
              <ul className="space-y-1">
                {roles.map(r => (
                  <li key={r} className={`text-sm ${COLORS.muted}`}>— {r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-20">
        <h2 className="text-xl font-bold uppercase mb-10">How the Process Works</h2>
        <div className="space-y-8">
          {processSteps.map(({ n, title, desc }) => (
            <div key={n} className="flex gap-6">
              <div className={`text-2xl font-bold ${COLORS.muted} opacity-30 w-8 shrink-0`}>{n}</div>
              <div>
                <h3 className="text-sm font-bold uppercase mb-1">{title}</h3>
                <p className={`${COLORS.muted} text-sm leading-relaxed`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-xl font-bold uppercase mb-6">Frequently Asked Questions</h2>
        <div className={`border-t ${COLORS.border}`}>
          {faqs.map(faq => <FAQ key={faq.q} {...faq} />)}
        </div>
      </section>

      {/* Resume Submission Form */}
      <section>
        <h2 className="text-xl font-bold uppercase mb-2">Submit Your Profile</h2>
        <p className={`${COLORS.muted} text-sm mb-8`}>Every submission is reviewed personally. We'll reach out when there's a match.</p>

        {submitted ? (
          <div className={`border ${COLORS.border} bg-white p-8 rounded-sm text-center`}>
            <CheckCircle className={`w-10 h-10 ${COLORS.accent} mx-auto mb-4`} />
            <h3 className="text-base font-bold uppercase mb-2">Profile received</h3>
            <p className={`${COLORS.muted} text-sm`}>We review every submission personally and will reach out when a relevant opportunity comes up.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>First Name *</label>
                <input type="text" required value={form.firstName} onChange={set('firstName')} className={inputClass} placeholder="Alex" />
              </div>
              <div>
                <label className={labelClass}>Last Name *</label>
                <input type="text" required value={form.lastName} onChange={set('lastName')} className={inputClass} placeholder="Chen" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" required value={form.email} onChange={set('email')} className={inputClass} placeholder="alex@email.com" />
              </div>
              <div>
                <label className={labelClass}>Phone (optional)</label>
                <input type="tel" value={form.phone} onChange={set('phone')} className={inputClass} placeholder="+1 555 000 0000" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>LinkedIn URL</label>
                <input type="url" value={form.linkedinUrl} onChange={set('linkedinUrl')} className={inputClass} placeholder="linkedin.com/in/alexchen" />
              </div>
              <div>
                <label className={labelClass}>Current Title *</label>
                <input type="text" required value={form.currentTitle} onChange={set('currentTitle')} className={inputClass} placeholder="Senior ML Engineer" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Location *</label>
                <input type="text" required value={form.location} onChange={set('location')} className={inputClass} placeholder="San Francisco, CA" />
              </div>
              <div>
                <label className={labelClass}>Engagement Preference</label>
                <select value={form.engagementPref} onChange={set('engagementPref')} className={inputClass}>
                  <option value="Full-Time">Full-Time Only</option>
                  <option value="Contract">Contract / Consulting</option>
                  <option value="Open to Both">Open to Both</option>
                </select>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <label className={labelClass}>Resume (PDF or DOCX, max 5MB)</label>
              <div
                onClick={() => fileRef.current?.click()}
                className={`border ${COLORS.border} border-dashed bg-white p-6 rounded-sm text-center cursor-pointer hover:border-[#0366d6] transition`}
              >
                <Upload className={`w-6 h-6 mx-auto mb-2 ${COLORS.muted}`} />
                {resume ? (
                  <p className={`text-sm font-semibold ${COLORS.text}`}>{resume.name}</p>
                ) : (
                  <p className={`text-sm ${COLORS.muted}`}>Click to upload or drag and drop</p>
                )}
              </div>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.docx"
                onChange={handleFile}
                className="hidden"
              />
            </div>

            <div>
              <label className={labelClass}>Anything you'd like us to know</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={set('message')}
                className={`${inputClass} resize-none`}
                placeholder="Types of roles you're targeting, companies you admire, what you're not interested in, timeline..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`${COLORS.accentBg} text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-sm disabled:opacity-50`}
            >
              {loading ? 'Submitting...' : 'Submit Profile'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Talent;

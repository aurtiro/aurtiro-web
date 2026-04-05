import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import BlinkingCursor from '../components/BlinkingCursor';
import { COLORS } from '../lib/colors';
import { submitForm } from '../lib/submissionService';

type EngagementType = 'Employer' | 'Candidate' | 'General';

interface FormState {
  name: string;
  email: string;
  type: EngagementType;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', type: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitForm('contact', { ...form });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold uppercase mb-2">
        Contact<BlinkingCursor />
      </h1>
      <p className={`${COLORS.muted} text-sm mb-12`}>
        Remote-first, US-based. We typically respond within one business day.
      </p>

      {submitted ? (
        <div className={`border ${COLORS.border} bg-white p-8 rounded-sm text-center`}>
          <CheckCircle className={`w-10 h-10 ${COLORS.accent} mx-auto mb-4`} />
          <h2 className="text-lg font-bold uppercase mb-2">Message received</h2>
          <p className={`${COLORS.muted} text-sm`}>We'll be in touch within one business day.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-xs uppercase font-semibold ${COLORS.muted} mb-1`}>Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className={`w-full border ${COLORS.border} bg-white px-4 py-2 text-sm focus:outline-none focus:border-[#0366d6] rounded-sm`}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className={`block text-xs uppercase font-semibold ${COLORS.muted} mb-1`}>Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className={`w-full border ${COLORS.border} bg-white px-4 py-2 text-sm focus:outline-none focus:border-[#0366d6] rounded-sm`}
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className={`block text-xs uppercase font-semibold ${COLORS.muted} mb-1`}>I am a</label>
            <select
              value={form.type}
              onChange={e => setForm(f => ({ ...f, type: e.target.value as EngagementType }))}
              className={`w-full border ${COLORS.border} bg-white px-4 py-2 text-sm focus:outline-none focus:border-[#0366d6] rounded-sm`}
            >
              <option value="Employer">Employer / Hiring Manager</option>
              <option value="Candidate">Candidate / Job Seeker</option>
              <option value="General">General Inquiry</option>
            </select>
          </div>
          <div>
            <label className={`block text-xs uppercase font-semibold ${COLORS.muted} mb-1`}>Message *</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className={`w-full border ${COLORS.border} bg-white px-4 py-2 text-sm focus:outline-none focus:border-[#0366d6] rounded-sm resize-none`}
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${COLORS.accentBg} text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-sm disabled:opacity-50`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Building2, User } from 'lucide-react';

interface ContactFormState {
  fullName: string;
  email: string;
  university: string;
  purpose: string;
  subject: string;
  message: string;
}

const initialForm: ContactFormState = {
  fullName: '',
  email: '',
  university: '',
  purpose: 'Academic Guidance & Roadmaps',
  subject: '',
  message: ''
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormState, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject line is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      const ticketId = 'ALH-' + Math.floor(100000 + Math.random() * 900000);
      setIsSubmitting(false);
      setSubmittedTicket(ticketId);
      setFormData(initialForm);
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-850 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Engineering Inquiry & Mentorship
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Connect with the AI LearnHub Team
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Have questions about coursework, university research integration, GPU lab access, or technical feedback? Submit an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info & Academic Office */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Academic & Research Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AI LearnHub is maintained by AI researchers, university faculty, and industry engineers dedicated to open technical education.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>admissions@ailearnhub.engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Computing & Machine Intelligence Consortium</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Global Open Campus & Remote Labs</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <h4 className="text-sm font-semibold text-white mb-2">
                Response SLA for Engineering Students
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Academic roadmapping inquiries and technical lab questions are answered within 24 to 48 business hours by our student mentor network.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl">
            {submittedTicket ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have logged your request under reference ticket:
                </p>
                <div className="inline-block px-4 py-1.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-sm font-bold text-indigo-400">
                  {submittedTicket}
                </div>
                <p className="text-xs text-slate-400">
                  A verification confirmation has been simulated for your email address.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmittedTicket(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg cursor-pointer transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                        errors.fullName
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Student / University Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@university.edu"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* University */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      University or Institution
                    </label>
                    <input
                      type="text"
                      value={formData.university}
                      onChange={(e) =>
                        setFormData({ ...formData, university: e.target.value })
                      }
                      placeholder="e.g. Berkeley / MIT / IIT"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="Academic Guidance & Roadmaps">Academic Guidance & Roadmaps</option>
                      <option value="Course Feedback & Suggestions">Course Feedback & Suggestions</option>
                      <option value="Student Project Mentorship">Student Project Mentorship</option>
                      <option value="Technical Lab Issue or Bug">Technical Lab Issue or Bug</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Guidance on Deep Learning Capstone Project"
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your inquiry, curriculum question, or lab requirements..."
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-600/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-slate-850 bg-slate-900/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Everything you need to know about the curriculum, computing environments, prerequisites, and project portfolios.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-800 bg-slate-950/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-indigo-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-850/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Have a specific academic or research inquiry?</h4>
              <p className="text-xs text-slate-400">Our engineering mentorship team is happy to assist with roadmap planning.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm shadow-indigo-600/20"
          >
            Contact Team
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { useStudent } from '../context/StudentContext';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { enrolledCourseIds } = useStudent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Roadmaps', href: '#learning-paths' },
    { label: 'Courses', href: '#courses' },
    { label: 'Projects', href: '#projects' },
    { label: 'Quizzes', href: '#quizzes' },
    { label: 'AI Tools', href: '#ai-tools' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-slate-850/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span>AI LearnHub</span>
        </a>

        {/* Zone 2: 4-6 nav links, single-line, clean text hover */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-indigo-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#faq"
            className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-indigo-400 text-slate-400"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href="#dashboard"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
          >
            <span>Dashboard</span>
            <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 font-mono text-[10px] flex items-center justify-center">
              {enrolledCourseIds.length}
            </span>
          </a>

          <a
            href="#courses"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-600/30 transition-colors whitespace-nowrap"
          >
            <span>Start Learning</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-indigo-400 hover:text-indigo-300 hover:bg-slate-900 font-medium"
            >
              Student Dashboard ({enrolledCourseIds.length})
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Contact Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import {
  GraduationCap,
  Github,
  Linkedin,
  Twitter,
  Disc as Discord,
  Youtube,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-850 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors inline-flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>AI LearnHub</span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The open engineering portal for mastering artificial intelligence, mathematical optimization, deep learning architectures, and distributed systems. Built by engineers, for engineers.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Community"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Engineering Community"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Discord className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Engineering Lectures"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Curriculum Tracks */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Curriculum Tracks
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="hover:text-slate-200 transition-colors">
                  Python for HPC & NumPy
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-slate-200 transition-colors">
                  Classical AI & Heuristic Search
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-slate-200 transition-colors">
                  Supervised & Unsupervised ML
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-slate-200 transition-colors">
                  Deep Learning & Transformers
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-slate-200 transition-colors">
                  Vector DBs & Hybrid RAG
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering Roadmaps */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Roadmaps & Labs
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#learning-paths" className="hover:text-slate-200 transition-colors">
                  Beginner AI Foundations
                </a>
              </li>
              <li>
                <a href="#learning-paths" className="hover:text-slate-200 transition-colors">
                  Intermediate Vision & NLP
                </a>
              </li>
              <li>
                <a href="#learning-paths" className="hover:text-slate-200 transition-colors">
                  Advanced LLMs & Distributed MLOps
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-200 transition-colors">
                  Autonomous Vision Capstones
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-200 transition-colors">
                  Medical UNet Segmentation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Student Platform
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#dashboard" className="hover:text-slate-200 transition-colors">
                  Student Dashboard
                </a>
              </li>
              <li>
                <a href="#quizzes" className="hover:text-slate-200 transition-colors">
                  Algorithmic Quizzes
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="hover:text-slate-200 transition-colors">
                  AI Concept Explainer
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-200 transition-colors">
                  Engineering FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-200 transition-colors">
                  Academic Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} AI LearnHub. Academic Open Courseware.</span>
            <span aria-hidden="true">·</span>
            <span>MIT License / Creative Commons BY 4.0</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

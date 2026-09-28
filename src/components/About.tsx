import React, { useState } from 'react';
import { Layers, Cpu, Code2, ShieldCheck, Microscope } from 'lucide-react';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const pillars = [
    {
      number: '01',
      title: 'Mathematical Grounding',
      icon: Layers,
      description: 'We demystify the calculus of backpropagation, high-dimensional Hilbert spaces, and loss landscapes so you understand why algorithms converge, not just how to call them.'
    },
    {
      number: '02',
      title: 'Systems & Hardware Acceleration',
      icon: Cpu,
      description: 'Understanding SIMD vectorization, cache lines, CUDA thread warps, and VRAM memory allocation separates senior machine learning engineers from basic script runners.'
    },
    {
      number: '03',
      title: 'Production Architectures',
      icon: Code2,
      description: 'From ResNet residual skips to FlashAttention, LoRA adapters, and hybrid vector search pipelines, every concept is rooted in code that runs in modern industry stacks.'
    },
    {
      number: '04',
      title: 'Industrial Portfolio Rigor',
      icon: ShieldCheck,
      description: 'Students implement real datasets and metrics (PR-AUC, Dice similarity, inference latency profiling) producing verifiable projects ready for competitive engineering interviews.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-850 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            The Purpose of AI LearnHub
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Engineering Education Built for the Modern Intelligence Era.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Most online tutorials treat Artificial Intelligence as a collection of magical Python imports. AI LearnHub was founded by university researchers and systems engineers to give engineering undergraduates an authentic, rigorous, and completely open platform to master the full stack of Machine Learning.
          </p>
        </div>

        {/* Two-Zone Layout: Image & Mission Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              {!imgError ? (
                <img
                  src="/src/assets/images/about_ai_lab_1790598650476.jpg"
                  alt="Engineering students researching artificial intelligence in university computing lab"
                  className="w-full h-auto aspect-4/3 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full aspect-4/3 bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
                  <Microscope className="w-12 h-12 text-indigo-400 mb-2" />
                  <span className="text-slate-200 font-medium">Applied Machine Learning Research Lab</span>
                </div>
              )}
            </div>
            
            {/* Context callout */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
              <span>University Research & Engineering Partnership</span>
              <span aria-hidden="true">·</span>
              <span>Open-Access Curriculum</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Why Conventional AI Courses Fail Engineering Students
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Traditional engineering curricula often leave machine learning relegated to abstract math seminars, while online bootcamps teach surface-level API wrappers that quickly become obsolete. 
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                AI LearnHub bridges this divide: we teach you how memory bandwidth dictates LLM inference speeds, why numerical stability requires scaled dot products, and how to write clean PyTorch autograd kernels from scratch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-xl font-bold text-white font-mono tabular-nums">4 Core Tracks</div>
                <div className="text-xs text-slate-400 mt-1">Python, Classical AI, ML, Deep Learning & Vector DBs</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-xl font-bold text-indigo-400 font-mono tabular-nums">Zero Fluff</div>
                <div className="text-xs text-slate-400 mt-1">Directly grounded in peer-reviewed architectures</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid with Human Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, BookOpen, Cpu, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed kicker without static pills */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>Engineering Curriculum 2026</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 normal-case font-normal">Autonomous Systems, Deep Learning & LLMs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              Master Artificial Intelligence & Machine Learning for Real-World Engineering.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Move beyond black-box APIs. AI LearnHub teaches engineering students the mathematics, hardware memory layouts, PyTorch architectures, and production MLOps required to build autonomous and generative systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#learning-paths"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:text-white rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Explore Roadmaps</span>
              </a>

              <a
                href="#ai-tools"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI Study Tutor</span>
              </a>
            </div>

            {/* Proof & Quantified Stats Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">15,400+</div>
                <div className="text-xs text-slate-400 mt-0.5">Engineering Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">48</div>
                <div className="text-xs text-slate-400 mt-0.5">System & Vision Labs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Open Academic Access</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">98.4%</div>
                <div className="text-xs text-slate-400 mt-0.5">Concept Mastery Rate</div>
              </div>
            </div>

            {/* Trust markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                PyTorch 2.x & CUDA
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                Transformers & RAG
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                Zero Cost Tuition
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl shadow-indigo-950/40 group">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_ai_engineering_1790598633016.jpg"
                  alt="High performance AI neural computing cluster and tensor architecture"
                  className="w-full h-auto aspect-16/9 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full aspect-16/9 bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  <Cpu className="w-12 h-12 text-indigo-400 mb-3 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-200">Neural Tensor Computing Cluster</span>
                  <span className="text-xs text-slate-400 mt-1">High-Throughput Distributed AI Architecture</span>
                </div>
              )}

              {/* Minimal floating code snippet pill-free card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800/90 rounded-xl p-3.5 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/60 pb-2 mb-2 font-mono">
                  <span className="flex items-center gap-2 text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    flash_attention_kernel.cu
                  </span>
                  <span className="text-emerald-400 font-mono">CUDA 12.4</span>
                </div>
                <p className="text-xs font-mono text-slate-300 leading-tight">
                  <span className="text-indigo-400">__global__ void</span> scaled_dot_product(
                  <span className="text-cyan-300">Tensor</span>* Q, <span className="text-cyan-300">Tensor</span>* K, <span className="text-cyan-300">Tensor</span>* V)
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-1 border-t border-slate-800/40">
                  <span>Throughput: <strong className="text-white font-mono">1.82 TFLOPS/W</strong></span>
                  <span>Latency: <strong className="text-emerald-400 font-mono">0.42 ms</strong></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

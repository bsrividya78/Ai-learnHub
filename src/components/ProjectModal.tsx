import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { Project } from '../types';
import { X, Bookmark, Database, Cpu, CheckCircle2, ArrowRight, Layers, Terminal } from 'lucide-react';

export const ProjectModal: React.FC = () => {
  const {
    activeProjectModal,
    setActiveProjectModal,
    savedProjectIds,
    toggleSaveProject,
    showToast
  } = useStudent();

  const [simulatedLaunch, setSimulatedLaunch] = useState(false);

  if (!activeProjectModal) return null;

  const project: Project = activeProjectModal;
  const isSaved = savedProjectIds.includes(project.id);

  const handleLaunchLab = () => {
    setSimulatedLaunch(true);
    showToast(`Initializing cloud GPU container for ${project.title}...`, 'info');
    setTimeout(() => {
      setSimulatedLaunch(false);
      showToast(`Jupyter lab environment ready! Git repository cloned.`, 'success');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="font-semibold text-emerald-400">{project.difficulty} Level</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{project.estimatedTime}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setActiveProjectModal(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-850 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* Objective Statement */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-850">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 font-mono">
              Engineering Lab Objective
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.objective}
            </p>
          </div>

          {/* Dataset & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 font-mono">
                <Database className="w-4 h-4" />
                <span>Benchmark Dataset & Ground Truth</span>
              </div>
              <p className="text-xs text-slate-300">
                {project.dataset}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 font-mono">
                <Cpu className="w-4 h-4" />
                <span>Engineering Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 border border-slate-700/80 rounded text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Stages */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>System Architecture & Data Flow Stages</span>
            </h4>

            <div className="space-y-2.5">
              {project.architecture.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-400 font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-slate-300 leading-snug">
                    {stage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables / Verification */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-850 space-y-2">
            <h4 className="text-xs font-semibold text-white">
              Portfolio Verification Deliverables
            </h4>
            <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
              <li>Clean, PEP8-compliant modular Python package with setup.py and requirements.txt</li>
              <li>Jupyter notebook demonstrating exploratory data analysis and baseline vs. final loss curves</li>
              <li>Saved model weights, ONNX export file, and latency benchmarking suite script</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => toggleSaveProject(project.id)}
            className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
              isSaved
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span>{isSaved ? 'Saved in Workbench' : 'Bookmark to Workbench'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveProjectModal(null)}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={handleLaunchLab}
              disabled={simulatedLaunch}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm shadow-indigo-600/30"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{simulatedLaunch ? 'Starting Runtime...' : 'Launch Lab Environment'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/mockData';
import { useStudent } from '../context/StudentContext';
import { Project, Difficulty } from '../types';
import { Bookmark, Clock, Database, ChevronRight, Layers, Eye } from 'lucide-react';

export const Projects: React.FC = () => {
  const { savedProjectIds, toggleSaveProject, setActiveProjectModal } = useStudent();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (selectedDifficulty === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.difficulty === selectedDifficulty);
  }, [selectedDifficulty]);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-850 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Practical Engineering Labs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Production-Grade AI & ML Projects
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Move beyond generic toy tutorials. Build verifiable systems engineering capstones with benchmark datasets, edge inference pipelines, and production architectures.
            </p>
          </div>

          {/* Difficulty Filter Tabs */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => {
              const active = selectedDifficulty === diff;
              return (
                <button
                  key={diff}
                  type="button"
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => {
            const isSaved = savedProjectIds.includes(project.id);
            const hasCustomImage = project.image && !imgErrors[project.id];

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-950/90 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-xl"
              >
                <div>
                  {/* Optional featured image banner for key showcase projects */}
                  {project.image && (
                    <div className="relative aspect-16/9 overflow-hidden bg-slate-900 border-b border-slate-800">
                      {hasCustomImage ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setImgErrors((prev) => ({ ...prev, [project.id]: true }))
                          }
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-950 to-slate-900">
                          <Layers className="w-8 h-8 text-indigo-400 mb-1" />
                          <span className="text-xs text-slate-400">Autonomous Perception Lab</span>
                        </div>
                      )}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-700 text-[11px] font-mono text-indigo-300">
                          Featured Capstone
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Unboxed metadata line */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                      <span className="text-slate-300">{project.category}</span>
                      <span
                        className={`font-semibold ${
                          project.difficulty === 'Beginner'
                            ? 'text-emerald-400'
                            : project.difficulty === 'Intermediate'
                            ? 'text-cyan-400'
                            : 'text-indigo-400'
                        }`}
                      >
                        {project.difficulty}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Dataset details */}
                    <div className="flex items-start gap-1.5 text-xs text-slate-400 mb-4 bg-slate-900/60 p-2.5 rounded-lg border border-slate-850">
                      <Database className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] line-clamp-1">
                        <strong className="text-slate-300">Data:</strong> {project.dataset}
                      </span>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{project.estimatedTime}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-slate-900/40 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm shadow-indigo-600/20"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Blueprint</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleSaveProject(project.id)}
                    className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                      isSaved
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
                    }`}
                    title={isSaved ? 'Saved to Workbench' : 'Save to Workbench'}
                    aria-label="Save project to workbench"
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { LEARNING_PATHS, COURSES } from '../data/mockData';
import { useStudent } from '../context/StudentContext';
import { Check, Clock, Compass, Target, ArrowRight } from 'lucide-react';
import { Difficulty } from '../types';

export const LearningPaths: React.FC = () => {
  const { activePathId, setActivePathId, enrollCourse, enrolledCourseIds } = useStudent();
  const [selectedLevel, setSelectedLevel] = useState<Difficulty>('Beginner');

  const currentPath = LEARNING_PATHS.find((p) => p.level === selectedLevel) || LEARNING_PATHS[0];
  const isActive = activePathId === currentPath.id;

  const handleEnrollAll = () => {
    currentPath.coreCourses.forEach((courseId) => {
      if (!enrolledCourseIds.includes(courseId)) {
        enrollCourse(courseId);
      }
    });
    setActivePathId(currentPath.id);
  };

  return (
    <section id="learning-paths" className="py-20 md:py-28 border-t border-slate-850 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Structured Engineering Roadmaps
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Curated Learning Paths by Experience Level
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Progress smoothly from foundational mathematical computing to cutting-edge generative AI and distributed model training.
            </p>
          </div>

          {/* Interactive Level Segmented Tabs */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {(['Beginner', 'Intermediate', 'Advanced'] as Difficulty[]).map((level) => {
              const active = selectedLevel === level;
              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {level} Level
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Path Showcase Box */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {/* Top Info Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-mono">
                <span className="text-indigo-400 font-bold uppercase">{currentPath.level} Track</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {currentPath.duration}
                </span>
                {isActive && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Active Target
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {currentPath.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                {currentPath.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleEnrollAll}
                className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/20'
                }`}
              >
                {isActive ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Path Selected in Dashboard</span>
                  </>
                ) : (
                  <>
                    <Compass className="w-4 h-4" />
                    <span>Enroll in Full {currentPath.level} Path</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Prerequisites & Capstone summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 border-b border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <strong className="text-white shrink-0">Prerequisites:</strong>
              <span className="text-slate-400">{currentPath.prerequisites}</span>
            </div>
            <div className="flex items-start gap-2">
              <strong className="text-white shrink-0 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-amber-400" /> Capstone Project:
              </strong>
              <span className="text-indigo-300 font-medium">{currentPath.capstoneProject}</span>
            </div>
          </div>

          {/* Milestones Flow */}
          <div className="pt-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Milestone Progression Plan
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPath.milestones.map((m) => (
                <div
                  key={m.step}
                  className="rounded-xl p-5 bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-mono text-indigo-400 font-semibold">
                        Stage 0{m.step}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{m.duration}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-3">
                      {m.title}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {m.topics.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-indigo-400 text-xs font-bold leading-none mt-1">›</span>
                          <span className="leading-snug">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses covered in this path */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-medium text-slate-300">Core Courses Included:</span>
              {currentPath.coreCourses.map((cId) => {
                const c = COURSES.find((item) => item.id === cId);
                return c ? (
                  <a
                    key={cId}
                    href="#courses"
                    className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 ml-1"
                  >
                    {c.title.split(':')[0]}
                  </a>
                ) : null;
              })}
            </div>
            <a
              href="#courses"
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1"
            >
              <span>Explore course modules below</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

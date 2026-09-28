import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { COURSES, PROJECTS, LEARNING_PATHS } from '../data/mockData';
import { Course } from '../types';
import {
  GraduationCap,
  Trophy,
  BookOpen,
  CheckCircle,
  Flame,
  ArrowRight,
  Bookmark,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    enrolledCourseIds,
    completedLessonIds,
    quizScores,
    savedProjectIds,
    activePathId,
    streakDays,
    setActiveCourseModal,
    setActiveProjectModal,
    getCourseProgress,
    resetProgress
  } = useStudent();

  const [confirmReset, setConfirmReset] = useState(false);

  const enrolledCourses = COURSES.filter((c) => enrolledCourseIds.includes(c.id));
  const savedProjects = PROJECTS.filter((p) => savedProjectIds.includes(p.id));
  const activePath = LEARNING_PATHS.find((p) => p.id === activePathId) || LEARNING_PATHS[0];

  // Calculate total lessons available across enrolled courses
  const totalEnrolledLessons = enrolledCourses.reduce(
    (acc, course) => acc + course.lessons.length,
    0
  );

  // Completed lessons within currently enrolled courses
  const completedInEnrolled = enrolledCourses.reduce((acc, course) => {
    const completed = course.lessons.filter((l) => completedLessonIds.includes(l.id)).length;
    return acc + completed;
  }, 0);

  // Overall student completion percentage
  const overallProgress =
    totalEnrolledLessons > 0 ? Math.round((completedInEnrolled / totalEnrolledLessons) * 100) : 0;

  // Badges logic
  const badges = [
    {
      id: 'badge-starter',
      name: 'Matrix Pioneer',
      category: 'Foundations',
      desc: 'Enrolled in core Python HPC & Linear Algebra',
      unlocked: enrolledCourseIds.includes('course-python-ai'),
      icon: Layers
    },
    {
      id: 'badge-evaluator',
      name: 'Assessment Ace',
      category: 'Theory',
      desc: 'Scored 100% on any systems quiz',
      unlocked: Object.values(quizScores).some((q) => q.percentage === 100),
      icon: Trophy
    },
    {
      id: 'badge-deep',
      name: 'Transformer Architect',
      category: 'Deep Learning',
      desc: 'Enrolled in Deep Learning & Attention',
      unlocked: enrolledCourseIds.includes('course-deep-learning'),
      icon: Sparkles
    },
    {
      id: 'badge-practitioner',
      name: 'Lab Builder',
      category: 'Engineering',
      desc: 'Saved 2 or more production labs to workbench',
      unlocked: savedProjectIds.length >= 2,
      icon: Bookmark
    }
  ];

  return (
    <section id="dashboard" className="py-20 md:py-28 border-t border-slate-850 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 font-mono">
              <GraduationCap className="w-4 h-4" />
              <span>Engineering Student Portal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Student Learning Dashboard
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 font-mono">
              Active Path: <strong className="text-slate-200">{activePath.title}</strong>
              <span className="mx-2 text-slate-700">·</span>
              Level: <span className="text-indigo-400">{activePath.level}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs font-mono text-slate-300">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              <span>{streakDays} Day Study Streak</span>
            </div>

            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-950 border border-slate-800/80 rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Reset dashboard records"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Confirmation Modal for Reset */}
        {confirmReset && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="max-w-md w-full p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Reset Learning Progress?</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                This will reset your completed lessons, quiz scores, and saved projects back to clean baseline data. Your local storage records will be wiped.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setConfirmReset(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetProgress();
                    setConfirmReset(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg cursor-pointer"
                >
                  Confirm Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Metrics Overview Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>Courses Enrolled</span>
              <BookOpen className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              {enrolledCourses.length}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Active curriculum items</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>Completed Lessons</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tabular-nums">
              {completedLessonIds.length}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Across all coursework</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>Curriculum Mastery</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono tabular-nums">
              {overallProgress}%
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Based on enrolled modules</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>Saved Lab Projects</span>
              <Bookmark className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono tabular-nums">
              {savedProjects.length}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Pinned to engineering workbench</div>
          </div>
        </div>

        {/* Two-Column Layout: Courses in Progress + Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Enrolled Courses & Detailed Progress */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Active Course Enrollments</span>
                <span className="text-xs font-mono text-indigo-400">({enrolledCourses.length})</span>
              </h3>
              <a href="#courses" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium">
                <span>Browse more courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {enrolledCourses.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-slate-950 border border-slate-800">
                <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">No courses currently enrolled</p>
                <p className="text-xs text-slate-400 mt-1">Enroll in courses from the catalog to begin tracking your lessons.</p>
                <a
                  href="#courses"
                  className="mt-4 inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
                >
                  View Course Catalog
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {enrolledCourses.map((course: Course) => {
                  const progress = getCourseProgress(course.id);
                  const completedLessonsInThisCourse = course.lessons.filter((l) =>
                    completedLessonIds.includes(l.id)
                  ).length;

                  return (
                    <div
                      key={course.id}
                      className="p-5 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div>
                          <div className="text-[11px] font-mono text-indigo-400 mb-0.5">
                            {course.category} · {course.difficulty}
                          </div>
                          <h4 className="text-sm font-bold text-white">
                            {course.title}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <button
                            type="button"
                            onClick={() => setActiveCourseModal(course)}
                            className="px-3 py-1.5 text-xs font-semibold text-indigo-400 bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-800/50 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <span>Continue Course</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Progress Bar & Counter */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                          <span>
                            {completedLessonsInThisCourse} of {course.lessons.length} Lessons Finished
                          </span>
                          <span className="text-emerald-400 font-bold tabular-nums">{progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-850">
                          <div
                            className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Saved Labs Workbench */}
            {savedProjects.length > 0 && (
              <div className="pt-4">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-amber-400" />
                  <span>Pinned Engineering Labs</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {savedProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-slate-400 truncate">
                          {p.category} · {p.difficulty}
                        </div>
                        <div className="text-xs font-bold text-white truncate mt-0.5">
                          {p.title}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveProjectModal(p)}
                        className="px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-md shrink-0 cursor-pointer"
                      >
                        Blueprint
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Achievements & Quiz Performance */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Engineering Badges */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Earned Credentials & Badges</span>
              </h3>

              <div className="space-y-3">
                {badges.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.id}
                      className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
                        b.unlocked
                          ? 'bg-slate-900/60 border-slate-700'
                          : 'bg-slate-950/40 border-slate-850 opacity-50'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          b.unlocked
                            ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                            : 'bg-slate-900 text-slate-600 border border-slate-800'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{b.name}</span>
                          {b.unlocked && (
                            <span className="text-[10px] font-mono text-emerald-400">Unlocked</span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Assessment Records */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-3">
                Assessment Results History
              </h3>

              {Object.keys(quizScores).length === 0 ? (
                <div className="text-xs text-slate-400 py-3 text-center">
                  <span>No completed quizzes yet.</span>
                  <a href="#quizzes" className="text-indigo-400 block mt-1 hover:underline">
                    Take your first systems assessment
                  </a>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {Object.entries(quizScores).map(([qId, record]) => (
                    <div
                      key={qId}
                      className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-semibold text-slate-200">
                          {qId.replace('quiz-', '').replace('-', ' ').toUpperCase()}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          Date: {record.date}
                        </div>
                      </div>
                      <div className="text-right font-mono">
                        <div className="font-bold text-emerald-400">
                          {record.score}/{record.total}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {record.percentage}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

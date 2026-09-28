import React from 'react';
import { useStudent } from '../context/StudentContext';
import { Course } from '../types';
import { X, CheckCircle2, Clock, BookOpen, Star, User, Check, Layers } from 'lucide-react';

export const CourseModal: React.FC = () => {
  const {
    activeCourseModal,
    setActiveCourseModal,
    enrolledCourseIds,
    enrollCourse,
    unenrollCourse,
    completedLessonIds,
    toggleLessonCompletion,
    getCourseProgress
  } = useStudent();

  if (!activeCourseModal) return null;

  const course: Course = activeCourseModal;
  const isEnrolled = enrolledCourseIds.includes(course.id);
  const progress = getCourseProgress(course.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
              <span>{course.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{course.difficulty} Level</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-amber-400">
                <Star className="w-3 h-3 fill-amber-400" />
                {course.rating}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {course.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setActiveCourseModal(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-850 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* Course Overview & Instructor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-850 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 font-mono">Instructor</span>
              <div className="font-semibold text-white">{course.instructor.name}</div>
              <div className="text-slate-400 text-[11px]">{course.instructor.institution}</div>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 font-mono">Workload</span>
              <div className="font-semibold text-white">{course.estimatedHours} Total Hours</div>
              <div className="text-slate-400 text-[11px]">{course.totalLessons} Rigorous Modules</div>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 font-mono">Enrollment Status</span>
              <div className="font-semibold text-emerald-400">
                {isEnrolled ? `Enrolled (${progress}% Done)` : 'Not Enrolled'}
              </div>
              <div className="text-slate-400 text-[11px]">Free open access</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {course.description}
          </p>

          {/* Prerequisites */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
              Prerequisites & Mathematical Context
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.prerequisites.map((pre, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded-md text-slate-300"
                >
                  {pre}
                </span>
              ))}
            </div>
          </div>

          {/* Lessons List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                Course Syllabus & Modules ({course.lessons.length})
              </h4>
              <span className="text-xs text-slate-400">
                Click checks to log completed modules
              </span>
            </div>

            <div className="space-y-3">
              {course.lessons.map((lesson, index) => {
                const isCompleted = completedLessonIds.includes(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isCompleted
                        ? 'bg-slate-950/90 border-emerald-900/40 ring-1 ring-emerald-500/20'
                        : 'bg-slate-950/60 border-slate-800/90 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          onClick={() => toggleLessonCompletion(lesson.id)}
                          className={`mt-0.5 w-6 h-6 rounded-lg border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                            isCompleted
                              ? 'bg-emerald-600 border-emerald-500 text-white'
                              : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'
                          }`}
                          title={isCompleted ? 'Mark Incomplete' : 'Mark Completed'}
                          aria-label={`Toggle lesson ${lesson.title}`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>

                        <div>
                          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-1">
                            <span className="text-indigo-400 font-semibold">
                              Module 0{index + 1}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{lesson.duration}</span>
                          </div>
                          <h5 className="text-sm font-bold text-white mb-1.5">
                            {lesson.title}
                          </h5>
                          <p className="text-xs text-slate-300 leading-relaxed mb-2">
                            {lesson.summary}
                          </p>
                          <div className="p-2 rounded bg-slate-900/80 border border-slate-850 text-[11px] text-slate-400">
                            <strong className="text-slate-200">Key Engineering Takeaway: </strong>
                            {lesson.keyTakeaway}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            {isEnrolled ? (
              <span>Enrolled: {progress}% of lessons logged complete</span>
            ) : (
              <span>Enroll to track your progress on your Student Dashboard</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCourseModal(null)}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => {
                if (isEnrolled) {
                  unenrollCourse(course.id);
                } else {
                  enrollCourse(course.id);
                }
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                isEnrolled
                  ? 'bg-rose-950/50 text-rose-300 border border-rose-800/60 hover:bg-rose-900/60'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm shadow-indigo-600/30'
              }`}
            >
              {isEnrolled ? 'Unenroll Course' : 'Enroll in Course'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

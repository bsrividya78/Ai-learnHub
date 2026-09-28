import React, { useState, useMemo } from 'react';
import { COURSES } from '../data/mockData';
import { useStudent } from '../context/StudentContext';
import { Course } from '../types';
import { Search, BookOpen, Clock, Star, Users, Check, ArrowRight } from 'lucide-react';

export const Courses: React.FC = () => {
  const { enrolledCourseIds, enrollCourse, unenrollCourse, setActiveCourseModal, getCourseProgress } = useStudent();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = [
    'All',
    'Python',
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Data Science'
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.lessons.some((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      const matchesDifficulty =
        selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <section id="courses" className="py-20 md:py-28 border-t border-slate-850 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Rigorous Technical Courses
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core AI Engineering Curriculum
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Explore 5 specialized tracks spanning foundational high-performance Python, state-space AI, statistical machine learning, deep neural transformers, and vector databases.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, topics (e.g. PyTorch, SVD, Attention)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Difficulty Selector */}
            <div className="flex items-center gap-2 text-xs text-slate-400 self-start md:self-auto">
              <span className="font-medium text-slate-400">Level:</span>
              <div className="inline-flex p-0.5 bg-slate-900 border border-slate-800 rounded-lg">
                {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
                  <button
                    key={diff}
                    type="button"
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      selectedDifficulty === diff
                        ? 'bg-slate-800 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">No courses match your query</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try searching for different terms or reset your category and difficulty filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-indigo-400 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course: Course) => {
              const isEnrolled = enrolledCourseIds.includes(course.id);
              const progress = getCourseProgress(course.id);

              return (
                <div
                  key={course.id}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-lg"
                >
                  <div className="p-6">
                    {/* Unboxed metadata line with typographic separators */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                      <span>{course.category}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-indigo-400 font-semibold">{course.difficulty}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="flex items-center gap-0.5 text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Progress Bar (if enrolled) */}
                    {isEnrolled && (
                      <div className="mb-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                          <span>Course Progress</span>
                          <span className="text-emerald-400 font-bold tabular-nums">{progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Quick Specs */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-3 border-t border-slate-800/60 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {course.estimatedHours} hrs
                      </span>
                      <span aria-hidden="true" className="text-slate-700">·</span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        {course.totalLessons} lessons
                      </span>
                      <span aria-hidden="true" className="text-slate-700">·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {course.enrolledCount.toLocaleString()}
                      </span>
                    </div>

                    {/* Instructor */}
                    <div className="mt-3 text-xs text-slate-400">
                      <span className="text-slate-300 font-medium">{course.instructor.name}</span>
                      <span className="text-slate-400 block text-[11px] truncate">{course.instructor.institution}</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveCourseModal(course)}
                      className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Syllabus & Lessons</span>
                      <ArrowRight className="w-3 h-3 text-indigo-400" />
                    </button>

                    <button
                      type="button"
                      onClick={() => (isEnrolled ? unenrollCourse(course.id) : enrollCourse(course.id))}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                        isEnrolled
                          ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-rose-950/40 hover:text-rose-300 hover:border-rose-500/40'
                          : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm shadow-indigo-600/20'
                      }`}
                    >
                      {isEnrolled ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Enrolled</span>
                        </>
                      ) : (
                        <span>Enroll Now</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Project } from '../types';
import { COURSES } from '../data/mockData';

interface StudentContextType {
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  quizScores: Record<string, { score: number; total: number; percentage: number; date: string }>;
  savedProjectIds: string[];
  activePathId: string;
  streakDays: number;
  enrollCourse: (courseId: string) => void;
  unenrollCourse: (courseId: string) => void;
  toggleLessonCompletion: (lessonId: string) => void;
  saveQuizScore: (quizId: string, score: number, total: number) => void;
  toggleSaveProject: (projectId: string) => void;
  setActivePathId: (pathId: string) => void;
  resetProgress: () => void;
  activeCourseModal: Course | null;
  setActiveCourseModal: (course: Course | null) => void;
  activeProjectModal: Project | null;
  setActiveProjectModal: (project: Project | null) => void;
  toast: { text: string; type: 'success' | 'info' | 'error' } | null;
  showToast: (text: string, type?: 'success' | 'info' | 'error') => void;
  getCourseProgress: (courseId: string) => number;
}

const STORAGE_KEY = 'ai_learnhub_student_state_v1';

const defaultState = {
  enrolledCourseIds: ['course-python-ai', 'course-ml-core'],
  completedLessonIds: ['py-01', 'py-02', 'ml-01'],
  quizScores: {
    'quiz-python-ai': { score: 4, total: 4, percentage: 100, date: 'Yesterday' }
  },
  savedProjectIds: ['proj-01', 'proj-02'],
  activePathId: 'path-beginner',
  streakDays: 4
};

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.enrolledCourseIds || defaultState.enrolledCourseIds;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultState.enrolledCourseIds;
  });

  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.completedLessonIds || defaultState.completedLessonIds;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultState.completedLessonIds;
  });

  const [quizScores, setQuizScores] = useState<Record<string, { score: number; total: number; percentage: number; date: string }>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.quizScores || defaultState.quizScores;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultState.quizScores;
  });

  const [savedProjectIds, setSavedProjectIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.savedProjectIds || defaultState.savedProjectIds;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultState.savedProjectIds;
  });

  const [activePathId, setActivePathIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.activePathId || defaultState.activePathId;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultState.activePathId;
  });

  const [streakDays] = useState<number>(defaultState.streakDays);
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [toast, setToast] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      const dataToSave = {
        enrolledCourseIds,
        completedLessonIds,
        quizScores,
        savedProjectIds,
        activePathId,
        streakDays
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.error(e);
    }
  }, [enrolledCourseIds, completedLessonIds, quizScores, savedProjectIds, activePathId, streakDays]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ text, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const enrollCourse = (courseId: string) => {
    if (enrolledCourseIds.includes(courseId)) {
      showToast('You are already enrolled in this engineering course.', 'info');
      return;
    }
    setEnrolledCourseIds((prev) => [...prev, courseId]);
    const course = COURSES.find((c) => c.id === courseId);
    showToast(`Successfully enrolled in ${course ? course.title : 'course'}!`, 'success');
  };

  const unenrollCourse = (courseId: string) => {
    setEnrolledCourseIds((prev) => prev.filter((id) => id !== courseId));
    showToast('Course removed from your active curriculum.', 'info');
  };

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessonIds((prev) => {
      const isCompleted = prev.includes(lessonId);
      if (isCompleted) {
        showToast('Lesson marked incomplete.', 'info');
        return prev.filter((id) => id !== lessonId);
      } else {
        showToast('Lesson marked complete! Progress recorded.', 'success');
        return [...prev, lessonId];
      }
    });
  };

  const saveQuizScore = (quizId: string, score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    setQuizScores((prev) => ({
      ...prev,
      [quizId]: { score, total, percentage, date }
    }));
    showToast(`Assessment recorded: ${score}/${total} (${percentage}%)!`, 'success');
  };

  const toggleSaveProject = (projectId: string) => {
    setSavedProjectIds((prev) => {
      if (prev.includes(projectId)) {
        showToast('Project removed from saved workbench.', 'info');
        return prev.filter((id) => id !== projectId);
      } else {
        showToast('Project added to your engineering workbench!', 'success');
        return [...prev, projectId];
      }
    });
  };

  const setActivePathId = (pathId: string) => {
    setActivePathIdState(pathId);
    showToast('Learning path updated in your student roadmap.', 'success');
  };

  const resetProgress = () => {
    setEnrolledCourseIds(['course-python-ai']);
    setCompletedLessonIds([]);
    setQuizScores({});
    setSavedProjectIds([]);
    setActivePathIdState('path-beginner');
    showToast('Student dashboard progress reset to clean baseline.', 'info');
  };

  const getCourseProgress = (courseId: string): number => {
    const course = COURSES.find((c) => c.id === courseId);
    if (!course || course.lessons.length === 0) return 0;
    const completedInCourse = course.lessons.filter((l) => completedLessonIds.includes(l.id)).length;
    return Math.round((completedInCourse / course.lessons.length) * 100);
  };

  return (
    <StudentContext.Provider
      value={{
        enrolledCourseIds,
        completedLessonIds,
        quizScores,
        savedProjectIds,
        activePathId,
        streakDays,
        enrollCourse,
        unenrollCourse,
        toggleLessonCompletion,
        saveQuizScore,
        toggleSaveProject,
        setActivePathId,
        resetProgress,
        activeCourseModal,
        setActiveCourseModal,
        activeProjectModal,
        setActiveProjectModal,
        toast,
        showToast,
        getCourseProgress
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  keyTakeaway: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'Python' | 'Artificial Intelligence' | 'Machine Learning' | 'Deep Learning' | 'Data Science';
  difficulty: Difficulty;
  description: string;
  prerequisites: string[];
  estimatedHours: number;
  totalLessons: number;
  lessons: Lesson[];
  instructor: {
    name: string;
    role: string;
    institution: string;
  };
  rating: number;
  enrolledCount: number;
}

export interface LearningPathMilestone {
  step: number;
  title: string;
  topics: string[];
  duration: string;
}

export interface LearningPath {
  id: string;
  level: Difficulty;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  prerequisites: string;
  milestones: LearningPathMilestone[];
  coreCourses: string[];
  capstoneProject: string;
}

export interface Project {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  summary: string;
  objective: string;
  techStack: string[];
  dataset: string;
  architecture: string[];
  estimatedTime: string;
  image?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  description: string;
  questions: QuizQuestion[];
}

export interface StudentProgress {
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  quizScores: Record<string, { score: number; total: number; percentage: number; date: string }>;
  savedProjectIds: string[];
  activePathId: string | null;
  streakDays: number;
}

export interface AiToolItem {
  id: string;
  name: string;
  category: 'Frameworks' | 'Compute & Labs' | 'Tracking & MLOps' | 'Research & Datasets';
  description: string;
  url: string;
  useCase: string;
  badge: string;
}

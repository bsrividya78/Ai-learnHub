/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StudentProvider } from './context/StudentContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LearningPaths } from './components/LearningPaths';
import { Courses } from './components/Courses';
import { Projects } from './components/Projects';
import { Quizzes } from './components/Quizzes';
import { Dashboard } from './components/Dashboard';
import { AiTools } from './components/AiTools';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <StudentProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Section 1: Home / Hero */}
          <Hero />

          {/* Section 2: About */}
          <About />

          {/* Section 3: Learning Paths */}
          <LearningPaths />

          {/* Section 4: Courses */}
          <Courses />

          {/* Section 5: Projects */}
          <Projects />

          {/* Section 6: Quizzes */}
          <Quizzes />

          {/* Section 7: Student Dashboard */}
          <Dashboard />

          {/* Section 8: AI Tools */}
          <AiTools />

          {/* Section 9: FAQ */}
          <Faq />

          {/* Section 10: Contact */}
          <Contact />
        </main>

        {/* Section 11: Footer */}
        <Footer />

        {/* Interactive Modals & Notification Overlays */}
        <CourseModal />
        <ProjectModal />
        <Toast />
      </div>
    </StudentProvider>
  );
}

import React, { useState } from 'react';
import { QUIZZES } from '../data/mockData';
import { useStudent } from '../context/StudentContext';
import { Quiz, QuizQuestion } from '../types';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

export const Quizzes: React.FC = () => {
  const { quizScores, saveQuizScore } = useStudent();
  const [activeQuizId, setActiveQuizId] = useState<string>(QUIZZES[0].id);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const activeQuiz = QUIZZES.find((q) => q.id === activeQuizId) || QUIZZES[0];
  const currentQuestion: QuizQuestion = activeQuiz.questions[currentQuestionIndex];
  const previousScore = quizScores[activeQuiz.id];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    setUserAnswers((prev) => [...prev, selectedOption]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuiz.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Calculate score
      const finalAnswers = [...userAnswers];
      let correctCount = 0;
      activeQuiz.questions.forEach((q, idx) => {
        if (finalAnswers[idx] === q.correctAnswer) {
          correctCount++;
        }
      });
      saveQuizScore(activeQuiz.id, correctCount, activeQuiz.questions.length);
      setIsQuizCompleted(true);
    }
  };

  const handleResetQuiz = (quizId?: string) => {
    if (quizId) setActiveQuizId(quizId);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserAnswers([]);
    setIsQuizCompleted(false);
  };

  const scoreCount = userAnswers.reduce((acc, ans, idx) => {
    return ans === activeQuiz.questions[idx]?.correctAnswer ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((scoreCount / activeQuiz.questions.length) * 100);

  return (
    <section id="quizzes" className="py-20 md:py-28 border-t border-slate-850 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Formative Assessment Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Interactive Algorithmic & Systems Quizzes
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Test your comprehension of memory buffers, loss landscapes, attention scaling, and optimization dynamics. Instant explanations for every choice.
          </p>
        </div>

        {/* Quiz Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {QUIZZES.map((quiz: Quiz) => {
            const isSelected = activeQuizId === quiz.id;
            const record = quizScores[quiz.id];

            return (
              <button
                key={quiz.id}
                type="button"
                onClick={() => handleResetQuiz(quiz.id)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-md shadow-indigo-950/50 ring-1 ring-indigo-500'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>{quiz.category}</span>
                  <span className="text-indigo-400 font-semibold">{quiz.difficulty}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {quiz.title}
                </h3>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800/80">
                  <span className="text-slate-400 font-mono">
                    {quiz.questions.length} Questions
                  </span>
                  {record ? (
                    <span className="text-emerald-400 font-mono font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Passed {record.score}/{record.total} ({record.percentage}%)
                    </span>
                  ) : (
                    <span className="text-slate-400">Not attempted</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Quiz Player Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl p-6 sm:p-8">
          {!isQuizCompleted ? (
            <div>
              {/* Question Tracker Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                    Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400">{activeQuiz.title}</span>
                </div>

                {previousScore && (
                  <span className="text-xs text-slate-400 font-mono">
                    Best: <strong className="text-white">{previousScore.percentage}%</strong>
                  </span>
                )}
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)) / activeQuiz.questions.length) * 100}%`
                  }}
                />
              </div>

              {/* Question Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-6 leading-relaxed">
                {currentQuestion.question}
              </h3>

              {/* Options List */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctAnswer;
                  
                  let optionStyles = 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700 hover:bg-slate-900';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyles = 'border-emerald-500/80 bg-emerald-950/30 text-emerald-200 ring-1 ring-emerald-500/50';
                    } else if (isSelected && !isCorrect) {
                      optionStyles = 'border-rose-500/80 bg-rose-950/30 text-rose-200 ring-1 ring-rose-500/50';
                    } else {
                      optionStyles = 'border-slate-850 bg-slate-950/30 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyles = 'border-indigo-500 bg-indigo-950/40 text-white ring-1 ring-indigo-500';
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${optionStyles}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 leading-snug">{option}</span>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box (shown upon submit) */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 mb-6 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-indigo-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Engineering Explanation:</span>
                  </div>
                  <p className="leading-relaxed text-slate-300">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">
                  {selectedOption === null
                    ? 'Select an option to evaluate'
                    : isAnswerSubmitted
                    ? 'Review explanation above'
                    : 'Option chosen'}
                </span>

                {!isAnswerSubmitted ? (
                  <button
                    type="button"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>
                      {currentQuestionIndex + 1 < activeQuiz.questions.length
                        ? 'Next Question'
                        : 'View Final Score'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed Results Screen */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                <Award className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Assessment Completed!
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                {activeQuiz.title}
              </p>

              <div className="max-w-xs mx-auto p-5 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                <div className="text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
                  {scoreCount} / {activeQuiz.questions.length}
                </div>
                <div className="text-sm font-semibold text-emerald-400 mb-2">
                  {percentage}% Score ({percentage >= 75 ? 'Distinction Pass' : 'Review Recommended'})
                </div>
                <p className="text-xs text-slate-400">
                  This score is automatically logged into your Student Dashboard credentials.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => handleResetQuiz()}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span>Retake Assessment</span>
                </button>

                <a
                  href="#dashboard"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm shadow-indigo-600/20"
                >
                  <span>Go to Student Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

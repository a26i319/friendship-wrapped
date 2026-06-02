"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuestionCard } from "./QuestionCard";
import { AnswerOption } from "./AnswerOption";
import { QuizProgressBar } from "./QuizProgressBar";
import { FeedbackMessage } from "./FeedbackMessage";
import type { QuizQuestion, QuizAnswer } from "@/types/quiz";
import { CORRECT_FEEDBACK, WRONG_FEEDBACK } from "@/data/quizData";

interface QuizScreenProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

export function QuizScreen({ questions, onComplete }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const feedbackMessage = useMemo(() => {
    if (!selectedAnswerId) return "";

    const isCorrect = selectedAnswerId === currentQuestion.correctAnswerId;
    const feedbackArray = isCorrect ? CORRECT_FEEDBACK : WRONG_FEEDBACK;
    return feedbackArray[selectedAnswerId.charCodeAt(0) % feedbackArray.length];
  }, [selectedAnswerId, currentQuestion.correctAnswerId]);

  const handleSelectAnswer = (optionId: string) => {
    if (showFeedback || selectedAnswerId) return;

    setSelectedAnswerId(optionId);
    setShowFeedback(true);

    const isCorrect = optionId === currentQuestion.correctAnswerId;
    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedAnswerId: optionId,
        isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const score = answers.filter((a) => a.isCorrect).length;
      onComplete?.(score);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswerId(null);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevAnswer = answers[currentIndex - 1];
      setSelectedAnswerId(prevAnswer?.selectedAnswerId || null);
      setShowFeedback(true);
      setAnswers(answers.slice(0, -1));
    }
  };

  const score = answers.filter((a) => a.isCorrect).length;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 px-4 py-12 gap-8">
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 rounded-full bg-pink-100 opacity-20 blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-purple-100 opacity-15 blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
      />

      {/* Progress bar */}
      <QuizProgressBar
        current={currentIndex + 1}
        total={questions.length}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full space-y-6"
          >
            {/* Question */}
            <QuestionCard
              question={currentQuestion.question}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
            />

            {/* Options */}
            <div className="space-y-3 w-full">
              {currentQuestion.options.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AnswerOption
                    text={option.text}
                    isSelected={selectedAnswerId === option.id}
                    isCorrect={option.id === currentQuestion.correctAnswerId}
                    showResult={showFeedback}
                    onClick={() => handleSelectAnswer(option.id)}
                    disabled={!!selectedAnswerId}
                  />
                </motion.div>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <FeedbackMessage
                message={feedbackMessage}
                isVisible={showFeedback}
                isCorrect={selectedAnswerId === currentQuestion.correctAnswerId}
              />
            )}

            {/* Score tracker */}
            {showFeedback && (
              <motion.div
                className="text-center text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Score: {score} / {answers.length}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {showFeedback && (
        <motion.div
          className="flex gap-4 items-center justify-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 text-pink-600 font-semibold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>

          <motion.button
            onClick={handleNext}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              isLastQuestion
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                : "bg-white/80 backdrop-blur-md border border-pink-200 text-pink-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLastQuestion ? "Finish Quiz" : "Next →"}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

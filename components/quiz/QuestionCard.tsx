"use client";

import { motion } from "framer-motion";

interface QuestionCardProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <motion.div
      className="w-full max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-500">
          Question {questionNumber} of {totalQuestions}
        </p>
      </div>

      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {question}
      </motion.h2>
    </motion.div>
  );
}

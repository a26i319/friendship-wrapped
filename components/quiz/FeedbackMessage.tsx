"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FeedbackMessageProps {
  message: string;
  isVisible: boolean;
  isCorrect: boolean;
}

export function FeedbackMessage({
  message,
  isVisible,
  isCorrect,
}: FeedbackMessageProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={`p-4 rounded-xl text-center font-medium ${
            isCorrect
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";

interface QuizProgressBarProps {
  current: number;
  total: number;
}

export function QuizProgressBar({ current, total }: QuizProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full max-w-2xl">
      <div className="relative h-2 w-full rounded-full bg-pink-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

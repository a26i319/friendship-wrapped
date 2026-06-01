"use client";

import { motion } from "framer-motion";

interface LoadingStepProps {
  message: string;
  isActive: boolean;
  isComplete: boolean;
}

export function LoadingStep({
  message,
  isActive,
  isComplete,
}: LoadingStepProps) {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isComplete ? (
        <motion.div
          className="w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-xs">✓</span>
        </motion.div>
      ) : (
        <motion.div
          className="w-5 h-5 rounded-full border-2 border-pink-300 flex-shrink-0"
          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
        />
      )}
      <p
        className={`text-sm transition-colors ${
          isComplete
            ? "text-gray-400"
            : isActive
              ? "text-pink-600 font-medium"
              : "text-gray-500"
        }`}
      >
        {message}
      </p>
    </motion.div>
  );
}

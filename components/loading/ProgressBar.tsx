"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full max-w-xs">
      <div className="relative h-1.5 w-full rounded-full bg-pink-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="h-2 rounded-full bg-pink-300"
          animate={{
            width: i === current ? 24 : 8,
            backgroundColor: i === current ? "#ec4899" : "#d1d5db",
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}

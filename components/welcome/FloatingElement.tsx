"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
  emoji: string;
  delay: number;
  duration: number;
  top: string;
  right: string;
}

export function FloatingElement({
  emoji,
  delay,
  duration,
  top,
  right,
}: FloatingElementProps) {
  return (
    <motion.div
      className="absolute text-4xl pointer-events-none"
      style={{ top, right }}
      animate={{
        y: [0, -30, 0],
        x: [0, 10, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
      }}
    >
      {emoji}
    </motion.div>
  );
}

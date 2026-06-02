"use client";

import { motion } from "framer-motion";

interface EndingMessageProps {
  text: string;
  delay: number;
  isLast?: boolean;
}

export function EndingMessage({
  text,
  delay,
  isLast = false,
}: EndingMessageProps) {
  const isVersion = text.includes("Version");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`${isVersion ? "mb-8" : "mb-6"}`}
    >
      <p
        className={`text-center leading-relaxed ${
          isVersion
            ? "text-lg font-semibold text-gray-700"
            : "text-gray-600"
        }`}
      >
        {text}
      </p>

      {isLast && (
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          <div className="h-1 w-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full" />
        </motion.div>
      )}
    </motion.div>
  );
}

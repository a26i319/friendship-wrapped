"use client";

import { motion } from "framer-motion";
import type { ResultCard } from "@/types/results";

interface ResultCardProps {
  card: ResultCard;
  index: number;
  isInsight?: boolean;
}

export function ResultCardComponent({
  card,
  index,
  isInsight = false,
}: ResultCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  };

  const borderColor = {
    stat: "border-pink-200",
    insight: "border-purple-200",
    verdict: "border-blue-200",
  };

  const bgColor = {
    stat: "from-pink-50 to-white",
    insight: "from-purple-50 to-white",
    verdict: "from-blue-50 to-white",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`rounded-2xl border-2 ${borderColor[card.type]} bg-gradient-to-br ${bgColor[card.type]} p-6 backdrop-blur-md`}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          {card.title}
        </p>

        {card.value && (
          <motion.h3
            className="text-3xl font-bold text-gray-800"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          >
            {card.value}
          </motion.h3>
        )}

        {card.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>
        )}
      </div>

      {/* Accent line */}
      <motion.div
        className={`mt-4 h-1 rounded-full ${
          card.type === "stat"
            ? "bg-gradient-to-r from-pink-400 to-pink-300"
            : card.type === "insight"
              ? "bg-gradient-to-r from-purple-400 to-purple-300"
              : "bg-gradient-to-r from-blue-400 to-blue-300"
        }`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
      />
    </motion.div>
  );
}

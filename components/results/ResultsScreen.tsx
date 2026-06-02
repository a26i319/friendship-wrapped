"use client";

import { motion } from "framer-motion";
import { ResultCardComponent } from "./ResultCard";
import { ScoreCircle } from "./ScoreCircle";
import { getResultsByScore } from "@/data/resultsData";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onContinue?: () => void;
}

export function ResultsScreen({
  score,
  totalQuestions,
  onContinue,
}: ResultsScreenProps) {
  const resultCards = getResultsByScore(score, totalQuestions);

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

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your Results
        </motion.h1>

        {/* Score circle */}
        <ScoreCircle score={score} total={totalQuestions} />

        {/* Results cards */}
        <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {resultCards.map((card, index) => (
            <ResultCardComponent
              key={card.id}
              card={card}
              index={index}
            />
          ))}
        </motion.div>

        {/* Continue button */}
        <motion.button
          onClick={onContinue}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See You Next Time ✨
        </motion.button>
      </motion.div>
    </div>
  );
}

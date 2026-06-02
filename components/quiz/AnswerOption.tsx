"use client";

import { motion } from "framer-motion";

interface AnswerOptionProps {
  text: string;
  isSelected: boolean;
  isCorrect?: boolean;
  showResult: boolean;
  onClick: () => void;
  disabled: boolean;
}

export function AnswerOption({
  text,
  isSelected,
  isCorrect,
  showResult,
  onClick,
  disabled,
}: AnswerOptionProps) {
  const getStyle = () => {
    if (!showResult) {
      return isSelected
        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-pink-500"
        : "bg-white/80 backdrop-blur-md border-pink-200 text-gray-800 hover:border-pink-400";
    }

    if (isSelected && isCorrect) {
      return "bg-green-100 border-green-400 text-green-800";
    }

    if (isSelected && !isCorrect) {
      return "bg-red-100 border-red-400 text-red-800";
    }

    if (isCorrect) {
      return "bg-green-50 border-green-300 text-green-800";
    }

    return "bg-white/80 border-pink-200 text-gray-500 opacity-60";
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || showResult}
      className={`w-full p-4 rounded-2xl border-2 font-medium text-left transition-all font-roboto ${getStyle()}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={!showResult && !disabled ? { scale: 1.02 } : {}}
      whileTap={!showResult && !disabled ? { scale: 0.98 } : {}}
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {text}
    </motion.button>
  );
}

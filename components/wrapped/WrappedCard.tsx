"use client";

import { motion } from "framer-motion";
import type { WrappedCard } from "@/types/wrapped";

interface CardProps {
  card: WrappedCard;
  isActive: boolean;
}

export function WrappedCardComponent({ card, isActive }: CardProps) {
  return (
    <motion.div
      className="w-full max-w-sm"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={
        isActive
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 20 }
      }
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 via-white to-purple-100 p-8 shadow-xl backdrop-blur-md border border-white/50">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          {/* Emoji */}
          {card.emoji && (
            <motion.div
              className="text-6xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {card.emoji}
            </motion.div>
          )}

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800">{card.title}</h2>

          {/* Value (if stat type) */}
          {card.value && (
            <motion.div
              className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              animate={isActive ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {card.value}
            </motion.div>
          )}

          {/* Description */}
          {card.description && (
            <motion.p
              className="text-gray-600 text-lg max-w-xs"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {card.description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

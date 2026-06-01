"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { WrappedCardComponent } from "./WrappedCard";
import { ProgressIndicator } from "./ProgressIndicator";
import { Button } from "@/components/ui/Button";
import type { WrappedCard } from "@/types/wrapped";

interface WrappedScreenProps {
  cards: WrappedCard[];
  onComplete?: () => void;
}

export function WrappedScreen({ cards, onComplete }: WrappedScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragRef = useRef<number>(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;
    const swipe = Math.abs(offsetX) > 50 || Math.abs(velocityX) > 500;

    if (swipe) {
      if (offsetX > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  const isLastCard = currentIndex === cards.length - 1;

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

      {/* Card section */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <motion.div
          drag="x"
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <WrappedCardComponent
              key={cards[currentIndex].id}
              card={cards[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <ProgressIndicator current={currentIndex} total={cards.length} />

      {/* Navigation */}
      <div className="flex gap-4 items-center justify-center z-10">
        <motion.button
          onClick={goToPrevious}
          className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 text-pink-600 font-semibold hover:bg-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>

        <motion.button
          onClick={isLastCard ? onComplete : goToNext}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            isLastCard
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
              : "bg-white/80 backdrop-blur-md border border-pink-200 text-pink-600"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLastCard ? "Finish" : "Next →"}
        </motion.button>
      </div>
    </div>
  );
}

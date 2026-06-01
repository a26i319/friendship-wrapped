"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingStep } from "./LoadingStep";
import { ProgressBar } from "./ProgressBar";
import type { LoadingStep as LoadingStepType } from "@/types/loading";

const LOADING_STEPS: LoadingStepType[] = [
  { id: "1", message: "Initializing cringe..." },
  { id: "2", message: "Loading our friendship database..." },
  { id: "3", message: "Preparing unnecessary project..." },
];

const STEP_DURATION = 1200;
const TOTAL_DURATION = LOADING_STEPS.length * STEP_DURATION + 800;

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => Math.min(prev + 1, LOADING_STEPS.length));
    }, STEP_DURATION);

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          onComplete?.();
        }, 200);
      }
    }, 30);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-pink-100 opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple-100 opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Heading */}
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Unnecessary Project For You
          </motion.h1>
        </div>

        {/* Loading steps */}
        <div className="w-full space-y-3">
          {LOADING_STEPS.map((step, index) => (
            <LoadingStep
              key={step.id}
              message={step.message}
              isActive={currentStep === index}
              isComplete={currentStep > index}
            />
          ))}
        </div>

        {/* Progress bar */}
        <ProgressBar progress={progress} />

        {/* Loading animation dots */}
        <motion.div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-pink-300"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

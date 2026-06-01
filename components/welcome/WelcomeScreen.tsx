"use client";

import { motion } from "framer-motion";
import { FloatingElement } from "./FloatingElement";
import { Button } from "@/components/ui/Button";

interface WelcomeScreenProps {
  onStart?: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 px-4 relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingElement emoji="💕" delay={0} duration={4} top="10%" right="5%" />
      <FloatingElement emoji="✨" delay={0.5} duration={5} top="20%" right="15%" />
      <FloatingElement emoji="🎀" delay={1} duration={4.5} top="70%" right="8%" />
      <FloatingElement emoji="💫" delay={1.5} duration={5.5} top="60%" right="25%" />

      {/* Blurred background blobs */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 rounded-full bg-pink-100 opacity-20 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-purple-100 opacity-15 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Welcome to the most{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            unnecessary project
          </span>{" "}
          I have ever built.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I accidentally spent too much time making this
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button onClick={onStart}>Start</Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

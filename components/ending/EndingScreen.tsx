"use client";

import { motion } from "framer-motion";
import { EndingMessage } from "./EndingMessage";
import { ENDING_CONTENT } from "@/data/endingData";

interface EndingScreenProps {
  onClose?: () => void;
}

export function EndingScreen({ onClose }: EndingScreenProps) {
  const totalDelay =
    ENDING_CONTENT.messages[ENDING_CONTENT.messages.length - 1].delay + 1.2;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 px-4 py-12">
      {/* Subtle background elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-pink-100 opacity-15 blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-purple-100 opacity-10 blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Messages */}
        <div className="w-full text-center space-y-1">
          {ENDING_CONTENT.messages.map((message, index) => (
            <EndingMessage
              key={message.id}
              text={message.text}
              delay={message.delay}
              isLast={index === ENDING_CONTENT.messages.length - 1}
            />
          ))}
        </div>

        {/* Action button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: totalDelay }}
        >
          <motion.button
            onClick={onClose}
            className="px-8 py-3 rounded-full border border-pink-200 text-gray-700 font-medium hover:bg-white/50 transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ENDING_CONTENT.footer.closeText}
          </motion.button>
        </motion.div>

        {/* Version footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: totalDelay + 0.3 }}
        >
          <p className="text-xs text-gray-400">
            {ENDING_CONTENT.footer.version}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

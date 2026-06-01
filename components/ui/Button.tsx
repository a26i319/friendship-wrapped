"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-lg transition-all ${className}`}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(236, 72, 153, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      {children}
    </motion.button>
  );
}

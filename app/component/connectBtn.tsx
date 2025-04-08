"use client";

import { motion } from "framer-motion";

interface ConnectBtnProps {
  heading: string;
  onClick?: () => void; // optional onClick
}

export const ConnectBtn = ({ heading, onClick }: ConnectBtnProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative overflow-hidden rounded-4xl text-xs border border-gray-400 font-semibold p-3 flex flex-row gap-2"
      whileHover="hover"
      variants={{
        hover: { x: [0, -2, 2, -2, 2, 0] },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <span className="relative z-10 inline-flex rounded-full h-3 w-3 mt-0.5 animate-bounce bg-white" />
      
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-blue-400"
        initial={{ height: "0%" }}
        variants={{
          hover: { height: "100%" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <span className="relative z-10">{heading}</span>
    </motion.button>
  );
};

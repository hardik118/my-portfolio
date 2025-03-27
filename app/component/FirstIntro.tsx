"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const languages = [
  "Hello", "Hola", "नमस्ते", "Bonjour", "你好",
  "こんにちは", "안녕하세요", "Здравствуйте", "Ciao", "مرحبا"
];

export default function HelloAnimation() {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (index < languages.length - 1) {
      const timer = setTimeout(() => setIndex((prev) => prev + 1), 200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsExiting(true), 500); // Start exit animation
    }
  }, [index]);

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center text-4xl font-bold bg-black z-50 w-full h-full"
      initial={{ opacity: 1, x: 0 }}
      animate={isExiting ? { x: "100vw" } : { x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (isExiting) setIndex(-1); // Remove component after animation
      }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {index >= 0 ? languages[index] : null}
      </motion.span>
    </motion.div>
  );
}

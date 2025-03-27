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
      setTimeout(() => setIsExiting(true), 1000);
    }
  }, [index]);

  return (
    <motion.div
  className="fixed inset-0 flex justify-center items-center text-4xl font-bold bg-black text-white z-30 w-full h-full  pointer-events-none"
  initial={{ opacity: 1, scale: 1 }}
  animate={
    isExiting
      ? { opacity: 0, scale: 2.5, transition: { duration: 0.8, ease: "easeInOut" } }
      : { opacity: 1, scale: 1 }
  }
>
  <motion.span
    initial={{ opacity: 1 }}
    animate={isExiting ? { opacity: 0, scale: 1.5 } : { opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {languages[index]}
  </motion.span>
</motion.div>

  );
}

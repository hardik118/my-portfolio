"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const ExperienceCard = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="h-full w-full flex flex-col items-center justify-center px-4">
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-center gap-6 md:gap-12"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Left Card */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:w-80 h-64 border border-gray-300 shadow-xl flex flex-col justify-end p-4 gap-2 rounded-lg"
          variants={{
            hidden: { x: -50, opacity: 0, scale: 0.9 },
            visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
          }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
        >
          <h1 className="text-sm text-green-500">Web Developer</h1>
          <h1 className="text-sm text-gray-400">thEquals</h1>
          <h1 className="text-xs text-gray-400">March 24 - March 25</h1>
          <h1 className="text-xs text-gray-600">
            Part of the core team , helped in  building and planning website  from point zero.
          </h1>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:w-80 h-64 border border-gray-300 shadow-xl flex flex-col justify-end p-4 gap-2 rounded-lg"
          variants={{
            hidden: { x: 50, opacity: 0, scale: 0.9 },
            visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
          }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
        >
          <h1 className="text-sm text-yellow-400">Front-end engineer </h1>
          <h1 className="text-sm text-gray-400">Outlier AI</h1>
          <h1 className="text-xs text-gray-400">Feb 23 - Jun 24</h1>
          <h1 className="text-xs text-gray-600">
            Developed LLM training models, built beautiful UI components, and wrote unit tests.
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

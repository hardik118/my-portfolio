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
    <div ref={ref} className="h-full w-full flex flex-col items-center justify-center">
      <motion.div
        className="flex w-full b max-w-5xl items-center justify-between" // Added `flex` and `gap-12`
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Left Card */}
        <motion.div
          className="w-80 h-64  border-gray-300 border  shadow-xl flex flex-col justify-end p-4 gap-2  rounded-lg"
          variants={{
            hidden: { x: -50, opacity: 0, scale: 0.9 },
            visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
          }}
          whileHover={{
            scale: 1.25,
            y: -10, // Moves slightly up (not too much)
            transition: { type: "spring", stiffness: 200, damping: 10 }, // Smooth bounce effect
          }}
        >
         <h1 className="text-sm text-green-500">Lead web Dev</h1>
         <h1 className="text-sm text-gray-400">High Frequency Trading platform</h1>
         <h1 className="text-xs text-gray-400 ">march 24 - march 25 </h1>
         <h1 className="text-xs text-gray-600">Worked as a lead web dev for the organization while heading a team of 5 people , guiding the team to building the entire website from strach </h1>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="w-80 h-64  border-gray-300 border shadow-xl flex  flex-col justify-end p-4 gap-2  rounded-lg"
          variants={{
            hidden: { x: 50, opacity: 0, scale: 0.9 },
            visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
          }}
          whileHover={{
            scale: 1.25,
            y: -10, // Moves slightly up (not too much)
            transition: { type: "spring", stiffness: 200, damping: 10 }, // Smooth bounce effect
          }}
        >
           <h1 className="text-sm text-yellow-400">JS, Cpp Coder</h1>
         <h1 className="text-sm text-gray-400">Outlier Ai</h1>
         <h1 className="text-xs text-gray-400 ">Feb 23 - Jun 24 </h1>
         <h1 className="text-xs text-gray-600">Worked as a js and cpp coder for Organization helping train llm models, writing beautifull component  and unit test for codes and components </h1>
       
        </motion.div>
      </motion.div>
    </div>
  );
};

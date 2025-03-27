'use client';

import { SkillCard } from "./Skillcard";
import { Skillstwo } from "./skills2";
import { Skillsthree } from "./Skills3";
import { SkillsFour } from "./Skills4";
import { motion } from "framer-motion";

export const Skills = () => {
  const cardVarint = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } }
  };

  return (
    <div className="h-auto flex flex-col items-center py-4">
      <h1 className="text-purple-600 text-lg md:text-xl font-semibold mb-4">What Can I Do For You.</h1>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {[SkillCard, Skillstwo, Skillsthree, SkillsFour].map((Component, index) => (
          <motion.div 
            key={index} 
            className="w-full sm:w-[48%] lg:w-[23%]" 
            variants={cardVarint} 
            whileInView="visible" 
            initial="hidden"  
            viewport={{ once: true }}
          >
            <Component />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

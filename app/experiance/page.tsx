"use client";

import { FolderKanban } from "lucide-react";
import { DescCard } from "../component/DescCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define the type for an experience entry
interface Experience {
  name: string;
  Experiance: boolean;
  techStack: string;
  date: string;
  description: string[];
  link: string;
  imgSrc: string;
}

// Experience data
const experienceData: Experience[] = [
  {
    name: "Fullstack Web Developer",
    Experiance: true,
    techStack: "Thequals",
    date: "2024",
    description: [
      "Architected and developed a high-performance web platform for real-time trading, ensuring ultra-low latency and seamless user experience.",
      "Led the frontend and backend development, optimizing data streaming, order execution, and live market analytics.",
      "Integrated real-time WebSocket communication for instant trade updates and market movements.",
      "Enhanced system reliability and scalability, reducing latency and improving execution speed.",
      "Implemented secure authentication and risk management features to protect user assets and data integrity.",
      "Optimized UI/UX for traders, ensuring a fast, responsive, and intuitive trading experience."
    ],    
    link: "https://yourprojectlink.com",
    imgSrc: "/LWD.png",
  },
  {
    name: "FrontEnd Engineering",
    Experiance: true,
    techStack: "Outlier AI",
    date: "2023",
    description: [
      "Developed high-performance algorithms in JavaScript and C++ for AI-driven data analysis and anomaly detection.",
      "Optimized AI models for real-time pattern recognition and predictive analytics.",
      "Implemented efficient data structures and algorithms to enhance processing speed and scalability.",
      "Collaborated with machine learning engineers to fine-tune AI models for anomaly detection.",
      "Improved system efficiency by refactoring core logic and reducing execution time.",
      "Built modular, maintainable, and scalable codebases for AI-driven applications."
    ],
    link: "https://yourprojectlink.com",
    imgSrc: "/JSCPPCODER.png",
  },
];

// Card Component
function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <DescCard
        Experiance={experience.Experiance}
        link={experience.link}
        src={experience.imgSrc}
        name={experience.name}
        date={experience.date}
        techStack={experience.techStack}
        description={experience.description}
      />
    </motion.div>
  );
}

// Main Page Component
export default function ExperiencePage() {
  return (
    <div>
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-10"
      >
        <div className="flex justify-between relative">
          <h1 className="text-gray-300 text-4xl font-semibold">EXPERIENCE</h1>
          <motion.div
            initial={{ rotate: -30, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-16 w-18 absolute right-0 -top-3 z-10"
          >
            <FolderKanban className="h-full w-full mt-3 fill-current p-2 border-gray-400 rounded-4xl" />
          </motion.div>
        </div>
        <div className="h-0.5 bg-gray-300 relative z-0"></div>
      </motion.div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-11">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}

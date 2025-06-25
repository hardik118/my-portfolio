"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FolderKanban } from "lucide-react";
import { DescCard } from "../component/DescCard";

interface Project {
  name: string;
  Experiance?: boolean;
  techStack: string;
  date: string;
  description: string[];
  link: string;
  imgSrc: string;
}

const projects = [

  {
  name: "VoiceHireAI",
  Experiance: false,
  techStack: "Next.js, Hono, PostgreSQL, OpenAI API, Tailwind, Vercel",
  date: "2025",
  description: [
    "An AI-powered interview screening tool for corporate hiring that evaluates candidates through voice-based conversations.",
    "Simulates a real interview environment with OpenAI-driven technical and behavioral questions.",
    "Generates structured summaries and candidate performance reports for unbiased evaluations.",
    "Supports multiple screening rounds with customizable question sets for different job roles.",
    "Built with a privacy-first architecture and scalable backend powered by Hono and PostgreSQL.",
  ],
  link: "https://github.com/hardik118/AIinterview.git",
  imgSrc: "/voiceHireAi.png",
},
{
  name: "WPResumePro",
  experience: true,
  techStack: "WordPress, PHP, Gutenberg Blocks API, Sass, JavaScript, ACF",
  date: "2024",
  description: [
    "A customizable, modern resume/CV theme for WordPress designed with minimalism and clarity in mind.",
    "Includes multiple resume sections: Education, Experience, Skills, Portfolio, Contact & Recommendations.",
    "Built with Gutenberg blocks for easy drag-and-drop section reordering and live editing.",
    "Styled with Sass + Object‑oriented PHP for clean templates and easy overrides.",
    "Fully responsive, print-ready, and exportable as PDF using WP‑Print‑styles.",
  ],
  link: "https://github.com/hardik118/WordpressResumeTheme",
  imgSrc: "/wp.jpeg",
}
,
  {
    name: "StoriesNStore",
    Experiance: false,
    techStack: "React, Hono, Node.js, AWS, Cloudflare, Tailwind",
    date: "2023",
    description: [
      "A place for people to write and share their stories, engage in discourse, and commerce resources beneficial for new grads and job seekers.",
      "Write beautiful stories with our editor and share them with the world.",
      "Create your store, upload your docs, and let the world use them by paying for them.",
      "Safe and secure document viewers to protect your resources from infringement and copyright issues.",
      "Engage in discourse, connect with people, and let people come to your store.",
    ],
    link: "https://github.com/hardik118/StoriesNStore",
    imgSrc: "/SNS.png",
  },
  
];

export default function ProjectsPage() {
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
          <h1 className="text-gray-300 text-4xl font-semibold">PROJECTS</h1>
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

      {/* Project Cards */}
      <div className="flex flex-col gap-11">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

// ✅ Separate component to use useInView
function ProjectCard({ project, index }:{project: Project, index: number}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <DescCard
        Experiance={project.Experiance}
        link={project.link}
        src={project.imgSrc}
        name={project.name}
        date={project.date}
        techStack={project.techStack}
        description={project.description}
      />
    </motion.div>
  );
}

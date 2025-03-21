"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FolderKanban } from "lucide-react";
import { DescCard } from "../component/DescCard";

const projects = [
  {
    name: "StoriesNStore",
    Experiance: false,
    techStack: "React, Hono, Node.js, AWS, Cloudflare, Tailwind",
    date: "2024",
    description: [
      "A place for people to write and share their stories, engage in discourse, and commerce resources beneficial for new grads and job seekers.",
      "Write beautiful stories with our editor and share them with the world.",
      "Create your store, upload your docs, and let the world use them by paying for them.",
      "Safe and secure document viewers to protect your resources from infringement and copyright issues.",
      "Engage in discourse, connect with people, and let people come to your store.",
    ],
    link: "https://github.com/hardik118/StoriesNStore",
    imgSrc: "SNS.png",
  },
  {
    name: "Fiat-to-Crypto Payment Platform",
    techStack: "Fastify, Node.js, Solana, AWS, KYC Verification, React, Tailwind",
    date: "Ongoing (2025)",
    description: [
      "Enables users to buy, sell, and transfer crypto using fiat (UPI, cards, bank transfers).",
      "Implements self-custodial wallets for better security and ownership.",
      "Supports instant SOL-to-USDC conversion for price stability.",
      "KYC verification required for transactions to ensure compliance.",
      "Optimized for speed with a 5-10 minute transaction completion time.",
    ],
    link: "https://github.com/hardik118/Feeatpay",
    imgSrc: "/FATPAY.png",
  },
];

export default function ProjectsPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
            <FolderKanban className="h-full w-full mt-3 text-blue-400 bg-black p-2 border-gray-400 rounded-4xl" />
          </motion.div>
        </div>
        <div className="h-0.5 bg-gray-300 relative z-0"></div>
      </motion.div>

      {/* Project Cards - Appear as Scrolled */}
      <div className="flex flex-col gap-11">
        {projects.map((project, index) => {

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
        })}
      </div>
    </div>
  );
}

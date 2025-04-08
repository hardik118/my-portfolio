'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';


export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center gap-6 mt-10"
    >
      <h1 className="text-3xl font-bold text-white">Resume</h1>
      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white rounded-xl transition"
      >
        <Download size={18} />
        Download Resume
      </a>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
      <Image
          src="/resume.jpg"
          alt="Resume"
          width={1200}
          height={1600}
          className="w-full h-auto"
        />
      </div>

      
    </motion.div>
  );
}

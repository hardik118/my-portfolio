'use client';
import { motion } from "framer-motion";

export default function AboutMePage() {
  const handleClick = (Address: string) => {
    window.location.href = `${Address}`;
  };

  return (
    <div className="h-auto w-full p-5">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="h-auto flex flex-col justify-end text-white pb-5"
      >
        <h1 className="text-4xl md:text-6xl">Hey! I am Hardik Yadav 👋</h1>
        <h1 className="text-4xl md:text-6xl">Developing Perfection</h1>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-0.5 bg-neutral-600"
      ></motion.div>

      {/* About Section */}
      <div className="h-auto flex flex-col md:flex-row justify-between mt-5">
        <motion.div
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-md text-purple-500"
        >
          <h1># I am from UP, India</h1>
          <h1>Currently in my 3rd year at LPU</h1>
          <h1>Studying Computer Science Engineering</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm text-gray-400"
        >
          <h1># Thought of becoming a writer in school</h1>
          <h1>Now, I write code – a bit different but kinda the same.</h1>
        </motion.div>
      </div>

      {/* What Excites Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8"
      >
        <h1 className="text-green-500 text-lg">What Excites Me?</h1>
        <div className="text-sm text-gray-300">
          <h1>Scalability & Performance: <span className="text-white">Making apps fast & efficient</span></h1>
          <h1>Fintech & Web3: <span className="text-white">Exploring crypto payments & decentralization</span></h1>
          <h1>Building for Impact: <span className="text-white">Creating products that solve real problems</span></h1>
        </div>
      </motion.div>

      {/* Certifications & Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 flex flex-col md:flex-row justify-between gap-5"
      >
        {/* Certifications */}
        <div className="flex-1 text-left">
          <h1 className="text-xl mb-2">Certifications</h1>
          <div className="flex flex-col text-left text-sm gap-1">
            <button onClick={() => handleClick('https://www.coursera.org/account/accomplishments/certificate/U6N44EQQTX5T')} className="hover:text-blue-400 text-left">
              Design and Analysis of Algorithms
            </button>
            <button onClick={() => handleClick('https://www.cipherschools.com/certificate/preview?id=667207b457b93ff9094e14de')} className="hover:text-purple-400 text-left">
              Java
            </button>
            <button onClick={() => handleClick('https://postimg.cc/rKcmvtbs')} className="hover:text-yellow-400 text-left">
              Cloud Computing
            </button>
            <button onClick={() => handleClick('https://coursera.org/share/eca5f484986fbe28cd941809aa008a86')} className="hover:text-pink-300 text-left">
              Prompt Engineering
            </button>
          </div>
        </div>

        {/* Achievements (Far Right) */}
        <div className="flex-1 md:w-1/3 text-left md:text-right">
          <h1 className="text-xl mb-2">Achievements</h1>
          <div className="flex flex-col text-sm gap-1">
            <h1 className="text-gray-300">🏆 Runner-up in Smart India Hackathon</h1>
            <h1 className="text-gray-300">🏅 SAP Lab Hackathon Finalist</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

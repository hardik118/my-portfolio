"use client";

import { ArrowRight, ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (Address: string) => {
    window.location.href = `${Address}`;
  };

  return (
    <div className="p-5 h-auto">
      <div className="h-full w-full border border-neutral-600 rounded-4xl flex flex-col gap-5 p-5">
        
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between">
          
          {/* Left Section */}
          <div className="flex w-full md:w-1/3 flex-col text-sm">
            <h1>Your all-rounder Developer</h1>
            <h1>
              <span className="text-green-600">Fast</span>, <span className="text-blue-600">Perfect</span>, and Just{" "}
              <span className="text-purple-600">Perfect</span>
            </h1>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-5 md:justify-end mt-5 md:mt-0">
            
            {/* Socials */}
            <div className="flex flex-col items-start">
              <h1 className="text-pink-600">Socials</h1>
              <div className="flex flex-col text-sm space-y-2">
                <button
                  onClick={() => handleClick("https://www.linkedin.com/in/hardik-y/")}
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <Linkedin className="h-5 w-5 text-blue-500" />
                  LinkedIn
                </button>
                <button
                  onClick={() => handleClick("https://github.com/hardik118")}
                  className="flex items-center gap-2 hover:text-green-400"
                >
                  <Github className="h-5 w-5 text-gray-400" />
                  GitHub
                </button>
                <button
                  onClick={() => handleClick("https://discord.gg/kdjWUh6e")}
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <MessageCircle className="h-5 w-5 text-purple-400" />
                  Discord
                </button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex flex-row gap-3">
                <Link href="/Connect" prefetch={true}>
                  <button className="">
                    <motion.h1
                      className="text-md text-gray-300 hover:text-blue-500"
                      onHoverStart={() => setClicked(true)}
                      onHoverEnd={() => setClicked(false)}
                    >
                      Contact Me
                    </motion.h1>
                  </button>
                </Link>
                <div className="rounded-4xl h-7 w-7 border border-gray-500 flex items-center justify-center">
                  {clicked ? <ArrowUpRight className="text-blue-400" /> : <ArrowRight className="text-blue-400" />}
                </div>
              </div>
              <h1 className="text-xs text-gray-500 mt-2">Let&apos;s connect</h1>
              <h1 className="bg-gray-600 h-0.5 w-full mt-1"></h1>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-9xl">Hardik Yadav</h1>
          <div className="flex flex-col text-xs">
            <h1># Developer</h1>
            <h1># Designer</h1>
            <h1># Problem Solver</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({
  name,
  date,
  stack,
  desc,
}: {
  name: string;
  date: string;
  stack: string;
  desc: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState(0);

  // Track mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    });
  };

  const colorArray = [
    "bg-blue-500",
    "bg-yellow-500",
    "bg-pink-300",
    "bg-purple-400",
    "bg-gray-500",
    "bg-green-400",
  ];

  function getRandomColor() {
    setColor(Math.floor(Math.random() * colorArray.length));
  }

  return (
    <motion.div
      className="relative border-b border-gray-600 flex items-center justify-center w-full px-4 py-4 sm:py-6"
      onHoverStart={() => {
        setHovered(true);
        getRandomColor();
      }}
      onHoverEnd={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col sm:flex-row w-full justify-between items-center sm:items-start">
        {/* Tooltip only on larger screens */}
        {hovered && (
          <h1
            className={`${colorArray[color]} rounded-xl text-white px-2 text-xs p-2 pointer-events-none hidden sm:block`}
            style={{
              left: `${cursorPos.x + 15}px`,
              top: `${cursorPos.y + 30}px`,
              zIndex: 50,
              transform: "translate(10%, 0%)",
              position: "fixed",
            }}
          >
            {desc}
          </h1>
        )}

        {/* Left side (Moves inward only on large screens) */}
        <motion.div
          className="flex flex-col pb-2 items-center justify-center"
          animate={hovered ? { x: 40 } : { x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.h1
            className="text-xl sm:text-3xl font-sans text-gray-300"
            animate={{ color: hovered ? "#2563eb" : "#d1d5db" }}
            whileHover={{ color: "#f472b6" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {name}
          </motion.h1>
          <h1 className="text-dm">{date}</h1>
        </motion.div>

        {/* Right side (Moves inward only on large screens) */}
        <motion.div
          className="flex flex-col gap-3 items-center sm:items-end"
          animate={hovered ? { x: -40 } : { x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-sm pl-2 font-extralight">{stack}</h1>
          <h1 className="text-sm font-thin sm:block">{desc}</h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

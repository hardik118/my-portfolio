"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import Image from "next/image";

export const SkillsMarquee = () => {
  const skills = [
    "/aws.png",
    "/cpp.png",
    "/java.png",
    "/js.png",
    "/next.png",
    "/node.png",
    "/psql.png",
    "/ts.png",
    "/react.png",
    "/tl.png",
    "/stb.svg",
    "/docker.png",
  ];

  const [confettiIndex, setConfettiIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-center mt-5 px-4">
      <div className="w-full flex flex-wrap lg:flex-nowrap lg:gap-8 justify-center items-center">
        
        {/* Grid Layout: 2 Rows on Medium, 3 Per Row on Small */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 md:grid-rows-2 lg:flex gap-6">
          {skills.map((src, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setConfettiIndex(index)}
              onMouseLeave={() => setConfettiIndex(null)}
            >
              <Image
                width={80}
                height={80}
                src={src}
                alt="Skill"
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 transition-transform duration-300 hover:scale-110"
              />
              {confettiIndex === index && (
                <Confetti
                  numberOfPieces={100}
                  recycle={false}
                  gravity={0.3}
                  width={80}
                  height={80}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

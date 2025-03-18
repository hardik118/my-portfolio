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
    "docker.png"
  ];

  const [confettiIndex, setConfettiIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-center overflow-hidden mt-5">
      <div className="flex gap-8">
        {skills.map((src, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setConfettiIndex(index)}
            onMouseLeave={() => setConfettiIndex(null)}
          >
           <Image
  src={src}
  alt="Skill"
  className="h-16 transition-transform duration-300 hover:scale-110"
/>
            {confettiIndex === index && (
              <Confetti
                numberOfPieces={200}
                recycle={false}
                gravity={0.3}
                width={100}
                height={100}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";

export const DescCard = ({
  name,
  Experiance,
  date,
  techStack,
  description,
  link,
  src,
}: {
  name: string;
  Experiance: boolean | undefined;
  date: string;
  techStack: string;
  description: string[];
  link: string;
  src: string;
}) => {
  const handelRedirect = () => {
    window.location.href = `${link}`;
  };

  return (
    <div className="w-full h-auto border-neutral-600 rounded-lg flex items-center justify-center p-4">
      <div className="w-full md:w-11/12 border border-neutral-600 flex flex-col md:flex-row gap-4 p-4 rounded-md">
        
        {/* Image Section */}
      <div className="relative h-60 md:h-80 lg:h-[400px] w-full md:w-1/2 border border-zinc-600 rounded-md overflow-hidden">
  <Image
    src={src}
    alt="image"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover" // ensures it fully covers
  />
</div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          
          {/* Header */}
          <div className="p-2">
            <h1 className="text-xl md:text-2xl text-gray-300">{name}</h1>
            <div className="flex flex-wrap justify-between text-sm text-gray-500">
              <h1>{techStack}</h1>
              <h1 className="text-gray-300">{date}</h1>
            </div>
          </div>

          {/* Description */}
          <div className="pl-5 text-sm">
            <ul className="list-disc text-gray-200 font-thin space-y-2">
              {description.map((desc, index) => (
                <li key={index} className="p-1">{desc}</li>
              ))}
            </ul>
          </div>

          {/* Visit Button */}
          {!Experiance && (
            <div className="flex items-center justify-center">
              <button
                onClick={handelRedirect}
                className="w-full md:w-11/12 border border-neutral-600 hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)] transition rounded-3xl p-2 text-sm"
              >
                Visit
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

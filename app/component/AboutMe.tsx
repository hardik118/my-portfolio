import { ArrowRight, Mail } from "lucide-react";
import { ConnectBtn } from "./connectBtn";
import Link from "next/link";

export const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between  w-full border-t border-gray-500 p-3">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-4">
        <h1 className="text-xs text-center md:text-left">## Code, That Speaks</h1>
        <button className="text-xs p-2 border border-gray-200 rounded-xl flex flex-row gap-2 items-center">
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">hardikyadav1182005@gmail.com</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-5 px-4 md:px-10">
        {/* About Section */}
        <div className="text-lg md:text-2xl text-gray-100 flex flex-col md:flex-row justify-between gap-6">
          <p className="flex flex-col">
            <span>A 3rd year B.Tech/BE Student From India,</span>
            <span>with Experience of 1.6 Years</span>
            <span>in Developing Fullstack Applications</span>
          </p>

          <p className="text-xs md:text-sm text-gray-300 flex flex-col">
            <span>## My experience of working with International teams,</span>
            <span>along with leading teams,</span>
            <span>and an ever-growing eagerness to learn</span>
            <span>make me the asset you are looking for.</span>
          </p>
        </div>

        {/* Tech Stack */}
        <div className="text-md font-semibold text-green-600">
          <h1>I specialize in MERN stack,</h1>
          <h1>PostgreSQL, serverless backend,</h1>
          <h1>DevOps, and version control,</h1>
          <h1>Next.js</h1>
        </div>

        <div className="h-0.5 bg-gray-400"></div>
      </div>

      {/* Call to Action */}
      <div className="text-sm text-gray-200 flex flex-col md:flex-row items-center justify-between p-4">
        <div className="text-center md:text-left">
          <h1>Let&apos;s Build the Future With Your Organization&apos;s Vision,</h1>
          <h1>And My Skills</h1>
        </div>

        <div className="h-full flex flex-row gap-1 items-center pt-3">
          <ArrowRight className="h-6" />
          <Link href="/about" prefetch={true}>
            <ConnectBtn heading="About Me" />
          </Link>
        </div>
      </div>
    </div>
  );
};

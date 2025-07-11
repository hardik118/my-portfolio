import { ConnectBtn } from "./connectBtn";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight, FolderKanban } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center"> {/* Centered Content */}
      {/* Header */}
      <div className="w-full  p-6 md:p-10">
        <div className="flex justify-between items-center relative">
          <h1 className="text-green-600 text-xl md:text-2xl font-semibold">PROJECTS</h1>
          <div className="h-12 w-24 md:h-16 md:w-36 absolute right-0 -top-2">
            <FolderKanban className="h-full w-full mt-2 fill-current" />
          </div>
        </div>
        <div className="h-0.5 bg-gray-300"></div>
      </div>

      {/* Projects List */}
      <div className="w-full pl-5 pr-5 flex flex-col gap-6 items-center"> {/* Centered Projects */}
        
        <ProjectCard
          name="Ai interview"
          date="2025"
          stack="React.js, Node.js, PostgreSQL, python , AI/ML"
          desc="Manages initil screening for corporates."
        />
         <ProjectCard
          name="Wordpress Resume theme"
          date="2024"
          stack="wordpress, php,sql"
          desc="Wordpress resuem builder for themes."
        />
         <ProjectCard
          name="StoriesNstore"
          date="2023"
          stack="React.js, Hono, AWS, Node.js, Cloudflare"
          desc="Share stories and commerce Docs."
        />
        
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2">
          <ArrowRight className="h-6 md:h-9" />
          <Link href="/projects" prefetch={true}>
            <ConnectBtn heading="More" />
          </Link>
        </div>
        <h1 className="text-xs text-gray-200 mt-3">Wanna find more about ...</h1>
      </div>
    </div>
  );
};

import { ArrowRight, Bike } from "lucide-react";
import { ExperienceCard } from "./experianceCard";
import { ConnectBtn } from "./connectBtn";
import Link from "next/link";

export const Experiance = () => {
  return (
    <div className="px-4 sm:px-10 w-full">
      {/* Header */}
      <div className="py-6">
        <div className="flex justify-between items-center relative">
          <h1 className="text-purple-600 text-lg sm:text-2xl font-semibold">Experience</h1>
          <div className="h-12 w-24 sm:h-16 sm:w-36 absolute right-0 top-0 z-10">
            <Bike className="h-full w-full mt-2 sm:mt-3" />
          </div>
        </div>
        <div className="h-0.5 bg-gray-300 relative mt-2 z-0"></div>
      </div>

      {/* Experience Card (Now vertically centered on small screens) */}
      <div className="flex w-full items-center justify-center h-auto sm:h-[60vh] flex-col">
        <ExperienceCard />
      </div>

      {/* Button + More Info */}
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="flex flex-row items-center gap-2">
          <ArrowRight className="h-6 sm:h-9" />
          <Link href="/experiance" prefetch={true}>
            <ConnectBtn heading="More" />
          </Link>
        </div>
        <h1 className="text-xs text-gray-200 mt-3 sm:mt-5">Details About Work...</h1>
      </div>
    </div>
  );
};

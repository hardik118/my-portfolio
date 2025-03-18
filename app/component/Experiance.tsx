import { div } from "framer-motion/client";
import { ArrowRight, Briefcase } from "lucide-react";
import { ExperienceCard} from "./experianceCard";
import { ConnectBtn } from "./connectBtn";
import Link from "next/link";

export const Experiance = () => {
  return (
    <div>
               <div className="p-10">
  <div className="flex justify-between relative">
    <h1 className=" text-purple-600 text-2xl  font-semibold">Experiance</h1>
    <div className="h-16 w-36 absolute right-0 -top-3 z-10">
<Briefcase  className="h-full w-full mt-3 "/>
    </div>
  </div>
  <div className="h-0.5 bg-gray-300 relative mt-2 z-0"></div>
</div>
<div className="h-[60vh] w-full  flex items-center justify-center">
<ExperienceCard></ExperienceCard>
</div>
<div className="flex items-center justify-center flex-col">
                   <div className="flex flex-row">
                   <ArrowRight className="h-9"></ArrowRight>
                   <Link href="/experiance" prefetch={true}>
                   <ConnectBtn heading="More"></ConnectBtn> 
    </Link>
                   </div>
                <h1 className="text-xs text-gray-200 mt-5 ml-5">Details About Work...</h1>
                </div>
    </div>
  );
};

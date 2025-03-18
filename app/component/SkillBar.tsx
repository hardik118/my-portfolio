import Marquee from "react-fast-marquee"
import { SkillsMarquee } from "./Techrowmoving"

export const SkillBar=()=>{
    return (
        <div className="h-[40vh] w-full ">
                    <div className="p-10">
  <div className="flex justify-center flex-col items-center">
    <h1 className=" text-yellow-500 text-2xl ml-7 font-semibold">EXPERIENCE </h1>
    <div className="flex flex-col gap-2 items-center justify-center mt-4 text-xl">
    <h1 className="">My Tech stack includes of <span className="text-blue-500">Diverse</span> , <span className="text-pink-500">upTODate</span>, <span className="text-purple-500">Essential Skills</span> That could be extremely Benefecial for your Organization</h1>
    <h1>Enabiling me to deliver <span className="text-green-600">Cutting Edge Solutions</span></h1>
    </div>
     <SkillsMarquee></SkillsMarquee>
  </div>
</div>

        </div>
    )
}
'use client';


import { ConnectBtn } from "./connectBtn";
import { MovingButton } from "./MovingButton"
import Link from "next/link";

export const IntroChracterVector=()=>{
    return <div className="flex items-center  justify-center h-[92vh] flex-col  border-b border-gray-500">
        <div className="  w-3/4  h-2/3 flex items-center justify-center font-sans flex-col">
        <h1 className="text-6xl text-purple-600 font-semibold flex flex-row gap-3">
  DESIGN 
  <span className="text-sm pb-2 text-gray-300 font-thin flex items-end justify-end">
    ## UI/UX
  </span>
  <MovingButton color={'Green'} heading="Design"></MovingButton>
</h1>

        <h1 className="text-6xl text-white font-semibold">DEVELOPMENT</h1>
        <h1 className="flex flex-row gap-2">
        <MovingButton color={'Yellow'} heading="Devlopment"></MovingButton>
            <span className=" flex items-end justify-end text-sm pb-2"># Full Stack Developer</span>
            <span className="text-6xl text-yellow-600 font-semibold">DEPLOY</span>
        </h1>
        <h1 className="flex flex-row gap-2 ">
            <span className="text-6xl text-blue-400 font-semibold">&</span>
            <span className="text-6xl text-blue-400 font-semibold">OPTIMIZE</span>
            <span className=" flex items-end justify-end text-sm pb-2">## DevOps</span>
            <div className="flex items-center justify-center">
                     <Link href="/Connect" prefetch={true}>
                     <ConnectBtn heading="Let's Connect"></ConnectBtn>
                     </Link>

            </div>

        </h1> 
        <div className="flex items-start justify-end pt-8  w-2/4 pl-5 font-semibold ">
   <span className="text-lg text-white text-center ">I am a Fullstack Developer writing ,
   <span>Code that&apos;s <span  className="text-purple-600">Functional</span>, <span className="text-yellow-600">Documented</span> <span className="text-blue-400">& Beautiful</span></span>
    </span> 
    <MovingButton  color={'White'} heading="devOps"></MovingButton>

</div>



        </div>
        
    </div>
}
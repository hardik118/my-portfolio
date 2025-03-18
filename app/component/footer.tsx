'use client';

import { ArrowRight, ArrowUp, ArrowUpRight, Flag } from "lucide-react";
import { useState } from "react";
import {motion} from "framer-motion"
import Link from "next/link";

export const Footer = () => {
    const [clicked, setclicked]= useState<boolean>(false)

    const handleClick=(Address: string)=>{
            window.location.href=`${Address}`
           

    }
    return (
        <div className="p-5 h-[50vh]">
            <div className="h-full w-full border border-neutral-600  rounded-4xl flex flex-col gap-2">
                <div className="h-2/3  w-full flex flex-row ">
                <div className="flex w-1/3 flex-col p-5 text-sm">
                    <h1>Your all rounder Devloper </h1>
                    <h1><span className="text-green-600">Fast</span> , <span className="text-blue-600">Perfect</span> AND Just <span className="text-purple-600">perfect</span></h1>
                </div>
                <div className="w-2/3  flex flex-row gap-5 p-5 justify-end ">
            <div className="w-2/3 flex flex-row justify-evenly">
              
            <div>
                    <h1 className="text-pink-600">Socials</h1>
                    <div className="flex items-start flex-col p-2 text-sm ">
                    <button onClick={()=>handleClick('https://www.linkedin.com/in/hardik-y/')} className="hover:text-blue-400" >Linkdin</button>
                    <button onClick={()=>handleClick('https://github.com/hardik118')} className="hover:text-green-400">Github</button>
                    <button onClick={()=>handleClick('https://discord.gg/kdjWUh6e')} className="hover:text-yellow-400">Discord</button>
                    </div>


                </div>
                <div>
                   <div className="flex flex-row gap-3">

                   <Link href="/Connect" prefetch={true}>
                   <button className="">
                        <motion.h1 className="text-md text-gray-300 hover:text-blue-500 "
                        onHoverStart={()=>setclicked(true)}
                        onHoverEnd={()=>setclicked(false)}
                        >Contact Me</motion.h1>
                        </button>
                 </Link>    
                        <div className="rounded-4xl h-7  w-7 border border-gray-500 flex  items-center justify-center">
                         {clicked ? <ArrowUpRight className="text-blue-400"></ArrowUpRight> : <ArrowRight className="text-blue-400"></ArrowRight>  }
                        </div>
                   </div>
                        <h1 className="text-xs text-gray-500">Let' connnect</h1>
                        <h1 className="bg-gray-600 h-0.5 w-full "></h1>

                       
                   
                </div>
            </div>

                </div>

                </div>
                <div className="h-1/3 flex  justify-center items-end flex-row gap-2">
                <h1 className="text-9xl" >Hardik Yadav</h1>
                <div className="flex flex-col text-xs">
                <h1># Devloper</h1>
                <h1># Designer</h1>
                <h1># Problem Solver</h1>
                </div>
                </div>

            </div>
        </div>
    );
};

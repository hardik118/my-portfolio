'use client';

import { Briefcase, Folder, Home, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export const Navbar=()=>{
    const router= useRouter();
    return <div className="h-auto w-full flex items-center justify-between  text-white text-xs p-2 pl-2 pr-2 border-b  border-gray-200">
    <div className=" w-auto  h-auto  border-gray-700 rounded-xl  border  p-2  ">
        <h1 className="text-xs ">Hardik Yadav</h1>
    </div>
    <div className="w-auto flex flex-row  border border-gray-700  rounded-xl  text-white text-xs p-2  gap-3">
        <Link href="/" prefetch={true}>
        <button className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition"><Home className="w-3 h-3 mt-0.5"></Home>Home</button>
    </Link>
    <Link href="/projects" prefetch={true}>
    <button  className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition"> <Folder className="h-3 w-3 mt-0.5"></Folder> Projects</button>
    </Link>
    <Link href="/experiance" prefetch={true}>
    <button  className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition"><Briefcase className="h-3 w-3 mt-0.5"></Briefcase> Experiance</button>

    </Link>
    <Link href="/about" prefetch={true}>
    <button  className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition"><User className="w-3 h-3 mt-0.5"></User>About me </button>

    </Link>
    
    </div>
    <div className="w-auto flex flex-row  border border-gray-700  rounded-xl  text-white text-xs p-2  gap-3">
    <Link href="/Connect" prefetch={true}>
        <button className="hover:drop-shadow-[0_0_10px_white] transition">Contact Me</button>
    </Link>
    </div>
    </div>
}
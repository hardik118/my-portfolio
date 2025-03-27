'use client';

import { Briefcase, Folder, Home, User } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="h-12 w-full flex items-center justify-between text-white text-sm p-2 border-b border-gray-200">
            
            {/* Left Section (Hidden on Mobile) */}
            <div className="w-auto h-auto border-gray-700 rounded-xl border p-2 hidden md:block">
                <h1 className="text-xs">Hardik Yadav</h1>
            </div>

            {/* Center Navigation (Always Visible & Spaced Evenly) */}
            <div className="w-auto flex flex-row border border-gray-700 rounded-xl text-white text-xs p-2 gap-3 mx-auto">
                <Link href="/" prefetch={true}>
                    <button className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition">
                        <Home className="w-3 h-3 mt-0.5" /> Home
                    </button>
                </Link>
                <Link href="/projects" prefetch={true}>
                    <button className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition">
                        <Folder className="h-3 w-3 mt-0.5" /> Projects
                    </button>
                </Link>
                <Link href="/experiance" prefetch={true}>
                    <button className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition">
                        <Briefcase className="h-3 w-3 mt-0.5" /> Experience
                    </button>
                </Link>
                <Link href="/about" prefetch={true}>
                    <button className="flex flex-row gap-1 hover:drop-shadow-[0_0_10px_white] transition">
                        <User className="w-3 h-3 mt-0.5" /> About Me
                    </button>
                </Link>
            </div>

            {/* Right Section (Hidden on Mobile) */}
            <div className="w-auto  flex-row border border-gray-700 rounded-xl text-white text-xs p-2 gap-3 hidden md:block">
                <Link href="/Connect" prefetch={true}>
                    <button className="hover:drop-shadow-[0_0_10px_white] transition">Contact Me</button>
                </Link>
            </div>
        </div>
    );
};

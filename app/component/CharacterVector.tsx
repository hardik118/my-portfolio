'use client';

import { ConnectBtn } from "./connectBtn";
import { MovingButton } from "./MovingButton";
import Link from "next/link";
import Image from "next/image";

export const IntroChracterVector = () => {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col border-b border-gray-500 w-full overflow-hidden">
            <div className="max-w-full w-full px-4 sm:px-8 h-full flex items-center justify-center font-sans flex-col">
                <h1 className="flex items-center justify-center gap-2">
                    <Image 
                        width={100} 
                        height={100} 
                        alt="Avatar" 
                        src={'/avatar.jpg'}
                        className="w-16 h-16 rounded-3xl"
                    />
                    <button className="h-14  text-gray-200 rounded-3xl text-xl flex items-end justify-center">
                        Hy, How are you?
                    </button>
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-7xl text-purple-600 font-semibold flex flex-row gap-3">
                    DESIGN 
                    <span className="text-xs sm:text-sm pb-2 text-gray-300 font-thin flex items-end justify-end">
                        ## UI/UX
                    </span>
                    <MovingButton color={'Green'} heading="Design"></MovingButton>
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-7xl text-white font-semibold">DEVELOPMENT</h1>
                <h1 className="flex flex-row gap-2">
                    <MovingButton color={'Yellow'} heading="Development"></MovingButton>
                    <span className="flex items-end justify-end text-xs sm:text-sm pb-2"># Full Stack Developer</span>
                    <span className="text-3xl sm:text-4xl md:text-7xl text-yellow-600 font-semibold">DEPLOY</span>
                </h1>
                <h1 className="flex flex-row gap-2">
                    <span className="text-3xl sm:text-4xl md:text-7xl text-blue-400 font-semibold">&</span>
                    <span className="text-3xl sm:text-4xl md:text-7xl text-blue-400 font-semibold">OPTIMIZE</span>
                    <span className="flex items-end justify-end text-xs sm:text-sm pb-2">## DevOps</span>
                    <div className="flex items-center justify-center">
                        <Link href="/Connect" prefetch={true}>
                            <ConnectBtn heading="Let's Connect"></ConnectBtn>
                        </Link>
                    </div>
                </h1>
                <div className="flex items-start justify-end pt-8 w-full max-w-lg pl-5 font-semibold">
                    <span className="text-sm sm:text-base md:text-lg text-white text-center">
                        I am a Fullstack Developer writing,
                        <span>
                            Code that&apos;s <span className="text-purple-600">Functional</span>, 
                            <span className="text-yellow-600">Documented</span>, 
                            <span className="text-blue-400">& Beautiful</span>
                        </span>
                    </span>
                    <MovingButton color={'White'} heading="devOps"></MovingButton>
                </div>
            </div>
        </div>
    );
};

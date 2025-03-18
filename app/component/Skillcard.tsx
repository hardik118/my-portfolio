import { Brush } from "lucide-react"

export const SkillCard=()=>{
    return <div className="h-[35vh] w-full  bg-neutral-900 border   rounded-md flex justify-end flex-col gap-2 p-3">
    <Brush className="h-8 "></Brush>
    <div className="h-1/3  w-full  flex flex-col gap-2">
    <h1 className="text-blue-400 text-sm ">Development</h1>
    <h1 className="text-xs">Fullstack web development following Test Driven development, with Documentation</h1>

    </div>


    </div>
}
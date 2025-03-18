import { Computer } from "lucide-react"
export const Skillstwo=()=>{
    return(
        <div className="h-[35vh] w-full  bg-neutral-900 border   rounded-md flex justify-end flex-col gap-2 p-3">
        <Computer className="h-8 "></Computer>
        <div className="h-1/3  w-full  flex flex-col gap-2">
        <h1 className="text-green-400 text-sm ">Problem Solving</h1>
        <h1 className="text-xs">Designing  Solution to problems, jotting optimizations and scalability</h1>
    
        </div>
    
    
        </div>
    )
}
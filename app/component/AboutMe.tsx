import { ArrowRight } from "lucide-react";
import { ConnectBtn } from "./connectBtn";
import { Mail } from "lucide-react";
import Link from "next/link";

export const AboutMe=()=>{
    return (
        <div className="h-[80vh] w-full  border-t border-gray-500 p-3 ">
        <div className="flex items-center justify-between pb-10">
          <h1 className="text-xs">## Code,That Speaks</h1>
          <button className="text-xs p-2 border border-gray-200  rounded-4xl flex flex-row gap-2"><Mail className=""></Mail> <span className="mt-1">hardikyadav1182005@gmail.com</span></button>
      
      
        </div>
      <div className="flex  flex-col gap-5 p-10">
      <div className="text-2xl text-gray-100  flex flex-row justify-between ">
          <p className="flex items-stretch justify-start flex-col"> <span>A 3rd year B.tech/BE Student From India,</span> 
          <span>with Epxeriance of 1.6 Years</span> 
        <span>  in Developing Fullstack application</span> </p>
      
        <p className="text-xs text-gray-300 flex flex-col items-start justify-start">
          <span>## My experiance of working with International teams,</span>
          <span> along wih leading Teams,</span> 
          <span>and ever growing Eagerness to learn</span>
          <span> make me the assest you are looking for.</span>
        </p>
      
        </div>
        <div className="text-md font-semibold  text-green-600  ">
          <div>
            <h1>I specialize in MERN stack ,</h1> 
            <h1>postgreSql, serverless backend,</h1> 
            <h1>DevOps, and version control,</h1>
            <h1> Next.js</h1>
            </div>
        </div>
        <div className="h-0.5 bg-gray-400">
      
      </div>
        <div className="text-sm  text-gray-200  flex items-center justify-between  ">
          <div>
            <h1>Let's Build the Future With Your Organization visions ,</h1> 
            <h1>And  My skills  ,</h1> 
          
            </div>
      
            <div className="h-full flex flex-row gap-1">
              <ArrowRight className="h-6 mt-2"></ArrowRight>
              <Link href="/about" prefetch={true}>
              <ConnectBtn  heading="About Me"></ConnectBtn>

    </Link>
            </div>
      
        </div>
      
      </div>
      
       </div> 
    )
}
import { ConnectBtn } from "./connectBtn"
import { ProjectCard } from "./ProjectCard"
import { ArrowRight, Briefcase } from "lucide-react"
import { FolderKanban } from "lucide-react"
import Link from "next/link"

export const Projects = () => {
    return (

        <div className="">
          <div className="p-10">
  <div className="flex justify-between relative">
    <h1 className="text-green-600 text-2xl font-semibold">PROJECTS</h1>
    <div className="h-16 w-36 absolute right-0 -top-3 z-10">
<FolderKanban  className="h-full w-full mt-3 fill-current"/>
    </div>
  </div>
  <div className="h-0.5 bg-gray-300 relative z-0"></div>
</div>

       
        <div className=" h-[90vh] w-full flex items-center justify-center  ">

               
                <div className=" flex flex-col h-full  w-10/12 ">
                <ProjectCard name="StoriesNstore" date='2024' stack="React.js, Hono, Aws, Nodejs, cloudflare"
                desc="Share  stories and commerce Docs."
                ></ProjectCard>

                <ProjectCard name="FeeatPay" date='2024' stack="React.js, Nodejs, PostgreSql, Solana"
                desc="Cross border international payment In minutes"
                ></ProjectCard>

                <ProjectCard name="ConnectPal" date='2024' stack="Nodejs, Ejs, Tailwind"
                desc="Group Chat For all"
                ></ProjectCard>
                <div className="flex items-center justify-center mt-12 flex-col">
                   <div className="flex flex-row">
                   <ArrowRight className="h-9"></ArrowRight>
                   <Link href="/projects" prefetch={true}>
                   <ConnectBtn heading="More    "></ConnectBtn> 
    </Link>
                   </div>
                <h1 className="text-xs text-gray-200 mt-5 ml-5">Wanna Find more About ...</h1>
                </div>

                </div>
        </div>
        </div>
    )
}
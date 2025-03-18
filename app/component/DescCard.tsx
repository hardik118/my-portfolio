'use client';

import Image from "next/image";
export  const DescCard=({name, Experiance, date, techStack, description, link, src}: {name: string, Experiance: boolean | undefined, date: string, techStack: string, description: string[],link: string, src: string })=>{
   const handelRedirect=()=>{
    window.location.href=`${link}`
   }
   
   
    return (
        <div className="w-full h-[60vh] border-neutral-600  rounded-lg  flex items-center justify-center ">
            <div className="w-11/12  h-full border-neutral-600 border flex flex-row gap-1 justify-between p-2 rounded-md ">
            <div className="h-full w-1/2 p-5 border border-zinc-600 rounded-md relative">
  <Image 
    src={src} 
    alt="image" 
    fill
    className="object-cover rounded-md" 
  />
</div>

<div className="h-full w-1/2 p-1 ">
<div className="h-1/6 w-full  p-2">
<h1 className="text-2xl text-gray-300 ">{name}</h1>
<div className="flex flex-row justify-between">
<h1 className="text-sm text-gray-500">{techStack} </h1>
<h1 className="text-sm text-gray-300">{date}</h1>
</div>

</div>
<div className="h-4/6 w-full pl-5 flex-col text-sm gap-2  mt-2 ">
<ul className="list-disc text-gray-200 font-thin  ">
    {
        description.map((desc, index)=>(
            <li key={index} className="p-1">{desc}</li>
        ))
    }
</ul>
</div>
{
    !Experiance && <div className="h-1/6 w-full flex items-center justify-center">

    <button  onClick={handelRedirect} className="w-11/12 border border-neutral-600 hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)] transition rounded-3xl p-1 text-sm">Visit.</button>
    </div>
}


</div>
            </div>

        </div>
    )
}
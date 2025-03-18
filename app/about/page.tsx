'use client';
import { motion } from "framer-motion";

export default function AboutMePage(){
   const handleClick=(Address: string)=>{
      window.location.href=`${Address}`
     

}

   return(
    <div className="h-[100vh] w-full  p-5">


       <motion.div
       initial={{opacity: 0, y:2}}
       animate={{opacity: 1, y:0}}
       transition={{delay: 0.2, duration: 0.8}}

       className="h-4/12 p-1  flex justify-end flex-col text-white pb-5">
       <h1 className="text-6xl">Hyiii ! I am Hardik Yadav 👋🫂</h1>
       <h1 className="text-6xl">Developing Perfection</h1>
       </motion.div>


       <motion.div
       initial={{opacity: 0, scaleX: 0}}
       animate={{opacity:1, scaleX: 1}}
       transition={{delay: 0.3, duration: 0.8}}

       className="h-0.5 bg-neutral-600 ">

       </motion.div>
    <div className="h-2/12 flex flex-row justify-between">
    <motion.div
    initial={{opacity: 0, y:2}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.4, duration: 0.8}}

    className="flex flex-col text-md  text-purple-500 justify-end">
        <h1># I am from up, India , </h1>
        <h1>Currenlty in my 3 year at Lpu </h1>
        <h1>Stuying Computer Science Enginerring </h1>
       </motion.div>

       <motion.div
       initial={{opacity: 0, y:2}}
       animate={{opacity: 1, y:0}}
       transition={{delay: 0.4, duration: 0.8}}

       className="flex flex-col text-sm   text-gray-400  items-center justify-center">
        <h1># When i was in primary i thought of becoming a writer  </h1>
        <h1>and now i write code a lit diffrent but for me Kinda same</h1>
       
       </motion.div>
    </div>
    <motion.div
    initial={{opacity: 0, y:2}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.5 , duration: 0.8}}
    
    className="flex flex-col  h-3/12 text-sm  items-end justify-end gap-4">
 <h1 className="text-green-500">   What Excites Me?</h1>
<h1> Scalability & Performance : <span className="text-gray-300"> Making apps fast & efficient</span>  </h1>

<h1>Fintech & Web3 :  <span className="text-gray-300">Exploring crypto payments & decentralization </span> </h1>

<h1> Building for Impact : <span className="text-gray-300"> Creating products that solve real problems </span></h1>     
  </motion.div>

  <motion.div
   initial={{opacity: 0, y:2}}
   animate={{opacity: 1, y:0}}
   transition={{delay: 0.5 , duration: 0.8}}

  className="h-3/12  ">
  <h1 className="text-xl">My Certification Includes</h1>
  <div className="flex flex-col text-sm gap-1 mt-2 items-start justify-start">
  <button  onClick={(e)=>handleClick('https://www.coursera.org/account/accomplishments/certificate/U6N44EQQTX5T')} className="hover:text-blue-400">Design and analysis of algorithims</button>
  <button onClick={(e)=>handleClick('https://www.cipherschools.com/certificate/preview?id=667207b457b93ff9094e14de')} className="hover:text-purple-400">Java</button>
   <button onClick={(e)=>handleClick('https://postimg.cc/rKcmvtbs')} className="hover:text-yellow-400">Cloud Computing</button>
   <button onClick={(e)=>handleClick('https://coursera.org/share/eca5f484986fbe28cd941809aa008a86')} className="hover:text-pink-300">prompt Engineering </button>
  </div>

  </motion.div>


    </div>

   )
}
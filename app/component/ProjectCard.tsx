'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectCard=({name, date, stack, desc}: {name: string, date: string, stack: string, desc: string})=>{
    const [hovered, setHovered]= useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [color, setcolor]= useState(0);


    // Track mouse movement
    const handleMouseMove = (e: React.MouseEvent) => {
        requestAnimationFrame(() => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        });
    };
    
const colorArray=['bg-blue-500', 'bg-yellow-500', 'bg-pink-300', 'bg-purple-400', 'bg-gray-500', 'bg-green-400'];
function getRandomColor(){
    setcolor(Math.floor(Math.random()* colorArray.length));


}

    return (
        <motion.div className="h-1/4 relative  border-b border-gray-600  flex items-center justify-center"
        onHoverStart={()=>{setHovered(true);getRandomColor()}}
        onHoverEnd={()=>setHovered(false)}
        onMouseMove={handleMouseMove}
        whileHover={{ paddingLeft: "5rem", paddingRight: "3rem" }} 
        transition={{ duration: 0.5, ease: "easeInOut" }} 
    initial='initial'
      >
            <div className=" flex items-center justify-between   flex-row w-full ">

                {hovered &&
                
                <h1
                className={` ${colorArray[color]}  rounded-4xl text-white px-2  absolute text-xs p-2 pointer-events-none`}
                style={{
                    left: `${cursorPos.x+15 }px`, 
                    top: `${cursorPos.y +30 }px`,
                    zIndex: 50, 
                    transform: "translate(10%, 0%)",
                    position: "fixed" 
                }}
            >
                {desc}
            </h1>
                
                }
                <div className="flex flex-col gap-2">
                    <motion.h1 className="text-3xl  font-sans text-gray-300"
                    animate={{color: hovered ? '#2563eb': '#d1d5db'}}
                    whileHover={{color:'#f472b6'}}
                transition={{duration:0.5, ease:'easeInOut'}}
                    >
                        {name}</motion.h1>
                    <h1 className="text-sm">{date}</h1>
                </div>
                <div className="flex flex-col gap-3  items-end justify-end">
                    <h1 className="text-lg pl-2 font-extralight">{stack}</h1>
                    <h1 className="text-xs w-2/3 font-thin">{desc}</h1>

                </div>
            
                

            </div>
    

        </motion.div>
    )

}
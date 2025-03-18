"use client";

import { easeInOut, motion, useAnimate, useAnimationFrame } from "framer-motion"
import { useState } from "react";
enum ButtonColor{
    Green="bg-green-600",
    Yellow='bg-yellow-600',
    Pink='bg-pink-300',
    White=''
}

export const MovingButton=({heading, color}:{heading: string, color: keyof typeof ButtonColor})=>{

   
    const [position, setPosition]= useState({x:0, y:0});

    useAnimationFrame((t)=>{
        const radius= 30;
        const speed= 0.001;
        setPosition({
            x: Math.cos(t * speed) * radius, 
            y: Math.sin(t * speed) * radius, 
        })
    })

    return (
        <div className="flex items-start justify-start flex-col gap-2 ">
            <motion.span className="bg-white h-2 w-2 rounded-4xl "
             animate={{
                x: position.x,
                y: position.y
            }}
            transition={{
                type:'tween',
                ease: 'linear'
            }}
            >

            </motion.span>
            <motion.button className={`${ButtonColor[color]} text-white text-xs p-2 rounded-4xl shadow-sm  `}
            animate={{
                x: position.x,
                y: position.y
            }}
            transition={{
                type:'tween',
                ease: 'linear'
            }}
            >
{heading }
            </motion.button>

        </div>
    )
}
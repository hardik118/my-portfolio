'use client';

import { SkillCard } from "./Skillcard"
import { Skillstwo } from "./skills2"
import { Skillsthree } from "./Skills3"
import { SkillsFour } from "./Skills4"
import { motion } from "framer-motion"

export const Skills=()=>{
    const  cardVarint={
hidden: {opacity: 0, y: 50},
visible: {opacity: 1, y:0, transition: {duration: 0.7, ease: 'easeInOut' }}

}
    return (
        <div className="h-[55vh] flex flex-col items-center p-5  ">
           <h1 className="text-purple-600 text-xl font-semibold">What Can I Do For You.</h1>
           <div className="p-7 w-full flex flex-row gap-4">
            <motion.div className="w-full block" variants={cardVarint} whileInView='visible' initial='hidden'  viewport={{once: true}}>
            <SkillCard></SkillCard>


            </motion.div>
            <motion.div className="w-full block" variants={cardVarint} whileInView='visible' initial='hidden'  viewport={{once: true}}>

            <Skillstwo></Skillstwo>

            </motion.div>
            <motion.div className="w-full block" variants={cardVarint} whileInView='visible' initial='hidden'  viewport={{once: true}}>

            <Skillsthree></Skillsthree>


            </motion.div>

            <motion.div className="w-full block" variants={cardVarint} whileInView='visible' initial='hidden'  viewport={{once: true}}>
            <SkillsFour></SkillsFour>


            </motion.div>


           </div>
        </div>
    )
}
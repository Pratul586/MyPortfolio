import { RiReactjsLine } from "react-icons/ri";
import {  SiMongodb ,SiCplusplus} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython ,FaGithub } from "react-icons/fa";
 

import { motion } from "framer-motion";

const  iconVariants = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 m-3">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
           
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 m-3">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
             
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 m-3">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
             
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 m-3">
            <FaPython className="text-7xl text-blue-400 absolute " style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }} />
            <FaPython className="text-7xl text-yellow-300 relative" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} />
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 m-3">
                <SiCplusplus className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div variants={iconVariants(9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 m-3">
      <FaGithub className="text-7xl text-white-300" />
    </motion.div>
        </motion.div>
        </div>
  )
}

export default Technologies
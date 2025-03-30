import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaC } from "react-icons/fa6";

import { motion } from "motion/react"

const iconVariants = (duration: number) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-20 lg:mb-35 mt-20">
            <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="mb-20 text-center text-4xl">
                Technologies
            </motion.h1>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-5 lg:px-30">
                {/* icons start */}
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-gray-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-indigo-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoTypescript className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaC className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCpp className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-red-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies

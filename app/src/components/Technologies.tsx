import { RiReactjsLine, RiNextjsLine, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb, SiExpress, } from "react-icons/si"
import { FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa"
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi"
import { TbBrandCpp} from "react-icons/tb"
import { FaAws, FaC } from "react-icons/fa6";
import { motion } from "framer-motion"
import { TechnologyCard } from "./TechnologyCard"


const Technologies = () => {
  return (
    <div className="min-h-screen border-b border-neutral-800 text-white py-20 relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-white mb-6">
            Technologies
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col">
          <h1 className="mb-2 text-center text-slate-300">Programming Languages</h1>
          {/* <div className="w-1/2 h-[1px] bg-slate-500 opacity-50 mx-auto mt-2 mb-2"></div> */}
          <div className="flex flex-wrap justify-center sm:gap-x-7 gap-x-2 gap-2">
            <TechnologyCard technologyIcon={<FaC className="text-blue-500" size={35} />} technologyName={""} />
            <TechnologyCard technologyIcon={<TbBrandCpp className="text-blue-500" size={35} />} technologyName={""} />
            <TechnologyCard technologyIcon={<RiJavascriptFill className="text-yellow-500" size={35} />} technologyName={"JavaScript"} />
            <TechnologyCard technologyIcon={<BiLogoTypescript className="text-blue-500" size={35} />} technologyName={"TypeScript"} />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col mt-10">
          <h1 className="mb-2 text-center text-slate-300">Frontend Skills</h1>
          {/* <div className="w-1/2 h-[1px] bg-slate-500 opacity-50 mx-auto mt-2 mb-2"></div> */}
          <div className="flex flex-wrap justify-center sm:gap-x-7 gap-x-2 gap-y-2">
            <TechnologyCard technologyIcon={<RiReactjsLine className="text-sky-500" size={35} />} technologyName={"ReactJS"} />
            <TechnologyCard technologyIcon={<RiNextjsLine className="text-white" size={35} />} technologyName={"NextJS"} />
            <TechnologyCard technologyIcon={<RiTailwindCssFill className="text-purple-500" size={35} />} technologyName={"Tailwind"} />
            <TechnologyCard technologyIcon={<FaHtml5 className="text-orange-500" size={35} />} technologyName={"HTML"} />
            <TechnologyCard technologyIcon={<FaCss3Alt className="text-sky-500" size={35} />} technologyName={"CSS"} />
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col mt-10">
          <h1 className="mb-2 text-center text-slate-300">Backend Skills</h1>
          {/* <div className="w-1/2 h-[1px] bg-slate-500 opacity-50 mx-auto mt-2 mb-2"></div> */}
          <div className="flex flex-wrap justify-center sm:gap-x-7 gap-x-2 gap-y-2">
            <TechnologyCard technologyIcon={<FaNodeJs className="text-green-500" size={35} />} technologyName={"NodeJS"} />
            <TechnologyCard technologyIcon={<SiExpress className="text-white" size={35} />} technologyName={"ExpressJS"} />
            <TechnologyCard technologyIcon={<SiMongodb className="text-green-500" size={35} />} technologyName={"MongoDB"} />
            <TechnologyCard technologyIcon={<BiLogoPostgresql className="text-sky-500" size={35} />} technologyName={"PostgreSQL"} />
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col mt-10">
          <h1 className="mb-2 text-center text-slate-300">Other Skills</h1>
          {/* <div className="w-1/2 h-[1px] bg-slate-500 opacity-50 mx-auto mt-2 mb-2"></div> */}
          <div className="flex flex-wrap justify-center sm:gap-x-7 gap-x-2 gap-y-2">
            <TechnologyCard technologyIcon={<FaGitAlt className="text-orange-500" size={35} />} technologyName={"Git"} />
            <TechnologyCard technologyIcon={<FaGithub className="text-white" size={35} />} technologyName={"Github"} />
            <TechnologyCard technologyIcon={<FaDocker className="text-sky-500" size={35} />} technologyName={"Docker"} />
            <TechnologyCard technologyIcon={<FaAws className="text-orange-400" size={35} />} technologyName={"AWS"} />
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Technologies
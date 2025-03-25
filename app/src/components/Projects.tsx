import { PROJECTS } from "../lib";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

import { motion } from "motion/react"

const Projects = () => {
    const handleBtnClick = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <div className="pb-20 mt-20">
            <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="mb-20 text-center text-4xl">
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap lg:justify-between ">
                        <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1.5}}
                            className="w-full lg:w-[50%]">
                            <motion.img 
                                src={project.image} 
                                alt={project.title} 
                                className="rounded-md border border-neutral-800 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" 
                            />
                        </motion.div>
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 1.5}}
                            className="w-full max-w-xl lg:w-[50%] h-full flex flex-col justify-center sm:mt-7 lg:mt-0 mt-7">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mb-2 rouded bg-neutral-900 px-2 py-1 text-sm font-medium text-indigo-500 ">{tech}</span>
                                ))}
                            </div>
                            <div className="flex space-x-2 mt-2 mb-3 sm:justify-start justify-center">
                                {/* Live Button */}
                                <button
                                    type="button"
                                    onClick={() => handleBtnClick(project.live || "")}
                                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 cursor-pointer"
                                >
                                    <FiLink className="mr-2" size={16} />
                                    Live
                                </button>

                                {/* GitHub Button */}
                                <button
                                    type="button"
                                    onClick={() => handleBtnClick(project.github || "")}
                                    className="text-white bg-[#24292F] hover:bg-neutral-800 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                                >
                                    <FaGithub className="mr-2" size={16} />
                                    GitHub
                                </button>
                            </div>
                        </motion.div>
                        <div className="border-b mx-auto border-neutral-800 w-full my-14"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

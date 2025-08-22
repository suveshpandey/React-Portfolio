import { PROJECTS } from "../lib";
import { FaGithub } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import { motion } from "motion/react";

const Projects = () => {
    const handleBtnClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <section className="min-h-screen sm:pt-0 pt-40">
        
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="w-full flex flex-col gap-y-3 items-center mb-10">
                <h2 className="text-4xl font-bold 
                    bg-gradient-to-r from-blue-500 to-green-500 
                    bg-clip-text text-transparent text-center">
                    Projects
                </h2>

                <motion.div 
                    whileInView={{ scaleX: 1 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 1 }}
                    className="w-60 mx-auto h-1 rounded-full bg-gradient-to-r from-green-500 via-slate-500 to-blue-500">    
                </motion.div>
                
                <motion.p 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto text-center">
                    A showcase of my work, highlighting practical applications of my skills and creativity.
                </motion.p>
            </motion.div>

            <div className="space-y-6 px-4 sm:px-0">
                {PROJECTS.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 3 }}
                    className="relative group rounded-2xl bg-neutral-900/40 border border-neutral-800 
                            backdrop-blur-sm shadow-lg p-6 lg:p-10 hover:border-indigo-500/50 
                            transition duration-500"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    
                    {/* Project Image */}
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full lg:w-[45%] rounded-xl border border-neutral-800 
                                shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Project Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-3 text-white">{project.title}</h2>
                        <p className="text-neutral-400 mb-4 leading-relaxed">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap mb-6">
                        {project.technologies.map((tech, i) => (
                            <span
                            key={i}
                            className="mr-2 mb-2 rounded-full bg-indigo-900/20 border border-indigo-700/30 
                                        px-3 py-1 text-sm font-medium text-indigo-400 shadow-sm"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => handleBtnClick(project.live || "")}
                                className="inline-flex items-center px-5 py-2.5 rounded-lg 
                                bg-gradient-to-tr from-indigo-800 via-blue-700 to-sky-600 
                                hover:from-indigo-700 hover:via-blue-600 hover:to-sky-500 
                                text-white font-medium transition duration-300 cursor-pointer"
>
                                {/* <FiLink className="mr-2" size={16} /> */}
                                <GoDotFill className="mr-2 animate-ping" size={16} />
                                
                                Live
                            </button>

                            <button
                                type="button"
                                onClick={() => handleBtnClick(project.github || "")}
                                className="inline-flex items-center px-5 py-2.5 rounded-lg 
                                        bg-gradient-to-tr from-gray-900 via-slate-800 to-gray-700 hover:to-gray-500 text-white 
                                        font-medium transition duration-300 cursor-pointer"
                            >
                                <FaGithub className="mr-2" size={16} />
                                GitHub
                            </button>
                        </div>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

import { motion } from "motion/react"

const Education = () => {
    return (
        <div className="border-b border-neutral-800 pb-20 lg:mb-35 mt-20">
            <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="mb-20 text-center text-4xl">
                Education
            </motion.h1>
            <div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <motion.p
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1.5, delay: 0}}
                            className="mb-2 text-sm text-neutral-400">
                            2023-2027
                        </motion.p>
                    </div>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1.5, delay: 0}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">Bachelor of Technology ( Information Technology )</h6>
                        <p className="text-neutral-400">Mahatma Gandhi Chitrakoot Gramoday Vishwavidyalaya, Chitrakoot (MP), India - 485334</p>
                        <p className="pt-2">GPA - <span className="text-blue-200">8.1/10</span> <span className="text-neutral-400">(till 3rd sem)</span></p>
                    </motion.div>
                </div>
            </div>
            <div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <motion.p
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className="mb-2 text-sm text-neutral-400">
                            2022-2023
                        </motion.p>
                    </div>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1.5, delay: 0.5}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">Intermediate (12th Grade)</h6>
                        <p className="text-neutral-400">Sadguru Public Hr. Sec. School, Chitrakoot (MP), India - 485334</p>
                        <p className="pt-2">Percentage - <span className="text-blue-200">80.2%</span></p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Education

import leetcode from  "../assets/socialImgs/leetcode-icon.png"
import codeforces from  "../assets/socialImgs/codeforces-icon.png"
import codechef from  "../assets/socialImgs/codechef-icon.png"
import gfg from  "../assets/socialImgs/gfg-icon.png"

import { motion } from "motion/react"

const CodingProfiles = () => {
    const handleBtnClick = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-0">
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="w-full flex flex-col gap-y-3 items-center mb-10">
                <h2 className="text-4xl font-bold 
                    bg-gradient-to-r from-blue-500   to-green-500 
                    bg-clip-text text-transparent px-10">
                    Coding Profiles
                </h2>
                <div className="w-60 mx-auto h-1 rounded-full bg-gradient-to-r from-green-500 via-slate-500 to-blue-500"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center">
                    Profiles that reflect my dedication to algorithms, logic, and coding practice.
                </p>
            </motion.div>

            

            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://leetcode.com/u/Suvesh_Pandey/") }
                    className="text-white border-2 shadow-gray-800 shadow-md hover:shadow-lg border-gray-700 hover:bg-gray-800 cursor-pointer font-medium rounded-lg w-[200px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3 transition-all duration-200"
                >
                    <img src={leetcode} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">Leetcode</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://codeforces.com/profile/suvesh_pandey") }
                    className="text-white border-2 shadow-gray-800 shadow-md hover:shadow-lg border-gray-700 hover:bg-gray-800 cursor-pointer font-medium rounded-lg w-[200px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3 transition-all duration-200"
                >
                    <img src={codeforces} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">Codeforces</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://www.codechef.com/users/suvesh_pandey") }
                    className="text-white border-2 shadow-gray-800 shadow-md hover:shadow-lg border-gray-700 hover:bg-gray-800 cursor-pointer font-medium rounded-lg w-[200px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3 transition-all duration-200"
                >
                    <img src={codechef} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">Codechef</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://www.geeksforgeeks.org/user/suveshpandey/") }
                    className="text-white border-2 shadow-gray-800 shadow-md hover:shadow-lg border-gray-700 hover:bg-gray-800 cursor-pointer font-medium rounded-lg w-[200px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3 transition-all duration-200"
                >
                    <img src={gfg} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">GeeksForGeeks</span>
                </button>
            </motion.div>
        </div>
    )
}

export default CodingProfiles


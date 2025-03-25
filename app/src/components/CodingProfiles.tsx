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
        <div className="border-b border-neutral-800 pb-20 lg:mb-20 ">
            <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="mb-20 text-center text-4xl">
                Coding Profiles
            </motion.h1>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://leetcode.com/u/Suvesh_Pandey/") }
                    className="text-white bg-[#24292F] hover:bg-neutral-800 cursor-pointer font-medium rounded-lg w-[170px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3"
                >
                    <img src={leetcode} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">Leetcode</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://codeforces.com/profile/suvesh_pandey") }
                    className="text-white bg-[#24292F] hover:bg-neutral-800 cursor-pointer font-medium rounded-lg w-[170px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3"
                >
                    <img src={codeforces} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">Codeforces</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://www.codechef.com/users/suvesh_pandey") }
                    className="text-white bg-[#24292F] hover:bg-neutral-800 cursor-pointer font-medium rounded-lg w-[170px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3"
                >
                    <img src={codechef} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">Codechef</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleBtnClick("https://www.geeksforgeeks.org/user/suveshpandey/") }
                    className="text-white bg-[#24292F] hover:bg-neutral-800 cursor-pointer font-medium rounded-lg w-[170px] py-2.5 flex items-center justify-center me-2 mb-2 gap-x-3"
                >
                    <img src={gfg} alt="leetcode" className="size-10" />
                    <span className="text-neutral-300">GeeksForGeeks</span>
                </button>
            </motion.div>
        </div>
    )
}

export default CodingProfiles

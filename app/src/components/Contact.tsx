import { CONTACT } from "../lib"
import { MdWifiCalling2 } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-800 pb-20 mt-20">
            <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="mb-10 text-center text-4xl">
                Get In Touch
            </motion.h1>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="flex justify-center flex-wrap items-center sm:gap-x-6 gap-x-3">
                <div className="flex items-center justify-center gap-x-3">
                    <MdWifiCalling2 className="text-xl" />
                    <p className="my-4"><span className="mr-2 text-gray-400">+91</span>{CONTACT.phoneNo}</p>
                </div>
                <div className="h-[30px] w-[2px] bg-neutral-500"></div>
                <div className="flex items-center justify-center gap-x-3">
                    <MdAttachEmail className="text-xl" />
                    <a href="mailto:jpsuvesh29@gmail.com" className="border-b hover:text-blue-500">{CONTACT.email}</a>
                </div>
            </motion.div>
            <p className="text-center mt-10 opacity-50">© 2025 | Suvesh Pandey.</p>
        </div>
    )
}

export default Contact

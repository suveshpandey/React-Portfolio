// import { CONTACT } from "../lib"
// import { MdWifiCalling2 } from "react-icons/md";
// import { MdAttachEmail } from "react-icons/md";
// import { motion } from "framer-motion";

// const Contact = () => {
//     return (
//         <div className="bg-slate-900">
//             <motion.h1 
//                 whileInView={{opacity: 1, y: 0}}
//                 initial={{opacity: 0, y: -100}}
//                 transition={{duration: 1.5}}
//                 className="mb-10 text-center text-4xl">
//                 Get In Touch
//             </motion.h1>
//             <motion.div
//                 whileInView={{opacity: 1, x: 0}}
//                 initial={{opacity: 0, x: -100}}
//                 transition={{duration: 1.5}}
//                 className="flex justify-center flex-wrap items-center sm:gap-x-6 gap-x-3">
//                 <div className="flex items-center justify-center gap-x-3">
//                     <MdWifiCalling2 className="text-xl" />
//                     <p className="my-4"><span className="mr-2 text-gray-400">+91</span>{CONTACT.phoneNo}</p>
//                 </div>
//                 <div className="h-[30px] w-[2px] bg-neutral-500"></div>
//                 <div className="flex items-center justify-center gap-x-3">
//                     <MdAttachEmail className="text-xl" />
//                     <a href="mailto:jpsuvesh29@gmail.com" className="border-b hover:text-blue-500">{CONTACT.email}</a>
//                 </div>
//             </motion.div>
//             <p className="text-center mt-10 opacity-50">© 2025 | Suvesh Pandey.</p>
//         </div>
//     )
// }

// export default Contact


import { CONTACT } from "../lib";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
    return (
        <div className="py-16 px-4 sm:px-0 sm:pt-0 pt-40">
        {/* Heading */}
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-center 
            bg-gradient-to-r from-blue-500   to-green-500 
            bg-clip-text text-transparent mb-4"
        >
            Get In Touch
        </motion.h2>

        {/* Divider line */}
        <motion.div
            whileInView={{ scaleX: 1 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 1 }}
            className="w-60 h-1 mx-auto rounded-full 
            bg-gradient-to-r from-green-400 via-slate-500 to-blue-500 mb-8"
        />

        {/* Contact Cards */}
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
            className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
            {/* Phone */}
            <div className="flex items-center gap-4 p-6 rounded-2xl 
            bg-slate-800/40 border border-slate-700/50 hover:border-slate-500/50 
            shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
            >
            <Phone className="text-sky-400 w-6 h-6" />
            <p className="text-gray-300 text-lg">
                <span className="mr-2 text-gray-400">+91</span>{CONTACT.phoneNo}
            </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-6 rounded-2xl 
            bg-slate-800/40 border border-slate-700/50 hover:border-slate-500/50 
            shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
            <Mail className="text-green-400 w-6 h-6" />
            <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg text-gray-300 hover:text-green-400 transition-colors"
            >
                {CONTACT.email}
            </a>
            </div>
        </motion.div>

        {/* Footer */}
        <p className="text-center mt-10 text-gray-500 text-sm">
            © 2025 | Suvesh Pandey
        </p>
        </div>
    );
};

export default Contact;

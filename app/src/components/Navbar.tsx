import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";

const Navbar = () => {
    const handleIconClick = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <nav className="w-full fixed z-1 backdrop-blur-lg top-0 left-0">
            <div className="sm:w-[80%] md:w-[90%] lg:w-[60%] mx-auto flex items-center justify-between sm:py-8 py-4 sm:px-0 px-4">
                <div className="flex items-center text-2xl">
                    <MdChevronLeft />
                    <h1 className="cursor-pointer bg-gradient-to-r from-pink-200 to-violet-600 text-transparent bg-clip-text">
                        devSuvesh  
                    </h1>
                    <h1 className="ml-2">/</h1>
                    <MdChevronRight />
                </div>
                <div className=" flex items-center justify-between gap-4 text-2xl">
                    <FaLinkedinIn onClick={() => handleIconClick("https://www.linkedin.com/in/suvesh-pandey/")} className="cursor-pointer hover:text-blue-500 transition-all duration-300" />
                    <FaGithub onClick={() => handleIconClick("https://github.com/suveshpandey")} className="cursor-pointer hover:text-gray-500 transition-all duration-300" />
                    <FaXTwitter onClick={() => handleIconClick("https://x.com/suvesh_298")} className="cursor-pointer hover:text-white transition-all duration-300" />
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
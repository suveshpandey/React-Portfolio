import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    const handleIconClick = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <nav className=" flex items-center justify-between sm:py-8 py-4">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="text-3xl cursor-pointer">𝓢𝓟</h1>
            </div>
            <div className=" flex items-center justify-between gap-4 text-2xl">
                <FaLinkedinIn onClick={() => handleIconClick("https://www.linkedin.com/in/suvesh-pandey/")} className="cursor-pointer hover:text-blue-500 transition-all duration-300" />
                <FaGithub onClick={() => handleIconClick("https://github.com/suveshpandey")} className="cursor-pointer hover:text-gray-500 transition-all duration-300" />
                <FaXTwitter onClick={() => handleIconClick("https://x.com/suvesh_298")} className="cursor-pointer hover:text-white transition-all duration-300" />
            </div>
        </nav>
    )
}

export default Navbar
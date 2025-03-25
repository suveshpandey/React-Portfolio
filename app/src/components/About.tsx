
import profilePic from "../assets/profilePic.jpg"

const About = () => {
    return (
        <div className="border-b border-neutral-800 sm:pb-35 pb-10 mt-20">
            <h1 className="mb-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
            <div className="flex flex-wrap justify-center items-center sm:mx-20 lg:gap-x-0 gap-x-6" >
                <div className="w-full sm:w-[48%] ">
                    <div className="flex sm:justify-start justify-center ">
                        <img src={profilePic} alt="Suvesh Pandey" className="rounded-lg lg:size-[400px] size-[300px] opacity-60 " />
                    </div>
                </div>
                <div className="w-full sm:w-[48%]">
                    <div className="flex flex-col items-center lg:items-end ">
                        <p className="my-2 max-w-xl py-6 sm:text-left text-center font-light tracking-tight">
                            I am a second-year IT engineering student with a strong interest in web development and problem-solving. I have a solid understanding of the MERN stack and am currently deepening my knowledge by exploring advanced concepts, including TypeScript.
                            <br />
                            <br />
                            I am highly motivated and believe in consistent self-improvement. I am currently seeking internship opportunities in web development, specifically in the MERN stack, to gain hands-on experience and contribute to real-world projects.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About

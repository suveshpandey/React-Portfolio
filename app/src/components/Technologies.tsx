import { RiReactjsLine, RiNextjsLine, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb, SiPostgresql, SiExpress } from "react-icons/si"
import { FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import { TbBrandCpp} from "react-icons/tb"
import { FaC } from "react-icons/fa6";
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-400" },
      { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-400" },
      { name: "C", icon: FaC, color: "text-blue-600" },
      { name: "C++", icon: TbBrandCpp, color: "text-blue-500" }
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
      { name: "Next.js", icon: RiNextjsLine, color: "text-white" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" }
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" }
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Docker", icon: FaDocker, color: "text-white" }
    ]
  }
]

const InfiniteSlider = ({ skills, direction = "left" }: { skills: any[], direction?: "left" | "right" }) => {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills]
  
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex gap-8 will-change-transform"
        animate={{
          x: direction === "left" ? [0, -100 * skills.length] : [-100 * skills.length, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: skills.length * 4,
            ease: "linear"
          }
        }}
        style={{ width: `${skills.length * 300}px` }}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="group relative flex-shrink-0"
            style={{ width: "200px" }}
          >
            <div 
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <skill.icon className={`text-6xl ${skill.color} transition-all duration-300 group-hover:drop-shadow-lg mx-auto`} />
              
              {/* Skill name tooltip */}
              <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gray-800/90 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap border border-gray-600/50 backdrop-blur-sm">
                  {skill.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800/90 border-t border-l border-gray-600/50 rotate-45"></div>
                </div>
              </div>
              <h1 className="text-slate-400 my-1 text-sm">{skill.name}</h1>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-cyan-600/5 transition-all duration-500"></div>
              
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Left blur gradient */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right blur gradient */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className="min-h-screen border-b border-neutral-800 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Technologies
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-12 relative">
                {category.title}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-blue-500/60"></div>
              </h3>
              
              <InfiniteSlider 
                skills={category.skills} 
                direction={categoryIndex % 2 === 0 ? "left" : "right"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies
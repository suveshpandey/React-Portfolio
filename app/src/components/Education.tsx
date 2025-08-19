import { motion } from "motion/react"
import { GraduationCap, Award, Briefcase } from "lucide-react"

const Education = () => {
    const cards = [
        {
            icon: <GraduationCap className="text-green-400 w-6 h-6" />,
            title: "Education",
            subtitle: "B.Tech in Information Technology",
            place: "Mahatma Gandhi Chitrakoot Gramoday Vishwavidyalaya",
            detail: "CGPA: 8.2/10 (till 4th sem)",
            color: "border-green-500/30 hover:border-green-400/50",
        },
        {
            icon: <Award className="text-purple-400 w-6 h-6" />,
            title: "Achievements",
            subtitle: "Data Structures and Algorithms",
            place: "500+ LeetCode Problems",
            detail: "Rating 1500+",
            color: "border-purple-500/30 hover:border-purple-400/50",
        },
        {
            icon: <Briefcase className="text-indigo-400 w-6 h-6" />,
            title: "Specialization",
            subtitle: "MERN Stack Development",
            place: "Seeking Internship Opportunities",
            detail: "Next.js • TypeScript • Scalable Web Apps • Problem Solving",
            color: "border-indigo-500/30 hover:border-indigo-400/50",
        },

        
    ]

    return (
            <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-0">
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="w-full flex flex-col gap-y-3 items-center mb-10">
                <h2 className="text-4xl font-bold 
                    bg-gradient-to-r from-blue-500   to-green-500 
                    bg-clip-text text-transparent px-10">
                    About Me
                </h2>
                <div className="w-60 mx-auto h-1 rounded-full bg-gradient-to-r from-green-500 via-slate-500 to-blue-500"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Blending technical expertise with a constant desire to grow and innovate.
                </p>
            </motion.div>
            
            {/* Grid Layout */}
            <div className="grid gap-6 sm:grid-cols-2">
                {cards.map((card, i) => (
                <motion.div
                    key={i}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className={`rounded-xl border bg-neutral-900/40 p-6 transition-all duration-300 ${card.color}`}
                >
                    <div className="flex items-center gap-2 mb-3">
                    {card.icon}
                    <h3 className="font-semibold">{card.title}</h3>
                    </div>
                    <h4 className="text-lg font-medium mb-1">{card.subtitle}</h4>
                    <p className="text-neutral-400 text-sm">{card.place}</p>
                    <p className="mt-2 text-sm text-blue-200">{card.detail}</p>
                </motion.div>
                ))}
            </div>
            </div>
    )
}

export default Education

import { motion } from "motion/react"

const iconVariants = (duration: number) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    }
})

interface TechnologyCardProps {
    technologyIcon: React.ReactNode,
    technologyName: string
}

export const TechnologyCard = ({technologyIcon, technologyName}: TechnologyCardProps) => {
    return (
        <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="w-auto flex space-x-2 items-center rounded-2xl border-2 border-neutral-800 px-4 py-2">
            {technologyIcon} <span>{technologyName}</span>
        </motion.div>
    )
}
interface TechnologyCardProps {
    technologyIcon: React.ReactNode,
    technologyName: string
}

export const TechnologyCard = ({technologyIcon, technologyName}: TechnologyCardProps) => {
    return (
        <div 
            className="w-auto flex space-x-2 items-center rounded-2xl border-2 border-neutral-800 px-4 py-2">
            {technologyIcon} <span className="text-slate-400">{technologyName}</span>
        </div>
    )
}
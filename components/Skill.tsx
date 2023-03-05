import { FC } from "react"
import { SkillProps } from "./Skills";

const Skill: FC<SkillProps> = ({ skill }) => {

    const width = 10 * skill.score;

    return (
        <div className="w-full relative flex text-lg font-bold h-9">
            <div style={{width:`${width}%`}} className="absolute h-full bg-text-light dark:bg-skills-dark flex items-center pl-4 rounded-l-lg select-none text-white tracking-wide font-Montserrat">
                <p>{skill.name}</p>
            </div>
            <div className="w-full h-full rounded-lg skill dark:shadow-none dark:bg-text-light"></div>
        </div>
    )
}

export default Skill
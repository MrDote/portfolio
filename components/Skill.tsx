import { FC } from "react"
import { SkillProps } from "./Skills";

const Skill: FC<SkillProps> = ({ skill }) => {

    const width = 10 * skill.score;

    //* EG:
    //* define an object mapping the 'sizes' to the class strings
    // const cardSizes = {
    //* use the full text of desired Tailwind CSS classes
    //     XS: 'w-8 h-4',
    //     S: 'w-16 h-8'
    // }
    //* use as an argument for your template renderer
    // function Template({ size }) {
    //     X.args = {
    //     style: {},
    //     className: `${cardSizes[size]}`
    //     }
    //     return <div className={X.args.className}>Hello</div>
    // }
    //* pass size string when calling the template function
    // <Template size={'XS'}/>

    //! build sorter -> slow at start & end, fast mid 
    return (
        <div className="w-full relative flex text-lg font-bold h-9">
            <div style={{width:`${width}%`}} className="absolute h-full bg-sky-600 flex items-center pl-4 rounded-l-lg select-none">
                <p>{skill.name}</p>
            </div>
            <div className="bg-sky-400 w-full h-full rounded-lg shadow-md"></div>
        </div>
    )
}

export default Skill
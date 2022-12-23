import Skill from "./Skill"
import { useState } from 'react'

const Skills = () => {

    // const [ skills, setSkills ] = useState({
    //     TypeScript: 2,
    //     Rust: 5,
    //     Python: 4,
    //     Git: 3,
    //     MDX: 4,
    //     Tailwind: 6,
    //     React: 3,
    //     Astro: 9,
    //     Next: 6,
    //     Prisma: 7,
    //     PostgreSQL: 8,
    //     Vercel: 6,
    // });

    const skills = {
        TypeScript: 6,
        Rust: 5,
        Python: 4,
        Git: 3,
        MDX: 4,
        Tailwind: 6,
        React: 3,
        Astro: 9,
        Next: 6,
        Prisma: 7,
        PostgreSQL: 8,
        Vercel: 6,
    }

    // console.log(skills)

    const objEntries = Object.entries(skills);

    return (
        <div className='w-full h-screen px-2 py-10 border-t-4 bg-gradient-to-b from-orange-400'>
            <div className="max-w-7xl h-full flex flex-col items-center gap-5">
                <p>Here are some of the tools I leverage:</p>
                <div className="flex flex-col px-10 w-full gap-2">
                    {objEntries.map((lst, index) => <Skill obj={lst} key={index} />)}
                </div>
            </div>
        </div>
    )
}

export default Skills
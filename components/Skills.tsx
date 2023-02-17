import Skill from "./Skill"

type SkillType = {
    readonly name: string;
    readonly score: number;
    readonly id: number;
}

export interface SkillProps {
    skill: SkillType,
}

const Skills = () => {

    const skills: SkillType[] = [
        {
            name: 'TypeScript',
            score: 2,
            id: 1,
        },
        {
            name: 'Rust',
            score: 5,
            id: 2,
        },
        {
            name: 'Python',
            score: 3,
            id: 3,
        },
        {
            name: 'Git',
            score: 5,
            id: 4,
        },
        {
            name: 'MDX',
            score: 3,
            id: 5,
        },
        {
            name: 'TailwindCSS',
            score: 5,
            id: 6,
        },
        {
            name: 'React',
            score: 3,
            id: 7,
        },
        {
            name: 'Astro',
            score: 9,
            id: 8,
        },
        {
            name: 'Next',
            score: 6,
            id: 9,
        },
        {
            name: 'Prisma',
            score: 5,
            id: 10,
        },
        {
            name: 'PostgreSQL',
            score: 8,
            id: 11,
        },
        {
            name: 'Vercel',
            score: 5,
            id: 12,
        },
    ]

    return (
        <div id='skills' className='w-full px-10 border-t-4 bg-gradient-to-b from-[var(--secondary-bg-color)] flex flex-col lg:flex-row gap-5'>
            <p className="text-center border tracking-wide py-8 px-2 lg:w-[40%] lg:h-[50%] bg-amber-400 rounded-b-xl">I'm not your average developer. I've spent the last four years working
            towards a Physics and Astrophysics Masters degree. Python and its libraries were essential to pick up along the way,
            which was my initial exposure to coding. After  learning some JavaScript, I've taken interest in various applications
            of these languages in web development, machine learning and backend technologies.

            </p>
            <div className="h-full my-5 flex flex-col items-center gap-5 w-full">
                <p>Currently, I am spending my time building interactive websites with the following tools:</p>
                <div className="flex flex-col px-10 w-full gap-3">
                    {skills.map((lst, _) => <Skill skill={lst} key={lst.id} />)}
                </div>
            </div>
        </div>
    )
}

export default Skills
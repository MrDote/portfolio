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
        <div className='relative w-full px-10 border-t-4 border-border-light bg-gradient-to-b from-bg-light-2 dark:from-bg-dark-2 flex flex-col lg:flex-row gap-5'>
            <a id='skills' className="absolute top-[-6rem] left-0"></a>
            <p className="text-center text-white tracking-wide py-8 px-2 lg:w-[40%] lg:h-[50%] bg-text-light dark:bg-skills-dark rounded-b-xl">I'm not your average developer. I've spent the last four years working
            towards a Physics and Astrophysics Masters degree. Python and its libraries were essential to pick up along the way,
            which was my initial exposure to coding. After  learning some JavaScript, I've taken interest in various applications
            of these languages in web development, machine learning and backend technologies.

            </p>
            <div className="h-full my-5 flex flex-col items-center gap-5 w-full">
                <p>Currently, I am spending my time building interactive websites with the following tools:</p>
                <div className="flex flex-col lg:px-10 px-0 w-full gap-3 my-5">
                    {skills.map((skill) => <Skill skill={skill} key={skill.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Skills
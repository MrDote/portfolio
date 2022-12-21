import Skill from "./Skill"

const Skills = () => {

    // const {  }

    const skills = {
        TypeScript: 2,
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

    const objEntries = Object.entries(skills);

    return (
        <div className='w-full h-full p-2 py-10 border-t-4
        border-black border-4'>
            <div className="max-w-7xl h-full flex flex-col items-center gap-5
            border-black border-4">
                <p>Here are some of the tools I'm using or learning currently:</p>
                <div className="flex flex-col px-10 w-full gap-2
                border-orange-300 border-4">
                    {objEntries.map((lst, index) => <Skill obj={lst} key={index} />)}
                </div>
                <div className="flex gap-16">
                    <button className="p-1 text-blue-100 hover:scale-110">Bubble Sort</button>
                    <button className="p-1 text-blue-100 hover:scale-110">Randomize</button>
                </div>
            </div>
        </div>
    )
}

export default Skills
import Project from "./Project";

type ProjectType = {
    readonly name: string;
    readonly dates: string;
    readonly description: string;
    readonly imagesrc: string;
    readonly bgcolor: string;
    readonly complete: boolean;
    readonly url: URL;
    readonly id: number;
}

export interface ProjectProps {
    project: ProjectType,
}

const Projects = () => {

    const projects: ProjectType[] = [
        {
            name: 'Self-Driving Car',
            dates: '2022-Present',
            description: 'Teach car how to drive using CNNs!',
            complete: true,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 1,
            imagesrc: "/projects/car.png",
            bgcolor: "#0f172a",
        },
        
        {
            name: 'Solar System Simulation',
            dates: '2020-2021',
            description: 'Simulation of the Solar System with Python',
            complete: true,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 2,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },
        
        {
            name: 'CRA + Rust + PostgreSQL',
            dates: '2022',
            description: 'Connecting frontend with Rust and Postgres on the backend',
            complete: true,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 3,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },
        
        {
            name: 'CV Builder',
            dates: '2022',
            description: 'Making my own CV template with Astro',
            complete: false,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 4,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },

        {
            name: 'CV Builder',
            dates: '2022',
            description: 'Making my own CV template with Astro',
            complete: false,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 5,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },
    ]

    return (
        <div className='relative p-10 border-t-4 border-[var(--primary-border-color)] bg-gradient-to-b from-[var(--secondary-bg-color)]'>
            <h1 className="uppercase tracking-wide text-center relative
            after:absolute after:content[''] after:bg-[var(--primary-text-color)] after:w-24 after:h-1 after:-bottom-3 after:left-[49%] after:-ml-10
            ">Projects</h1>
            <a id='projects' className="absolute top-[-6rem] left-0"></a>
            <div className="mx-5 grid grid-cols-2 lg:grid-cols-4 gap-5 my-20 sm:mx-10 border-black border-2">
                {projects.map((lst, _) => <Project project={lst} key={lst.id} />)}
            </div>
        </div>
    )
}

export default Projects
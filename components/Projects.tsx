import Project from "./Project";

type ProjectType = {
    readonly name: string;
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
            description: 'Teach car how to drive using CNNs!',
            complete: true,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 1,
            imagesrc: "/projects/car.png",
            bgcolor: "#0f172a",
        },
        
        {
            name: 'Solar System Simulation',
            description: 'Simulation of the Solar System with Python',
            complete: true,
            url: new URL('https://github.com/MrDote/Simulation'),
            id: 2,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },
        
        {
            name: 'Basic TODO App',
            description: 'Connecting frontend with Rust and Postgres on the backend',
            complete: true,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 3,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },
        
        {
            name: 'CV Builder',
            description: 'Making my own CV template with Astro',
            complete: false,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 4,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },

        {
            name: 'CV Builder',
            description: 'Making my own CV template with Astro',
            complete: false,
            url: new URL('https://github.com/MrDote/portfolio'),
            id: 5,
            imagesrc: "/projects/car.png",
            bgcolor: "rgb(45 135 253)",
        },
    ]

    return (
        <div className='relative p-5 border-t-4 border-[var(--primary-border-color)] bg-gradient-to-b from-[var(--secondary-bg-color)]'>
            <h1 className="uppercase tracking-wide text-center relative
            after:absolute after:content[''] after:bg-[var(--primary-text-color)] after:w-24 after:h-1 after:-bottom-3 after:left-[49%] after:-ml-10
            ">Projects</h1>
            <a id='projects' className="absolute top-[-6rem] left-0"></a>
            <div className="mx-10 grid grid-cols-1 gap-5 my-14 border-black border-2
            sm:grid-cols-2 sm:mx-5
            lg:grid-cols-3 lg:mx-[3%]
            xl:mx-[7%]
            ">
                {projects.map((lst, _) => <Project project={lst} key={lst.id} />)}
            </div>
        </div>
    )
}

export default Projects
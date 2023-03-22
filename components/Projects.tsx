import Project from "./Project";

type ProjectType = {
    readonly name: string;
    readonly description: string;
    readonly imagesrc: string;
    readonly complete: boolean;
    readonly url: URL;
}

export interface ProjectProps {
    project: ProjectType,
}

const Projects = () => {

    const projects: ProjectType[] = [
        {
            name: 'Portfolio Website',
            description: 'Made using Typescript, TailwindCSS, Next.js and Supabase',
            complete: true,
            url: new URL('https://github.com/MrDote/portfolio'),
            imagesrc: "/projects/portfolio.png",
        },

        {
            name: 'CapsNet for Morphology Evolution Prediction',
            description: 'Train a capsule based neural network to classify galaxies!',
            complete: true,
            url: new URL('https://github.com/MrDote/GalaxyZoo-CapsNet'),
            imagesrc: "/projects/capsnet2.png",
        },

        {
            name: 'DeepCaps: Deeper Capsule Networks',
            description: 'Construct and compare deeper CapsNets on various classification tasks!',
            complete: true,
            url: new URL('https://github.com/MrDote/DeepCaps_Pytorch'),
            imagesrc: "/projects/deepcaps.png",
        },

        {
            name: 'Sorting Visualizer',
            description: 'A visualization tools for popular sorting algorithms',
            complete: false,
            url: new URL('https://github.com/MrDote/Sorting-Visualizer'),
            imagesrc: "/projects/visualizer.png",
        },

        {
            name: 'Self-Driving Car',
            description: 'Teach a car how to drive using CNNs!',
            complete: false,
            url: new URL('https://github.com/MrDote/Car'),
            imagesrc: "/projects/car.png",
        },
        
        {
            name: 'Monte Carlo Simulation',
            description: 'Simulation of particles in a box with Python',
            complete: true,
            url: new URL('https://github.com/MrDote/MonteCarloSimulation'),
            imagesrc: "/projects/montecarlo.png",
        },
        
        {
            name: 'Solar System Simulation',
            description: 'Simulating the Solar System using various numerical methods',
            complete: true,
            url: new URL('https://github.com/MrDote/SolarSystemSimulation'),
            imagesrc: "/projects/solarsystem.png",
        },
        
        {
            name: 'CV Builder',
            description: 'Making my own CV template with Astro',
            complete: true,
            url: new URL('https://github.com/MrDote/CV'),
            imagesrc: "/projects/cv.png",
        },
        
        {
            name: 'TODO App',
            description: 'Connecting CRA with Rust and PostgreSQL on the backend',
            complete: true,
            url: new URL('https://github.com/MrDote/CRA_Rust_PSQL'),
            imagesrc: "/projects/rust.png",
        },

        {
            name: 'Beginner PyTorch Networks',
            description: 'Implementing basic neural networks from scratch!',
            complete: false,
            url: new URL('https://github.com/MrDote/Pytorch_Small_Projects'),
            imagesrc: "/projects/torchh.png",
        },

        {
            name: 'Animations with JavaScript',
            description: 'JavaScript animations using canvas',
            complete: true,
            url: new URL('https://github.com/MrDote/JSProjects'),
            imagesrc: "/projects/js.png",
        }
    ]

    return (
        <div className='relative p-5 border-t-4 border-border-light bg-gradient-to-b from-bg-light-2 dark:from-bg-dark-2'>
            <h1 className="uppercase tracking-wide text-center relative
            after:absolute after:content[''] after:bg-text-light dark:after:bg-text-dark after:w-24 after:h-1 after:-bottom-3 after:left-[50%] after:-ml-10
            ">Projects</h1>
            <a id='projects' className="absolute top-[-6rem] left-0"></a>
            <div className="mx-10 grid grid-cols-1 gap-5 my-14
            sm:grid-cols-2 sm:mx-5
            lg:grid-cols-3 lg:mx-[3%]
            xl:mx-[7%]
            ">
                {projects.map((project, index) => <Project project={project} key={index} />)}
            </div>
        </div>
    )
}

export default Projects
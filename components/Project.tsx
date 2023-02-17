import { FC, SyntheticEvent } from "react"
import { ProjectProps } from "./Projects";
import { useRouter } from "next/router"; 

const Project: FC<ProjectProps> = ({ project }) => {

    const router = useRouter();

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        router.push(project.url)
    }

    const status = project.complete ? 'Complete! Check it out!' : 'In Progress...';

    return (
        <div
        onClick={ handleClick }
        className="w-full relative aspect-[4/3] bg-zinc-400 transition-all border-red-600 border-2 text-center pt-[10%] px-[5%] ease-in-out
        hover:bg-transparent hover:cursor-pointer
        ">
            <div className="">
                <h3>{project.name}</h3>
                <p>{project.dates}</p>
                <p>{project.description}</p>
            </div>
            <p className="absolute bottom-3 left-0 right-0">{ status }</p>
        </div>
    )
}

export default Project
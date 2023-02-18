import { FC, SyntheticEvent } from "react"
import { ProjectProps } from "./Projects";
import { useRouter } from "next/router";
import Image from 'next/image';

const Project: FC<ProjectProps> = ({ project }) => {

    const router = useRouter();

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        router.push(project.url)
    }

    const MyImage = () => {
        return (
            <Image
                src={project.imagesrc}
                alt={`Project ${project.id}`}
                className="object-cover rounded-lg -z-10"
                fill
            />
        );
    }

    const status = project.complete ? 'Complete! Check it out!' : 'In Progress...';

    return (
        <div
        // onClick={ handleClick }
        className="relative w-full aspect-[4/3] transition-all border-red-600 border-2 text-center ease-in-out rounded-lg
        cursor-pointer
        ">
            <MyImage />
            <div style={{background:project.bgcolor}} className="absolute w-full h-full opacity-30"></div>
            <div className="relative rounded-lg h-full py-5 px-2 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3>{project.name}</h3>
                <p>{project.dates}</p>
                <p>{project.description}</p>
                <p className="absolute bottom-3 left-0 right-0">{ status }</p>
            </div>
        </div>
    )
}

export default Project
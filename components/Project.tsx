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

    const status = project.complete ? 'Complete! Check it out!' : 'In Progress...';

    return (
        <div id="skillcontainer" className="w-full h-full relative aspect-[5/3] text-center rounded-lg overflow-hidden cursor-pointer"
            onClick={ handleClick }
            >
                <div id="image" className="w-full h-full transition-all duration-500 ease-in-out">
                    <Image
                        src={project.imagesrc}
                        alt={project.name + 'project'}
                        className="object-cover rounded-lg opacity-[60%] dark:opacity-[60%]"
                        fill
                    />
                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[1000] text-2xl text-text-light dark:text-text-dark w-full px-2 font-Montserrat">{project.name}</p>
                </div>
                <div id="info" className="absolute w-full top-0 rounded-lg h-full p-5 opacity-0 bg-text-light transition-all duration-500 ease-in text-text-dark font-Montserrat font-extrabold text-xl pt-[10%]
                sm:pt-[5%] md:pt-[7%] lg:pt-[5%] 2xl:pt-[10%]
                ">
                    <p className="relative top-[15%] leading-7 xl:leading-8 sm:text-lg md:text-xl lg:text-2xl">{ project.description }</p>
                    <p className="absolute bottom-4 left-0 right-0 text-sm md:text-lg lg:text-xl">{ status }</p>
                </div>
            </div>
    )
}

export default Project
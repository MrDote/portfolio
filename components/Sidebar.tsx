import Link from 'next/link';
import { ImLinkedin2 } from 'react-icons/im';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import paths from '../paths';
import { propsType } from './Navbar';


const Sidebar = ({isOut, setIsOut}: propsType) => {

    const handleClick = () => {
        setIsOut(false);
    }

    return (
        <div 
        className={`transition-all duration-500 ease-in-out fixed right-0 top-0 w-full h-screen md:hidden select-none bg-black/60
        ${isOut ? `` : `opacity-0 invisible`}
        `}>
            <div className={`fixed right-0 top-0 w-8/12 sm:w-7/12 md:w-5/12 lg:w-1/3 h-screen p-10 transition-all ease-in-out duration-500 bg-[var(--primary-bg-color)]
            ${isOut ? `` : `translate-x-40 opacity-0 invisible`}
            `}>
                <div>
                    <div className='border-b border-gray-300 my-5 py-4 font-semibold text-lg'>
                        <p>Some cool quote</p>
                    </div>
                    <div className='uppercase font-semibold text-lg pt-10'>
                        <ul className='flex flex-col gap-y-10'>
                            <Link className='w-fit' href={paths.about} onClick={handleClick}>
                                <li>About</li>
                            </Link>
                            <Link className='w-fit' href={paths.skills} onClick={handleClick}>
                                <li>Skills</li>
                            </Link>
                            <Link className='w-fit' href={paths.projects} onClick={handleClick}>
                                <li>Projects</li>
                            </Link>
                            <Link className='w-fit' href={paths.contact} onClick={handleClick}>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='uppercase tracking-widest text-sky-500 mt-40'>
                        <div>
                            <p>Let's Connect</p>
                        </div>
                        <div className='flex flex-row justify-around py-8'>
                            <Link href={paths.github} className='cursor-pointer shadow-lg shadow-slate-500 hover:scale-125 p-2 rounded-full text-black'>
                                <AiFillGithub size='44' />
                            </Link>
                            <Link href={paths.linkedin} className='cursor-pointer shadow-lg shadow-slate-500 hover:scale-125 p-3 rounded-full'>
                                <ImLinkedin2 size='36' />
                            </Link>
                            <Link href={paths.medium} className='cursor-pointer shadow-lg shadow-slate-500 hover:scale-125 p-2 rounded-full text-black'>
                                <AiFillMediumCircle size='44' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
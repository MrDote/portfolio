import Link from 'next/link';
import { ImLinkedin2 , ImFacebook } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import paths from '../paths';
import { propsType } from './Navbar';


const Sidebar = ({isOut, setIsOut}: propsType) => {

    return (
        <div 
        className={`transition-all duration-500 ease-in-out fixed right-0 top-0 w-full h-screen md:hidden select-none bg-black/60
        ${isOut ? `` : `opacity-0 invisible`}
        `}>
            <div className={`fixed right-0 top-0 w-8/12 sm:w-7/12 md:w-5/12 lg:w-1/3 h-screen p-10 transition-all ease-in-out duration-500 bg-slate-50
            ${isOut ? `` : `translate-x-40 opacity-0 invisible`}
            `}>
                <div>
                    <div className='border-b border-gray-300 my-5 py-4 font-semibold text-lg cursor-context-menu'>
                        <p>Some cool quote</p>
                    </div>
                    <div className='uppercase font-semibold text-lg pt-10'>
                        <ul className='flex flex-col gap-y-10'>
                            <Link className='w-fit' href={paths.about} onClick={() => setIsOut(false)}>
                                <li>About</li>
                            </Link>
                            <Link className='w-fit' href={paths.skills} onClick={() => setIsOut(false)}>
                                <li>Skills</li>
                            </Link>
                            <Link className='w-fit' href={paths.projects} onClick={() => setIsOut(false)}>
                                <li>Contact</li>
                            </Link>
                            <Link className='w-fit' href={paths.contact} onClick={() => setIsOut(false)}>
                                <li>Projects</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='uppercase tracking-widest text-sky-500 mt-40'>
                        <div>
                            <p className='cursor-context-menu'>Let's Connect</p>
                        </div>
                        <div className='flex flex-row justify-around py-8'>
                            <div className='cursor-pointer shadow-lg shadow-slate-500 hover:scale-125 p-3 rounded-full'>
                                <ImLinkedin2 size='32' />
                            </div>
                            <div className='cursor-pointer shadow-lg shadow-slate-500 hover:scale-125 p-3 rounded-full text-black'>
                                <AiFillGithub size='32' />
                            </div>
                            <div className='cursor-pointer shadow-lg shadow-slate-500 hover:scale-125 p-3 rounded-full'>
                                <ImFacebook size='32' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
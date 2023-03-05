import { ImLinkedin2 } from 'react-icons/im';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import ReturnButton from './ReturnButton';
import Link from 'next/link';
import paths from '../paths';

const Footer = () => {
    return (
        <div className='px-10 pb-3 bg-gradient-to-t from-bg-light-2 dark:from-bg-dark-2 border-t border-slate-300'>
            <div className='relative max-w-4xl m-auto'>
                <ReturnButton />
                <div className='flex flex-row justify-evenly text-sky-600 my-5 py-5'>
                    <Link href={paths.github} className='cursor-pointer hover:shadow-md shadow-slate-500 shadow-lg dark:shadow-slate-100 dark:shadow-dark-button dark:hover:scale-125 scale-110 hover:scale-100 active:scale-100 active:shadow-inner p-2 rounded-full text-black dark:text-bg-light'>
                        <AiFillGithub size='48' />
                    </Link>
                    <Link href={paths.linkedin} className='cursor-pointer hover:shadow-md shadow-slate-500 shadow-lg dark:shadow-slate-100 dark:shadow-dark-button dark:hover:scale-125 scale-110 hover:scale-100 active:scale-100 active:shadow-inner p-3 rounded-full'>
                        <ImLinkedin2 size='40' />
                    </Link>
                    <Link href={paths.medium} className='cursor-pointer hover:shadow-md shadow-slate-500 shadow-lg dark:shadow-slate-100 dark:shadow-dark-button dark:hover:scale-125 scale-110 hover:scale-100 active:scale-100 active:shadow-inner p-2 rounded-full text-black dark:text-bg-light'>
                        <AiFillMediumCircle size='48' />
                    </Link>
                </div>
                <div className='uppercase flex p-1 justify-center items-center select-none'>
                    <span className='text-[0.93rem]'>Anton Belov</span> <AiOutlineCopyrightCircle className='text-red-400 dark:text-red-500 mt-[2px] ml-1' size='13' /> <span className='text-[0.95rem] text-red-400 dark:text-red-500'>2023</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
import { ImLinkedin2 , ImFacebook } from 'react-icons/im';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import ReturnButton from './ReturnButton';

const Footer = () => {
    return (
        <div className='px-10 bg-gradient-to-b from-[var(--form-color-bg)] border-t border-slate-300'>
            <div className='max-w-4xl m-auto'>
                <ReturnButton />
                <div className='flex flex-row justify-evenly text-sky-600 mt-5 mb-5 py-5'>
                    <div className='cursor-pointer hover:shadow-md shadow-slate-500 shadow-lg scale-110 hover:scale-100 active:scale-100 active:shadow-inner p-3 rounded-full'>
                        <ImLinkedin2 size='40' />
                    </div>
                    <div className='cursor-pointer hover:shadow-md shadow-slate-500 shadow-lg scale-110 hover:scale-100 active:scale-100 active:shadow-inner p-3 rounded-full text-black'>
                        <AiFillGithub size='40' />
                    </div>
                    <div className='cursor-pointer hover:shadow-md shadow-slate-500 shadow-lg scale-110 hover:scale-100 active:scale-100 active:shadow-inner p-3 rounded-full'>
                        <ImFacebook size='40' />
                    </div>
                </div>
                <div className='mb-10 uppercase flex p-1 justify-center items-center'>
                    <span className='text-[0.93rem] text-[var(--primary-text-color)]'>Anton Belov</span> <AiOutlineCopyrightCircle className='text-[var(--form-color-red)] mt-[2px] ml-1' size='13' /> <span className='text-[var(--form-color-red)]'>2023</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
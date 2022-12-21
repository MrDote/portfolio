import CustomTextRoller from './CustomTextRoller';
import { ImLinkedin2 , ImFacebook } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';

const About = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-7xl w-full h-full m-auto flex flex-col items-center gap-5'>
                <CustomTextRoller />
                <p className='max-w-2xl mx-auto text-lg'>
                    I am a front-end web developer focusing on building excellent software.
                    Currently, I specialize in building fast, responsive websites and applications while diving into 
                    back-end technologies and machine learning.
                </p>
                <div className='flex flex-row justify-around pt-16 text-sky-600 gap-10'>
                    <div className='cursor-pointer shadow-md shadow-slate-500 hover:scale-110 p-3 rounded-full'>
                        <ImLinkedin2 size='40' />
                    </div>
                    <div className='cursor-pointer shadow-md shadow-slate-500 hover:scale-110 p-3 rounded-full text-black'>
                        <AiFillGithub size='40' />
                    </div>
                    <div className='cursor-pointer shadow-md shadow-slate-500 hover:scale-110 p-3 rounded-full'>
                        <ImFacebook size='40' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
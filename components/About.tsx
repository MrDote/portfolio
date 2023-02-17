import CustomTextRoller from './CustomTextRoller';

const About = () => {
    return (
        <div id='about' className='w-full h-screen text-center'>
            <div className='max-w-7xl w-full h-full m-auto flex flex-col items-center gap-5'>
                <CustomTextRoller />
                <p className='max-w-2xl mx-auto text-lg'>
                    I am a front-end web developer focusing on building excellent software.
                    Currently, I specialize in building fast, responsive websites and applications while diving into 
                    back-end technologies and machine learning.
                </p>
            </div>
        </div>
    )
}

export default About;
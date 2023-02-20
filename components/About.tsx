import CustomTextRoller from './CustomTextRoller';
import Image from 'next/image';

const About = () => {

    const BackgroundImages = () => {
        return (
            <>
                <Image
                    src="/aboutbg/monitor-nobg.png"
                    width="250"
                    height="250"
                    alt="Monitor image"
                    className='background absolute bottom-[3%] left-[38%]'
                />
                <Image
                    src="/aboutbg/book-nobg.png"
                    width="110"
                    height="110"
                    alt="Book image"
                    className='foreground absolute bottom-[-4.2%] right-[-10%]'
                />
                <Image
                    src="/aboutbg/cup-nobg.png"
                    width="80"
                    height="80"
                    alt="Cup image"
                    className='foreground absolute bottom-[-3.5%]'
                />
                <Image
                    src="/aboutbg/mouse-nobg.png"
                    width="80"
                    height="80"
                    alt="Monitor image"
                    className='foreground-closer absolute bottom-[-3.5%] right-[20%]'
                />
            </>
        );
    }

    return (
        <div id='about' className='relative w-full min-h-screen h-full text-center parallax-wrapper'>
            <BackgroundImages />
            <div className='max-w-7xl m-auto w-full h-full flex flex-col items-center gap-12'>
                <CustomTextRoller />
                <p className='max-w-2xl text-lg font-medium'>
                    I am a front-end web developer focusing on building excellent software.
                    Currently, I specialize in building fast, responsive websites and applications while diving into 
                    back-end technologies and machine learning.
                </p>
            </div>
        </div>
    );
}

export default About;
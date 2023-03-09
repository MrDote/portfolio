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
                    className='background absolute bottom-[-6rem] left-[38%] lg:w-72 xl:w-80 2xl:w-[22rem]'
                />
                <Image
                    src="/aboutbg/book-nobg.png"
                    width="100"
                    height="100"
                    alt="Book image"
                    className='foreground absolute bottom-[-4.2%] right-[-30%] lg:w-28 xl:w-32 2xl:w-36'
                />
                <Image
                    src="/aboutbg/cup-nobg.png"
                    width="80"
                    height="80"
                    alt="Cup image"
                    className='foreground absolute bottom-[-7rem] lg:w-24 xl:w-24 2xl:w-28'
                />
                <Image
                    src="/aboutbg/mouse-nobg.png"
                    width="80"
                    height="80"
                    alt="Mouse image"
                    className='foreground-closer absolute bottom-[-4rem] right-[20%] dark:image-dark lg:w-24 xl:w-26 2xl:w-28'
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
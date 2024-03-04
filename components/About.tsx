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
                    className='background absolute'
                />
                <Image
                    src="/aboutbg/book-nobg.png"
                    width="100"
                    height="100"
                    alt="Book image"
                    className='foreground-book absolute'
                />
                <Image
                    src="/aboutbg/cup-nobg.png"
                    width="80"
                    height="80"
                    alt="Cup image"
                    className='foreground-cup absolute'
                />
                <Image
                    src="/aboutbg/mouse-nobg.png"
                    width="80"
                    height="80"
                    alt="Mouse image"
                    className='foreground-mouse absolute dark:image-dark'
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
                    I am a software developer focusing on building excellent applications.
                    Currently, I specialize in implementing and applying state-of-the-art deep learning models to real-world issues,
                    while diving into cloud technologies and web development.
                </p>
            </div>
        </div>
    );
}

export default About;
import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About';
import Skills from '../components/Skills';
import Parallax from '../components/Parallax';
// import Fireworks from '../components/Fireworks';

export default function Main() {
    return (
        <>
            <Head>
                <title>Anton Portfolio</title>
                <meta name="description" content="change" />
            </Head>
            {/* <canvas className='absolute border-white bg-[color:var(--primary-bg-color)] border-4 w-full h-full' id='canvas'></canvas> */}
            {/* <Fireworks /> */}
            <Navbar />
            <About />
            <Skills />
            <Parallax />
        </>
    )
}

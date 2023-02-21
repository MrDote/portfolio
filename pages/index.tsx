import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Main() {
    return (
        <>
            <Head>
                <title>Anton Portfolio</title>
                <meta name="description" content="change" />
            </Head>
            <Navbar />
            <div id='main-wrapper' className='relative h-screen overflow-y-auto overflow-x-hidden'>
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Arrow from '../components/Arrow';
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
            <About />
            <Skills />
            <Projects />
            <Arrow />
            <Contact />
            <Footer />
        </>
    )
}
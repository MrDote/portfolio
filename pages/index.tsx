import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About';
import Skills from '../components/Skills';

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

        </>
    )
}

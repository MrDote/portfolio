import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main';
import About from '../components/About';

export default function Home() {
  return (
    <>
        <Head>
            <title>Anton Portfolio</title>
            <meta name="description" content="change" />
        </Head>
        <Navbar />
        <Main />
        <About />
    </>
  )
}

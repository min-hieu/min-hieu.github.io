import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hieu's Digital Oasis</title>
        <meta name="description" content="Hieu's Personal Website, stayput robots!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar thisPage="/" />
      <div className={styles.container}>
        <Image 
          src="/wip.png"
          alt="work in progress" 
          layout="fill"
        />
      </div>
    </>
  )
}

export default Home

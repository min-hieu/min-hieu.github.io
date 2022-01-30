import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hieu's Digital Oasis</title>
        <meta name="description" content="Hieu's Personal Website, stayput robots!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} />
      <Navbar thisPage="/" />
    </div>
  )
}

export default Home

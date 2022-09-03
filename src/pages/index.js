import * as React from "react"
import { useState } from "react"
import * as styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'


const IndexPage = () => {
  const [light, setLight] = useState(true);

  return (
    <div className={light ? styles.mainCon : styles.mainConDark}>
      <Navbar thisPage="/" light={light} setLight={setLight}/>
      <div className={styles.main}>
        <div className={styles.left}>
        </div>
        <div className={styles.right}>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => 
  <>
    <title>Hieu's Digital Oasis</title>
    <meta name="description" content="Hieu's Personal Website, stayput robots!" />
    <link rel="icon" href="../icons/sun.svg" />
    <title>/home/charlie</title>
  </>

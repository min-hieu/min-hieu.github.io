import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar.jsx'
import styles from '../styles/About.module.scss'
import profile from '../assets/hieu.png'

const About = () => (
  <>
    <Navbar thisPage="about"/>
    <div className={styles.container}>
      <div className={styles.rightContainer}>
        <span className={styles.title}>Who am I?</span>
        <Image src={profile} alt="hieu's glorious profile picture"/>
      </div>
      <div className={styles.leftContainer}>
        <span className={styles.text}>Hi! Thanks for being interested in my website. My name is <b>Hieu</b> and I am a currently a sophomore in the department of computer science and electrical engineering at KAIST, Korea. I am highly motivated about learning new things in the domain of <b>computer graphics</b> & <b>vision</b>. I look foward to opportunities in both industry and academia!</span>
        <br/>
        <br/>
        <span className={styles.text}>Outside my specialty, I also love exploring <b>nonfiction books</b> and <b>making art</b> in my free time.</span>
      </div>
      <div className={styles.contact}>
        <span className={styles.text}>If you have something that will make my life more interesting or just want to have a chat, feel free to contact me! </span>
      </div>
    </div>
    <span className={styles.hand}>👈</span>
  </>
)

export default About

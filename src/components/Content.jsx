import React, { useContext } from 'react';
import * as styles from '../styles/Content.module.scss';
import { LightContext } from './Layout';
import { StaticImage } from "gatsby-plugin-image"

const ParaDiv = ({ children, center }) => {
  const { light } = useContext(LightContext);
  return (
    <div className={
      `${light ? styles.para : styles.paraDark}
       ${center ? styles.center : ""}`
    }>
      {children}
    </div>
  )
}

const Section = ({ children, center }) => {
  return (
    <div className={`${styles.section} ${center ? styles.center : ""}`}>
    {children}
  </div>
  )
}

const Header = ({ text, center }) => {
  const { light } = useContext(LightContext);
  return (
    <div className={styles.centerCon}> 
      <div className={
        `${light ? styles.header : styles.headerDark }
         ${center ? styles.center : ""}`
      }>
        {text}
      </div>
    </div>
  )
}

const HeaderS = ({ text, center }) => {
  const { light } = useContext(LightContext);
  return (
    <div className={styles.centerCon}> 
      <div className={
        `${light ? styles.headerS : styles.headerSDark }
         ${center ? styles.center : ""}`
      }>
        {text}
      </div>
    </div>
  )
}

const Division = ({ color }) => {
  const { light } = useContext(LightContext);
  return (
    <div className={styles.centerCon} >
      <div 
        className={light ? styles.div: styles.divDark}
        style={{"background": `${color}`}}
      />
    </div>
  )
}

export { ParaDiv, Section, Header, HeaderS, Division };

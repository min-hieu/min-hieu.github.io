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

const Section = ({ children }) => {
  return (
  <div className={styles.section}>
    {children}
  </div>
  )
}

export { ParaDiv, Section };

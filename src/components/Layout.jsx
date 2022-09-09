import React, { useState, createContext } from 'react';
import * as styles from '../styles/Home.module.scss';
import Navbar from './Navbar';

export const LightContext = createContext();

export const Layout = ({ children }) => {
  const [light, setLight] = useState(true);

  return (
    <LightContext.Provider value={{ light, setLight }}>
      <div className={light ? styles.mainCon : styles.mainConDark}>
        {children}
        <Navbar light={light} setLight={setLight}/>
      </div>
    </LightContext.Provider>
  );
};



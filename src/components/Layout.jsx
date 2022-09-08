import React, { useState, createContext } from 'react';
import * as styles from '../styles/Home.module.scss';
import Navbar from './Navbar';

const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'boolean';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return !mql.matches;
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return true;
}

export const LightContext = React.createContext();

export const Layout = ({ children }) => {
  const [light, setLightDirect] = useState(getInitialColorMode);
  const setLight = (value) => {
    setLightDirect(value);
    // Persist it on update
    window.localStorage.setItem('color-mode', !light);
    console.log("color-mode: ", window.localStorage.getItem('color-mode'));
  };

  return (
    <LightContext.Provider value={{ light, setLight }}>
      <div className={light ? styles.mainCon : styles.mainConDark}>
        <Navbar thisPage={'/'} light={light} setLight={setLight}/>
        {children}
      </div>
    </LightContext.Provider>
  );
};



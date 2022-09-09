import * as React from 'react';
import * as styles from '../styles/Navbar.module.scss';
import { StaticImage } from "gatsby-plugin-image";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import DarkToggle from './DarkToggle';
import {navigate} from 'gatsby';

const pages = [
    {
      icon: "../icons/house.svg",
      title: "Home",
      path: "/"
    },
    {
      icon: "../icons/pen.svg",
      title: "Blogs",
      path: "/blog"
    },
    {
      icon: "../icons/cup.svg",
      title: "Projects",
      path: "/project"
    },
    {
      icon: "../icons/nav.svg",
      title: "Resume",
      path: "/resume"
    },
    {
      icon: "../icons/nav.svg",
      title: "Contact",
      path: "/contact"
    },
]


export default function Navbar({ light, setLight }){

  const [toggleNav, setToggleNav] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })

  useEffect(()=>console.log(styles.navToggler),[isTabletOrMobile])

  const tabs = 
    pages.map((page,idx) => (
      <div 
        className={
          `${light ? styles.navBtn : styles.navBtnDark}
           ${"blog" == page.path ? 
             (light ? styles.navBtnPressed : styles.navBtnPressedDark)
             : null}`
        }
        onClick={() => navigate(page.path)} 
      >
        <span 
          key={idx} 
        >
          {page.title}
        </span>
      </div>
    ));

  const tabsMobile = 
    pages.map((page,idx) => (
      <div 
        className={
          `${light ? styles.navBtnMobile : styles.navBtnMobileDark}
           ${"blog" == page.path ? 
             (light ? styles.navBtnPressed : styles.navBtnPressedDark)
             : null}`
        }
        onClick={() => navigate(page.path)} 
      >
        <span 
          key={idx} 
        >
          {page.title}
        </span>
      </div>
    ));

  const navToggler = 
    <>
      <div 
        className={`${styles.navIconContainer} ${styles.navToggler}`}
        onClick={()=>setToggleNav(!toggleNav)}
      >
        <div className={light ? styles.navIcon : styles.navIconDark }>
          <StaticImage 
            src="../icons/nav.svg"
            path="/about" 
            alt="nav-icon"
          />
        </div>
      </div>
      {toggleNav ? 
        <div className={
          light 
            ? styles.btnContainerMobile 
            : styles.btnContainerMobileDark}
        >
            { tabsMobile }
        </div> : null
      }
    </>


  return (
      <div className={light ? styles.container : styles.containerDark}>
        <div className={light ? styles.navLight : styles.navDark}>
          {false ? null : <DarkToggle light={!light} setLight={setLight} /> }
        </div>
        { isTabletOrMobile ? 
          navToggler : 
          <div className={styles.btnContainer}>
              { tabs }
          </div>
        }
      </div>
 );
}

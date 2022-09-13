import React, { useState, useContext } from "react"
import * as styles from '../styles/Home.module.scss'
import { useMediaQuery } from 'react-responsive'
import { HeaderS, ParaDiv, Section, Division } from '../components/Content'
import { StaticImage } from "gatsby-plugin-image"
import { LightContext } from '../components/Layout'
import { HiChevronDoubleUp, HiChevronDoubleDown } from "react-icons/hi";
import { 
  RiGithubLine,
  RiLinkedinBoxFill
} from "react-icons/ri"


const NewsCard = ({ date, title }) => { 
  const { light } = useContext(LightContext);
  return (
    <>
      <div className={styles.card}>
        <div className={ light ? styles.date : styles.dateDark }>
          {date}
        </div>
        <div className={ light ? styles.mid : styles.midDark }>
          •
        </div>
        <div className={ light ? styles.title : styles.titleDark }>
          {title}
        </div>
      </div>
      <Division color="#dadada"/>
    </>
  )
}

const NewsCon = ({ children, limit }) => {
  const [show, setShow] = useState(false);
  const { light } = useContext(LightContext);
  return (
    <>
      <div 
        className={styles.newsCon}
        style={{"height": `${show ? 'fit-content' : 5*limit + 2.5 + 'vh'}`}}
      >
        { children }
      </div>
      { children.length > 5 ?
        <div 
          className={light ? styles.showMoreCon : styles.showMoreConDark}
          style={{"top": `${show ? 0 : -5}vh`}}
        >
          <div 
            className={light ? styles.showMore : styles.showMoreDark} 
            onClick={()=>setShow(!show)}
          >
            { show ? <HiChevronDoubleUp/> : <HiChevronDoubleDown/> }
          </div>
        </div>
        : null
      }
    </>
  )
}


const IndexPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 950px)' })

  const goto = (url) => {
    if (typeof window !== "undefined") window.open(url);
  }

  return (
    <div className={ isMobile ? styles.indexMainMobile : styles.indexMain }>
      <div className={ isMobile ? null : styles.left}>
        { isMobile ?  
            <div className={styles.profileImageMobile}>
              <div className={styles.heightLimiter}>
              <StaticImage src="../images/me.webp" />
              </div>
            </div>
        :
          <div className={styles.profileImage}>
            <StaticImage src="../images/me.webp" />
          </div>
        }
        <ParaDiv center={true}>
          <div>Me in Busan 2022.</div>
          <div >
            <RiGithubLine 
              className={styles.icon}
              onClick={()=>goto("https://github.com/min-hieu/")}
            />
            <RiLinkedinBoxFill 
              className={styles.icon}
              onClick={()=>goto("https://www.linkedin.com/in/min-hieu/")}
            />
          </div>
        </ParaDiv>
      </div>
      <br/>
      <div className={ isMobile ? null : styles.right }>
        <ParaDiv>
          Hi! Thanks for being interested in my website. <br/>
          My name is <b>Hieu</b> and I am a currently a sophomore 
          in the department of computer science and electrical 
          engineering at KAIST, Korea. I am highly motivated about 
          learning new things in the domain of <b>computer graphics & 
            machine learning</b>. I look foward to research opportunities 
          in both industry and academia! <br/>
          Outside my specialty, I also love reading books 
          , making art, and most recently, cooking! <br/>
        </ParaDiv>
        <br/>
        <HeaderS text="News"/>
        <Division />
        <NewsCon limit={5}>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
          <NewsCard date="21/21/32" title="This is title lol"/>
        </NewsCon>
      </div>
    </div>
  )
}

export default IndexPage;

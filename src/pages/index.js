import * as React from "react"
import * as styles from '../styles/Home.module.scss'
import { ParaDiv, Section } from '../components/Content'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div className={styles.indexMain}>
      <Section>
        <div className={styles.left}>
          <div className={styles.profileImage}>
            <StaticImage src="../images/me.webp" />
          </div>
          <ParaDiv center={true}>
            Me in Busan 2022.
          </ParaDiv>
        </div>
        <div className={styles.right}>
          <ParaDiv>
            Hi! Thanks for being interested in my website. <br/>
            My name is <b>Hieu</b> and I am a currently a sophomore 
            in the department of computer science and electrical 
            engineering at KAIST, Korea. I am highly motivated about 
            learning new things in the domain of <b>computer graphics & 
            machine learning</b>. I look foward to opportunities in both 
            industry and academia! <br/>
            Outside my specialty, I also love reading books 
            , making art, and most recently, cooking! <br/>
          </ParaDiv>
        </div>
      </Section>
    </div>
  )
}

export default IndexPage;

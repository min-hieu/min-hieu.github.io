import * as React from "react"
import * as styles from '../styles/Home.module.scss'
import { useContext } from "react"
import { LightContext, Layout } from '../components/Layout'

const PageContent = () => {
  const { light } = useContext(LightContext);

  console.log(light);
  return (
    <div className={light ? styles.main : styles.mainDark}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
      </div>
    </div>
  )
}

const ResumePage = () =>
  <Layout>
    <PageContent/>
  </Layout>


export default ResumePage;

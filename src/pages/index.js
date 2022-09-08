import * as React from "react"
import * as styles from '../styles/Home.module.scss'
import { useContext } from "react"
import { LightContext } from '../components/Layout'

const IndexPage = () => {
  const { light } = useContext(LightContext);

  return (
    <div>
      <div className={styles.left}>
        Bruh
      </div>
      <div className={styles.right}>
        BruhLog
      </div>
    </div>
  )
}

export default IndexPage;

import * as React from "react"
import * as styles from '../styles/Blog.module.scss'
import { ParaDiv, Header, Division } from '../components/Content'

const ErrorPage = () => {
  return (
    <div className={styles.main}>
      <Header text="404 Error"/>
      <Division />
      <ParaDiv>
        You have reach the end of the world.
      </ParaDiv>
    </div>
  )
}

export default ErrorPage;

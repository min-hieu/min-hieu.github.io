import React, { useContext } from "react"
import * as blogStyles from '../styles/Blog.module.scss'
import { Header, Division } from '../components/Content'
import { LightContext }  from '../components/Layout'


const ProjectPage = () => {
  return (
    <div className={blogStyles.main}>
      <Header text="Projects"/>
      <br/>
      <Division />
    </div>
  )
}

export default ProjectPage;

import React, { useContext } from "react"
import * as styles from '../styles/Blog.module.scss'
import { Header, Division } from '../components/Content'
import { LightContext }  from '../components/Layout'

const Tag = ({color}) => 
  <div className={ styles.tag } style={{"color":`${color}`}}>
    •
  </div>


const BlogCard = ({date, title, tags}) => {
  const { light } = useContext(LightContext);
  return (
    <>
      <div className={styles.card}>
        <div className={ styles.meta }>
          <div className={styles.tagCon }>
            <Tag color="red" />
          </div>
          <div className={ light ? styles.date : styles.dateDark }>
            {date}
          </div>
        </div>
        <div className={ light ? styles.mid : styles.midDark }>
          |
        </div>
        <div className={ light ? styles.title : styles.titleDark }>
          {title}
        </div>
      </div>
      <Division />
    </>
  )
}

const BlogPage = () => {
  return (
    <div className={styles.main}>
      <Header text="Blogs"/>
      <br/>
      <Division />
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
      <BlogCard date="21/21/32" title="This is title lol"/>
    </div>
  )
}

export default BlogPage;

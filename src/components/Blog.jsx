import React, { useContext } from "react"
import * as styles from '../styles/blog.css'
import { Division } from './Home.jsx'

const Tag = ({color}) => 
  <div className="tag" style={{"color":`${color}`}}>
    •
  </div>


const BlogCard = ({date, title, tags}) => {
  return (
    <>
      <div className="card">
        <div className="meta">
          <div className="tagCon"><Tag color="red"/></div>
          <div className="date">{date}</div>
        </div>
        <div className="mid">|</div>
        <div className="title">{title}</div>
      </div>
      <Division />
    </>
  )
}

const SearchBar = () => {
  return (<></>)
}

export {
  Tag,
  BlogCard,
  SearchBar,
}

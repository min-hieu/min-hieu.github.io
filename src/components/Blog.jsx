import React, { 
  useContext,
  useState,
} from "react";
import { Division } from './Home.jsx';
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import Fuse from 'fuse.js';

import '../styles/blog.css';

const Tag = ({color}) => 
  <div className="tagElem" style={{"color":`${color}`}}>
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

const BlogMain = (props) => {
  const [visiblePages, setVisiblePages] = useState(props.pages);
  const [tags, setTags] = useState([])

  const SearchBar = (props) => (
    <div className="search">
      <div className="icon">
        <RiSearchLine/>
      </div>
      <div className="searchPreview">
        search me
      </div>
    </div>
  )

  const Tags = (props) => {
    return (
      <div className="tag">
        <div className="tagText">tags</div>
        <div className="tagGrid">
        </div>
      </div>
    )
  }

  return (
  <>
    <div className="headerBar">
      <div className="centerCon">
        <div className="header">
          Blog
        </div>
      </div>
      <SearchBar />
    </div>
    <Tags />
    <br/>
    <Division/>
    {true ? visiblePages.map(p => (
      <BlogCard 
        date={p.frontmatter.publishDate} 
        title={p.frontmatter.title} 
      />
    )) : null}
  </>
  );
}

/* 
*/

export {
  Tag,
  BlogCard,
  BlogMain,
}

import React, { 
  useState,
  useEffect,
} from "react";
import { Division } from './Home.jsx';
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import Fuse from 'fuse.js';

import '../styles/blog.css';

const Tag = ({color}) => (
  <div className="tagElem" style={{"color":`${color}`}}>
    •
  </div>
)

const TagWord = ({tag}) => {
  const [select, setSelect] = useState(false);

  return (
  <div
    className="tagElemWord" 
    style={{
      "backgroundColor":`${select ? tag.color : '#fff'}`,
      "color":`${select ? '#fff' : '#000'}`,
      "fontWeight":`${select ? '500' : '200'}`
    }}
    onClick={()=>setSelect(!select)}
  >
    {tag.value}
  </div>
  );
}


const BlogCard = ({date, title, cols}) => {
  return (
    <>
      <div className="card">
        <div className="meta">
          <div className="tagCon">
            {cols.map((c,i) =>
              <Tag color={c} key={i}/>
            )}
          </div>
          <div className="date">{date}</div>
        </div>
        <div className="mid">|</div>
        <div className="title">{title}</div>
      </div>
      <Division />
    </>
  )
}

const BlogMain = ({ pageMeta, pageTag, tagColmap }) => {
  const [searchOut, setSearchOut] = useState([]);
  const [tags, setTags] = useState([]);
  const [query, setQuery] = useState("");

  const fuse = new Fuse(pageMeta, {
    keys: ["title", "date"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  const doSearch = (e) => {
    const q = e.target.value;
    setQuery(q);
    setSearchOut(fuse.search(q));
  };

  const SearchBar = (props) => (
    <>
    <div className="search">
      <div className="icon">
        <RiSearchLine/>
      </div>
      <input
        value={query}
        placeholder="Search Me!"
        className="searchPreview"
        onChange={doSearch}
        autoFocus
      />
    </div>
    </>
  )

  const Tags = (props) => {
    return (
      <div className="tag">
        <div className="tagText">tags |</div>
        <div className="tagGrid">
        {pageTag.map((t,i) =>
          <TagWord tag={t} key={2*i+1}/>
        )}
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
    {searchOut.length == 0 
     ? pageMeta.map((p,id) =>
        <BlogCard
          key={id}
          date={p.date}
          title={p.title}
          cols={p.tags.map(t => tagColmap.get(t))}
        />
       )
     : searchOut.map((p,id) =>
        <BlogCard
          key={id}
          date={p.item.date}
          title={p.item.title}
          cols={p.item.tags.map(t => tagColmap.get(t))}
        />
       )
    }
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

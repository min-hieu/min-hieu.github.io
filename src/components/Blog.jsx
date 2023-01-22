import React, { useState, useEffect } from "react";
import { Division } from './Home.jsx';
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import { RiFilePaper2Line } from "@react-icons/all-files/ri/RiFilePaper2Line";
import Fuse from 'fuse.js';

import '../styles/blog.css';

const Tag = ({ color }) => (
  <div className="tagElem" style={{ "color": `${color}` }}>
    •
  </div>
)


const BlogCard = ({ href, date, title, cols }) => {
  return (
    <>
      <a href={href}>
        <div className="card">
          <div className="meta">
            <div className="tagCon">
              {cols.map((c, i) =>
                <Tag color={c} key={i} />
              )}
            </div>
            <div className="date">{date}</div>
          </div>
          <div className="mid">|</div>
          <div className="title">{title}</div>
        </div>
      </a>
      <Division />
    </>
  )
}

const useTag = (initTags, pageMap) => {
  const [tags, setTags] = useState(initTags);

  const taggedPage = [...tags]
    .filter(([k, v], _) => v.select)
    .map(([k, v], _) => v.posts)
    .reduce((postT, post) => [...new Set([...post, ...postT])], [])
    .map(title => pageMap.get(title))

  const toggleSelect = (k) => {
    const v = tags.get(k);
    v.select = !v.select;
    setTags((p) => new Map(p).set(k, v));
  }

  return [tags, toggleSelect, taggedPage]
}

const BlogMain = ({ pageMap, allPages, tagMap, tagKeys }) => {
  const [searchOut, setSearchOut] = useState([]);
  const [tagSelect, toggleSelect, taggedPages] = useTag(tagMap, pageMap);
  const [query, setQuery] = useState("");

  const fuseTag = new Fuse(taggedPages, {
    keys: ["frontmatter.title", "frontmatter.date", "frontmatter.tag"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  const fuseAll = new Fuse(allPages, {
    keys: ["frontmatter.title", "frontmatter.date", "frontmatter.tag"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  // refresh and search again on tag selection
  useEffect(() => {
    if (taggedPages.length) setSearchOut(fuseTag.search(query));
    else setSearchOut(fuseAll.search(query));
  }, [tagSelect])

  const doSearch = (e) => {
    const q = e.target.value;
    setQuery(q);
    if (taggedPages.length) setSearchOut(fuseTag.search(q));
    else setSearchOut(fuseAll.search(q));
  };

  const SearchBar = () => (
    <>
      <div className="search">
        <div className="icon">
          <RiSearchLine />
        </div>
        <input
          value={query}
          placeholder="Fuzzy Me!"
          className="searchPreview"
          onChange={doSearch}
          autoFocus
        />
      </div>
    </>
  )

  const TagWord = ({ tagk }) => {
    const tag = tagSelect.get(tagk);
    return (
      <div
        className="tagElemWord"
        style={{
          "backgroundColor": `${tag.select ? tag.color : '#fff'}`,
          "color": `${tag.select ? '#fff' : '#000'}`,
          "fontWeight": `${tag.select ? '500' : '200'}`
        }}
        onClick={() => toggleSelect(tag.value)}
      >
        {tag.value}
      </div>
    );
  }

  const Tags = () => {
    return (
      <div className="tag">
        <div className="tagText">tags |</div>
        <div className="tagGrid">
          {[...tagKeys].map((k, i) =>
            <TagWord tagk={k} key={2 * i + 1} />
          )}
        </div>
      </div>
    )
  }

  const PageCard = ({ page }) => (
    <BlogCard
      href={page.url}
      date={page.frontmatter.date}
      title={page.frontmatter.title}
      cols={page.frontmatter.tags.map(t => tagMap.get(t).color)}
    />
  )

  const NoPageFound = () => (
    <div className="nopagefound">
      <code><pre>
        {`
       .-"-.          \n
     _/_-.-_\\_       \n
    / __} {__ \\      \n
   / //  "  \\\\ \\   \n
  / / \\'---'/ \\ \\  \n
  \\ \\_/'"""'\\_/ /  \n
   \\           /     \n
 Can't Fuzz Nothin'
    `}
      </pre></code>
    </div>
  )

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
      <br />
      <Division />
      {query.length
        ? searchOut.length
          ? searchOut.map((p, i) => <PageCard key={i} page={p.item} />)
          : <NoPageFound />
        : taggedPages.length
          ? taggedPages.map((p, i) => <PageCard key={i} page={p} />)
          : allPages.map((p, i) => <PageCard key={i} page={p} />)
      }
    </>
  );
}

const CharlieImage = ({ src }) => {
  return (
    <div className="charlieImage">
      <img src={src} />
    </div>
  )
}

const CharlieEmbed = ({ src }) => {
  return (
    <iframe className="charlieEmbed" src={src}>
    </iframe>
  )
}

const PaperPreview = ({ link, type }) => {
  return (
    <div className="paperPreview">
      <RiFilePaper2Line />
      {type === "arxiv" ? "arXiv" : "paper"}
    </div>
  )
}

export {
  Tag,
  BlogCard,
  BlogMain,
  CharlieImage,
  CharlieEmbed,
  PaperPreview,
}

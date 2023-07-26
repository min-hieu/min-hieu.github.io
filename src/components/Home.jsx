import React, { useState } from 'react';
import { RiArrowDownFill } from "@react-icons/all-files/ri/RiArrowDownFill";
import { RiArrowUpFill } from "@react-icons/all-files/ri/RiArrowUpFill";
import { RiArrowRightUpLine } from "@react-icons/all-files/ri/RiArrowRightUpLine";
import '../styles/home.css';


const ScholarBtn = ({ }) => (
  <div>
    Google Scholar
    <RiArrowRightUpLine className='icon' />
  </div>
)

const NewsCard = ({ date, title }) => {
  let titleHTML = {__html: title};
  return (
    <>
      <div className="newsCard">
        <div className="newsDate">{date}</div>
        <div className="newsMid">•</div>
        <div className="newsTitle" dangerouslySetInnerHTML={titleHTML}>
        </div>
      </div>
      <Division color="#dadada" />
    </>
  )
}

const BibCard = ({ image, title, author, year, journal, links }) => {
  let authorHTML = {__html: author};
  return (
    <>
      <div className="bibCard">
        {image &&
          <img className="bibImage" src={image}/>
        }
        <div className="bibText">
          <div className="bibTitle">{title}</div>
          <div className="bibPublish">
            <div className="bibPublisher">{journal}</div>
            <div className="bibYear">{year}</div>
          </div>
          <div className="bibAuthor" dangerouslySetInnerHTML={authorHTML}>
          </div>
          {links && <div className="bibLinkCon">
            {links.map((li, i) =>
              <a key={i} className="bibLink" href={li.href}>{li.title}</a>
            )}
          </div>}
        </div>
      </div>
      <Division color="#dadada" />
    </>
  )
}

const NewsCon = props => {
  const [show, setShow] = useState(false);
  return (
    <div className="shadowCon">
      <div
        className="newsCon"
        style={{ "height": `${show ? 'fit-content' : 2.5 * Math.min(props.limit, props.size) + 2.5 + 'rem'}` }}
      >
        {props.children}
      </div>
      {props.size > props.limit ?
        <div
          className="showMoreCon"
          style={{ "top": `${show ? 0 : -5}vh` }}
        >
          <div
            className={"showMore"}
            onClick={() => setShow(!show)}
          >
            {show ? <RiArrowUpFill /> : <RiArrowDownFill />}
          </div>
        </div>
        : null
      }
    </div>
  )
}

const Contacts = () => (
  <div className="contactCon">
  hieuristics [at] kaist.ac.kr
  </div>
)

const Socials = () => (
  <div className="socialCon">
    <a href="https://twitter.com/hieuristics"
       className="icon">
      <img src='twitter.svg' />
    </a>
    <a href="https://github.com/min-hieu/"
       className="icon">
      <img src='github.svg' />
    </a>
    <a href="https://www.linkedin.com/in/min-hieu/"
       className="icon">
      <img src='linkedin.svg' />
    </a>
    <a href="https://scholar.google.com/citations?user=w8cjoQkAAAAJ&hl=en"
       className="icon">
      <img src='scholar.svg' />
    </a>
  </div>
)


const ParaDiv = ({ children, center }) => {
  return (
    <div className={
      `para ${center ? "center" : ""}`
    }>
      {children}
    </div>
  )
}

const Section = ({ children, center }) => {
  return (
    <div className={`section ${center ? "center" : ""}`}>
      {children}
    </div>
  )
}

const Header = ({ text, center }) => {
  return (
    <div className="centerCon">
      <div className={
        `header ${center ? "center" : ""}`
      }>
        {text}
      </div>
    </div>
  )
}

const HeaderS = ({ text, center, side }) => {
  return (
    <div className="centerCon">
      <div className='headerSWrapBack'></div>
      <div className='headerSWrapFront'></div>
      <div className={
        `headerS ${center ? "center" : ""}`
      }>
        {text}
      </div>
      <div className='headerSArrow'></div>
      <div className='headerSside'>{side}</div>
    </div>
  )
}

const Division = ({ color }) => {
  return (
    <div className="centerCon" >
      <div
        className="div"
        style={{ "background": `${color}` }}
      />
    </div>
  )
}

export {
  NewsCard,
  BibCard,
  NewsCon,
  ParaDiv,
  Section,
  Header,
  HeaderS,
  Division,
  Socials,
  Contacts,
  ScholarBtn,
};

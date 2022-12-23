import React, { useState } from 'react';
import { RiArrowDownFill }    from "@react-icons/all-files/ri/RiArrowDownFill";
import { RiArrowUpFill }      from "@react-icons/all-files/ri/RiArrowUpFill";
import { RiGithubLine }       from "@react-icons/all-files/ri/RiGithubLine";
import { RiLinkedinBoxFill }  from "@react-icons/all-files/ri/RiLinkedinBoxFill";
import '../styles/home.css';


const NewsCard = ({ date, title }) => { 
  return (
    <>
      <div className="card">
        <div className={ "date" }>{date}</div>
        <div className={ "mid" }>•</div>
        <div className={ "title" }>{title}</div>
      </div>
      <Division color="#dadada"/>
    </>
  )
}

const NewsCon = props => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="newsCon"
        style={{"height": `${show ? 'fit-content' : 5*props.limit + 2.5 + 'vh'}`}}
      >
        { props.children }
      </div>
      { props.size > props.limit ?
        <div
          className="showMoreCon"
          style={{"top": `${show ? 0 : -5}vh`}}
        >
          <div
            className={ "showMore" }
            onClick={()=>setShow(!show)}
          >
            { show ? <RiArrowUpFill/> : <RiArrowDownFill/> }
          </div>
        </div>
        : null
      }
    </>
  )
}

const Socials = () => (
  <>
    <RiGithubLine 
      className="icon"
      onClick={()=>goto("https://github.com/min-hieu/")}
    />
    <RiLinkedinBoxFill 
      className="icon"
      onClick={()=>goto("https://www.linkedin.com/in/min-hieu/")}
    />
  </>
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

const HeaderS = ({ text, center }) => {
  return (
    <div className="centerCon"> 
      <div className={
        `headerS ${center ? "center" : ""}`
      }>
        {text}
      </div>
    </div>
  )
}

const Division = ({ color }) => {
  return (
    <div className="centerCon" >
      <div 
        className="div"
        style={{"background": `${color}`}}
      />
    </div>
  )
}

export {
  NewsCard,
  NewsCon,
  ParaDiv,
  Section,
  Header,
  HeaderS,
  Division,
  Socials,
};

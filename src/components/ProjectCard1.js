import React, {useRef} from 'react'
import {SiRubyonrails } from 'react-icons/si'
import {DiCss3, DiHtml5, DiJavascript, DiPostgresql, DiReact, DiRuby} from 'react-icons/di'


function ProjectCard1({project}) {
  const ref = useRef(null);
 
  return (
    <div className="projectCard">
      <div className="projects">
      <div className='pCardTop'>
      <h1 className='projectHead'>{project.title}</h1>
        <img className='projectGIF' src={project.gif} alt="project GIF"/>
        </div>
        <div className='pCardBot'>
    <p>{project.description} </p>
<a href={project.live} target="_blank" rel="noreferrer">{project.title}</a>
<a href={project.YTwalkthrough} target="_blank" rel="noreferrer">YouTube Walkthrough</a>
<a className="projectGithub" href={project.github} target="blank" rel="noreferrer"> <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667854580/empty_github_qlhixy.png" alt="github"/> </a>
<div className='cardlanguages'>
    {project.languages.map(language=>language)}
    </div>
</div>  
                       
</div></div>
  )
}

export default ProjectCard1
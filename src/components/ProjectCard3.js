import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard3() {
    const ref = useRef(null);
  const isInView = useInView(ref);
    let motionRules = {
        opacity: isInView ? 1 : 0,
        transition: "1s"
      }
  return (
    <div ref={ref} className="projectCard" >
        <div style={motionRules}>
            <div className='pCardTop'>
            <h1 className='projectHead'>A Star Wars Fleet Battler</h1>
            <img className='projectGIF' src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667935014/Star_Wars_Battler_puizsl.gif" alt="project GIF"/>
            </div>
            <div className='pCardBot'>
          <p>Using ReactJS for the front, and Sinatra for Ruby for the back-end, I built an app wherein you can pick a fleet of Star Wars starships (initial seed data pulled from SWAPI), then battle your fleet vs others on various planets.</p>
          <a href="https://youtu.be/0tf71fCYs-0"target="_blank" rel="noreferrer">Fleet Battler Youtube Walk-through</a>
          <a className="projectGithub" href="https://github.com/JoeSpizz/phase-3-final-front-end" target="blank" rel="noreferrer"> <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667854580/empty_github_qlhixy.png" alt="github"/> </a>
    <img className="projectSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
    <img className="projectSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
    <img className="projectSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
    <img className="projectSymbol" src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" alt="React Logo"/>
    <img className="projectSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" title="Ruby" alt="Ruby Logo"/>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard3
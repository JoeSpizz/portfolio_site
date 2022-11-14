import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard2() {
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
            <h1 className='projectHead'>A Purring Wolverine</h1>
            <img className='projectGIF' src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667924398/Purring_Wolverine_app_fjmy7a.gif" alt="project GIF"/>
            </div>
            <div className='pCardBot'>
          <p>Using ReactJS I built a home page for my ASMR channel. This site utilizes a Supabase hosted API for the channel content.</p>
          <a href="https://apurringwolverine.netlify.app/"target="_blank" rel="noreferrer">A Purring Wolverine</a>
          <a href="https://youtu.be/10VBm1TZcnA" target="_blank" rel="noreferrer">YouTube Walkthrough</a>
          <a className="projectGithub" href="https://github.com/JoeSpizz/Purring-Wolverine-Home" target="blank" rel="noreferrer"> <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667854580/empty_github_qlhixy.png" alt="github"/> </a>
    <img className="projectSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
    <img className="projectSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
    <img className="projectSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
    <img className="projectSymbol" src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" alt="React Logo"/>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard2
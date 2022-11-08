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
            <h1 className='sectionHead'>A Purring Wolverine Home Page</h1>
            <img className='projectGIF' src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667924398/Purring_Wolverine_app_fjmy7a.gif" alt="project GIF"/>
            </div>
            <div className='pCardBot'>
          <p> I made a  website for my own personal YouTube Page!</p>
          <a href="https://apurringwolverine.netlify.app/"target="_blank" rel="noreferrer">A Purring Wolverine</a>
    <img className="projectSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
    <img className="projectSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
    <img className="projectSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
    <img className="projectSymbol" src="https://png2.cleanpng.com/sh/643d56e06c1a1a1a0738849fb4ebeda3/L0KzQYm3VsA1N5p0iZH0aYP2gLBuTgJmaZR5RdxqdnH2c8PwkQQuaZ9sjd5qcnr2Pbr2jvlkNZJ5h982NXK0RYXphcY6PGg5Tak3M0S6QYq7UcgyPWM9SaQ7M0S1RoGBUb5xdpg=/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png" alt="React Logo"/>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard2
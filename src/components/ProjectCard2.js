import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard2() {
    const ref = useRef(null);
  const isInView = useInView(ref);
    let motionRules = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "2s"
      }
  return (
    <div ref={ref} className="projectCard" >
        <div style={motionRules}>
            <div>
            <img className='projectGIF' src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-10/thumbs-up-cz-2x1-221013-fe4a69.jpg" alt="project GIF"/>
          <h1 className='sectionHead'>A Purring Wolverine Website</h1>
          <p> I made a  website for my own personal YouTube Page!</p>
          <a href="https://apurringwolverine.netlify.app/"target="_blank" rel="noreferrer">A Purring Wolverine</a>
          </div>
          <img className="projectSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
    <img className="projectSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
    <img className="projectSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
    <img className="projectSymbol" src="https://png2.cleanpng.com/sh/643d56e06c1a1a1a0738849fb4ebeda3/L0KzQYm3VsA1N5p0iZH0aYP2gLBuTgJmaZR5RdxqdnH2c8PwkQQuaZ9sjd5qcnr2Pbr2jvlkNZJ5h982NXK0RYXphcY6PGg5Tak3M0S6QYq7UcgyPWM9SaQ7M0S1RoGBUb5xdpg=/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png" alt="React Logo"/>
        </div>
    </div>
  )
}

export default ProjectCard2
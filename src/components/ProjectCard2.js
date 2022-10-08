import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard2() {
    const ref = useRef(null);
  const isInView = useInView(ref);
    let motionRules = {
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "2s"
      }
  return (
    <div ref={ref}>
        <div className="projectCard" style={motionRules}>
            <div>
          <h1>A Purring Wolverine Website</h1>
          <p> I made a  website for my own personal YouTube Page!</p>
          <a href="https://apurringwolverine.netlify.app/"target="_blank" rel="noreferrer">A Purring Wolverine</a>
          </div>
          <img className="techSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
    <img className="techSymbol" src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="javascript logo"/>
    <img lassName="techSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
    <img className="techSymbol" src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" alt="React Logo"/>
        </div>
    </div>
  )
}

export default ProjectCard2
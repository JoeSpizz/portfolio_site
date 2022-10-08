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
          <h1>A Purring Wolverine Website</h1>
          <p> I made a  website for my own personal YouTube Page!</p>
          <a href="https://apurringwolverine.netlify.app/"target="_blank" rel="noreferrer">A Purring Wolverine</a>
        </div>
    </div>
  )
}

export default ProjectCard2
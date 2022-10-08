import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard1() {
  const ref = useRef(null);
  const isInView = useInView(ref);
    let motionRules = {
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "2s"
      }
  return (
    <div ref={ref}
    ><div  className="projectCard" style={motionRules}>
    <h1>What are we doing tonight?</h1>
    <p>A small front-end App built after only 2 months of part-time programming. JS, HTML, CSS</p>
<a href="https://plan4tonight.netlify.app/" target="_blank" rel="noreferrer">Plan for Tonight</a>
</div></div>
  )
}

export default ProjectCard1
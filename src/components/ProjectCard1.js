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
      <div>
    <h1>What are we doing tonight?</h1>
    <p>A small front-end App built after only 2 months of part-time programming. JS, HTML, CSS</p>
<a href="https://plan4tonight.netlify.app/" target="_blank" rel="noreferrer">Plan for Tonight</a>
</div>
<img className="techSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
<img className="techSymbol" src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="javascript logo"/>
<img lassName="techSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
                                       
</div></div>
  )
}

export default ProjectCard1
import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard1() {
  const ref = useRef(null);
  const isInView = useInView(ref);
    let motionRules = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "2s"
      }
  return (
    <div ref={ref} className="projectCard" 
    ><div  style={motionRules}>
      <div>
        <img className='projectGIF' src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-10/thumbs-up-cz-2x1-221013-fe4a69.jpg" alt="project GIF"/>
    <h1 className='sectionHead'>What are we doing tonight?</h1>
    <p>A small front-end App built after only 2 months of part-time programming. JS, HTML, CSS</p>
<a href="https://plan4tonight.netlify.app/" target="_blank" rel="noreferrer">Plan for Tonight</a>
</div>
<img className="projectSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
<img className="projectSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
<img className="projectSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
                                       
</div></div>
  )
}

export default ProjectCard1
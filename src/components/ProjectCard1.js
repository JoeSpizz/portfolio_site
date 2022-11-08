import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard1() {
  const ref = useRef(null);
  const isInView = useInView(ref);
    let motionRules = {
        opacity: isInView ? 1 : 0,
        transition: "1s"
      }
      function enlarge (){

      }
  return (
    <div ref={ref} className="projectCard">
      <div  style={motionRules} className="projects">
      <div className='pCardTop'>
      <h1 className='projectHead'>What are we doing tonight?</h1>
        <img onClick={enlarge} className='projectGIF' src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667923382/what_are_you_doing_tonight_app_j19eqf.gif" alt="project GIF"/>
        </div>
        <div className='pCardBot'>
    <p>A simple vanilla JavaScript front-end-only app utlizing API calls and embeds. Built for the <strong>first</strong> phase of Flatiron's Software Engineering course. </p>
<a href="https://plan4tonight.netlify.app/" target="_blank" rel="noreferrer">Plan for Tonight</a>
<a href="https://youtu.be/LV741sZEExQ" target="_blank" rel="noreferrer">YouTube Walkthrough</a>
    

<img className="projectSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
<img className="projectSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
<img className="projectSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
</div>                         
</div></div>
  )
}

export default ProjectCard1
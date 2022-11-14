import React, {useRef} from 'react'
import {useInView} from 'framer-motion'

function ProjectCard4() {
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
            <h1 className='projectHead'>Your Pantry Food Tracker</h1>
            <img className='projectGIF' src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667935621/food_pantry_jytl3a.gif" alt="project GIF"/>
            </div>
            <div className='pCardBot'>
          <p>Using ReactJS and Rails for front and back, this app tracks all your food and includes automatic expiration date warnings. Fully encrypted users can create recipes that then reference your pantry for easy review.</p>
          <a href="https://my-pantry-ws.onrender.com/" target={"blank"} rel="noreferrer">My Pantry </a>
          <a href="https://youtu.be/0KJwa42OB8s"target="_blank" rel="noreferrer">My Pantry Youtube Walk-through</a>
          <a className="projectGithub" href="https://github.com/JoeSpizz/food-tracker" target="blank" rel="noreferrer"> <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667854580/empty_github_qlhixy.png" alt="github"/> </a>
   
    <img className="projectSymbol"  title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
    <img className="projectSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
    <img className="projectSymbol"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
    <img className="projectSymbol" src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" alt="React Logo"/>
    <img className="projectSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png" title="Rails" alt="Rails Logo"/>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard4
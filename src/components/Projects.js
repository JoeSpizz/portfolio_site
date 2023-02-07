import React from 'react'
import { DiCss3, DiHtml5, DiJavascript, DiReact, DiRuby } from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si';
import ProjectCard1 from './ProjectCard1';

function Projects() {
  const projects = [
    {title: "Continue the Fun",
    gif: "https://res.cloudinary.com/doqo7su1s/image/upload/v1672338650/Untitled_design_6_jpwrew.gif",
  description: "An e-commerce site for second-hand board games. Can be sold or offerred for free. Features e-mails to users, wishlist functionality, and 80% of a check-out (we don't want to charge your card for real!)",
  live: "https://continue-the-fun.onrender.com/",
  YTwalkthrough: "https://youtu.be/MbhrHHzGcFc",
  github: "https://github.com/JoeSpizz/continue-the-fun-e-commerce",
  languages: [ <DiHtml5 fill="orange" size={"50px"}/>, <DiCss3 fill="yellow" size={"50px"}/>, <DiJavascript fill="blue" size={"50px"}/>, <DiReact fill="black" size={"50px"}/>, <DiRuby fill="red" size="50px"/>, <SiRubyonrails fill="red" size="30px"/>]
},
{title: "Your Pantry Food Tracker",
gif: "https://res.cloudinary.com/doqo7su1s/image/upload/v1667935621/food_pantry_jytl3a.gif",
description: "Using ReactJS and Rails for front and back, this app tracks all your food and includes automatic expiration date warnings. Fully encrypted users can create recipes that then reference your pantry for easy review.",
live: "https://my-pantry-ws.onrender.com/",
YTwalkthrough: "https://youtu.be/0KJwa42OB8s",
github: "https://github.com/JoeSpizz/food-tracker",
languages: [ <DiHtml5 fill="orange" size={"50px"}/>, <DiCss3 fill="yellow" size={"50px"}/>, <DiJavascript fill="blue" size={"50px"}/>, <DiReact fill="black" size={"50px"}/>, <DiRuby fill="red" size="50px"/>, <SiRubyonrails fill="red" size="30px"/>]
},
    {title: "A Purring Wolverine",
    gif: "https://res.cloudinary.com/doqo7su1s/image/upload/v1667924398/Purring_Wolverine_app_fjmy7a.gif",
  description: "Using ReactJS I built a home page for my ASMR channel. This site utilizes a Supabase hosted API for the channel content.",
  live: "https://apurringwolverine.netlify.app/",
  YTwalkthrough: "https://www.youtube.com/watch?v=10VBm1TZcnA",
  github: "https://github.com/JoeSpizz/Purring-Wolverine-Home",
  languages: [ <DiHtml5 fill="orange" size={"50px"}/>, <DiCss3 fill="yellow" size={"50px"}/>, <DiJavascript fill="blue" size={"50px"}/>, <DiReact fill="black" size={"50px"}/>]
},
    {title: "Star Wars Fleet Battler",
    gif: "https://res.cloudinary.com/doqo7su1s/image/upload/v1667935014/Star_Wars_Battler_puizsl.gif",
  description: "Using ReactJS for the front, and Sinatra for Ruby for the back-end, I built an app wherein you can pick a fleet of Star Wars starships (initial seed data pulled from SWAPI), then battle your fleet vs others on various planets.",
  live: "",
  YTwalkthrough: "https://youtu.be/0tf71fCYs-0",
  github: "https://github.com/JoeSpizz/phase-3-final-front-end",
  languages:[ <DiHtml5 fill="orange" size={"50px"}/>, <DiCss3 fill="yellow" size={"50px"}/>, <DiJavascript fill="blue" size={"50px"}/>, <DiReact fill="black" size={"50px"}/>, <DiRuby fill="red" size="50px"/>]
},
{title: "What Are We Doing Tonight?",
gif: "https://res.cloudinary.com/doqo7su1s/image/upload/v1667923382/what_are_you_doing_tonight_app_j19eqf.gif",
description: "A simple vanilla JavaScript front-end-only app utlizing API calls and embeds. Built for the first phase of Flatiron's Software Engineering course.",
live: "https://plan4tonight.netlify.app/",
YTwalkthrough: "https://youtu.be/LV741sZEExQ",
github: "https://github.com/JoeSpizz/Phase-1-Portfolio-Project",
languages: [ <DiHtml5 fill="orange" size={"50px"}/>, <DiCss3 fill="yellow" size={"50px"}/>, <DiJavascript fill="blue" size={"50px"}/>]
}
  ]


  return (
    <div className='projects'>
       <h2 className='titleHead'>Projects</h2>
      {projects.map(project=> <ProjectCard1 project={project}/>)}
    </div>
  )
}

export default Projects



        
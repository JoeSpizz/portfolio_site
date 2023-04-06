
import React from 'react'
import {SiRubyonrails, SiVuedotjs, SiQuasar } from 'react-icons/si'
import {DiCss3, DiHtml5, DiJavascript, DiPostgresql, DiReact, DiRuby} from 'react-icons/di'

function Title() {
  return (
    <div>
        <div className="header">
        <h1 className='joe'>Joe<br></br>Spizzandre</h1>
        <div className='tag'>
        <h2 >Reliability </h2>
        <h2 >{"//"} </h2>
        <h2 >Flexibility </h2>
        <h2 >{"//"}</h2>
        <h2 >Creativity </h2>
        </div>
        </div>
        <div className='titleWhole'>
        <div className='title'>
        <div className='technologies'>
            <h2 className='titleHead'>Languages/Proficiencies</h2>
            <img className='allLogo' src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667847194/currentLanguages_n8oirj.png" alt="alllogos"/>
            <ul className='techList'>
              {/* React Icons npm install! */}
              <li> 
                    <DiHtml5 fill="orange" size={"80px"}/>
                </li>
                <li>
                    <DiJavascript fill="yellow" size={"80px"}/>
                </li>
                <li>
                    <DiCss3 fill="blue" size={"80px"}/>    
                </li>
                <li>   
                    <DiReact fill="black" size={"80px"}/>
                </li>
                <li>
                    <DiRuby fill="red" size={"80px"}/>    
                 </li>
                <li>
                    <SiRubyonrails fill="red" size={"100px"}/>
                </li>
                <li>
                <DiPostgresql fill="blue" size={"80px"}/>    
                </li>
                <li>
                    <SiVuedotjs fill="green" size={"80px"}/>
                </li>
                <li>
                    <SiQuasar fill="blue" size={"80px"}/>                </li>
            </ul>
        </div>
        </div>
        <div>
        <h2 className='titleHead'>Links to Learn More</h2>
        <div className='professionalLinks'>
                <a href="https://github.com/JoeSpizz" target={"blank"} rel="noreferrer">
                    <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667854580/empty_github_qlhixy.png" alt="github"/>
                    </a>
                <a href="https://www.linkedin.com/in/joespizzandre/" target="blank" rel="noreferrer">
                        <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667854218/linked_in_empty_ttgq4t.png" alt="LinkedIn" />
                    </a>
                <a href="https://medium.com/@spizjo01" target="blank" rel="noreferrer">
                        <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667854468/Rounded_Medium3_svg-512_o9pk57.png" alt="Medium"/>
                    </a>
                <a href="https://docs.google.com/document/d/1eN3K5tswj9IDyzcwjtplrVEHkPCbWiNAlrl1y4VfMC0/export?format=pdf" target="blank" rel="noreferrer">
                    <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667855048/resume_symbol_cutout_twc2xx.png" alt="resume"/>
                </a>
                <a href="https:www.downtoearthcloudsolutions.com" target='blank' rel='norefferer'>
                    <img src={require("../assets/images/dte-light-cloud.png")} alt="DTE logo"/>
                </a>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Title
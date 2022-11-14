import React from 'react'

function Title() {
  return (
    <div>
        <div className="header">
        {/* <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667834577/joe_italy_extended_l2g0sb.jpg" alt="Joe"/> */}
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
            <h2 className='titleHead'>Languages</h2>
            <img className='allLogo' src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667847194/currentLanguages_n8oirj.png" alt="alllogos"/>
            <ul className='techList'>
                <li> 
                    <img className="techSymbol" title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" title="Javascript" alt="javascript logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" title="CSS" alt="CSS logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" title="React" alt="React Logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" title="Ruby" alt="Ruby Logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png" title="Rails" alt="Rails Logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" title="SQL" alt="SQL logo"/>
                </li>
            </ul>
        </div>
        </div>
        <div>
        <h2 className='titleHead'>About Me</h2>
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
            </div>
            </div>
            </div>
    </div>
  )
}

export default Title
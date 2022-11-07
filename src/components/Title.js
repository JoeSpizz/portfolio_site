import React from 'react'

function Title() {
  return (
    <div >
        <div className="header">
        {/* <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1667834577/joe_italy_extended_l2g0sb.jpg" alt="Joe"/> */}
        <span><h1 className='joe'>Joe<br></br>Spizzandre</h1>
        <h2 className='tag'>Developing a better tomorrow starts today</h2></span>
        </div>
        <div className='technologies'>
            <h2 className='sectionHead'>Full-Stack Developer</h2>
            <i class="fas fa-gamepad fa-5x" aria-hidden="true"></i>
            <ul className='techList'>
                <li> 
                    <img className="techSymbol" title="HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="javascript logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://png2.cleanpng.com/sh/643d56e06c1a1a1a0738849fb4ebeda3/L0KzQYm3VsA1N5p0iZH0aYP2gLBuTgJmaZR5RdxqdnH2c8PwkQQuaZ9sjd5qcnr2Pbr2jvlkNZJ5h982NXK0RYXphcY6PGg5Tak3M0S6QYq7UcgyPWM9SaQ7M0S1RoGBUb5xdpg=/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png" alt="React Logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" alt="Ruby Logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png" alt="Rails Logo"/>
                </li>
                <li>
                    <img className="techSymbol" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo"/>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Title
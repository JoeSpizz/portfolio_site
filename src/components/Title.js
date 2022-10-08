import React from 'react'

function Title() {
  return (
    <div>
        <div className="header">
        <h1 className='joe'>Joe Spizzandre</h1>
        <h2 className='tag'>Developing a better tomorrow starts today</h2>
        </div>
        <div className='technologies'>
            <h2>Full-Stack Developer</h2>
            <ul className='techList'>
                <li><span>JavaScript </span>
                    <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="javascript logo"/>
                </li>
                <li> HTML
                    <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
                </li>
                <li>CSS
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo"/>
                </li>
                <li>ReactJS
                    <img src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" alt="React Logo"/>
                </li>
                <li>Ruby
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" alt="Ruby Logo"/>
                </li>
                <li>Rails
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png" alt="Rails Logo"/>
                </li>
                <li>SQL
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo"/>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Title
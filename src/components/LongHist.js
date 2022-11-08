import React from 'react'
import {motion} from 'framer-motion'

function LongHist() {
  return (
    <motion.div className='longHist'     initial={{ opacity: 0, scale: 0.75 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: .5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
      scale:{
          type:"spring",
          damping: 7
      }
    }} ><h1 className='sectionHead'>A Much Longer History</h1>
    <br></br>
    <p className='gradientText'>It is easy, when looking back, to see the threads that have led me towards programming. As a child, I organized things like my <a href="https://magic.wizards.com/en" target={"blank"} rel="noreferrer" >Magic </a>cards as if designing a database. Do you need a "Red Sorcery with converted mana cost less than 4?" Please refer to the following pages in the card notebook! In grade school I excelled in mathematics, the natural and logical rules that govern numbers are pleasing to work with once you've learned them. In college, while studying philosophy, I found the logic course to be one of my favorites. Most of my philosophically minded peers struggled mightily learning to combinine symbols and operators with variables representing strings that were the argument they were trying to prove. I found the exercise fascinating and wonderful. 
    </p>
      <br></br>
      <h2>.  .  .</h2>
      <br></br>
      <p>
After graduating college the threads become even stronger. During most of my time working with Vanguard I was in the Retail Resolution Specialists team. A group that, simply put, "fixed mistakes made by the human element of the company". Less simply; We used custom-to-the-issue built excel spreadsheets to compute dollar differences between the mistaken investment and the correct investment, then wrote highly specific instructions to our processing team for resolving the errors. I didn't realize it at the time but those instructions were codified in such a way that describing it as the Vanguard Processing Language Framework wouldn't be out of line. Vanguard also helped teach me that mistakes are not a dead-end and not the end of a story. It was here that I learned about the<a href="https://www.customerthermometer.com/img/5@2x_straight.png" target={"blank"} rel="noreferrer"> loyalty paradox</a> and furthermore I learned the soft skills required to handle those broken service relationships with care. Ensuring that repair is completed with grace and speed. 
</p>
<br></br>
<h2>.  .  .</h2>
<br></br>
<p>
After leaving investing and banking behind and joining the world of Cannabis and management, I quickly discovered a love for writing excel code (or <a href="https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office" target={"blank"} rel="noreferrer"> VBA</a> to be official) to accomplish many of the tasks required for the job. Tracking sales, inventory, purchase needs, and much more could all be done by hand… or I could write VBA to do it all for me. Automating and improving the efficiency of tasks through writing code was a huge factor in my eventual promotion to General Manager. Managing a cannabis facility also taught me so much about working with other people and about being a leader. That community is much more open and forthright with their emotions than a typical office and keeping everyone feeling supported and working hard is its own unique difficulty. 
</p>
<br></br>
<h2>.  .  .</h2>
<br></br>
<p>
Of course, the past few months at <a href="https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169839&utm_content=127574231184&utm_term=flatiron&uqaid=513799628798&Cj0KCQiAmaibBhCAARIsAKUlaKQllCWFs-1eaZBxHMvccANtbnijSbnDzAi-_WDhZ_4BIfnEmm2DbgsaAqQ0EALw_wcB&gclid=Cj0KCQiAmaibBhCAARIsAKUlaKQllCWFs-1eaZBxHMvccANtbnijSbnDzAi-_WDhZ_4BIfnEmm2DbgsaAqQ0EALw_wcB" target="blank" rel="noreferrer"> Flatiron School</a> have truly opened my eyes to a world that I knew existed but didn't truly <em>know</em>. Writing code every day since June of 2022 has been a unique joy that I will never be able to let go of now that I have it for my own. The feeling of solving a code-based puzzle and the act of creation is uniquely wonderful and I look forward to experiencing it over and over again for years to come. </p></motion.div>
  )
}

export default LongHist
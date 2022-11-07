import React from 'react'
import {motion} from 'framer-motion'
function ShortHist() {
  return (
    <motion.div className='shortHist'     initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: .5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
      scale:{
          type:"spring",
          damping: 7
      }
    }}>
        <h1 className='sectionHead'> A Short History </h1>
        <p> After having worked in mutual fund investing, banking, and running a retail cannabis shop I have finally taken my career into my own hands to persue coding. Every day I learn more about this field and every day I get more excited to be a part of it. Having been a leader in the professional world in one way or another for nearly a decade I am ready to bring my organizational skills and  solution-oriented thinking to the world of programming. I have found React to be intuitive and powerful to use, and have to say that Ruby creator "Matz" hit the nail directly on the head in designing a lanuage that makes programmers happy. I cannot wait to learn more and dive deeper into this ocean! </p>
    </motion.div>
  )
}

export default ShortHist
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
        <br></br>
        <p> After working in mutual fund investing, banking, and running a retail cannabis shop I have finally taken my career into my own hands to pursue coding. Every day I learn more about this field and every day I get more excited to be a part of it. Having been a leader in the professional world in one way or another for nearly a decade I am ready to bring my <strong>organizational skills and  solution-oriented thinking </strong>to the world of programming. Thus far in my journey I have found React to be intuitive and powerful to use, and I have to laud Ruby creator "Matz" hit for his success in designing a language that makes programmers <strong>happy.</strong> I cannot wait to learn more and dive deeper into this ocean! </p>
    </motion.div>
  )
}

export default ShortHist
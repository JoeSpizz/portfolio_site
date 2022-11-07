import React from 'react'
import {motion} from 'framer-motion'

function LongHist() {
  return (
    <motion.div className='longHist'     initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: .5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
      scale:{
          type:"spring",
          damping: 7
      }
    }} ><h1 className='sectionHead'>A Medium Length History</h1>
    <p>This is a WAY longer history of Joe</p></motion.div>
  )
}

export default LongHist
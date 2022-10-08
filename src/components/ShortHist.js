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
        <h1> A Short History </h1>
        <p> This is a short history of Joe</p>
    </motion.div>
  )
}

export default ShortHist
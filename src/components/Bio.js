import { motion } from 'framer-motion'
import React,{useState} from 'react'
import LongHist from './LongHist';
import ShortHist from './ShortHist';

function Bio() {
    const [bioLength, setBioLength]=useState("short")
    const [isOn, setIsOn] = useState(false);


    function toggleSwitch(){ 
        if(bioLength === "short"){
            setBioLength("long")
        }
        else
        setBioLength("short")
        setIsOn(!isOn);}
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };
  
  return (
    <div className="bio"> 
         <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
        {bioLength==="short" ? <ShortHist/> : <LongHist/>}

    </div>
  )
}

export default Bio
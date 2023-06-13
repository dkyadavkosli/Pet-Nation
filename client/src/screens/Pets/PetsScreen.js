import React from 'react'
import Header from '../../components/Header'
import PetsMid from './PetsMid'
import { motion } from "framer-motion"

function PetsScreen() {

  const myVariant = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{duration:1.5}
    },
    exit:{
      x:'-100vw',
      transition:{ease : 'easeInOut' , duration:0.5}
    }
  }

  return (
    <motion.div variants={myVariant} initial="hidden" animate='visible' exit='exit' className='bg-slate-100 h-screen overflow-y-scroll no-scrollbar'>
        <Header/>
        <PetsMid/>
    </motion.div>
  )
}

export default PetsScreen
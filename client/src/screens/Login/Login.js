import React from 'react'
import Header from '../../components/Header'
import LoginCom from './LoginCom'
import Footer from "../../components/Footer"
import { motion } from "framer-motion"

function Login() {

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
    <motion.div className='h-screen overflow-y-scroll n-scrollbar bg-slate-200' variants={myVariant} initial="hidden" animate='visible' exit='exit'>
        <Header yes="no"/>
        <LoginCom/>
        {/* <Footer/> */}
    </motion.div>
  )
}

export default Login
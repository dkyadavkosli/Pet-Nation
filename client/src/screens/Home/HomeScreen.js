import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Adopt from './Adopt'
import HomePic from './HomePic'
import Journey from './Journey'
import Questions from './Questions'
import Work from './Work'
import { motion } from "framer-motion"
import {changePetType , changeCity , changeType} from "../../actions/index"
import { useDispatch } from 'react-redux';

function HomeScreen() {

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePetType(null));
    dispatch(changeType(null));
    dispatch(changeCity(null));
  }, [])
  

  return (
    <motion.div className='bg-slate-100' variants={myVariant} initial="hidden" animate='visible' exit='exit'>
        <Header/>
        <HomePic/>
        <Adopt/>
        <Journey/>
        <Work/>
        <Questions/>
        <Footer/>
    </motion.div>
  )
}

export default HomeScreen
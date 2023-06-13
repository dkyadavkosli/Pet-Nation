import React , {useEffect} from 'react'
import Footer from '../../components/Footer'
import Header from "../../components/Header"
import AbuseCom from './AbuseCom'
import { motion } from "framer-motion"
import {changePetType , changeCity , changeType} from "../../actions/index"
import { useDispatch } from 'react-redux';

function AbuseScreen() {

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
    <motion.div variants={myVariant} initial="hidden" animate='visible' exit='exit'>
        <Header/>
        <AbuseCom/>
        <Footer/>
    </motion.div>
  )
}

export default AbuseScreen
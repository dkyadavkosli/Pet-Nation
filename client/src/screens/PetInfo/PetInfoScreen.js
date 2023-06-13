import React , {useEffect} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PetInfo from './PetInfo'
import { motion , AnimatePresence } from "framer-motion"
import {changePetType} from "../../actions/index"
import { useDispatch } from 'react-redux';


function PetInfoScreen() {

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
  }, [])

  return (
    <motion.div variants={myVariant} initial="hidden" animate='visible' exit='exit' className='bg-slate-100'>
        <Header/>
        <PetInfo/>
        <Footer/>
    </motion.div>
  )
}

export default PetInfoScreen
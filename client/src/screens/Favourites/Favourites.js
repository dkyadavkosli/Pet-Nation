import React , {useEffect} from 'react'
import Header from '../../components/Header'
import FavCom from './FavCom'
import {changePetType , changeCity , changeType} from "../../actions/index"
import { motion  } from "framer-motion"
import { useDispatch } from 'react-redux';

function Favourites() {

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
        <FavCom/>
    </motion.div>
  )
}

export default Favourites
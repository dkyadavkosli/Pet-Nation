import React from 'react'
import pic from "../assets/bg2.jpg"
import { useDispatch } from 'react-redux';
import {changeCurrPet} from "../actions/index"
import { useNavigate } from 'react-router-dom'

function HomePetCard(props) {

  const history = useNavigate()
  const dispatch = useDispatch()


  const change = () => {
    dispatch(changeCurrPet(props?.id));
    console.log("hi")
    history("/petinfo")
  }

  return (
    <div className='mb-4 cursor-pointer ml-1 mr-1 shadow-lg border-2 hover:animate-pulse hover:scale-105 rounded-lg' style={{ position: "relative" }} >
        <div onClick={change}>
        <img src={props?.img ||pic} className="h-56 w-full rounded-t-lg" alt="Error"/>
        <div className='flex p-2 sm:pt-4 pt-3 sm:pb-4 pb-3 rounded-b-lg text-purple-900 text-lg font-semibold bg-white flex-row justify-center'>
        <h3 className='text-lg'>{props?.name}</h3>
        </div>
        </div>
    </div>
  )
}

export default HomePetCard
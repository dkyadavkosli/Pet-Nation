import React from 'react'
import pic from "../assets/bg2.jpg"
import {FiHeart} from "react-icons/fi"
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import {changeCurrPet} from "../actions/index"
import { useNavigate } from 'react-router-dom'


function PetCard(props) {
  const myUser=useSelector((state)=>
  state.changeUser
  );

  const history = useNavigate()
  const dispatch = useDispatch()

  const change = () => {
    dispatch(changeCurrPet(props?.id));
    history("/petinfo")
  }


  const handleClick = async (e) => {
    e.preventDefault();
      const pet = {
        user_id: myUser?._id,
        pet_id:props?.id,
        breed:props?.breed,
        pet_name:props?.name, 
        city:props?.city,
        image:props?.img,
        is_available:true
      };
      try {
        await axios.post("/api/favourite/create", pet);
        window.alert("Added to favourites")
      } catch (err) {
        window.alert("OOps!! Something went wrong")
      }
  };

  const deleteFav = async () => {
    try{
    const res = await axios.delete("api/favourite/"+props?.id);
    history("/home");
    // window.location.reload();
    }catch(e){
      console.log(e)
    }
  };  

  const deleteSell = async () => {
    try{
    const res = await axios.delete("api/pet/"+props?.id);
    history("/home");
    // window.location.reload();
    }catch(e){
      console.log(e)
    }
  };

  return (
    <div className='mb-4 cursor-pointer ml-1 mr-1 pb-3 pt-1 bg-white shadow-lg border-2 hover:animate-pulse hover:scale-105 rounded-lg' style={{ position: "relative" }} >
        <div className={`pr-2 font-semibold text-sm bg-white p-1`} style={{ position: "absolute", top: "0px" , left:"0px" }}>{props?.breed?.toUpperCase()}</div>
        <div className={`font-semibold text-sm bg-white p-1`} style={{ position: "absolute", top: "0px" , right:"0px" }}>{props?.city?.toUpperCase()}</div>
        <div >
        <img onClick={change} src={props?.img||pic} alt="Error" className="h-56 w-full rounded-t-lg"/>
        <div className='flex p-2 pt-3 pb-1 text-purple-900 text-lg font-semibold bg-white flex-row justify-center'>
        <div onClick={change} className='text-lg'>{props?.name?.toUpperCase()}</div>
        </div>
      <div className="w-full flex bg-white flex-row rounded-b-lg pb-1 justify-center pl-1 pr-1">
      <FiHeart onClick={handleClick} className={`bg-purple-700 p-2 h-10 w-10 ${props?.fav === "yes"?"hidden":""} ${props?.sell === "yes"?"hidden":""} cursor-pointer rounded-3xl text-white`}/>
      <div className={`w-full h-10 mt-1 flex cursor-pointer bg-white flex-row justify-center ${props.sell === "yes"?"":"hidden"} rounded`}>
        <button onClick={deleteSell} className='text-sm rounded text-white font-semibold pt-1 pb-1 pl-2 pr-2 bg-gradient-to-r from-sky-600 to-sky-400'>DELETE</button>
      </div>
      <div className={`w-full h-10 mt-1 flex cursor-pointer bg-white flex-row justify-center ${props.fav === "yes"?"":"hidden"} rounded`}>
        <button onClick={deleteFav} className='text-sm rounded text-white font-semibold pt-1 pb-1 pl-2 pr-2 bg-gradient-to-r from-sky-600 to-sky-400'>REMOVE</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default PetCard
import React , {useState} from 'react'
import {CgProfile} from "react-icons/cg"
import {AiFillHome} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiLogIn} from "react-icons/fi"
import {Link} from "react-router-dom"
import {BsSuitHeart} from "react-icons/bs"
import {changeCharges , changeFind} from "../actions/index"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header(props) {

  const [hi , setHi] = useState("N")

  const changeHi = () => {
    if(hi === "Y"){
      setHi("N")
    }else{
      setHi("Y")
    }
  } 


  const dispatch = useDispatch();
  const history = useNavigate();

  const logInOut = () =>{
    localStorage.removeItem('pet2');
    history("/");
  }

  const getCharge = () => {
    dispatch(changeCharges("yes"));
    history("/pets")
  }

  const getFree = () => {
    dispatch(changeCharges("no"));
    history("/pets")
  }

  const getFindFree = () => {
    dispatch(changeFind("no"));
    history("/sell")
  }

  const getFindCharge = () => {
    dispatch(changeFind("yes"));
    history("/sell")
  }


  return (
    <div>
    <div className={`xl:pl-24 lg:pl-16 md:pl-6 xl:pr-24 lg:pr-16 md:pr-6 flex flex-row ${props?.yes === "no" ? "md:bg-purple-800":"md:bg-slate-200"} w-full bg-purple-800`}>
      <div className='md:hidden flex flex-row ml-4 mr-2 mb-2 mt-2'>
      <GiHamburgerMenu className='h-8 w-8 p-1 bg-white' onClick={changeHi}/>
      </div>
      <h3 className={`w-1/4 ${props?.yes === "no" ? "md:text-white":"md:text-purple-800"} sm:block hidden text-white pl-4 pt-2 pb-2 md:text-xl text-lg font-sans`} id='title'>PETNATION</h3>
      <div className='sm:w-3/4 w-full flex flex-row justify-end'>
      <div className='flex flex-row'>
      <div className='md:flex flex-col hidden md:border-r md:text-slate-800 text-white md:border-slate-500 border-white justify-center pl-5 sm:pr-5 pr-3'>
        <Link to="/home" className={`${props?.yes === "no" ? "hidden":""}`}>
        <AiFillHome className='h-6 w-6'/>
        </Link>
        </div>
        <Link className={`${props?.yes === "no" ? "hidden":""} flex flex-col md:text-slate-800 text-white border-r border-slate-500 justify-center sm:pl-5 pl-2 sm:pr-5 pr-2`} to="/fav">
        <BsSuitHeart className='h-6 cursor-pointer w-6'/>
        </Link>
        <Link className={`flex flex-col md:text-slate-800 text-white justify-center sm:pl-5 pl-2 sm:pr-5 pr-2 ${props?.yes === "no" ? "hidden":""}`} to="/profile">
        <CgProfile className='h-6 cursor-pointer w-6'/>
        </Link>
        <Link to="/register" className={`pl-5 font-semibold pt-2 pb-2 pr-5 md:block hidden ${props?.yes === "no" ? "md:text-white":"md:text-slate-600"} text-white md:border-l ${props?.yes === "no" ? "md:border-white":"md:border-slate-600"} border-white`}>Sign Up</Link>
        <div onClick={logInOut} className={`md:pl-5 cursor-pointer pl-3 font-semibold md:block hidden pt-2 pb-2 md:pr-5 ${props?.yes === "no" ? "md:text-white":"md:text-slate-600"} pr-3 text-white`}>Log In</div>
        <div onClick={logInOut} className='flex flex-col cursor-pointer md:text-slate-800 md:hidden text-white justify-center ml-3 mr-5'>
        <FiLogIn className='h-6 cursor-pointer w-6'/>
        </div>
      </div>
      </div>
    </div>
    <div className={`flex-row hidden bg-purple-800 pt-3 pb-3 w-full ${props?.yes === "no" ? "md:hidden":"md:flex"} justify-between 2xl:pl-44 xl:pl-32 lg:pl-24 md:pl-6 2xl:pr-44 xl:pr-32 lg:pr-24 md:pr-6`}>
        <div onClick={getCharge} className={` cursor-pointer text-sm font-semibold pb-0.5 text-white pt-0.5 ${props?.yes === "no" ? "hidden":""}`}>BUY A PET</div>
        <div onClick={getFindCharge} className={`${props?.yes === "no" ? "hidden":""} text-white cursor-pointer text-sm font-semibold pb-0.5 pt-0.5`}>SELL A PET</div>
        <div onClick={getFree} className={`${props?.yes === "no" ? "hidden":""} text-white cursor-pointer text-sm font-semibold pb-0.5 pt-0.5`}>ADOPT A PET</div>
        <div onClick={getFindFree} className={`${props?.yes === "no" ? "hidden":""} text-white cursor-pointer text-sm font-semibold pb-0.5 pt-0.5`}>FIND AN OWNER</div> 
        <Link to="/abuse" className={`${props?.yes === "no" ? "hidden":""} text-white cursor-pointer text-sm font-semibold pb-0.5 pt-0.5`}>REPORT ANIMAL ABUSE</Link>
    </div>
    <div className={`md:hidden bg-purple-700 ${hi==="N"?"hidden":""} ${props?.yes === "no" ? "hidden":""} flex flex-col pt-2 pb-2 w-full justify-between sm:pl-4 pl-3 sm:pr-4 pr-3`}>
        <div onClick={getCharge} className={`${props?.yes === "no" ? "hidden":""} text-white cursor-pointer text-sm font-semibold pb-0.5 pt-0.5`}>BUY A PET</div>
        <div onClick={getFindCharge} className={`${props?.yes === "no" ? "hidden":""} text-white cursor-pointer text-sm font-semibold pb-0.5 pt-0.5`}>SELL A PET</div>
        <div onClick={getFree} className={`${props?.yes === "no" ? "hidden":""} text-white text-sm cursor-pointer font-semibold pb-0.5 pt-0.5`}>ADOPT A PET</div>
        <div onClick={getFindFree} className={`${props?.yes === "no" ? "hidden":""} text-white text-sm cursor-pointer font-semibold pb-0.5 pt-0.5`}>FIND AN OWNER</div> 
        <Link to="/abuse" className={`${props?.yes === "no" ? "hidden":""} text-white text-sm cursor-pointer font-semibold pb-0.5 pt-0.5`}>REPORT ANIMAL ABUSE</Link> 
    </div>
    </div>
  )
}

export default Header
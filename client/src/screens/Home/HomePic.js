import React, { useRef } from 'react'
import pic from "../../assets/bg2.jpg"
import { FiSearch } from 'react-icons/fi';
import { FaDog , FaCat } from 'react-icons/fa';
import { GiFrogFoot , GiShouting } from 'react-icons/gi';
import {Link} from "react-router-dom"
import {changePetType , changeCity , changeType} from "../../actions/index"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomePic() {
 
  const dispatch = useDispatch();
  const history = useNavigate();

  const city = useRef();
  const type = useRef();
  
  const getDog = () => {
    const dog = "DOG";
    dispatch(changePetType(dog));
    history("/pets")
  }

  const getCat = () => {
    dispatch(changePetType("CAT"));
    history("/pets")
  }

  const getOther = () => {
    dispatch(changePetType("OTHER"));
    history("/pets")
  }


  const sendSearch = () => {
    if(city?.current?.value && type?.current?.value){
      dispatch(changeCity(city.current.value?.toUpperCase()));
      dispatch(changeType(type.current.value?.toUpperCase()));
      history("/pets")
    }
  }

  return (
    <div className='w-full h-full' style={{ position: "relative" }} >
        <img src={pic} className="w-full h-96 bg-black" style={{ backgroundColor:"black" }} alt="Error"/>
        <div className='h-2 bg-purple-700'></div>
        <div className='2xl:pl-72 xl:pl-56 lg:pl-36 2xl:pr-72 xl:pr-56 lg:pr-36 md:pl-14 md:pr-14 pt-6 sm:p-4 pl-1 pr-1 w-full' style={{ position: "absolute", top: "0px" }}>
        <div className='sm:flex hidden flex-row w-full p-2 sm:pr-4 pr-1 sm:pl-3 pl-1'>
            <input ref={type} type="text" placeholder='Search dog, cat or others' className="w-1/2 rounded-l bg-slate-50 pt-1 pb-1 pl-2 pr-2 h-12 border-0 border-black"/>
            <input ref={city} type="text" placeholder='Enter your city' className="w-1/2 border-l-2 bg-slate-50 pt-1 pb-1 pl-2 pr-2 h-12 border-0 border-slate-500"/>
            <div className='pr-2 pt-2 pb-2 rounded-r bg-slate-50'>
            <FiSearch onClick={sendSearch} className='w-8 rounded cursor-pointer text-white bg-purple-700 p-1 h-8'/>
            </div>
        </div>
        <div className='w-full sm:mt-20 mt-32'>
            <div className='w-full flex flex-row font-semibold md:text-4xl sm:text-3xl text-xl text-white justify-center'>
            <div className='text-center'>GIFT YOURSELF A NEW BEST FRIEND</div>
            </div>
            <div className='w-full md:text-base text-sm md:font-normal font-semibold flex flex-row mt-2 text-white justify-center'>
            <div className='text-center'>BROWSE PETS FROM OUR NETWORK AND FIND SOME NEW ADDITIONS TO YOUR FAMILY</div>
            </div>
        </div>
        <div className='mt-16 pl-6 pr-6 md:flex hidden flex-row justify-between'>
            <div onClick={getDog} className='cursor-pointer pt-8 pb-8 w-full ml-3 mr-3 rounded-md border bg-white border-black'>
                <div className='flex flex-row justify-center w-full'>
                <FaDog className="h-14 w-14 text-purple-700"/>
                </div>
                <div className='flex flex-row mt-3 justify-center'>
                <div>DOGS</div>
                </div>
            </div>
            <div onClick={getCat} className='cursor-pointer pt-8 pb-8 w-full ml-3 mr-3 rounded-md border bg-white border-black'>
            <div className='flex flex-row justify-center w-full'>
                <FaCat className="h-14 w-14 text-purple-700"/>
                </div>
                <div className='flex flex-row mt-3 justify-center'>
                <div>CATS</div>
                </div>
            </div>
            <div onClick={getOther} className='cursor-pointer pt-8 pb-8 w-full ml-3 mr-3 rounded-md border bg-white border-black'>
            <div className='flex flex-row justify-center w-full'>
                <GiFrogFoot className="h-14 w-14 text-purple-700"/>
                </div>
                <div className='flex flex-row mt-3 justify-center'>
                <div>OTHER ANIMALS</div>
                </div>
            </div>
            <Link to="/abuse" className='cursor-pointer pt-8 pb-8 w-full ml-3 mr-3 rounded-md border bg-white border-black'>
            <div className='flex flex-row justify-center w-full'>
                <GiShouting className="h-14 w-14 text-purple-700"/>
                </div>
                <div className='flex flex-row mt-3 justify-center'>
                <div>REPORT ABUSE</div>
                </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default HomePic
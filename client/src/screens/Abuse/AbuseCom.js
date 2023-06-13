import React , {useRef} from 'react'
import pic from "../../assets/dog.jpg"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';

function AbuseCom() {
    const email = useRef();
    const phone = useRef();
    const address = useRef();
    const description = useRef();

    const myUser=useSelector((state)=>
    state.changeUser
    );

    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
          const complaint = {
            username: myUser?.username,
            email: email.current.value,
            description: description.current.value,
            phone:phone.current.value,
            address:address.current.value
          };
          try {
            await axios.post("/api/complaint/create", complaint);
            history("/home")
          } catch (err) {
            window.alert("Oops!! Something went wrong.")
          }
      };

  return (
    <div className='md:pt-4 md:pb-4 bg-slate-200 rounded flex flex-row justify-center'>
    <div className=' xl:w-5/12 lg:w-1/2 md:w-3/4 sm:w-5/6 w-full justify-center items-center'>
        <div className='w-full'>
            <img className='w-full h-64 md:rounded-t' src={pic} alt=""/>
        </div>
        <form onSubmit={handleClick} method="POST" className='sm:pl-6 pl-3 pb-6 rounded-b w-full pt-4 bg-white'>
        <div className='font-semibold text-slate-600 text-sm mr-6'>IF YOU DON'T LIKE PICTURES OF ANIMAL CRUELTY BEING POSTED ON SOCIAL MEDIA, 
          YOU NEED TO HELP STOP THE CRUELTY NOT THE PICTURES.</div>
        <div className='md:text-4xl text-3xl mt-3 mb-5 font-medium'>Report Abuse</div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Email</div>
                <input type="email" ref={email} name='email' className='w-11/12 p-1 border-0 border-b-2' placeholder='Enter your Email'/>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Phone</div>
                <input type="number" ref={phone} name='phone' className='w-11/12 p-1 border-0 border-b-2' placeholder='Enter your Phone'/>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Address</div>
                <input type="text" ref={address} name='text' className='w-11/12 p-1 border-0 border-b-2' placeholder='Enter your address'/>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Please Elaborate</div>
                <textarea ref={description} type="text" name='cpassword' className='w-11/12 h-72 mt-1 p-1 border-2' placeholder='Confirm Your Password'/>
            </div>
            <div className='mt-4'>
                <button className='p-2 bg-purple-700 text-white pl-8 pr-8 rounded-3xl'>Report</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default AbuseCom
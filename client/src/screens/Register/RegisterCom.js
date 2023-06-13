import React, { useRef } from 'react'
import pic from "../../assets/LoginImg.webp"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function RegisterCom() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const cpassword = useRef();
    const phone = useRef();
    const address = useRef();

    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (cpassword.current.value !== password.current.value) {
          cpassword.current.setCustomValidity("Passwords don't match!");
        } else {
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            phone:phone.current.value,
            address:address.current.value
          };
          try {
            await axios.post("/api/entry/register", user);
            history("/")
            console.log("done")
          } catch (err) {
            window.alert("An account with this Email already exists")
          }
        }
      };

  return (
      <div className='md:pt-4 md:pb-4 bg-slate-200 rounded flex flex-row justify-center'>
    <div className=' xl:w-5/12 lg:w-1/2 md:w-3/4 sm:w-5/6 w-full justify-center items-center'>
        <div className='w-full'>
            <img className='w-full h-64 md:rounded-t' src={pic} alt=""/>
        </div>
        <form onSubmit={handleClick} method="POST" className='pl-6 pb-6 rounded-b w-full pt-4 bg-white'>
        <div className='md:text-4xl text-3xl mb-5 font-medium'>Sign Up</div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Username</div>
                <input type="text" ref={username} name='name' className='w-11/12 p-1 border-0 border-b-2' placeholder='Enter your name'/>
            </div>
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
                <input type="text " ref={address} name='email' className='w-11/12 p-1 border-0 border-b-2' placeholder='Enter your address'/>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Password</div>
                <input type="password" ref={password} name='password' className='w-11/12 p-1 border-0 border-b-2' placeholder='Make a strong Password'/>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Confirm Password</div>
                <input type="password" ref={cpassword} name='cpassword' className='w-11/12 p-1 border-0 border-b-2' placeholder='Confirm Your Password'/>
            </div>
            <div className='mt-4'>
                <button type='submit' className='p-2 bg-purple-700 text-white pl-8 pr-8 rounded-3xl'>Register</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default RegisterCom
import React , {useRef , useEffect} from 'react'
import pic from "../../assets/LoginImg.webp"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {changeUser} from "../../actions/index"
import {useNavigate} from "react-router-dom"

function LoginCom() {
  const email = useRef();
  const password = useRef();

  const curr = JSON.parse(localStorage.getItem('pet2'))
  console.log(curr);
  
  const dispatch = useDispatch();
  const history = useNavigate();

  const hi = () => {
    if(curr!==null){
      dispatch(changeUser(curr))
      history("/home");
    }
  }
  
  useEffect(()=>{
   hi()
  })

  const handleClick = async (e) => {
    e.preventDefault();
      const user = {
        email: email.current.value,
        password: password.current.value,  
      };
      try {
        const res = await axios.post("/api/entry/login", user); 
        dispatch(changeUser(res.data))
        localStorage.removeItem('pet2');
        localStorage.setItem('pet2', JSON.stringify(res.data))
        history("/home");
      } catch (err) {
        window.alert("Invalid credentials")
        window.location.reload();
      }
  };

  return (
    <div className='md:pt-4 md:pb-4 md:bg-slate-200 bg-white rounded flex flex-row justify-center'>
        <div className='xl:w-5/12 lg:w-1/2 md:w-3/4 sm:w-5/6 w-full rounded'>
        <div className='w-full'>
            <img className='w-full md:rounded-t h-80' src={pic} alt=""/>
        </div>
        <div className='md:pl-6 pl-3 md:pt-6 pt-4 rounded-b md:pb-6 pb-4 w-full bg-white'>
          <div className='md:text-4xl text-3xl font-medium'>Sign In</div>
        <div className='md:pt-6 pt-4 h-full bg-white'>
            <div>
                <div className='md:text-xl font-semibold text-lg'>Email</div>
                <input type="email" ref={email} name='email' className='w-11/12 p-1 border-0 border-b-2' placeholder='Enter your Email'/>
            </div>
            <div className='mt-4'>
                <div className='md:text-xl font-semibold text-lg'>Password</div>
                <input type="password" ref={password} name='password' className='w-11/12 p-1 border-0 border-b-2' placeholder='Enter your Password'/>
            </div>
            <div className='mt-6'>
                <button onClick={handleClick} className='p-2 bg-purple-700 text-white pl-8 pr-8 rounded-3xl' type="submit" >Sign In</button>
           </div>
        </div>
        </div>
        <div className="md:hidden bg-white pl-3 pb-5">
          <div className='ml-1 text-sm font-semibold'>Don't have an Account? Have one now!!</div>
          <button className='p-2 bg-gradient-to-r from-blue-600 to-blue-800 mt-3 text-white pl-8 pr-8 rounded-3xl' type="submit" >Sign Up</button>
        </div>
    </div>
    </div>
  
  )
} 

export default LoginCom
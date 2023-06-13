import React,{useState , useRef} from 'react'
import {MdOutlineArrowDropDown} from "react-icons/md"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';

function SellPetCom() {

    const [breed1 , setbreed1] = useState(0)

    const [breed , setbreed] = useState("")
  
    const getbreed1 = () => {
      if(breed1 === 0){
          setbreed1(1)
      }else{
          setbreed1(0)
      }
    }

    const [color1 , setcolor1] = useState(0)

    const [color , setcolor] = useState("")
  
    const getcolor1 = () => {
      if(color1 === 0){
          setcolor1(1)
      }else{
          setcolor1(0)
      }
    }

    const [size1 , setsize1] = useState(0)

    const [size , setsize] = useState("")
  
    const getsize1 = () => {
      if(size1 === 0){
          setsize1(1)
      }else{
          setsize1(0)
      }
    }

    const [gender1 , setgender1] = useState(0)

    const [gender , setgender] = useState("")
  
    const getgender1 = () => {
      if(gender1 === 0){
          setgender1(1)
      }else{
          setgender1(0)
      }
    }

    const [type1 , settype1] = useState(0)

    const [type , settype] = useState("")
  
    const gettype1 = () => {
      if(type1 === 0){
          settype1(1)
      }else{
          settype1(0)
      }
    }

    const name = useRef();
    const pet_type = useRef();
    const breed2 = useRef();
    const color2 = useRef();
    const size2 = useRef();
    const gender2 = useRef();
    const city = useRef();
    const charges = useRef();
    const image = useRef();

    
    const myUser=useSelector((state)=>
    state.changeUser
    );

    const myFind=useSelector((state)=>
    state.changeFind
    );

    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
          const pet = {
            name: name.current.value,
            ownerId:myUser?._id,
        pet_type:pet_type.current.value,
        breed:breed2.current.value,
        color:color2.current.value,
        size:size2.current.value, 
        city:city.current.value.toUpperCase(),
        charges:charges.current.value!==""?charges.current.value : "0",
        image:image.current.value,
        email:myUser?.email,
        phone:myUser?.phone,
        address:myUser?.address,
        gender:gender2.current.value,
        is_available:true
          };
          try {
            await axios.post("/api/pet/create", pet);
            history("/home")
            console.log("done")
          } catch (err) {
            window.alert("Oops!! Something went wrong.")
          }
      };

     console.log(charges?.current?.value)

  return (
    <div className='lg:p-4 sm:p-2 p-0 bg-slate-200'>
    <div className='flex flex-row w-full justify-center items-center'>
        <div className='md:pl-6 rounded pl-3 pb-4 lg:w-2/3 md:w-5/6 sm:w-11/12 w-full lg:pr-6 pr-3 pt-4 bg-white'>
        <div className='md:text-4xl text-3xl mb-5 font-medium'>{myFind==="no"?"Find An Owner":"Sell Your Pet"}</div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Pet Name</div>
                <input type="text" name='name' ref={name} className='w-full p-1 border-0 border-b-2' placeholder='Enter your pet name'/>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Pet Type</div>
                <div className="flex flex-row w-full pr-1 rounded-md ">
            <input defaultValue={type} value={type} ref={pet_type} className="w-full h-10 bg-white border-b-2 hover:border-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Type"
            />
            <MdOutlineArrowDropDown onClick={gettype1} className="bg-white border-b-2 cursor-pointer p-2 h-10 w-10"
            />
          </div>
          <div className={`flex ${type1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-full overflow-y-scroll max-h-16 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>settype("DOG")} className='text-sm'>DOG</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>settype("CAT")} className='text-sm'>CAT</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>settype("OTHER")} className='text-sm'>OTHER</button>
                </div>
            </div>
        </div>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>Pet Gender</div>
                <div className="flex flex-row w-full pr-1 rounded-md ">
            <input defaultValue={gender} value={gender} ref={gender2} className="w-full h-10 bg-white border-b-2 hover:border-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Gender"
            />
            <MdOutlineArrowDropDown onClick={getgender1} className="bg-white border-b-2 cursor-pointer p-2 h-10 w-10"
            />
          </div>
          <div className={`flex ${gender1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-full overflow-y-scroll max-h-16 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setgender("MALE")} className='text-sm'>MALE</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setgender("FEMALE")} className='text-sm'>FEMALE</button>
                </div>
            </div>
        </div>
            </div>
            <div>
            <div className='mt-4 font-semibold text-lg'>Pet Breed</div>
            <div className="flex flex-row w-full pr-1 rounded-md bg-white">
            <input defaultValue={breed} value={breed} ref={breed2} className="w-full h-10 hover:border-2 pt-1 border-b-2 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Breed"
            />
            <MdOutlineArrowDropDown onClick={getbreed1} className="bg-white  border-b-2 cursor-pointer p-2 h-10 w-10"
            />
          </div>
          <div className={`flex ${breed1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-full overflow-y-scroll max-h-16 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setbreed("LABRADOR")} className='text-sm'>LABRADOR</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setbreed("G.SHEPHERD")} className='text-sm'>G.SHEPHERD</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setbreed("PITBULL")} className='text-sm'>PITBULL</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setbreed("OTHER")} className='text-sm'>OTHER</button>
                </div>
            </div>
        </div>
            </div>
            <div>
            <div className='mt-4 font-semibold text-lg'>Pet Color</div>
            <div className="flex flex-row w-full pr-1 rounded-md">
            <input defaultValue={color} value={color} ref={color2} className="w-full h-10 bg-b-2 hover:border-2 border-b-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Color"
            />
            <MdOutlineArrowDropDown onClick={getcolor1} className="bg-white border-b-2 cursor-pointer p-2 h-10 w-10"
            />
          </div>
          <div className={`flex ${color1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-full overflow-y-scroll max-h-16 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setcolor("BLACK")} className='text-sm'>BLACK</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setcolor("WHITE")} className='text-sm'>WHITE</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setcolor("OTHER")} className='text-sm'>OTHER</button>
                </div>
            </div>
        </div>
            </div>
            <div>
            <div className='mt-4 font-semibold text-lg'>Pet Size</div>
            <div className="flex flex-row w-full pr-1 rounded-md ">
            <input defaultValue={size} value={size} ref={size2} className="w-full h-10 bg-white hover:border-2 border-b-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Size"
            />
            <MdOutlineArrowDropDown onClick={getsize1} className="bg-white border-b-2 cursor-pointer p-2 h-10 w-10"
            />
          </div>
          <div className={`flex ${size1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-full overflow-y-scroll max-h-16 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setsize("SMALL")} className='text-sm'>SMALL(10-40lbs)</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setsize("MEDIUM")} className='text-sm'>MEDIUM(40-70lbs)</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setsize("LARGE")} className='text-sm'>LARGE(70+lbs)</button>
                </div>
            </div>
        </div>
            </div>
            <div>
                <div className='mt-4 font-semibold text-lg'>City</div>
                <input type="text" ref={city} name='city' className='w-full p-1 border-0 border-b-2' placeholder='Enter your city'/>
            </div>
            <div className={`${myFind==="no"?"hidden":""}`}>
                <div className={`mt-4 font-semibold text-lg`}>Pet Charges</div>
                <input type="text" ref={charges} name='charges' className='w-full p-1 border-0 border-b-2' placeholder='Enter pet charges'/>
            </div>
                <div>
                <div className='mt-4 font-semibold text-lg'>Pet Image</div>
                <input type="text" ref={image} name='charges' className='w-full p-1 border-0 border-b-2' placeholder='Enter pet image'/>
                </div>
            <div className='mt-5' onClick={handleClick}>
                <button className='p-2 bg-purple-700 text-white pl-8 pr-8 rounded-3xl'>Put On Sale</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SellPetCom
import React , {useEffect, useState , useRef} from "react";
import {MdOutlineArrowDropDown} from "react-icons/md"
import PetCard from "../../components/PetCard"
import axios from "axios";
import { useSelector } from 'react-redux';

function PetsMid() {

  const [breed1 , setbreed1] = useState(0)

  const [breed , setbreed] = useState("")

  const getbreed1 = () => {
    if(breed1 === 0){
        setbreed1(1)
    }else{
        setbreed1(0)
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

  const [color1 , setcolor1] = useState(0)

  const [color , setcolor] = useState("")

  const getcolor1 = () => {
    if(color1 === 0){
        setcolor1(1)
    }else{
        setcolor1(0)
    }
  }

  
  const myType=useSelector((state)=>
  state.changePetType
  );

  const myCharges=useSelector((state)=>
  state.changeCharges
  );

  const myTypeOne=useSelector((state)=>
  state.changeType
  );

  const myCity=useSelector((state)=>
  state.changeCity
  );

  const [allPets , setAllPets] = useState();

  const getPets = async() => {
    try {
      if(myTypeOne===null && myCity === null){
      if(myType==null){
      if(myCharges === "yes" || myCharges === null){  
      const res  = await axios.get("/api/pet/all");
      setAllPets(res.data);
      }else if(myCharges==="no"){
        const res  = await axios.get("/api/pet/all/free");
      setAllPets(res.data);
      }
      }else{
        const res  = await axios.get("/api/pet/all/"+myType);
      setAllPets(res.data);
      }
    }else{
      const res  = await axios.get("/api/pet/homeSearch/"+myCity+"/"+myTypeOne);
      setAllPets(res.data);
    }
    } catch (err) {
      window.alert("Oops!! Something went wrong.")
    }
  }

  useEffect(() => {
    getPets();
  }, [myCharges])

  const city2 = useRef();
  const breed2 = useRef();
  const color2 = useRef();
  const size2 = useRef();
  const gender2 = useRef();

  const getPets2 = async() => {
    try {
      const res  = await axios.get("/api/pet/filters/"+city2.current.value.toUpperCase()+"/"+breed2.current.value+"/"+color2.current.value+"/"+size2.current.value+"/"+gender2.current.value);
      setAllPets(res.data);
    } catch (err) {
      window.alert("Oops!! Something went wrong.")
    }
  }
  

  return (
    <div className="2xl:pl-24 xl:pl-20 lg:pl-16 md:pl-6 sm:pl-4 pl-2 2xl:pr-24 xl:pr-20 lg:pr-16 md:pr-6 sm:pr-4 pr-2 w-full wq:pt-6 pt-4 wq:pb-6 pb-4">
      <div className="flex flex-row w-full mb-4 justify-center">
        <div className={`md:text-4xl sm:text-3xl text-xl sm:font-normal ${myCharges===null || myCharges==="no"?"hidden":""} font-semibold text-purple-900`}>
          EXPLORE AND FIND A PERFECT PET
        </div>
        <div className={`md:text-4xl sm:text-3xl text-xl sm:font-normal ${myCharges!==null && myCharges!=="no"?"hidden":""} font-semibold text-purple-900`}>
          ADOPT A HOMELESS ANIMAL
        </div>
      </div>

      <div className={`grid xl:grid-cols-6 sm:mt-4 mt-2 sm:grid-cols-3 ${myType==="DOG" || myType===null ? "":"hidden"} grid-cols-1 pt-1 w-full justify-between`}>
      <div className="mr-1">
          <div className="flex flex-row w-full mt-2 rounded-md bg-white shadow-lg">
            <input ref={city2} className="w-full h-10 bg-white hover:border-2 pt-1 pl-2 pb-1 pr-2 rounded-md hover:border-gray-500" placeholder="City"
            />
          </div>
      </div>


      <div className="sm:ml-2 mr-1">
          <div className="flex flex-row w-full mt-2 pr-1 rounded-md bg-white shadow-lg">
            <input defaultValue={breed} ref={breed2} className="w-full h-10 bg-white hover:border-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Breed"
            />
            <MdOutlineArrowDropDown onClick={getbreed1} className="bg-white rounded-r-lg cursor-pointer p-2 h-10 w-10"
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


      <div className="sm:ml-2 mr-1">
          <div className="flex flex-row w-full mt-2 pr-1 rounded-md bg-white shadow-lg">
            <input defaultValue={color} ref={color2} className="w-full h-10 bg-white hover:border-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Color"
            />
            <MdOutlineArrowDropDown onClick={getcolor1} className="bg-white rounded-r-lg cursor-pointer p-2 h-10 w-10"
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


      <div className="xl:ml-2 mr-1">
          <div className="flex flex-row w-full mt-2 pr-1 rounded-md bg-white shadow-lg">
            <input defaultValue={size} ref={size2} className="w-full h-10 bg-white hover:border-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Size"
            />
            <MdOutlineArrowDropDown onClick={getsize1} className="bg-white rounded-r-lg cursor-pointer p-2 h-10 w-10"
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


      <div className="sm:ml-2 mr-1">
          <div className="flex flex-row w-full mt-2 pr-1 rounded-md bg-white shadow-lg">
            <input defaultValue={gender} ref={gender2} className="w-full h-10 bg-white hover:border-2 pt-1 pl-2 pb-1 pr-2 rounded-l-md hover:border-gray-500" placeholder="Gender"
            />
            <MdOutlineArrowDropDown onClick={getgender1} className="bg-white rounded-r-lg cursor-pointer p-2 h-10 w-10"
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


      <div className="sm:ml-2 mr-1 mt-2">
        <div onClick={getPets2} className='w-full h-10 mr-3 flex cursor-pointer flex-row justify-center shadow-lg rounded bg-gradient-to-r from-sky-600 to-sky-400'>
        <button className='text-sm rounded text-white font-semibold'>SEARCH</button>
        </div>
      </div>
      </div>

      <div className={`${allPets?.length===0?"":"hidden"} flex flex-row w-full mt-4 justify-center`}>
        <div className="font-semibold">NO PETS FOUND</div>
      </div>
      
      <div className="sm:grid xl:grid-cols-6 mt-4 sm:grid-cols-3 hidden pt-1 w-full justify-between">
      {allPets?.map((elem)=>{
              return(
               <PetCard key={elem?._id} id={elem?._id} img={elem?.image} ele={elem} name={elem?.name} breed={elem?.breed} city={elem?.city}/>
              )
      })}
      </div>
      <div className="sm:hidden grid wq:grid-cols-2 mt-2 pt-1 w-full justify-between">
      {allPets?.map((elem)=>{
              return(
               <PetCard key={elem?._id} id={elem?._id} img={elem?.image} name={elem?.name} breed={elem?.breed} city={elem?.city}/>
              )
      })}
      </div>
    </div>
  );
}

export default PetsMid;

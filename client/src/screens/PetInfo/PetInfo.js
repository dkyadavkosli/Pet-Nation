import React , {useState , useEffect} from 'react'
import pic from "../../assets/bg2.jpg"
import HomePetCard from '../../components/HomePetCard'
import { GiFrogFoot } from 'react-icons/gi';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PetInfo() {
    const [allPets , setAllPets] = useState();
    const [allRelated , setAllRelated] = useState([]);

    const getRelated = async() => {
      try {
        const res  = await axios.get("/api/pet/all");
        setAllRelated(res.data);
      } catch (err) {
        window.alert("Oops!! Something went wrong.")
      }
    }

    const nav = useNavigate()
  
    useEffect(() => {
      getRelated();
    }, [])


    const myPet=useSelector((state)=>
    state.changeCurrPet
    );

    useEffect(() => {
      if(myPet === null){
        nav("/home")
      }
    }, [myPet])
    

    const getPets = async() => {
        try {
          const res  = await axios.get("/api/pet/id/"+myPet);
          setAllPets(res.data);
        } catch (err) {
          window.alert("Oops!! Something went wrong.")
        }
      }
    
      useEffect(() => { 
        getPets();
      }, [myPet])

  return (
    <div className=' xl:pl-36 lg:pl-24 sm:pl-12 lg:pr-24 xl:pr-36 sm:pr-12  pl-2 pr-2 sm:pt-6 pt-2 sm:pb-10 pb-5 '>
    <div className='flex lg:flex-row flex-col'> 
     <div className='pt-2'>
     <div className='lg:block sm:hidden w-full'>
        <img src={allPets?.image||pic} className="lg:w-103 w-full border border-gray-600 h-80"/>  
        <div className='text-lg text-slate-600 font-semibold lg:w-103 w-full pt-6 pb-6 flex flex-row justify-center border border-gray-600'>{allPets?.name?.toUpperCase()}</div>   
        <div className='text-lg text-slate-600 font-semibold lg:w-103 w-full pt-6 pb-6 flex flex-row justify-center border border-gray-600'>{allPets?.city?.toUpperCase()}</div>   
     </div>
     <div className='lg:hidden hidden w-full sm:flex flex-row'>
        <img src={allPets?.image} className="w-1/2 border border-gray-600 h-48"/>  
        <div className='w-1/2'>
        <div className='text-lg text-slate-600 font-semibold w-full h-24 pt-8 pb-8 flex flex-row justify-center border border-gray-600'>{allPets?.name?.toUpperCase()}</div>   
        <div className='text-lg text-slate-600 font-semibold w-full h-24 pt-8 pb-8 flex flex-row justify-center border border-gray-600'>{allPets?.city?.toUpperCase()}</div>  
        </div> 
     </div>
     </div> 
     <div className='sm:ml-4 we:ml-2 lg:pl-16 lg:pt-0 pt-5'>
       <div className='lg:text-3xl text-2xl font-semibold'>HELLO! MY NAME IS {allPets?.name?.toUpperCase()}.</div>    
       <div className='mt-2 text-slate-500 text-sm font-semibold'>I AM A {allPets?.breed?.toUpperCase()} LOOKING FOR A NEW HOME. I AM A {allPets?.gender?.toUpperCase()}, {allPets?.color?.toUpperCase()} IN COLOR AND {allPets?.size?.toUpperCase()} IN SIZE. 
       </div>
       <div className='mt-5 lg:text-2xl text-xl font-semibold'>FACTS ABOUT ME</div>
       <div className='w-full we:grid hidden sm:grid-cols-3 grid-cols-2 justify-between'>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 mr-2'>
            <div>FEES : {allPets?.charges}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 ml-2 mr-2'>
            <div>CITY : {allPets?.city?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 sm:ml-2 mr-2'>
            <div>COLOR : {allPets?.color?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 sm:ml-0 ml-2 mr-2'>
            <div>AGE : {allPets?.name?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 sm:ml-2 mr-2'>
            <div>SIZE : {allPets?.size?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 ml-2 mr-2'>
            <div>BREED : {allPets?.breed?.toUpperCase()}</div>
        </div>
       </div>
       <div className='w-full we:hidden grid grid-cols-1 justify-between'>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 mr-2'>
            <div>FEES : {allPets?.charges}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 mr-2'>
            <div>CITY : {allPets?.city?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 mr-2'>
            <div>COLOR : {allPets?.color?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 mr-2'>
            <div>AGE : {allPets?.name?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3  mr-2'>
            <div>SIZE : {allPets?.size?.toUpperCase()}</div>
        </div>
        <div className='bg-slate-200 sm:text-base text-sm sm:font-normal font-semibold flex flex-row justify-center rounded-md mt-3 pt-3 pb-3 mr-2'>
            <div>BREED : {allPets?.breed?.toUpperCase()}</div>
        </div>
       </div>
       <div className='mt-5 lg:text-2xl text-xl font-semibold'>ASK ABOUT {allPets?.name?.toUpperCase()}</div>
       <div className='mt-2 text-slate-500 font-semibold text-sm'>YOU CAN GET THE DESIRED INFORMATION ABOUT {allPets?.name.toUpperCase()} VIA EMAIL OR BY CALLING AT THE CONTACT NUMBER PROVIDED 
        BY {allPets?.name.toUpperCase()}'S CURRENT OWNER.
       </div>
       <div className='flex flex-row mt-4 w-full'>
            <div className="sm:w-1/2 mr-2 w-full">
                <div className='sm:text-lg font-semibold'>OWNER'S NAME</div>
                <div className='text-slate-500 text-sm font-semibold mt-1'>{allPets?.name?.toUpperCase()}</div>
            </div>
            <div className="sm:w-1/2 w-full mt-0 ml-1">
                <div className='sm:text-lg font-semibold'>EMAIL</div>
                <div className='text-slate-500 text-sm font-semibold mt-1'>{allPets?.email}</div>
            </div>
        </div>
        <div className='flex flex-row mt-4 w-full'>
            <div className="sm:w-1/2  mr-2 w-full">
                <div className='sm:text-lg font-semibold'>CONTACT NO</div>
                <div className='text-slate-500 text-sm font-semibold mt-1'>{allPets?.phone}</div>
            </div>
            <div className="sm:w-1/2 w-full mt-0 ml-1">
                <div className='sm:text-lg font-semibold'>ADDRESS</div>
                <div className='text-slate-500 text-sm font-semibold mt-1'>{allPets?.address?.toUpperCase()}</div>
            </div>
        </div>
    </div> 
    </div>
    <div className='mt-10 sm:block hidden'>
        <div className='w-full flex flex-row'>
        <div className='md:text-4xl sm:text-3xl text-center text-2xl text-purple-800'>More Pets Available</div>
        </div>
        <div className='w-full md:grid hidden grid-cols-5 mt-6'>
            <HomePetCard name={allRelated[0]?.name} id={allRelated[0]?._id} img={allRelated[0]?.image}/>
            <HomePetCard name={allRelated[1]?.name} id={allRelated[1]?._id} img={allRelated[1]?.image}/>
            <HomePetCard name={allRelated[2]?.name} id={allRelated[2]?._id} img={allRelated[2]?.image}/>
            <HomePetCard name={allRelated[3]?.name} id={allRelated[3]?._id} img={allRelated[3]?.image}/>
            <div className='w-full ml-2 text-white rounded-lg'>
                <div className='h-56 flex flex-col bg-purple-700 border-b-2 rounded-t-lg border-slate-700 justify-center'>
                    <div className='flex flex-row justify-center'>
                    <GiFrogFoot className='h-16 w-16'/> 
                    </div>
                    <div className='flex flex-row justify-center pt-2 pl-2 pr-2 mt-4'>
                    <div className='text-sm font-semibold'>More pets available</div>
                    </div>
                </div>
                <div className='flex p-2 pt-4 pb-4 text-white sm:text-lg rounded-b-lg font-semibold bg-purple-700 flex-row justify-center'>
                <Link to="/pets" className='cursor-pointer sm:text-lg'>MEET THEM</Link>
                </div>
            </div>           
        </div>
        <div className='w-full md:hidden sm:grid hidden grid-cols-3 mt-6'>
            <HomePetCard name={allRelated[0]?.name} id={allRelated[0]?._id} img={allRelated[0]?.image}/>
            <HomePetCard name={allRelated[1]?.name} id={allRelated[1]?._id} img={allRelated[1]?.image}/>
            <div className='w-full ml-2 text-white rounded-lg'>
                <div className='h-56 flex flex-col bg-purple-700 shadow-b-lg border-b-2 rounded-t-lg border-slate-700 justify-center'>
                    <div className='flex flex-row justify-center'>
                    <GiFrogFoot className='h-16 w-16'/> 
                    </div>
                    <div className='flex flex-row justify-center pt-2 pl-2 pr-2 mt-4'>
                    <div className='text-sm font-semibold'>More pets available</div>
                    </div>
                </div>
                <div className='flex p-2 pt-4 pb-4 text-white sm:text-lg rounded-b-lg font-semibold bg-purple-700 flex-row justify-center'>
                <Link to="/pets" className='cursor-pointer sm:text-lg'>MEET THEM</Link>
                </div>
            </div>           
        </div>
        <div className='w-full sm:hidden grid grid-cols-2 mt-6'>
            <HomePetCard name={allRelated[0]?.name} id={allRelated[0]?._id} img={allRelated[0]?.image}/>
            <div className=' ml-2 text-white rounded-lg'>
                <div className='h-56 flex flex-col bg-purple-700 shadow-b-lg border-b-2 rounded-t-lg border-slate-700 justify-center'>
                    <div className='flex flex-row justify-center'>
                    <GiFrogFoot className='h-16 w-16'/> 
                    </div>
                    <div className='flex flex-row justify-center pt-2 pl-2 pr-2 mt-4'>
                    <div className='text-sm font-semibold'>More pets available</div>
                    </div>
                </div>
                <div className='flex p-2 pt-4 pb-4 text-white sm:text-lg rounded-b-lg font-semibold bg-purple-700 flex-row justify-center'>
                <Link to="/pets" className='cursor-pointer'>MEET THEM</Link>
                </div>
            </div>           
        </div>
    </div>
    </div>
  )
}

export default PetInfo
import React , {useEffect , useState} from 'react'
import HomePetCard from '../../components/HomePetCard'
import { GiFrogFoot } from 'react-icons/gi';
import axios from "axios";
import { Link } from 'react-router-dom';

function Adopt() {

    const [allPets , setAllPets] = useState([]);

  const getPets = async() => {
    try {
      const res  = await axios.get("/api/pet/all");
      setAllPets(res.data);
    } catch (err) {
      window.alert("Oops!! Something went wrong.")
    }
  }

  useEffect(() => {
    getPets();
  }, [])

  return (
    <div className='xl:mt-24 lg:mt-20 md:mt-20 pt-6 pb-8 xl:pl-32 xl:pr-32 lg:pl-24 lg:pr-24 md:pl-10 md:pr-10 sm:pl-8 sm:pr-8 pl-1 pr-1'>
        <div className='w-full flex flex-row justify-center'>
        <div className='md:text-4xl sm:text-3xl text-center text-2xl text-purple-800'>Pets Available for Adoption Nearby</div>
        </div>
        <div className='w-full md:grid hidden grid-cols-5 mt-6'>
            <HomePetCard name={allPets[0]?.name} id={allPets[0]?._id} img={allPets[0]?.image}/>
            <HomePetCard name={allPets[1]?.name} id={allPets[1]?._id} img={allPets[1]?.image}/>
            <HomePetCard name={allPets[2]?.name} id={allPets[2]?._id} img={allPets[2]?.image}/>
            <HomePetCard name={allPets[3]?.name} id={allPets[3]?._id} img={allPets[3]?.image}/>
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
            <HomePetCard name={allPets[0]?.name} id={allPets[0]?._id} img={allPets[0]?.image}/>
            <HomePetCard name={allPets[1]?.name} id={allPets[1]?._id} img={allPets[1]?.image}/>
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
            <HomePetCard name={allPets[0]?.name} id={allPets[0]?._id} img={allPets[0]?.image}/>
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
  )
}

export default Adopt
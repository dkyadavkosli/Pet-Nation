import React , {useEffect, useState} from "react";
import PetCard from "../../components/PetCard"
import axios from "axios";
import { useSelector } from 'react-redux';

function ProfileCom() {

  const myUser=useSelector((state)=>
  state.changeUser
  );

    const [allPets , setAllPets] = useState();

  const getPets = async() => {
    try {
      const res  = await axios.get("/api/pet/owner/"+myUser?._id);
      setAllPets(res.data);
    } catch (err) {
      window.alert("Oops!! Something went wrong.")
    }
  }
  
  useEffect(() => {
    getPets();
  }, [])

  return (
    <div className="2xl:pl-24 xl:pl-20 lg:pl-16 md:pl-6 sm:pl-4 pl-2 2xl:pr-24 xl:pr-20 lg:pr-16 md:pr-6 sm:pr-4 pr-2 w-full wq:pt-6 pt-4 wq:pb-6 pb-4">
      <div className="flex flex-row w-full mb-4 justify-center">
        <div className="md:text-4xl sm:text-3xl text-xl sm:font-normal font-semibold text-purple-900">
          YOUR PETS FOR SALE
        </div>
      </div>

      <div className={`${allPets?.length===0?"":"hidden"} flex flex-row w-full justify-center`}>
        <div className="font-semibold">YOU DON'T HAVE PUT ANY PET FOR SALE</div>
      </div>

      <div className="sm:grid xl:grid-cols-6 mt-4 sm:grid-cols-3 hidden pt-1 w-full justify-between">
      {allPets?.map((elem)=>{
              return(
               <PetCard key={elem?._id} sell={"yes"} id={elem?._id} img={elem?.image} name={elem?.name} breed={elem?.breed} city={elem?.city}/>
              )
      })}
      </div>
      <div className="sm:hidden grid wq:grid-cols-2 mt-2 pt-1 w-full justify-between">
      {allPets?.map((elem)=>{
              return(
               <PetCard key={elem?._id} sell={"yes"} id={elem?._id} img={elem?.image} name={elem?.name} breed={elem?.breed} city={elem?.city}/>
              )
      })}
      </div>
    </div>
  );
}

export default ProfileCom;
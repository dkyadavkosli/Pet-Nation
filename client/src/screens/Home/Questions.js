import React, { useState } from "react";

function Questions() {

  const [one , setOne] = useState("Y")
  const [two , setTwo] = useState("N")
  const [three , setThree] = useState("N")
  const [four , setFour] = useState("N") 

  const changeOne = () => {
    if(one==="Y"){
        setOne("N")
    }else{
        setOne("Y")
    }
  }

  const changeTwo = () => {
    if(two==="Y"){
        setTwo("N")
    }else{
        setTwo("Y")
    }
  }

  const changeThree = () => {
    if(three==="Y"){
        setThree("N")
    }else{
        setThree("Y")
    }
  }

  const changeFour = () => {
    if(four==="Y"){
        setFour("N")
    }else{
        setFour("Y")
    }
  }

  return (
    <div className="pt-8 pb-12 xl:pl-44 xl:pr-44 lg:pl-32 lg:pr-32 md:pl-16 md:pr-16 sm:pl-8 sm:pr-8 pl-2 pr-2 bg-white">
    <div className="flex flex-row w-full justify-center">
      <div className="mb-5 md:text-3xl sm:text-2xl text-xl text-center font-semibold text-slate-700">Frequently Asked Quetions About Pet Adoption</div>  
      </div>
      <div className="mt-3">
        <div className="flex flex-row w-full mb-4 justify-between">
          <div className="sm:text-xl text-lg font-semibold">
            Why should we adopt a pet?
          </div>
          <button onClick={changeOne} className="text-lg text-slate-500 font-bold">{one==="N"?"+":"-"}</button>
        </div>
        <hr className="font-bold" />
        <div className={`mt-3 ${one==="Y"?"":"hidden"}`}>
          Did you know that over 2000 people per hour in India run a search
          looking to adopt a pet? Pets are very useful in eliminating the loneliness
          from our lives and also they can be very useful in protecting our house from 
          unwanted people.
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row w-full mb-4 justify-between">
          <div className="sm:text-xl text-lg font-semibold">
            What is the fee to adopt a pet?
          </div>
          <button onClick={changeTwo} className="text-lg text-slate-500 font-bold">{two==="N"?"+":"-"}</button>
        </div>
        <hr className="font-bold" />
        <div className={`mt-3 ${two==="Y"?"":"hidden"}`}>
          It totally depends on the current owner of the pet. If the owner wants
          to sell his pet at a good amount, then he has the right to do so. But
          there are certain cases where the owner finds an animal on a street
          and just wants to have a good home for it. In this cae, you can adopt
          the pet without any charges.
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row w-full mb-4 justify-between">
          <div className="sm:text-xl text-lg font-semibold">
            How old do I need to be to adopt a pet?
          </div>
          <button onClick={changeThree} className="text-lg text-slate-500 font-bold">{three==="N"?"+":"-"}</button>
        </div>
        <hr className="font-bold" />
        <div className={`mt-3 ${three==="Y"?"":"hidden"}`}>
          Legally, you must be 18 years old or above in order to be the legal
          owner of any pet by completing all the formalities.
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row w-full mb-4 justify-between">
          <div className="sm:text-xl text-lg font-semibold">
            Can you return an adopted pet?
          </div>
          <button onClick={changeFour} className="text-lg text-slate-500 font-bold">{four==="N"?"+":"-"}</button>
        </div>
        <hr className="font-bold" />
        <div className={`mt-3 ${four==="Y"?"":"hidden"}`}>
          It is advised to adopt a pet only if you have enough resources for giving it a good life but 
          we understand it can be hard to get an adjusted pet in the new home
          and vice versa, as long as your reason for returning is reasonable,
          you'll be welcome to put it up for adoption again.
        </div>
      </div>
    </div>
  );
}

export default Questions;

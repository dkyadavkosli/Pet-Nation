import React from 'react'
import {FiSearch} from "react-icons/fi"
import {MdMessage} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"

function Work() {
  return (
    <div className='md:pt-10 sm:pt-6 md:pb-10 sm:pb-6 pt-5 pb-5 xl:pl-28 xl:pr-28 lg:pl-16 lg:pr-16 md:pl-12 md:pr-12 sm:pl-6 sm:pr-6 pl-2 pr-2'>
        <div className="flex flex-row w-full justify-center">
        <div className="sm:text-3xl text-2xl font-semibold">
           How It Works?
        </div>
      </div>
      <div className='flex wr:flex-row flex-col wr:mt-6'>
        <div className='wr:w-1/3 w-full mt-5 pl-4 pr-4'>
            <div className='flex flex-row justify-center'>
            <FiSearch className="h-16 w-16"/>
            </div>
            <div className='flex flex-row mt-1 justify-center'>
            <div className='font-bold text-lg'>Search</div>
            </div>
            <div className='flex flex-row font-semibold text-sm justify-center'>
            <div>Simply enter your city and start your search</div>
            </div>
        </div>
        <div className='wr:w-1/3 w-full mt-5 pl-4 pr-4'>
            <div className='flex flex-row justify-center'>
            <MdMessage className="h-16 w-16"/>
            </div>
            <div className='flex flex-row mt-1 justify-center'>
            <div className='font-bold text-lg'>Meet</div>
            </div>
            <div className='flex flex-row font-semibold text-sm justify-center'>
            <div>Schedule appointment to meet the pet you love</div>
            </div>
        </div>
        <div className='wr:w-1/3 w-full mt-5 pl-4 pr-4'>
            <div className='flex flex-row justify-center'>
            <AiOutlineShoppingCart className="h-16 w-16"/>
            </div>
            <div className='flex flex-row mt-1 justify-center'>
            <div className='font-bold text-lg'>Adopt</div>
            </div>
            <div className='flex flex-row font-semibold text-sm justify-center'>
            <div>Complete all formalities and adopt the pet</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
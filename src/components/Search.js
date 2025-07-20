import React from 'react'

import PriceDropDown from './PriceDropDown'
import PropertyDropDown from './PropertyDropDown';

import {RiSearch2Line} from "react-icons/ri"
import CityDropDown from './CityDropDown';

const Search = () => {
  return (
    <div className='text-gray-100 px-[30px] py-6 max-w-[1170px] mx-auto
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 backdrop-blur-[2px] lg:bg-transparent lg:backdrop-blur rounded'>
        <CityDropDown />
        <PropertyDropDown />
        <PriceDropDown />
        <button   className='bg-red-500 hover:bg-red-600 transition w-full lg:max-w-[162px] h-16 rounded-lg justify-center flex items-center text-lg'> 
        <RiSearch2Line />
       </button>
  
        
    </div>
  )
}

export default Search
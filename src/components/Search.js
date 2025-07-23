import React, { useContext } from 'react'

import PriceDropDown from './PriceDropDown'
import PropertyDropDown from './PropertyDropDown';

import {RiSearch2Line} from "react-icons/ri"
import CityDropDown from './CityDropDown';
import { HouseContext } from './HouseContext';

const Search = () => {

  const {handleClick} = useContext (HouseContext)

  return (
    <div className='text-gray-100 px-[30px] py-6 max-w-[1170px] mx-auto
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 backdrop-blur-[2px] lg:bg-transparent lg:backdrop-blur rounded'>
        <CityDropDown />
        <PropertyDropDown />
        <PriceDropDown />
        <button  onClick={()=>handleClick()} className='bg-red-500 hover:bg-red-600 transition w-full lg:max-w-[162px] h-16 rounded-lg justify-center flex items-center text-lg'> 
        <RiSearch2Line />
       </button>
  
        
    </div>
  )
}

export default Search
import React from 'react'

import PriceDropDown from './PriceDropdown'
import PropertyDropDown from './PropertyDropDown';
import CityDropDown from './CityDropDown';


const Search = () => {
  return (
    <div className='text-gray-100 px-[30px] py-6 max-w-[1170px] mx-auto
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 backdrop-blur-[2px] lg:bg-transparent lg:backdrop-blur'>
        <CityDropDown />
        <PropertyDropDown />
        <PriceDropDown />

        
    </div>
  )
}

export default Search
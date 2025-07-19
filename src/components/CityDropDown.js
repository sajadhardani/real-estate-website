import React, { useContext, useState } from "react";
import { Menu } from "@headlessui/react";
import {HiMiniMapPin} from "react-icons/hi2"
import { HouseContext } from "./HouseContext";
import {MdKeyboardArrowUp} from "react-icons/md"
import {MdKeyboardArrowDown} from "react-icons/md"
const CityDropDown = () => {
  const {city,setCity,Cities}= useContext(HouseContext)
  const [isopen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown-btn w-full text-left"
      onClick={()=>setIsOpen(!isopen)}>
        <HiMiniMapPin className="dropdown-icon-primary" />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{city}</div>
          <div className="text-[13px]">انتخاب مقصد</div>
        </div>
        {
          isopen?(
            <MdKeyboardArrowUp className='dropdown-icon-secondary'/>
          ):(
            <MdKeyboardArrowDown className='dropdown-icon-secondary'/>
          )
        }
      </Menu.Button>
    </Menu>
  );
};
export default CityDropDown;

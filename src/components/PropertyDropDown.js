// import React, { useContext, useState } from "react";
// import { Menu } from "@headlessui/react";
// import { HiMiniMapPin } from "react-icons/hi2";
// import { HouseContext } from "./HouseContext";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const PropertyDropDown = () => {
//   const { property, setProperty, properties } = useContext(HouseContext);
//   const [isopen, setIsOpen] = useState(false);
//   return (
//     <Menu as="div" className="dropdown relative">
//       <Menu.Button
//         className="dropdown-btn w-full text-left"
//         onClick={() => setIsOpen(!isopen)}
//       >
//         <HiMiniMapPin className="dropdown-icon-primary" />
//         <div>
//           <div className="text-[15px] font-medium leading-tight">
//             {property}
//           </div>
//           <div className="text-[13px]"> نوع ملک را انتخاب کنید</div>
//         </div>
//         {isopen ? (
//           <MdKeyboardArrowUp className="dropdown-icon-secondary" />
//         ) : (
//           <MdKeyboardArrowDown className="dropdown-icon-secondary" />
//         )}
//       </Menu.Button>
//       <Menu.Items className="dropdown-menu">
//         {properties.map((property, index) => {
//           return (
//             <Menu.Item
//               className="cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition"
//               key={index}
//               as="li"
//               onClick={() => setProperty(property)}
//             >
//               {property}
//             </Menu.Item>
//           );
//         })}
//       </Menu.Items>
//     </Menu>
//   );
// };
// export default PropertyDropDown;
import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[13px]'>نوع ملک خود را انتخاب کنید  </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setProperty(property)}
              key={index}
              className='cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition'
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
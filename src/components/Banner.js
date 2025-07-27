import React from "react";
import Bgimage from "../assets/img/banner2.jpg";
import Search from "./Search";
const Banner = () => {
  return (
    <div
      className="h-[90vh] bg-center bg-cover bg-n-repeat "
      style={{ backgroundImage: `url(${Bgimage})` }} 
    >
      <div
        className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start
      text-center lg:text-left justify-center flex-1 px-4 lg:px-0"
      >
        <h1 className="w-[140vh] text-3xl lg:text-[58px] font-semibold leading-none my-8 text-gray-100 ">
          <span className="text-red-500"> ویلای </span>
          مناسبت همینجاست!
        </h1>
        <p className="max-w-[480px] my-8 mx-4 text-right text-white text-2xl">
          <span className="text-sm">
            {" "}
            اجاره ویلا، سویت در شمال و سراسر کشور
          </span>
          <br />
          سفر پاییزی از تو ، جاباما
        </p>
        <div className="hidden flex-1 lg:flex justify-end items-end"></div>
      </div>
      <Search />
    </div>
  );
};
export default Banner;

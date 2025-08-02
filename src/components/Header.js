import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png"
export default function Header() {
  return (
    <header className="py-6 mb-5  border-b border-gray-300 shadow-sm bg-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="لوگو" className="w-20 h-20 object-contain " />
          <span className="text-2xl font-bold text-gray-800 select-none">جابامن</span>
        </Link>

        <nav className="flex justify-start md:justify-center  ">
          <Link
            to="/login"
            className="px-5 py-3 rounded-lg border border-transparent text-gray-700 hover:text-white hover:bg-red-600 transition duration-300 font-medium whitespace-nowrap  "
          >
            ورود به حساب
          </Link>

          <Link
            to="/signup"
            className="px-5 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 shadow-md transition duration-300 whitespace-nowrap ml-2"
          >
            ثبت نام
          </Link>
        </nav>
      </div>
    </header>
  );
}

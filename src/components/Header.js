import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-8 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="" className="w-10" />
        </Link>
        <div className="flex items-center gap-6">
          <Link className="hover:bg-red-600 transition px-4 py-3 rounded-lg" to="/">ورود به حساب</Link>
          <Link className="hover:bg-red-500 bg-red-600 text-white px-4 py-3 rounded-lg">ثبت نام</Link>
          
        </div>
      </div>
    </header>
  );
}

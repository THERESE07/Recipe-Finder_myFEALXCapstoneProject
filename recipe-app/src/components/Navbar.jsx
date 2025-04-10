import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 px-6 py-4 shadow-md flex justify-between items-center relative">
      <div className="text-2xl font-bold text-blue-500">
        Zarette<span>Recipes</span>
      </div>
      <button
        className="block md:hidden text-blue-500 text-2xl z-20"
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
      </button>
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col items-center absolute top-full left-0 w-full bg-gray-100 md:static md:flex md:flex-row md:space-x-6 md:w-auto`}
      >
        <a href="#" className="block py-2 px-4 hover:text-blue-500">
          Home
        </a>
        <a href="#" className="block py-2 px-4 hover:text-blue-500">
          Recipes
        </a>
        <a href="#" className="block py-2 px-4 hover:text-blue-500">
          My Recipes
        </a>
        
        <Button
          title="Sign in"
          containerStyle="py-2 px-4 bg-transparent border border-black text-black hover:bg-black hover:text-slate-700 rounded-full min-w-[130px]"
        />
      </div>
    </nav>
  );
}

export default Navbar;


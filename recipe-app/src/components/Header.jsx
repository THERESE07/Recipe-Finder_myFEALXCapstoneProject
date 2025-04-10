import React from "react";
import Banner1 from "../images/Banner1.jpg";
import Banner2 from "../images/Banner2.jpg";
import Banner3 from "../images/Banner3.jpg";
import Banner4 from "../images/Banner4.jpg";
import Banner5 from "../images/Banner5.jpg";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

function Header({ title, image, type }) {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Hello Image"
          className="w-full h-full "
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full'>
            Welcome to ZaretteRecipe, Adventure to Good Health!
            <br className="hidden md:block" /> This is a way of enjoying a
            wonderful menu of WorldWide
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;

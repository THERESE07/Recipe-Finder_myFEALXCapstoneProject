import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="text-black py-20 bg_gradient ">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center">
            Zarette<span className="text-black-500 text-xl">Recipes</span>
          </p>
        </div>

       
            <div className="flex flex-col">
              <p>SOCIAL MEDIA</p>
              <div className="flex mt-4 gap-3">
                <a
                  href="#"
                  className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
                >
                  <FaFacebook size={18} />
                </a>

                <a
                  href="#"
                  className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
              <Button
                title="Sign up"
                btnType="button"
                conteinerStyle="mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center py-10">
            <span className="text-gray-400 leading-10">
              Therese Niyigena ALX Cohort4 &copy; 2025
            </span>
          </div>
       
    </footer>
  );
};

export default Footer;

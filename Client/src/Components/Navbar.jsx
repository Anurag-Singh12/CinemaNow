import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      
      <NavLink to="/" className="max-md:flex-1">
        {/* Can use link tag also */}
        <img src={assets.logo} alt="" className="w-36 h-auto" />
      </NavLink>

      <div className="max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center     gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300">
        <XIcon className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" /> {/*for mobile screen &(icon using package lucide)*/ }

        <NavLink to="/" className="navhover">Home</NavLink>
        <NavLink to="/movies" className="navhover">Movies</NavLink>
        <NavLink to="/" className="navhover">Theaters</NavLink>
        <NavLink to="/" className="navhover">Releases</NavLink>
        <NavLink to="/favorite" className="navhover">Favorites</NavLink>
      </div>

      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
          Login
        </button>
      </div>

      <MenuIcon className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer" />
    </div>
  );
};

export default Navbar;

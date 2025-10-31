import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {

  const[isOpen,setIsOpen]= useState('false')

  const {user} = useUser()         //from clerk
  const{openSignIn} = useClerk()    

  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      
      <NavLink to="/" className="max-md:flex-1">
        {/* Can use link tag also */}
        <img src={assets.logo} alt="" className="w-36 h-auto" />
      </NavLink>

      {/* Variable using template litreals and backtick */}
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center     gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${!isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}> 

        <XIcon className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" 
        onClick={()=> setIsOpen(!isOpen)}/> {/*here !isopen is a toggle event for mobile screen &(icon using package lucide)*/ }

        <NavLink onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to="/" className="navhover">Home</NavLink>
        <NavLink onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to="/movies" className="navhover">Movies</NavLink>
        <NavLink onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to="/" className="navhover">Theaters</NavLink>
        <NavLink onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to="/" className="navhover">Releases</NavLink>
        <NavLink onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to="/favorite" className="navhover">Favorites</NavLink>
      </div>

      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        {
           //!user means user is not logged in
          !user ? (<button 
          onClick={openSignIn} 
          className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
          Login
          </button>) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action 
                label="My Bookings" 
                labelIcon={<TicketPlus width={15}/>}
                onClick={()=> navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
              )
        }
        
      </div>

      <MenuIcon className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
      onClick={()=> setIsOpen(!isOpen)} />
    </div>
  );
};

export default Navbar;

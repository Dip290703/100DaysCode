import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'><img src={assets.logo} alt="logo" className="w-36" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex gap-1 flex-col items-center">
          {({ isActive }) => (
            <>
              <p>HOME</p>
              <hr
                className={`w-2/4 h-[1.5px] border-none bg-gray-700 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/collection" className="flex gap-1 flex-col items-center">
          {({ isActive }) => (
            <>
              <p>COLLECTION</p>
              <hr
                className={`w-2/4 h-[1.5px] border-none bg-gray-700 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex gap-1 flex-col items-center">
          {({ isActive }) => (
            <>
              <p>ABOUT</p>
              <hr
                className={`w-2/4 h-[1.5px] border-none bg-gray-700 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex gap-1 flex-col items-center">
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              <hr
                className={`w-2/4 h-[1.5px] border-none bg-gray-700 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 ">
        <img
          src={assets.search_icon}
          alt="searchicon"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-6 min-w-6" />
          <div className="absolute bottom-[-5px] right-[-5px] bg-slate-500 text-white text-xs rounded-lg w-5 h-5 flex items-center justify-center">
            10
          </div>
        </Link>
        <img
          onClick={()=>setIsOpen(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
        />
        {
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isOpen ? 'w-full' :'w-0'}`}>
             <div className="flex flex-col text-gray-600">
                <div className="flex items-center gap-5 p-3"
                onClick={()=>setIsOpen(false)}>
                    <img src={assets.dropdown_icon} alt="close" className="h-4 rotate-180" />
                    <p>Back</p>
                </div>
                <NavLink to='/' className="py-2 pl-6 border" onClick={()=>setIsOpen(false)}>HOME</NavLink>
                 <NavLink to='/collection' className="py-2 pl-6 border" onClick={()=>setIsOpen(false)}>COLLECTION</NavLink>
                  <NavLink to='/about' className="py-2 pl-6 border" onClick={()=>setIsOpen(false)}>ABOUT</NavLink>
                   <NavLink to='/contact' className="py-2 pl-6 border" onClick={()=>setIsOpen(false)}>CONTACT</NavLink>
             </div>
            </div>
        }
      </div>
    </div>
  );
};

export default NavBar;

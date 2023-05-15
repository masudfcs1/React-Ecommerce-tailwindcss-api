import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from '../img/logo.svg'

const Header = () => {
  
  const { isOpen, setIsopen } = useContext(SidebarContext);
  // const { handle, sethandle } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const[isActive, setIsActive]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(true): setIsActive(false)
    })
  })

  return (
    <header className= {`${isActive ? 'bg-white py-4 shadow-md ': 'bg-none py-3' } fixed w-full z-10 transition-all `}>
    <div className=" container  flex mx-auto items-center justify-between h-full ">
      <Link to={"/"}>
        {" "}
        <div>
          <img className="w-[40px]" src={Logo} alt="" />
          </div>{" "}
      </Link>{" "}
      <div
        onClick={() => setIsopen(!isOpen)}
        className=" hover:text-sky-700 text-2xl cursor-pointer flex relative "
      >
        <BsBag className=" text-2xl " />
        <div className=" bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
          {itemAmount}
        </div>
      </div>{" "}
      {/* <div onClick={() => setIsopen(handle)} className=" py-6 " > Close </div>{" "} */}
    </div>
    </header>
  );
};

export default Header;

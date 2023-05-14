import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import  { BsBag } from "react-icons/bs";


const Header = () => {
  const{isOpen, setIsopen} = useContext(SidebarContext)
  const{handle, sethandle} = useContext(SidebarContext)
return (
  <div>
   <div>Header</div>
   <div onClick={ ()=> setIsopen(!isOpen) } className=" hover:text-sky-700 text-2xl  cursor-pointer flex relative " ><BsBag/></div>
   
   <div onClick={ ()=> setIsopen(handle) } >Close</div>
  </div>
)
};

export default Header;

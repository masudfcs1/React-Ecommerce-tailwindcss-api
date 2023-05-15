import React from "react";
import WomanImg from '../img/woman_hero.png'
const Hero = () => {
  return <section className=" bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 " > 
  <div className=" container mx-auto flex justify-around h-full ">
    <div className="flex flex-col">
        <div>New Trend</div>
        <h1 className=" text-[70px] leading-[1.1] font-light mb-4 ">AUTUM SALE STYLISH</h1>
    </div>
    <div>
        <img src={WomanImg} alt="" />
    </div>
  </div>
   </section>;
};

export default Hero;

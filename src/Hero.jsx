import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import hero_img from "./assets/hero_img.jpg";
function Hero() {
    return (
    <div className="w-full relative">
    <img src={hero_img} alt="pilates studio hero banner" className="w-full h-[30vh] object-cover object-center md:h-[60vh]"/>
    <div className="flex flex-col justify-center items-center text-center 
        md:text-white md:px-8 md:gap-4 md:text-3xl md:w-full md:h-full
        md:absolute md:top-10 md:left-1/2 md:transform md:-translate-x-1/2">
        <h1 className="font-serif italic text-4xl md:text-5xl m-2 p-2">Welcome to MyPilates</h1>
        <h2 className="mb-2 text-xl md:text-2xl">Mat and reformer pilates of all levels</h2>
        <button className="mt-2 text-2xl md:text-3xl md:absolute md:bottom-20 border-2 bg-purple-500 px-8 py-[0.375rem] rounded-full hover:bg-purple-800">Book Now</button>
    </div>
    </div>
    );
}

export default Hero;

     
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";

function Prices() {
    
    return (
        <>
        <div id="prices" className="w-full flex flex-col 
            items-center justify-center p-4 bg-gray-300">
            <div className="flex flex-col items-center justify-center gap-4">
                <FontAwesomeIcon icon="fa-regular fa-heart "className="text-pink-500" />
                <p className="uppercase font-extralight">our packages</p>
                <p className="text-2xl font-light">Choose the course that fits your needs the best</p>
                <p className="font-light ">We have programs for all ages and levels!</p>
            </div>

            <div className="mt-[5vh] flex flex-col md:flex-row gap-4 justify-center items-stretch text-center">
                
            <div className="w-full md:flex-1 group flex flex-col items-center justify-between gap-4 
                p-4 bg-white rounded-lg shadow-lg 
                min-h-[50vh] md:min-h-[20vh] lg:min-h-[50vh]
                hover:scale-105 transition duration-300 hover:border-2 hover:border-pink-500">
  
                    <div className="relative w-full">
                        <FontAwesomeIcon 
                        icon="fa-regular fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 group-hover:opacity-0 
                        transition-opacity duration-300"
                        />
                        <FontAwesomeIcon 
                        icon="fa-solid fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h2 className="text-2xl font-light">8 Reformer + 1</h2>
                    <p className="w-full text-2xl font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">€ 100</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">1 month package</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">1 additional class of your choice </p>
                    <button className="border-2 border-black rounded-lg py-2 px-4
                    hover:bg-pink-500 hover:text-white transition duration-300">
                        Start now!</button>
                </div>

               <div className="w-full md:flex-1 group flex flex-col items-center justify-between gap-4 
                p-4 bg-white rounded-lg shadow-lg 
                min-h-[50vh] md:min-h-[20vh] lg:min-h-[50vh]
                hover:scale-105 transition duration-300 hover:border-2 hover:border-pink-500">
  
                    <div className="relative w-full">
                        <FontAwesomeIcon 
                        icon="fa-regular fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 group-hover:opacity-0 
                        transition-opacity duration-300"
                        />
                        <FontAwesomeIcon 
                        icon="fa-solid fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h2 className="text-2xl font-light">8 Mat + 1</h2>
                    <p className="w-full text-2xl font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">€ 70</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">1 month package</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">1 additional class of your choice </p>
                    <button className="border-2 border-black rounded-lg py-2 px-4
                    hover:bg-pink-500 hover:text-white transition duration-300">
                        Start now!</button>
                </div>

                <div className="w-full md:flex-1 group flex flex-col items-center justify-between gap-4 
                p-4 bg-white rounded-lg shadow-lg 
                min-h-[50vh] md:min-h-[20vh] lg:min-h-[50vh]
                hover:scale-105 transition duration-300 hover:border-2 hover:border-pink-500">
  
                    <div className="relative w-full">
                        <FontAwesomeIcon 
                        icon="fa-regular fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 group-hover:opacity-0 
                        transition-opacity duration-300"
                        />
                        <FontAwesomeIcon 
                        icon="fa-solid fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h2 className="text-2xl font-light">4 Reformer 4 Mat + 1</h2>
                    <p className="w-full text-2xl font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">€ 80</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">1 month package</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">1 additional class of your choice </p>
                    <button className="border-2 border-black rounded-lg py-2 px-4
                    hover:bg-pink-500 hover:text-white transition duration-300">
                        Start now!</button>
                </div>

                <div className="w-full md:flex-1 group flex flex-col items-center justify-between gap-4 
                p-4 bg-white rounded-lg shadow-lg 
                min-h-[50vh] md:min-h-[20vh] lg:min-h-[50vh]
                hover:scale-105 transition duration-300 hover:border-2 hover:border-pink-500">
  
                    <div className="relative w-full">
                        <FontAwesomeIcon 
                        icon="fa-regular fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 group-hover:opacity-0 
                        transition-opacity duration-300"
                        />
                        <FontAwesomeIcon 
                        icon="fa-solid fa-heart" 
                        className="text-pink-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h2 className="text-2xl font-light">4 Mat</h2>
                    <p className="w-full text-2xl font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">€ 50</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">2 weeks package</p>
                    <p className="w-full text-lg font-light after:block after:w-full after:h-0.5 after:bg-pink-500 after:mt-2 after:mx-auto after:content-['']">First class free</p>
                    <button className="border-2 border-black rounded-lg py-2 px-4
                    hover:bg-pink-500 hover:text-white transition duration-300">
                        Start now!</button>
                </div>
            </div>
        </div>
        </>
       
    );
}

export default Prices;

     
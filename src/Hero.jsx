import React from "react";
import hero_img from "./assets/hero_img.jpg";
function Hero() {

    return (
        <div className="w-full relative">
        <img
          src={hero_img}
          alt="pilates studio hero banner"
          className="w-full h-[30vh] object-cover object-center md:h-[60vh]"
        />
        <div className="bg-primary-background md:bg-transparent flex flex-col justify-center items-center text-center 
          text-text md:text-secondary md:px-8 md:gap-6 md:text-3xl md:w-full md:h-full
          md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[600px]">
          <h1 className="font-serif italic text-4xl md:text-5xl m-2 p-2">
            Welcome to MyPilates
          </h1>
          <h2 className="mb-2 text-xl md:text-2xl">
            Mat and reformer pilates of all levels
          </h2>
          <button onClick={() => document.getElementById("prices").scrollIntoView( { behavior: "smooth"})}
          className="mt-4 text-2xl md:text-3xl border-2 bg-primary px-8 py-2 rounded-full hover:bg-accent">
            Book Now
          </button>
        </div>
      </div>
      
    );
}

export default Hero;

     
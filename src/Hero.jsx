import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    // const [menuOpen, setMenuOpen] = useState(false);
    return (
       // <header className="bg-white shadow-md w-full bg-[url('./assets/header.jpg')] bg-cover bg-center">
       <header className="bg-white shadow-md w-full h-[70vh] bg-[url('./assets/header.jpg')] bg-cover bg-center">
       <div className="w-full flex flex-col md:flex-row  justify-between items-center mx-auto p-4 ">
          <div className="relative flex justify-center items-center w-full md:w-auto">
          <div className="flex items-center space-x-4">
          {/* <img src="https://picsum.photos/100" alt="placeholder" /> */}
          </div>
          
          </div>             
                     
       </div>
  </header>
    );
}

export default Hero;

     
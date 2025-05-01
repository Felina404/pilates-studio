import { useState } from "react";
import headerIcon from "./assets/header-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
        <header className="w-full flex justify-center items-center p-2 md:justify-around">
            <div className="flex justify-center items-center md:justify-start w-full md:w-auto p-2">
                <img src={headerIcon}
                alt="header icon" 
                className="w-12 h-12 mr-2" />
                <h1 className="font-sans font-semibold text-3xl italic select-none"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >MyPilates</h1>
            </div>
            <div className="md:hidden self-start ">
                <button className="mr-4 md:hidden text-gray-700 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={ menuOpen ? faXmark : faBars} className="text-2xl" />
                </button>
            </div>
            <div>
                <nav className="hidden md:flex space-x-4 p-2 text-normal font-semibold">
                    {/* <a href="#home" className="text-gray-700 hover:text-purple-600 transition-all duration-300 ease-in-out uppercase">Home</a> */}
                    <a href="#about" className="text-gray-700 hover:text-purple-600 transition-all duration-300 ease-in-out uppercase">About Us</a>
                    <a href="#classes" className="text-gray-700 hover:text-purple-600 transition-all duration-300 ease-in-out uppercase">types of classes</a>
                    <a href="#prices" className="text-gray-700 hover:text-purple-600 transition-all duration-300 ease-in-out uppercase">prices</a>
                    <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-all duration-300 ease-in-out uppercase">contact</a>
                </nav>
            </div>   
        </header>   
                <div className="relative md:hidden">
                <nav className={`transition-all duration-500 ease-in-out overflow-hidden 
                flex flex-col w-full justify-center items-center
                absolute top-full left-0 z-50
                    ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    [&>*]:border-b-2
                    [&>*:last-child]:border-b-0
                    [&>*]:border-pink-500 
                    [&>*]:bg-purple-600 
                    [&>*]:w-full
                    [&>*]:text-center
                    [&>*]:text-white
                    [&>*]:p-2
                    [&>*]: transition-all [&>*]:duration-300 [&>*] : ease-in-out`
                }
                    >
                    {/* <a href="#home" className="text-gray-700 hover:text-purple-600 transition-all duration-300 ease-in-out uppercase">Home</a> */}
                    <a href="#about" className="text-gray-700 hover:text-red-600 uppercase">About Us</a>
                    <a href="#classes" className="text-gray-700 hover:text-red-600 uppercase">types of classes</a>
                    <a href="#prices" className="text-gray-700 hover:text-red-600 uppercase">prices</a>
                    <a href="#contact" className="text-gray-700 hover:text-red-600 uppercase">contact</a>
                </nav>
            </div>      
       
        </>
    );
}

export default Header;
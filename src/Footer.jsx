import { useState } from "react";
function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-sm p-6 mt-auto w-full flex flex-col justify-center items-center gap-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Felina. All rights reserved.</p>
                <div className="flex gap-4">
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Service</a>
                <a href="#contact" className="hover:underline">Contact</a>
                </div>
                
            </div>
            <div className="text-xs text-gray-600">Icon made by <a href="https://www.flaticon.com/authors/prashanth-rapolu-15" title="Prashanth Rapolu 15">Prashanth Rapolu 15</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    );
}

export default Footer;

     
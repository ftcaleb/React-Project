import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import caleb from '../assets/caleb.png';

export default function Header() {
  return (
   <nav className='fixed p-2 w-full flex justify-around items-center align-center   backdrop-blur-md text-black shadow-sm bg-white'>
        <img src={caleb} alt="logo" className="w-15 h-auto"  />
        <div>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      </div>

    <button
         type="submit"
         className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
       >
        
         Contact Me
       </button>
   </nav>
  );
}



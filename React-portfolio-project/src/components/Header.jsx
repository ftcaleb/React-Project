import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import caleb from '../assets/caleb.png';

export default function Header() {
  return (
   <nav className='fixed p-2 w-full flex justify-around items-center align-center backdrop-blur-md text-black shadow-sm bg-white'>
        <a href="#hero"><img src={caleb} alt="logo" className="w-15 h-auto"  /></a>
        <div>
      <div className="flex gap-6 no-underline">
        <a className="no-underline" href="#hero"><button className=" text-black rounded p-2 hover:text-red-600 transition">Home</button></a>
        <a href="#about"><button className=" text-black rounded p-2 hover:text-red-600 transition">About</button></a>
        <a href="#skills"><button className=" text-black rounded p-2 hover:text-red-600 transition">Skills</button></a>
        <a href="#portfolios"><button className=" text-black rounded p-2 hover:text-red-600 transition">Projects</button></a>
        <a href="#contact"><button className=" text-black rounded p-2 hover:text-red-600 transition">Contact</button></a>
      </div>
      </div>

    <a href="#contact"><button
         type="submit"
         className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
       >
        
         Contact Me
       </button></a>
   </nav>
  );
}



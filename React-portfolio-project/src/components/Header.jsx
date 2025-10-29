import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import caleb from '../assets/caleb.png';

export default function Header() {
  return (
   <nav className='fixed p-2 w-full flex justify-around items-center align-center backdrop-blur-md text-black shadow-sm bg-white'>
        <a href="#hero"><img src={caleb} alt="logo" className="w-15 h-auto"  /></a>
        <div>
      <div className="flex gap-6 no-underline">
        <a className="no-underline" href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
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



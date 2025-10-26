import React from "react";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-around items-center px-8 py-4 bg-white/20 backdrop-blur-md text-black shadow-sm">
     
      <h1 className="text-6xl font-bold">Portfolio</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#home" className="hover:text-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-700">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-700">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-700">
            Contact
          </a>
        </li>
      </ul>
      <button
        type="submit"
        className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
      >
        
        Contact Me
      </button>
    </nav>
  );
}

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';



export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    

    <footer className="bg-deep-pink text-black text-center py-6">
        <p>© 2025 Boikanyo Mokoka. All rights reserved.</p>
        <div className="flex justify-center gap-5 mt-6">
                <a
                  href="https://github.com/ftcaleb/React-Project.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black bg-red-600 text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-black hover:text-accent-pink hover:shadow-[0_010px#ffb6c1]"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/caleb-mokoka-1911172a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black bg-red-600 text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-pink hover:text-accent-pink hover:shadow-[0_010px#ffb6c1]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/alwaysbeencaleb/"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="text-black bg-red-600 text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-pink hover:text-accent-pink hover:shadow-[0_010px#ffb6c1]"
                >
                  <FaInstagram />
                </a>
              </div>

      </footer>
      </div>
  )
}
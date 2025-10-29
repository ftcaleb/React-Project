import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";



export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  )
}
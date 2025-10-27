import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
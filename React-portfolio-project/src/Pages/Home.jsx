import React from 'react'
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Footer from '../Components/Footer';
import Portfolio from '../Components/Portfolio';

function Home() {
  return (
    <div>
    <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />

      <Footer />
    </div>
  )
}

export default Home
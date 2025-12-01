import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

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
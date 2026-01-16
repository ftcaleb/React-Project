import React from 'react'
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Footer from '../Components/Footer';
import Portfolio from '../Components/Portfolio';
import Contacts from '../Components/ContactForm';

function Home() {
  return (
    <div>
    <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contacts/>

      <Footer />
    </div>
  )
}

export default Home
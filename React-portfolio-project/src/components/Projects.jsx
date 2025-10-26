import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import tech from '../assets/tech.jpg';
import nike from '../assets/nike.jpg';
import clock from '../assets/clock.webp';


function Projects() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
     
      <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={tech}
          alt="Card 1"
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Startup Business Page</h2>
          <p className="text-gray-600 mb-4">
            This is a short description for the first card.
          </p>
          
          <button
        type="submit"
        className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
      >
        <a href="https://docs.google.com/document/d/1PNZsh68RfWuxae3dwyscG1cpIeWK7g4P/edit?usp=sharing&ouid=109721690072358248581&rtpof=true&sd=true">Download Resume</a>
      </button>
      <a href='https://ftcaleb.github.io/Diamond-tech-website/' target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                <FaExternalLinkAlt size={24} />
        </a>
    <a href='https://github.com/ftcaleb/Diamond-tech-website.git' target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                <FaGithub size={24} />
              </a>
        </div>
      </div>

      
      <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={clock}
          alt="Card 2"
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Digital Clock Project</h2>
          <p className="text-gray-600 mb-4">
            This is a short description for the second card.
          </p>

          <button
        type="submit"
        className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
      >
        <a href="https://docs.google.com/document/d/1PNZsh68RfWuxae3dwyscG1cpIeWK7g4P/edit?usp=sharing&ouid=109721690072358248581&rtpof=true&sd=true">Download Resume</a>
      </button>
      <a href='https://ftcaleb.github.io/Digital-Clock/' target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                <FaExternalLinkAlt size={24} />
        </a>
    <a href='https://github.com/ftcaleb/Digital-Clock.git' target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                <FaGithub size={24} />
              </a>
        </div>
      </div>

      
      <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={nike}
          alt="Card 3"
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Nike Website Revamp</h2>
          <p className="text-gray-600 mb-4">
            This is a short description for the third card.
          </p>
          <button
        type="submit"
        className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
      >
        <a href="https://docs.google.com/document/d/1PNZsh68RfWuxae3dwyscG1cpIeWK7g4P/edit?usp=sharing&ouid=109721690072358248581&rtpof=true&sd=true">Download Resume</a>
      </button>
      <a href='https://ftcaleb.github.io/Nike-Website-Revamp/' target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                <FaExternalLinkAlt size={24} />
        </a>
    <a href='https://github.com/ftcaleb/Nike-Website-Revamp.git' target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                <FaGithub size={24} />
              </a>
        </div>
      </div>
    </div>

  )
}

export default Projects
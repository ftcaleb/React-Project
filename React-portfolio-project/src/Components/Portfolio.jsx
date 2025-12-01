import React from 'react'
import nike from '../assets/nikee.png';
import clock1 from '../assets/clock1.png';
import quiz from '../assets/quiz.png';
import hustleai from '../assets/hustleai.png';
import melsoft from '../assets/melsoftt.png';
import portfolio from '../assets/portfolio.png';

import { FaGithub, FaExternalLinkAlt, FaCloudDownloadAlt } from 'react-icons/fa';




const projects = [
  {
    title: "Portfolio Project",
    description: "Built a website for a tech startup company.",
    image: portfolio,
    liveLink: "https://react-project-finale.vercel.app/",
    repoLink: "https://github.com/ftcaleb/React-Project.git",
  },
  {
    title: "Digital Clock Application",
    description: "Built a Digital Clock using HTML, CSS, and JavaScript.",
    image: clock1,
    liveLink: "https://ftcaleb.github.io/Digital-Clock/",
    repoLink: "https://github.com/ftcaleb/Digital-Clock.git",
  },
  {
    title: "Nike Website Revamp",
    description: "Redesigned and revamped the Nike website for a modern look.",
    image: nike,
    liveLink: "https://ftcaleb.github.io/Nike-Website-Revamp/",
    repoLink: "https://github.com/ftcaleb/Nike-Website-Revamp.git",
  },
  {
    title: "Quiz Web Application ",
    description: "Built a Fun Quiz App using HTML, CSS, and JavaScript.",
    image: quiz,
    liveLink: "https://ftcaleb.github.io/Quiz-Project/",
    repoLink: "https://github.com/ftcaleb/Quiz-Project.git",
  },
    {
    title: "Melsoft clone Website ",
    description: "Team collaboration project, redesigning Melsoft.com ",
    image: melsoft,
    liveLink: "https://ftcaleb.github.io/Quiz-Project/",
    repoLink: "https://github.com/OfentseBaloyi/Melsoft-Bootstrap.git",
  },
    {
    title: "Hackathon Projeect",
    description: "My First Hackathon project where I placed 2nd among other candidates.",
    image: hustleai,
    liveLink: "https://hustle-ai-17e5ca12.base44.app/home",
    repoLink: "https://github.com/Brendon-btd/HustleAI.git",
  },
  
  
]



export default function Portfolio() {
  return (
    <section id='portfolios' >
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1200px] mx-auto'>
        {projects.map((project, index) => (
        <li key={index} className="w-72 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        
        <img
          src={project.image}
          alt={project.description}
          className="w-full h-44 object-cover hover:scale-110 transition-transform duration-300"

        />
        
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>

          <div className='flex gap-4 mt-2 rounded-2xl-full'>
          <a href="https://docs.google.com/document/d/1PNZsh68RfWuxae3dwyscG1cpIeWK7g4P/edit?usp=sharing&ouid=109721690072358248581&rtpof=true&sd=true" target='_blank' className="hover:bg-red-600 text-black  px-3 py-2 rounded-full no-underline"><FaCloudDownloadAlt size={15} /></a>
          
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:bg-red-600 text-black px-3 py-2 rounded-full no-underline">
            <FaExternalLinkAlt size={15} />
          </a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="hover:bg-red-600 text-black font-semibold px-3 py-2 rounded-full no-underline">
            <FaGithub size={15} />
          </a>
          </div>
          </li>
        ))}
      </ul>
      </section>
    
 
   
  )
}

 
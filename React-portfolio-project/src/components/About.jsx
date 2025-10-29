import React from 'react'
import caleb from '../assets/caleb.png';


function About() {
  return (
    <div id='about' className='bg-white  text-black p-16 m-8 rounded-lg flex flex-col justify-center items-center'>
      <div className='border-black-100 '>
        <h1 className=' text-6xl font-extrabold tracking-tight  flex justify-center text-left'><span className='text-black'>About Me</span></h1>
        <p className=' mt-4 text-lg w[400px] font-bold'>Hi, I’m Boikanyo Mokoka - a passionate creator who loves building clean, modern, and user-friendly digital experiences. I enjoy turning ideas into functional designs that not only look great but also deliver real value to users. <br /><br />My work blends creativity with technical precision, and I’m always exploring new tools, trends, and technologies to stay ahead in the ever-evolving digital world. When I’m not working on a project, <br /><br />I’m usually learning something new, refining my skills, or finding inspiration in design, technology, and everyday life.</p></div>
        <div className='w-60 h-auto'>
          <img id='home' src={caleb} alt="Me"  />
        </div>
        
    </div>
  )
}

export default About
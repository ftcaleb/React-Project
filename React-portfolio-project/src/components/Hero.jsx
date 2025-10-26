import React from 'react'

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-200'>
       <h1 className='text-9xl'>Boikanyo.M</h1>
         <h2 className='text-bold'>hi, I'm a Full-Stack Developer</h2>
         <button className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"><a href="React-portfolio-project/src/Components/Contact.jsx">Learn More</a></button>
    </div>
    

  )
}

export default Hero
import React from 'react'
import Typewriter from "typewriter-effect";


function Hero() {
  return (
    <div className='wrap' >
       <h1 className=' mx-auto max-w-4xl text-center text-5xl font-bold leading-tight tracking-[-1%] text-black sm:text-[64px] sm:leading-[76px]'><span className='text-white'>Boikanyo</span>.M</h1>
       <div className='text-5xl font-bold text-black text-bold mb-4'>
         <Typewriter
          options={{
            strings: [
              "hi, I'm a Developer",
              "hi, I'm a Designer",
              "hi, I'm a Creator",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
        </div>
         <button className="bg-black text-white rounded-[1px] p-2 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">Learn More</button>
         
    </div>
    

  )
}

export default Hero

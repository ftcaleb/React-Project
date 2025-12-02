import React from 'react'

export default function Skills() {
  const skills = [
    { name: "HTML", number: 80 },
    { name: "CSS", number: 80 },
    { name: "JavaScript", number: 70 },
    { name: "React", number: 70 },
    { name: "Bootstrap", number: 90 },
  ];



  return (
    <div id='skills' className='max-w-md mx-auto p-6'>
      <h3 className='text-2xl font-bold mb-4'>Skills</h3>
      <ul className='space-y-4'>
        {skills.map((skill, index) =>(
          <li key={index}> 
          <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.number}%</span>

            </div>
             <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-red-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.number}%` }}
              ></div>
            </div>
            </li>
        ))}
      
    

    </ul>
    </div>
  )}


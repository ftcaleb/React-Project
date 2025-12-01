import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div>
        <footer className="bg-deep-pink text-white text-center bg-black py-6">
                <p>© 2025 Boikanyo Mokoka. All rights reserved.</p>
                <div className="flex justify-center gap-5 mt-6">
                        <a
                          href="https://github.com/ftcaleb/React-Project.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black bg-red-600 text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-black hover:text-accent-pink hover:shadow-[0_010px#ffb6c1]"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/caleb-mokoka-1911172a8/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black bg-red-600 text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-pink hover:text-accent-pink hover:shadow-[0_010px#ffb6c1]"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="https://www.instagram.com/alwaysbeencaleb/"
                          target="_blank"
                          rel="noopener noreferrer"
                           className="text-black bg-red-600 text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-pink hover:text-accent-pink hover:shadow-[0_010px#ffb6c1]"
                        >
                          <FaInstagram />
                        </a>
                      </div>
        
              </footer>
    </div>
  )
}

export default Footer
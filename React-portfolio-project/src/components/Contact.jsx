import React from "react";

export default function Contact() {
  return (

    <div className="flex justify-center items-center h-screen">
  <div className="h-2/3 w-full max-w-md bg-white shadow-lg rounded-lg flex justify-center items-center">
    
    <form className="flex flex-col gap-4 w-3/4">
    <h2 className="text-4xl">Let's Stay in Touch</h2>
      <input
        className="border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
        type="text"
        placeholder="Your Name"
      />
      <input
        className="border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
        type="text"
        placeholder="Your Email"
      />
      <textarea
        className="border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
        type="email"
        placeholder="Your Message"
      />
      <button
        type="submit"
        className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
      >
        Send
      </button>
      <button
        type="submit"
        className="bg-black text-white rounded p-2 hover:bg-gray-800 transition"
      >
        <a href="https://docs.google.com/document/d/1PNZsh68RfWuxae3dwyscG1cpIeWK7g4P/edit?usp=sharing&ouid=109721690072358248581&rtpof=true&sd=true">Download Resume</a>
      </button>
    </form>
  </div>
</div>


  )
}





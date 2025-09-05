import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Gallery = () => {
  return (
    <>
   <Nav/>
 <div className="text-center mt-20">
  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
    Gallery<span className="text-indigo-600"></span>
  </h1>
  <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
    We’d love to hear from you. Get in touch with us today!
  </p>


  <div className="mt-6 flex justify-center">
    
    <span className="inline-block w-24 h-1 bg-indigo-600 rounded-full"></span>
   
  </div>
   <div className="mt-10 flex justify-center">
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-200"
      >
        ← Back
      </Link>
    </div>
</div>
</>
  )
}

export default Gallery

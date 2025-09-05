import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>

       
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/home"><li className="hover:text-blue-600 cursor-pointer">Home</li></Link> 
          <Link to="/contact"><li className="hover:text-blue-600 cursor-pointer">Contact</li></Link>
          <Link to="/about"><li className="hover:text-blue-600 cursor-pointer">About Us</li></Link>
          <Link to="/services"><li className="hover:text-blue-600 cursor-pointer">Services</li></Link>
          <Link to="/gallery"><li className="hover:text-blue-600 cursor-pointer">Gallery</li></Link>
        </ul>

       
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {open && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-lg py-6 space-y-6 font-medium text-gray-700">
          <Link to="/home" onClick={handleClose}><li className="hover:text-blue-600 cursor-pointer">Home</li></Link>
          <Link to="/contact" onClick={handleClose}><li className="hover:text-blue-600 cursor-pointer">Contact</li></Link>
          <Link to="/about" onClick={handleClose}><li className="hover:text-blue-600 cursor-pointer">About Us</li></Link>
          <Link to="/services" onClick={handleClose}><li className="hover:text-blue-600 cursor-pointer">Services</li></Link>
          <Link to="/gallery" onClick={handleClose}><li className="hover:text-blue-600 cursor-pointer">Gallery</li></Link>
        </ul>
      )}
    </nav>
  );
}

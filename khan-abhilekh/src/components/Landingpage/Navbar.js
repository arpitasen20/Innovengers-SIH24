import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation buttons */}
        <div className="flex space-x-4">
          <Link 
            to="/login" 
            className="w-24 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 text-center"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="w-24 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

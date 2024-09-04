import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative flex items-center">
        {/* Left Image */}
        <img 
          src="/assets/accnt.png" 
          alt="Account" 
          className="hidden md:block h-100 lg:h-120 xl:h-148"
        />
        {/* Login Box */}
        <div className="absolute left-3/4 transform -translate-x-1/2 md:-translate-x-0 w-full max-w-md bg-white p-8 rounded-lg shadow-lg z-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Enter your password" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div 
                className="absolute inset-y-0 right-0 pr-3  flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
              </div>
            </div>
            <Link 
            to="/Shift" >
              <button 
              type="submit" 
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Login
            </button>
            </Link>
            
          </form>
        </div>
      </div>
      {/* Top Left Logo */}
      <img 
        src="/assets/logo2.png" 
        alt="Logo" 
        className="absolute top-0 left-0 m-4 h-12"
      />
    </div>
  );
};

export default Login;

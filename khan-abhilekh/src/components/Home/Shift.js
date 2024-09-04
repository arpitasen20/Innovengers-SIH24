import React from 'react';
import { Link } from 'react-router-dom';
import Logentry from './Logentry';
import Sidebar from './Sidebar';


const Shift = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content */}
            
            <div className="flex-1 p-8 ">
            <div className="flex-1 p-8 ">
                <div className="relative mb-10">
                    {/* Profile and Dashboard Button Container */}
                    <div className="absolute top-0 right-10 flex items-center space-x-4">
                        <Link to="/Dashboard">
                            <button className="bg-black text-white px-4 py-2 rounded hover:scale-110 transition-transform duration-300">
                                DASHBOARD
                            </button>
                        </Link>
                        <img
                            src="/assets/p.png"
                            alt="profile"
                            className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center flex-grow">CHOOSE YOUR SHIFT</h2>

                
            </div>
                

                <div className="flex justify-around mt-20">
                    <Link to="/Logentry">
                    <button className="bg-black text-white p-5 h-40 w-60 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>First Shift</div>
                        <div className="text-sm mt-2">7:00 A.M to 3:00 P.M</div>
                    </button>
                    </Link>
                    <button className="bg-black text-white p-5 h-40 w-60 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>Second Shift</div>
                        <div className="text-sm mt-2">3:00 P.M to 11:00 P.M</div>
                    </button>
                    <button className="bg-black text-white p-5 h-40 w-60 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>Night Shift</div>
                        <div className="text-sm mt-2">11:00 P.M to 7:00 A.M</div>
                    </button>
                </div>
            </div>

            {/* Chatbot */}
            <div className="fixed bottom-10 right-10">
                <img src="/assets/chatbot.png" alt="Chatbot" className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300" />
            </div>
        </div>
    );
};

export default Shift;

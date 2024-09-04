import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Entryform from './Entryform';

const Logentry = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-10 mt-10">
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
                <h2 className="text-2xl font-bold text-center flex-grow">DAILY FIRST SHIFT LOG ENTRY</h2>

                <div className="flex justify-around mt-20">
                <Link to="/Entryform">
                <button className="bg-black text-white p-5 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>SHIFT LOG ENTRY FORM</div>
                    </button></Link>
                    
                </div>
            </div>

            {/* Chatbot */}
            <div className="fixed bottom-10 right-10">
                <img
                    src="/assets/chatbot.png"
                    alt="Chatbot"
                    className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300"
                />
            </div>
        </div>
    );
};

export default Logentry;

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-full md:w-1/4 bg-white p-5 border-r border-gray-200">
                <ul className="space-y-4 pt-20">
                    <li className="text-gray-600 cursor-pointer hover:text-black">Home</li>
                    <li className="text-gray-600 cursor-pointer hover:text-black">Shift Log Entries</li>
                    <li className="text-black font-bold cursor-pointer">Create Shift Log Entry</li>
                    <li className="text-gray-600 cursor-pointer hover:text-black">Hazard Detection and Mapping</li>
                    <li className="text-gray-600 cursor-pointer hover:text-black">Compliance Tracking</li>
                    <li className="text-gray-600 cursor-pointer hover:text-black">Automated Alerts</li>
                    <li className="text-gray-600 cursor-pointer hover:text-black">Predictive Maintenance</li>
                    <li className="text-gray-600 cursor-pointer hover:text-black">Risk Analyzer</li>
                    <li className="text-gray-600 cursor-pointer hover:text-black">Offline Mode</li>
                </ul>
            </div>
    );
};

export default Sidebar;
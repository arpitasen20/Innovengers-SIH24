import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Logentries = () => {
  // Sample log data
  const logData = [
    {
      timestamp: '06-08-2024 15:24:44',
      shift: 'MORNING',
      user: 'MANISH SHARMA',
    },
    {
      timestamp: '07-08-2024 15:43:22',
      shift: 'MORNING',
      user: 'MANISH SHARMA',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="relative mb-10">
          {/* Profile and Dashboard Button Container */}
          <div className="absolute top-0 right-0 flex items-center space-x-4">
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

        <h2 className="text-2xl font-bold text-center mb-6">SHIFT LOG ENTRIES</h2>

        {/* Log Entries Table */}
        <div className="mt-8">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-black text-white">
                <th className="text-left py-3 px-4">TIMESTAMP</th>
                <th className="text-left py-3 px-4">SHIFT</th>
                <th className="text-left py-3 px-4">USER</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {logData.map((log, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="py-3 px-4">{log.timestamp}</td>
                  <td className="py-3 px-4">{log.shift}</td>
                  <td className="py-3 px-4">{log.user}</td>
                  <td className="py-3 px-4">
                    <button className="bg-black text-white px-4 py-2 rounded-md">
                      VIEW REPORT
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logentries;

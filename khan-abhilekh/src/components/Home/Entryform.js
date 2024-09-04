import React from 'react';

const EntryForm = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <h1 className="text-3xl font-bold mb-8">SHIFT LOG ENTRY FORM</h1>
      
      {/* Existing Fields */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[28rem] mb-12">
        <div className="mb-4">
          <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
            Select District
          </label>
          <select id="district" name="district" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="seam" className="block text-sm font-medium text-gray-700 mb-2">
            Select Seam
          </label>
          <select id="seam" name="seam" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="seam1">Seam A</option>
            <option value="seam2">Seam B</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="prLoader" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Number of P/R Loader
          </label>
          <input type="number" id="prLoader" name="prLoader" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="machine" className="block text-sm font-medium text-gray-700 mb-2">
            Select Machine
          </label>
          <select id="machine" name="machine" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="SDL">SDL</option>
            <option value="LHD">LHD</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="machineName" className="block text-sm font-medium text-gray-700 mb-2">
            Machine Name
          </label>
          <input type="text" id="machineName" name="machineName" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      {/* Hours */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[28rem] mb-12">
        <h2 className="text-lg font-semibold mb-4">HOURS</h2>

        <div className="mb-4">
          <label htmlFor="workingHours" className="block text-sm font-medium text-gray-700 mb-2">
            WORKING (IN HOURS)
          </label>
          <input type="number" id="workingHours" name="workingHours" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="breakdownHours" className="block text-sm font-medium text-gray-700 mb-2">
            BREAKDOWN (IN HOURS)
          </label>
          <input type="number" id="breakdownHours" name="breakdownHours" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="idleHours" className="block text-sm font-medium text-gray-700 mb-2">
            IDLE (IN HOURS)
          </label>
          <input type="number" id="idleHours" name="idleHours" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      {/* Short Firing Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[28rem] mb-12">
        <h2 className="text-lg font-semibold mb-4">SHORT FIRING DETAILS</h2>

        <div className="mb-4">
          <label htmlFor="selectFace" className="block text-sm font-medium text-gray-700 mb-2">
            Select Face
          </label>
          <select id="selectFace" name="selectFace" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="face1">Face 1</option>
            <option value="face2">Face 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="holeBlasted" className="block text-sm font-medium text-gray-700 mb-2">
            NUMBER OF HOLE BLASTED
          </label>
          <input type="number" id="holeBlasted" name="holeBlasted" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="explosiveBlasted" className="block text-sm font-medium text-gray-700 mb-2">
            EXPLOSIVE BLASTED (IN KG)
          </label>
          <input type="number" id="explosiveBlasted" name="explosiveBlasted" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      {/* Additional Fields */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[28rem] mb-12">
        <h2 className="text-lg font-semibold mb-4">ADDITIONAL DETAILS</h2>
        
        <div className="mb-4">
          <label htmlFor="tubFactor" className="block text-sm font-medium text-gray-700 mb-2">
            TUB/MINE CAR FACTOR (IN TON)
          </label>
          <input type="number" id="tubFactor" name="tubFactor" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="totalProduction" className="block text-sm font-medium text-gray-700 mb-2">
            TOTAL PRODUCTION (IN TON)
          </label>
          <input type="number" id="totalProduction" name="totalProduction" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="roofBolting" className="block text-sm font-medium text-gray-700 mb-2">
            NUMBER OF ROOF BOLTING
          </label>
          <input type="number" id="roofBolting" name="roofBolting" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="border-2 border-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300">
          Submit
        </button>
        <button className="border-2 border-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300">
          Add More Entries
        </button>
      </div>
    </div>
  );
};

export default EntryForm;

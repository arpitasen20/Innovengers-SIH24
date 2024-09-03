import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Login from './components/Login';  // Import Login component
import Signup from './components/Signup'; // Import Signup component

const App = () => {
  return (
    <Router>
      <Homepage/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
    
  
  );
};

export default App;

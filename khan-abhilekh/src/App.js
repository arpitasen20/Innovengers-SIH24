import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

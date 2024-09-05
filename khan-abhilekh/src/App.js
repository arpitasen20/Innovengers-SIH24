import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Shift from './components/Home/Shift';
import Dashboard from './components/Home/Dashboard';
import Logentry from './components/Home/Logentry';
import Entryform from './components/Home/Entryform';
import Logentries from './components/Home/Logentries';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Shift" element={<Shift />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Logentry" element={<Logentry />} />
        <Route path="/Entryform" element={<Entryform />} />
        <Route path="/Logentries" element={<Logentries />} />
      </Routes>
    </Router>
  );
};

export default App;

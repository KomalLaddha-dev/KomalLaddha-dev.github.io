import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar'
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Number from './Number';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/Home" element={<Home />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/Contact" element={<Contact />} />
          <Route path="/Number" element={<Number />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
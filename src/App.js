import React, { useState } from 'react';
import './App.css';
import backgroundImage from "./assets/backgroundGbu.png";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Sponser from './components/Sponser';
import Events from './components/Events';

const App = () => {

  const [currentPage, setCurrentPage] = useState('HOME');

  const categories = [{
    name: 'HOME',
    path: ''
  }, {
    name: 'ABOUT',
    path: 'about'
  }, {
    name: 'SPONSER US',
    path: 'sponser'
  }, {
    name: 'EVENTS',
    path: 'events'
  }
  ];

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center 50%", height: '100vh', width: '100vw' }}
    >
      <Router>
        <Navbar categories={categories} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponser" element={<Sponser />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;



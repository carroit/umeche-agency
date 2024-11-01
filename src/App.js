import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// App.js
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './components/ServiceCard';
import Requirements from './components/Requirements';
import Countries from './components/Countries';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};


export default App;
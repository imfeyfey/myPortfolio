import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;

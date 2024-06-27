// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LazyLoad from './Components/LazyLoadingTest';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import PhotoGalleryPaginationTest from './Components/PhotoGalleryPaginationTest';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lazyload" element={<LazyLoad/>} />
          <Route path="/photospagination" element={<PhotoGalleryPaginationTest/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

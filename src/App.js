// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LazyLoad from './Components/LazyLoadingTest';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import PhotoGalleryPaginationTest from './Components/PhotoGalleryPaginationTest';
import CustomHook from './Components/CustomHook'
import UseREF from './Components/useRef'
import InterviewQuestions from './Components/interviewQuestions';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lazyload" element={<LazyLoad/>} />
          <Route path="/photospagination" element={<PhotoGalleryPaginationTest/>} />
          <Route path="/customhooks" element={<CustomHook/>} />
          <Route path="/useRef" element={<UseREF/>} />
          <Route path="/interviewQ&A" element={<InterviewQuestions/>} />
          

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

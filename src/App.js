import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./UI/Home/home";
import Navbar from "./UI/Navbar/navbar";
import AboutMe from './UI/About Me Page/AboutMe';
import './App.module.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

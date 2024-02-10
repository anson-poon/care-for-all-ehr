import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PatientsPage from './pages/PatientsPage';
import ProvidersPage from './pages/ProvidersPage';
import VisitsPage from './pages/VisitsPage';
import { useState } from 'react';
import { Link } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Care For All EHR</h1>
          <Navbar />
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/visits" element={<VisitsPage />} />
          </Routes>
        </div>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;

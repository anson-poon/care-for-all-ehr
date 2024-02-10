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
      <header className="App-header">
        <h1>Care For All EHR</h1>
        <Router>
        <Navbar />
          <Routes>
              <Route path="/" component={<HomePage/>}/>
              <Route path="/patients" component={<PatientsPage />}/>
              <Route path="/providers" component={<ProvidersPage/>}/>
              <Route path="/visits" component={<VisitsPage/>}/>
          </Routes>
        </Router>
      </header>
      <footer></footer>
    </div>
  );
}

export default App;

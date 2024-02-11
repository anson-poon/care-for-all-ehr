import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PatientsPage from './pages/PatientsPage';
import ProvidersPage from './pages/ProvidersPage';
import VisitsPage from './pages/VisitsPage';
import PatientIndexPage from './pages/PatientIndexPage';
import PatientProviderIntersectionPage from './pages/PatientProviderIntersectionPage';
import ProviderIndexPage from './pages/ProviderIndexPage';
import ClinicalNotesPage from './pages/ClinicalNotesPage';
import InsurancePoliciesPage from './pages/InsurancePoliciesPage';
import ClinicalFindingsPage from './pages/ClinicalFindingsPage';
import InsuranceNotesPage from './pages/InsuranceNotesPage';
import UpdateProviderIndex from './components/UpdateProvider';
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
            <Route path="/patientindex" element={<PatientIndexPage />} />
            <Route path="/patientproviderintersection" element={<PatientProviderIntersectionPage />} />
            <Route path="/providerindex" element={<ProviderIndexPage />} />
            <Route path="/clinicalnotes" element={<ClinicalNotesPage />} />
            <Route path="/insurancepolicies" element={<InsurancePoliciesPage />} />
            <Route path="/clinicalfindings" element={<ClinicalFindingsPage />} />
            <Route path="/insurancenotes" element={<InsuranceNotesPage />} />
            <Route path="/updateproviderindex" element={<UpdateProviderIndex />} />
          </Routes>
        </div>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;

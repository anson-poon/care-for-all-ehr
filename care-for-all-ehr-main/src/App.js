import './App.css';
import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PatientProfilesPage from './pages/PatientProfilesPage';
import ProviderProfilesPage from './pages/ProviderProfilesPage';
import VisitsPage from './pages/VisitsPage';
import PatientIndexPage from './pages/PatientIndexPage';
import PatientProviderIntersectionPage from './pages/PatientProviderIntersectionPage';
import ProviderIndexPage from './pages/ProviderIndexPage';
import ClinicalNotesPage from './pages/ClinicalNotesPage';
import InsurancePoliciesPage from './pages/InsurancePoliciesPage';
import ClinicalFindingsPage from './pages/ClinicalFindingsPage';
import InsuranceNotesPage from './pages/InsuranceNotesPage';
import UpdateProviderPage from './components/UpdateProvider';
import UpdatePatientPage from './components/UpdatePatientPage';
import UpdatePatientIndexPage from './components/UpdatePatientIndex';
import { useState, useEffect, } from 'react';
import { Link } from 'react-router';

/*
Code citation:
Knowledge of using extend, React.Component, and render are from reviewing the following tutorial:
https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
*/
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <a href="/" className="logo">Care For All EHR</a>
          <Navbar />
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/patients" element={<PatientProfilesPage />} />
            <Route path="/providers" element={<ProviderProfilesPage />} />
            <Route path="/visits" element={<VisitsPage />} />
            <Route path="/patientindex" element={<PatientIndexPage />} />
            <Route path="/patientproviderintersection" element={<PatientProviderIntersectionPage />} />
            <Route path="/providerindex" element={<ProviderIndexPage />} />
            <Route path="/clinicalnotes" element={<ClinicalNotesPage />} />
            <Route path="/insurancepolicies" element={<InsurancePoliciesPage />} />
            <Route path="/clinicalfindings" element={<ClinicalFindingsPage />} />
            <Route path="/insurancenotes" element={<InsuranceNotesPage />} />
            <Route path="/updateproviderpage" element={<UpdateProviderPage />} />
            <Route path="/updatepatientpage" element={<UpdatePatientPage />} />
            <Route path="/sqlDataUpdate/:patientID" element={<UpdatePatientIndexPage />} />
          </Routes>
        </div>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;

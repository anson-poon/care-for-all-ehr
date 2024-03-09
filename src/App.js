/*
React uses this file to define routes 
Code citation: Knowledge of using extend, React.Component, and render are from reviewing the following tutorial
https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
*/

import './App.css';
import React from 'react';
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
import UpdateProviderIndexPage from './components/UpdateProviderIndex';
import UpdatePatientHasProviders from './components/UpdatePatientHasProviders';

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
            <Route path="/patient-index" element={<PatientIndexPage />} />
            <Route path="/patient-profiles" element={<PatientProfilesPage />} />
            <Route path="/insurance-policies" element={<InsurancePoliciesPage />} />
            <Route path="/provider-index" element={<ProviderIndexPage />} />
            <Route path="/provider-profiles" element={<ProviderProfilesPage />} />
            <Route path="/patient-provider-intersection" element={<PatientProviderIntersectionPage />} />
            <Route path="/visits" element={<VisitsPage />} />
            <Route path="/insurance-notes" element={<InsuranceNotesPage />} />
            <Route path="/clinical-notes" element={<ClinicalNotesPage />} />
            <Route path="/clinical-findings" element={<ClinicalFindingsPage />} />
            <Route path="/patient-index/update/:patientID" element={<UpdatePatientIndexPage />} />
            <Route path="/patient-profiles/update/:patientID" element={<UpdatePatientPage />} />
            <Route path="/provider-index/update/:providerID" element={<UpdateProviderIndexPage />} />
            <Route path="/provider-profiles/update/:providerID" element={<UpdateProviderPage />} />
            <Route path="/patient-provider-intersection/update/:patientID/:providerID" element={<UpdatePatientHasProviders />} />
          </Routes>
        </div>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;

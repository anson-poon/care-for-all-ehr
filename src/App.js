import './App.css';
import React from 'react';
import axios from "axios";
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

class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { user } = this.state;
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
        </Router>
        <footer></footer>
      </div>
    );
  }
}

export default App;

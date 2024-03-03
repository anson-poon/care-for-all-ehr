// Component that creates search box options that can be imported in Pages for all entities

import React from "react";
import { useState } from "react";

// demo search box
export function SearchBox() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="temp">Temp</option>
            </select>
            <input type="text" placeholder="Temp" />
            <button>Search</button>
        </div>
    );
}

// search box for Patient Index page
export function SearchBoxPatientIndex({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="selectPatient" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Search by Attribute</option>
                <option value="patientFirstName">First Name</option>
                <option value="patientLastName">Last Name</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Patients" value={searchValue} onChange={handleInputChange} />
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
}

// search box for Patient Profiles page
export function SearchBoxPatientProfiles({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="selectPatientProfile" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Search by Attribute</option>
                <option value="patientPhoneNumber">Phone Number</option>
                <option value="emailAddress">Email Address</option>
                <option value="dateOfBirth">Date of Birth</option>
                <option value="patientID">Patient ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Patient Profiles" value={searchValue} onChange={handleInputChange} />
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
}

// search box for Insurance Policies page
export function SearchBoxInsurancePolicies() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="insuranceID">Insurance ID</option>
                <option value="type">Insurance Type</option>
                <option value="patientID">Patient ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Insurance Policies" />
            <button>Search</button>
        </div>
    );
}

// search box for Provider Index page
export function SearchBoxProviderIndex({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="selectProvider" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Search by Attribute</option>
                <option value="providerFirstName">First Name</option>
                <option value="providerLastName">Last Name</option>
                <option value="providerFullName">Provider First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Providers" value={searchValue} onChange={handleInputChange} />
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
}

// search box for Provider Profiles page
export function SearchBoxProviderProfiles({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="selectProviderProfiles" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Search by Attributes</option>
                <option value="title">Title</option>
                <option value="specialty">Specialty</option>
                <option value="providerPhoneNumber">Phone Number</option>
                <option value="providerFullName">Provider First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Provider Profiles" value={searchValue} onChange={handleInputChange} />
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
};

// search box for Patient Provider Relationships (Intersection table) page
export function SearchBoxPatientProviderRelationships({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="attributes" id="attributes" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Search by Attribute</option>
                <option value="patientID">Patient ID</option>
                <option value="providerID">Provider ID</option>
                <option value="patientFullName">Patient (First and Last Name)</option>
                <option value="providerFullName">Provider (First & Last Name)</option>
            </select>
            <input type="search" placeholder="Search Patient/Provider Relationships" value={searchValue} onChange={handleInputChange} />
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
};

// search box for Visits page
export function SearchBoxVisits({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="attributes" id="attributes" value = {userChoice} onChange = {handleChange}>
            <option value="" selected disabled hidden>Search by Attribute</option>
                <option value="visitID">Visit ID</option>
                <option value="visitDateTime">Date & Time</option>
                <option value="providerID">Provider ID</option>
                <option value="patientID">Patient ID</option>
                <option value="insuranceID">Insurance ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Visits"  value = {searchValue} onChange = {handleInputChange} />
            <button onClick = {() => handleSearch(searchValue)}>Search</button>
        </div>
    );
}

// search box for Insurance Notes page
export function SearchBoxInsuranceNotes() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="insuranceID">Insurance ID</option>
                <option value="reimbursementCode">Reimbursement Code</option>
                <option value="visitID">Visit ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Insurance Notes" />
            <button>Search</button>
        </div>
    );
}

// search box for Clinical Notes page
export function SearchBoxClinicalNotes() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="clinicalNoteID">Clinical Note ID</option>
                <option value="visitID">Visit ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Clinical Notes" />
            <button>Search</button>
        </div>
    );
}

// search box for Clinical Findings page
export function SearchBarClinicalFindings() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="clinicalFindingID">Clinical Finding ID</option>
                <option value="clinicalNoteID">Clinical Note ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="search" placeholder="Search Clinical Findings" />
            <button>Search</button>
        </div>
    );
}

export default SearchBox;
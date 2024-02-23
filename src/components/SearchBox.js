import React from "react";
import { useState } from "react";

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

export function SearchBoxPatientIndex({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="selectPatient" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Choose Attribute</option>
                <option value="patientID">Patient ID</option>
                <option value="patientFirstName">First Name</option>
                <option value="patientLastName">Last Name</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Patients" value={searchValue} onChange={handleInputChange}/>
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
}

export function SearchBoxPatientProfiles({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };
    
    return (
        <div className="search-box">
            <select name="selectPatientProfile" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Choose Attribute</option>
                <option value="patientProfileID">Patient Profile ID</option>
                <option value="patientPhoneNumber">Phone Number</option>
                <option value="emailAddress">Email Address</option>
                <option value="dateOfBirth">Date of Birth</option>
                <option value="patientID">Patient ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Patient Profiles" value={searchValue} onChange={handleInputChange}/>
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
}

export function SearchBoxInsurancePolicies() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="insuranceID">Insurance ID</option>
                <option value="type">Insurance Type</option>
                <option value="patientID">Patient ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Insurance Policies" />
            <button>Search</button>
        </div>
    );
}

export function SearchBoxProviderIndex({ userChoice, handleChange, handleSearch }) {
    const [searchValue, setSearchValue] = useState('');

    // handle user input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-box">
            <select name="selectProvider" value={userChoice} onChange={handleChange}>
                <option value="" selected disabled hidden>Choose Attribute</option>
                <option value="providerID">Provider ID</option>
                <option value="providerFirstName">First Name</option>
                <option value="providerLastName">Last Name</option>
                <option value="providerFullName">Provider First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Providers" value={searchValue} onChange={handleInputChange}/>
            <button onClick={() => handleSearch(searchValue)}>Search</button>
        </div>
    );
}

export function SearchBoxProviderProfiles() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="providerProfileID">Provider Profile ID</option>
                <option value="title">Title</option>
                <option value="speciality">Specialty</option>
                <option value="phoneNumber">Phone Number</option>
                <option value="providerID">Provider ID</option>
                <option value="providerFullName">Provider First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Provider Profiles" />
            <button>Search</button>
        </div>
    );
};

export function SearchBoxPatientProviderRelationships() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="patientID">Patient ID</option>
                <option value="providerID">Provider ID</option>
                <option value="patientFullName">Full Name (First and Last Name)</option>
                <option value="providerFullName">Provider First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Patient/Provider Relationships" />
            <button>Search</button>
        </div>
    );
}

export function SearchBoxVisits() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="visitID">Visit ID</option>
                <option value="dateTime">Date & Time</option>
                <option value="providerID">Provider ID</option>
                <option value="patientID">Patient ID</option>
                <option value="insuranceID">Insurance ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Visits" />
            <button>Search</button>
        </div>
    );
}

export function SearchBoxInsuranceNotes() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="insuranceID">Insurance ID</option>
                <option value="reimbursementCode">Reimbursement Code</option>
                <option value="visitID">Visit ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Insurance Notes" />
            <button>Search</button>
        </div>
    );
}

export function SearchBoxClinicalNotes() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="clinicalNoteID">Clinical Note ID</option>
                <option value="visitID">Visit ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Clinical Notes" />
            <button>Search</button>
        </div>
    );
}

export function SearchBarClinicalFindings() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="clinicalFindingID">Clinical Finding ID</option>
                <option value="clinicalNoteID">Clinical Note ID</option>
                <option value="patientFullName">Patient First & Last Name</option>
            </select>
            <input type="text" placeholder="Search Clinical Findings" />
            <button>Search</button>
        </div>
    );
}

export default SearchBox;
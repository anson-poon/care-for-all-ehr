/* 
Creates Patient Index page with working CRUD methods
Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
Code adapted to work with group 70's project.
*/

import React from 'react';
import axios from "axios";
import moment from "moment";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { DescriptionPatientProfiles } from '../components/DescriptionBox';
import { SearchBoxPatientProfiles } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';

/* Page handles SELECT, CREATE, UPDATE, DELETE for PatientProfiles, which outlines the detailed information for each patient in the database */
function PatientProfilesPage() {

    // SELECT FROM PatientProfiles
    const [patientProfileData, setPatientProfilesData] = useState([]);   // Initialize state to hold fetched data

    useEffect(() => {
        fetchData();    // Fetch data when component loads
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/patient-profiles/data');
            setPatientProfilesData(response.data);
        } catch (err) {
            console.error(`Error fetching data:`, err);
        }
    };

    // SELECT FROM Patient (for Inserting ID)
    const [patientsData, setPatientsData] = useState([]);

    useEffect(() => {
        fetchIndividualPatient();
    }, []);

    const fetchIndividualPatient = async () => {
        try {
            const response = await axios.get('/patient-profiles/data');
            setPatientsData(response.data);
        } catch (err) {
            console.error(`Error fetching data:`, err);
        }
    };

    // SELECT * FROM PatientProfiles WHERE userChoice = ?
    const [userChoice, setUserChoice] = useState('');
    const handleChange = (choice) => {
        setUserChoice(choice.target.value);
    }
    const handleSearch = async (userInput) => {
        try {
            const response = await axios.get(`/patient-profiles/search/?userChoice=${userChoice}&userInput=${userInput}`);
            setPatientProfilesData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "search"; // hardcoded to search from PatientProfiles
            let selection = "patientID";        // hardcoded to search by patientID
            const response = await axios.get(`/patient-profiles/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setPatientProfilesData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implement SELECT to obtain records for Patients that have not been associated with a Patient Profile yet
    const [noNote, setNote] = useState([]);
    useEffect(() => {
        fetchPatientsWithoutPatientProfile();
    }, []);
    const fetchPatientsWithoutPatientProfile = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/patient-profiles/selectiveinsert');
            // Set the fetched data to state
            setNote(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implements INSERT to process new data 
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold patient attributes
    const [attributes, setAttributes] = useState({
        patientProfileID: "",
        patientPhoneNumber: "",
        emailAddress: "",
        dateOfBirth: "",
        patientID: "",
    });
    // obtain attributes for new entry
    const handleInsertData = (newValues) => {
        setAttributes((currentValues) => ({ ...currentValues, [newValues.target.name]: newValues.target.value }));
    };
    // handle submission of new data (attributes)
    const submitNewData = async (submit) => {
        submit.preventDefault()
        try {
            await axios.post("/patient-profiles/create", attributes)
            window.location.reload()
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    // DELETE FROM PatientProfiles WHERE patientID = ?
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    const deleteData = async (patientID) => {
        try {
            await axios.delete("/patient-profiles/delete/" + patientID);
            window.location.reload()
        } catch (err) {
            console.error("Failed to delete data:", err);
        }
    };

    return (
        <div>
            <h3>Patient Profiles</h3>
            <DescriptionPatientProfiles />
            <div className='search-container'>
                <SearchDropdown
                    route="patient-profiles"
                    idProperty="patientID"
                    onSelect={handleSelect} />
                <SearchBoxPatientProfiles
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh Patient Profiles</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="patientsdetailedinformation">
                        <thead>
                            <tr>
                                <th>Patient Profile ID</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th>Date of Birth</th>
                                <th>Patient ID</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patientProfileData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.patientProfileID}</th>
                                    <th>{item.patientPhoneNumber}</th>
                                    <th>{item.emailAddress}</th>
                                    <th>{moment(item.dateOfBirth).utc().format('YYYY-MM-DD')}</th>
                                    <th>{item.patientID}</th>
                                    <th><RiChatDeleteFill className="icon" onClick={() => deleteData(item.patientID)} /></th>
                                    <th><Link to={`/patient-profiles/update/${item.patientID}`}><RiEdit2Fill /></Link></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add Patient Profile:</h4>
                        <div className="form-row">
                            <label for="patientID">Patient ID: </label>
                            <select name="patientID" id="patientID" onChange={handleInsertData} required>
                                <option value="" selected disabled hidden>Choose Attribute</option>
                                {noNote.map((item, index) => (
                                    <option value={item.patientID}>{item.patientID}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="patientPhoneNumber">Phone Number: </label>
                            <input type="text" name="patientPhoneNumber" id="patientPhoneNumber" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="emailAddress">Email Address: </label>
                            <input type="text" name="emailAddress" id="emailAddress" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="dateOfBirth">Date of Birth: </label>
                            <input type="date" name="dateOfBirth" id="dateOfBirth" onChange={handleInsertData} required />
                        </div>
                        <br />
                        <button className="add-button" onClick={submitNewData}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientProfilesPage;
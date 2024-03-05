// Create Clinical Finding Page that uses sample data from data directory

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBarClinicalFindings } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';
import { redirect } from 'react-router-dom';

function ClinicalFindingsPage() {

    // implement SELECT to obtain records for Clinical Notes that have not been associated with a clinical findings note
    const [noNote, setNote] = useState([]);
    useEffect(() => {
        fetchClinicalNoteWithoutClinicalFindings();
    }, []);
    const fetchClinicalNoteWithoutClinicalFindings = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/sqlData/searchClinicalNotesWithoutClinicalFindings');
            // Set the fetched data to state
            setNote(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implement SELECT to obtain all records for Clinical Findings
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/sqlData/?table=ClinicalFindings');
            // Set the fetched data to state
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implement SELECT to obtain records based on a user's criteria for attributes
    const [userChoice, setUserChoice] = useState('');

    const handleChange = (choice) => {
        setUserChoice(choice.target.value);
    }

    const handleSearch = async (userInput) => {
        try {
            const response = await axios.get(`/sqlData/searchClinicalFindings/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "searchClinicalFindings"; // hardcoded to search from Insurance Notes
            let selection = "clinicalNoteID";        // hardcoded to search by clinicalNoteID
            const response = await axios.get(`/sqlData/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implements INSERT to process new data 
    // Code to implement INSERT learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold patient attributes
    const [attributes, setAttributes] = useState({
        clinicalFindingID: "",
        chiefComplaint: "",
        patientBloodPressure: "",
        patientHeartRate: "",
        patientTemperature: "",
        patientRespiratoryRate: "",
        narrativeTreatmentPlan: "",
        clinicalNoteID: "",
    });
    // obtain attributes for new entry
    const handleInsertData = (newValues) => {
        setAttributes((currentValues) => ({ ...currentValues, [newValues.target.name]: newValues.target.value }));
    };
    // handle submission of new data (attributes)
    const submitNewData = async (submit) => {
        submit.preventDefault()
        try {
            console.log(attributes)
            await axios.post("/sqlDataInsertClinicalFindings", attributes);
            window.location.reload();
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    return (
        <div>
            <h3>Clinical Findings</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on clinical findings that have been associated with existing clinical note IDs in the MySQL database.</p>
                <p>Available information for each clinical findings note includes Clinical Finding ID, Chief Complaint, Patient Blood Pressure, Patient Heart Rate, Patient Temperature, Patient Respiratory Rate, Treatment Plan, and Clinical Note ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information on clinical findings for only a new clinical note ID.</p>
            </div>    
                <div className='search-container'>
                <SearchDropdown
                    tableName="ClinicalFindings"
                    idProperty="clinicalNoteID"
                    onSelect={handleSelect} />
                <SearchBarClinicalFindings
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Get Current Information for Clinical Findings</button>

            <div className="flex-container">
                <div className="flex-column1">
                    <table id="clinicalfindings">
                        <thead>
                            <tr>
                                <th>Clinical Finding ID</th>
                                <th>Chief Complaint</th>
                                <th>Blood Pressure</th>
                                <th>Heart Rate</th>
                                <th>Temperature</th>
                                <th>Respiratory Rate</th>
                                <th>Treatment Plan</th>
                                <th>Clinical Note ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.clinicalFindingID}</th>
                                    <th>{item.chiefComplaint}</th>
                                    <th>{item.patientBloodPressure}</th>
                                    <th>{item.patientHeartRate}</th>
                                    <th>{item.patientTemperature}</th>
                                    <th>{item.patientRespiratoryRate}</th>
                                    <th>{item.narrativeTreatmentPlan}</th>
                                    <th>{item.clinicalNoteID}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add Clinical Findings to a New Clinical Note</h4>
                        <div className="form-row">
                            <label for="chiefComplaint">Chief Complaint: </label>
                            <input type="text" name="chiefComplaint" id="chiefComplaint" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="patientBloodPressure">Patient Blood Pressure: </label>
                            <input type="text" name="patientBloodPressure" id="patientBloodPressure" onChange={handleInsertData}  required />
                        </div>
                        <div className="form-row">
                            <label for="patientHeartRate">Patient Heart Rate: </label>
                            <input type="text" name="patientHeartRate" id="patientHeartRate" onChange={handleInsertData}  required />
                        </div>
                        <div className="form-row">
                            <label for="patientTemperature">Patient Temperature: </label>
                            <input type="text" name="patientTemperature" id="patientTemperature" onChange={handleInsertData}  required />
                        </div>
                        <div className="form-row">
                            <label for="patientRespiratoryRate">Patient Respiratory Rate: </label>
                            <input type="text" name="patientRespiratoryRate" id="patientRespiratoryRate" onChange={handleInsertData}  required />
                        </div>
                        <div className="form-row">
                            <label for="narrativeTreatmentPlan">Narrative Treatment Plan: </label>
                            <input type="text" name="narrativeTreatmentPlan" id="narrativeTreatmentPlan" onChange={handleInsertData}  required />
                        </div>
                        <div className="form-row">
                            <label for="clinicalNoteID">Clinical Note ID: </label>
                            <select name="clinicalNoteID" id="clinicalNoteID" onChange={handleInsertData} required>
                                <option value="" selected disabled hidden>Choose Attribute</option>
                                {noNote.map((item, index) => (
                                    <option value={item.clinicalNoteID}>{item.clinicalNoteID}</option>
                                ))}
                            </select>
                        </div>
                        <br />
                        <button className="add-button" onClick={submitNewData}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClinicalFindingsPage;
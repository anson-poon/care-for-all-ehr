import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { HiBell } from 'react-icons/hi2';
import { SearchBoxPatientProfiles } from '../components/SearchBox';
// import patientData from '../data/patientData';

/*
Code citation: Code to import icons credited to https://react-icons.github.io/react-icons/
*/

/*
Page returns function that shows patients table
*/
function PatientProfilesPage() {

    // logic for INSERT
    // technique to insert data learned from https://github.com/dhanavishnu13/CRUD_with_React_Node.js_MySQL/blob/main/frontend/src/pages/Add.jsx
    const [attributes, setAttributes] = useState({
        patientProfileID:"",
        patientPhoneNumber:"",
        emailAddress:"",
        dateOfBirth:"",
        patientID:"",
    });
    const handleInsertData = (e) => {
        setAttributes((prev)=>({ ...prev, [e.target.name]:e.target.value}));
    };
    const submitNewData = async e => {
        e.preventDefault()
        try {
            await axios.post("/sqlDataInsertPatientProfiles", attributes)
            window.location.reload()
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };
    
    
    const goToUpdatePage = useNavigate();

    // SELECT FROM PatientProfiles
    const [patientProfileData, setPatientProfilesData] = useState([]);   // Initialize state to hold fetched data
    // SELECT FROM Patient (for Inserting ID)
    const [patientsData, setPatientsData] = useState([]);

    useEffect(() => {
        fetchData('PatientProfiles', setPatientProfilesData);
        fetchData('Patients', setPatientsData);
    }, []);

    const fetchData = async (tableName, setData) => {
        try {
            // Fetch data from the specified table
            const response = await axios.get(`/sqlData/?table=${tableName}`);
            // Set the fetched data to state
            setData(response.data); 
        } catch (err) {
            console.error(`Error fetching ${tableName} data:`, err);
        }
    };

    // DELETE FROM PatientProfiles WHERE patientID = ?
    // technique to delete data credited to https://github.com/dhanavishnu13/CRUD_with_React_Node.js_MySQL/blob/main/frontend/src/pages/Books.jsx
    const deleteData = async (patientID) => {
        try {
            await axios.delete("/sqlDataDelete/patients/" + patientID);
            window.location.reload()
        } catch (err){
            console.error("Failed to delete data:", err);
        }
    };

    // SELECT * FROM PatientProfiles WHERE userChoice = ?
    const [userChoice, setUserChoice] = useState('');

    const handleChange = (choice) => {
        setUserChoice(choice.target.value);
    }
    
    const handleSearch = async (userInput) => {
        try {
            const response = await axios.get(`/sqlData/searchPatientProfiles/?userChoice=${userChoice}&userInput=${userInput}`);
            setPatientProfilesData(response.data); 
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    return (
        <div>
            <h3>Patient Profiles</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> detailed information for all patients from the MySQL database.</p>
                <p>Available information for each patient includes their Profile ID, Phone Number, Email Address, Date of Birth, and Patient ID.</p>
                <p>Additionally, this page allows you to <b>insert</b>, or <b>add</b> information about a new patient that was created on List of Patients page.</p>
                <p>This page also allows you to <b>delete</b> information for each patient from the MySQL database.</p>
                <p>Lastly, this page also allows you to update update for each patient, including the ability to set Phone Number, Email Address, and Date of Birth as <b>NULL</b>.</p>
            </div>
            <SearchBoxPatientProfiles 
                userChoice={userChoice} 
                handleChange={handleChange} 
                handleSearch={handleSearch} />
            <button className="SELECT-button" onClick={() => fetchData('PatientProfiles', setPatientProfilesData)}>Refresh Patient Profiles</button>
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
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patientProfileData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.patientProfileID}</th>
                                    <th>{item.patientPhoneNumber}</th>
                                    <th>{item.emailAddress}</th>
                                    <th>{item.dateOfBirth}</th>
                                    <th>{item.patientID}</th>
                                    <th><RiEdit2Fill className="icon" onClick={() => goToUpdatePage("/updatepatientpage")} /></th>
                                    <th><RiChatDeleteFill className="icon" onClick={() => deleteData(item.patientID)} /></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add Patient Profile:</h4>
                        <div className="form-row">
                            <label for="patientID">Patient ID:</label>
                            <select name="patientID" onChange = {handleInsertData} required>
                                {patientsData.map((item, index) => (
                                    <option value={item.patientID}>{item.patientID}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="patientPhoneNumber">Phone Number: </label>
                            <input type="text" name="patientPhoneNumber" id="patientPhoneNumber" onChange = {handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="emailAddress">Email Address: </label>
                            <input type="text" name="emailAddress" id="emailAddress" onChange = {handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="dateOfBirth">Date of Birth: </label>
                            <input type="text" name="dateOfBirth" id="dateOfBirth" onChange = {handleInsertData} required />
                        </div>
                        <br />
                        <button className="add-button" onClick = {submitNewData}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientProfilesPage;
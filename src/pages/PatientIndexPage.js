/* 
Creates Patient Index page with working CRUD methods
Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
Code adapted to work with group 70's project.
*/

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { DescriptionPatients } from '../components/DescriptionBox';
import { SearchBoxPatientIndex } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';

/* Page to handle and display List of Patient page */
function PatientIndexPage() {

    // SELECT all records for Patient Index
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    useEffect(() => {
        fetchData();    // Fetch data when component loads
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/patient-index/data');    // fetch data from sqlData route
            setData(response.data);     // Set the fetched data to state
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // SELECT records based on a user's criteria for attributes
    const [userChoice, setUserChoice] = useState('');

    const handleChange = (choice) => {
        setUserChoice(choice.target.value);
    }

    const handleSearch = async (userInput) => {
        try {
            // const response = await axios.get(`/sqlData/searchPatient/?userChoice=${userChoice}&userInput=${userInput}`);
            const response = await axios.get(`/patient-index/search/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            //let searchRoute = "searchPatient";  // hardcoded to search from Patients
            let searchRoute = "search";         // hardcoded to search from Patients
            let selection = "patientID";        // hardcoded to search by patientID
            // const response = await axios.get(`/sqlData/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            const response = await axios.get(`/patient-index/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // INSERT a new record
    // Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold patient attributes
    const [attributes, setAttributes] = useState({
        patientID: "",
        patientFirstName: "",
        patientLastName: "",
    });
    // obtain attributes for new entry
    const handleInsertData = (newValues) => {
        setAttributes((currentValues) => ({ ...currentValues, [newValues.target.name]: newValues.target.value }));
    };
    // handle submission of new data (attributes)
    const submitNewData = async (submit) => {
        submit.preventDefault()
        try {
            await axios.post("/patient-index/create", attributes);
            window.location.reload();
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    // DELETE a record
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // handles deletion of a record for Patient Index
    const deleteData = async (patientID) => {
        try {
            await axios.delete("/patient-index/delete/" + patientID);
            window.location.reload()
        } catch (err) {
            console.error("Failed to delete data:", err);
        }
    };

    console.log(data);

    return (
        <div>
            <h3>List of Patients</h3>
            <DescriptionPatients />
            <div className='search-container'>
                <SearchDropdown
                    route="patient-index"
                    idProperty="patientID"
                    onSelect={handleSelect} />
                <SearchBoxPatientIndex
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh List of Patients</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="patientindex">
                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.patientID}</th>
                                    <th>{item.patientFirstName}</th>
                                    <th>{item.patientLastName}</th>
                                    <th><RiChatDeleteFill className="icon" onClick={() => deleteData(item.patientID)} /></th>
                                    <th><Link to={`/patient-index/update/${item.patientID}`}><RiEdit2Fill /></Link></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a New Patient</h4>
                        <div className="form-row">
                            <label for="firstName">First Name: </label>
                            <input type="text" name="patientFirstName" id="firstNname" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="lastName">Last Name: </label>
                            <input type="text" name="patientLastName" id="lastName" onChange={handleInsertData} required />
                        </div>
                        <br />
                        <button className="add-button" onClick={submitNewData}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientIndexPage;
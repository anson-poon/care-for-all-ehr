/* 
Creates Visits page with working SELECT and INSERT methods.
Code citation:  Code to implement INSERT learned from https://github.com/safak/youtube2022/tree/react-mysql. 
Code adapted to work with group 70's project.
*/

import React from 'react';
import axios from "axios";
import moment from "moment";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import patientData from '../data/patientData';
import { SearchBoxVisits } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';
import { redirect } from 'react-router-dom';

function VisitsPage() {

    // implement SELECT to obtain all records for Visits
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/sqlData/?table=Visits');
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
            const response = await axios.get(`/sqlData/searchVisits/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "searchVisits"; // hardcoded to search from Visits
            let selection = "patientID";        // hardcoded to search by patientID
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
        visitID: "",
        visitDateTime: "",
        providerID: "",
        patientID: "",
        insuranceID: "",
    });
    // obtain attributes for new entry
    const handleInsertData = (newValues) => {
        setAttributes((currentValues) => ({ ...currentValues, [newValues.target.name]: newValues.target.value }));
    };
    // handle submission of new data (attributes)
    const submitNewData = async (submit) => {
        submit.preventDefault()
        try {
            await axios.post("/sqlDataInsertVisits", attributes);
            window.location.reload();
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    return (
        <div>
            <h3>Visits</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on visits that have already been associated between patients and providers in the MySQL database.</p>
                <p>Available information for each visit includes Visit ID, Date and Time of Visit, Provider ID, Patient ID, and Insurance ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information on a new visit between a patient and a provider when the following requirements have been <b>met</b>:</p>
                <ol className="userGuide">
                    <li>The relationship between a patient and a provider have been formed on the Relationships between Patients & Providers page.</li>
                    <li>An insurance ID has been associated with a patient on the List of Insurance Policies page.</li>
                </ol>
                <p>Failure to meet these requirements will result in an error if the creation of the new visit is attempted.</p>
                <p><b>Special Note</b>:  When a provider is selected, then the appropriate form will automatically generate the patients that have a relationship with the provider. Then once the patient is selected, then the form will also automatically generate insurance policies that have been associated with the specific patient.</p>
            </div>
            <div className='search-container'>
                <SearchDropdown
                    tableName="Visits"
                    idProperty="patientID"
                    onSelect={handleSelect} />
                <SearchBoxVisits
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh Visits</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="visits">
                        <thead>
                            <tr>
                                <th>Visit ID</th>
                                <th>Date & Time</th>
                                <th>Provider ID</th>
                                <th>Patient ID</th>
                                <th>Insurance ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.visitID}</th>
                                    <th>{moment(item.visitDateTime).utc().format("YYYY-MM-DD (HH:mm:ss)")}</th>
                                    <th>{item.providerID}</th>
                                    <th>{item.patientID}</th>
                                    <th>{item.insuranceID}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a New Visit</h4>
                        <div className="form-row">
                            <label for="visitDateTime">Date & Time of Visit: </label>
                            <input type="datetime-local" name="visitDateTime" id="visitDateTime" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="providerID">Provider ID: </label>
                            <select name="providerID" id="providerID" onChange={handleInsertData} required>
                                <option value="" selected disabled hidden>Choose Attribute</option>
                                {data.map((item, index) => (
                                    <option value={item.providerID}>{item.providerID}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="patientID">Patient ID: </label>
                            <select name="patientID" id="patientID" onChange={handleInsertData} required>
                                <option value="" selected disabled hidden>Choose Attribute</option>
                                {data.map((item, index) => (
                                    <option value={item.patientID}>{item.patientID}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="insuranceID">Insurance ID: </label>
                            <select name="insuranceID" id="insuranceID" onChange={handleInsertData} required>
                                <option value="" selected disabled hidden>Choose Attribute</option>
                                {data.map((item, index) => (
                                    <option value={item.insuranceID}>{item.insuranceID}</option>
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

export default VisitsPage;
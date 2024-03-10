import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { DescriptionInsurancePolicies } from '../components/DescriptionBox';
import { SearchBoxInsurancePolicies } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';

/* Page to handle and display Insurance Policies page */
function InsurancePoliciesPage() {

    // implement SELECT to obtain all records for Insurance Policies
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/insurance-policies/data');
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
            const response = await axios.get(`/insurance-policies/search/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "search"; // hardcoded to search from Insurance Policies
            let selection = "patientID";        // hardcoded to search by patientID
            const response = await axios.get(`/insurance-policies/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implements INSERT to process new data 
    // Code to implement INSERT learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold patient attributes
    const [attributes, setAttributes] = useState({
        insuranceID: "",
        insuranceType: "",
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
            console.log(attributes)
            await axios.post("/insurance-policies/create", attributes);
            window.location.reload();
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    return (
        <div>
            <h3>List of Insurance Policies</h3>
            <DescriptionInsurancePolicies />
            <div className='search-container'>
                <SearchDropdown
                    route="insurance-policies"
                    idProperty="patientID"
                    onSelect={handleSelect} />
                <SearchBoxInsurancePolicies
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh List of Insurance Policies</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="insurancepolicies">
                        <thead>
                            <tr>
                                <th>Insurance ID</th>
                                <th>Insurance Type</th>
                                <th>Patient ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.insuranceID}</th>
                                    <th>{item.insuranceType}</th>
                                    <th>{item.patientID}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a New Insurance Policy</h4>
                        <div className="form-row">
                            <label for="insuranceID">Insurance ID: </label>
                            <input type="text" name="insuranceID" id="insuranceID" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="insuranceType">Insurance Type: </label>
                            <input type="text" name="insuranceType" id="insuranceType" onChange={handleInsertData} required />
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
                        <br />
                        <button className="add-button" onClick={submitNewData}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InsurancePoliciesPage;
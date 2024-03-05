// Create Patient Provider Relationships (intersection table) page that incorporates sample data from data directory

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import patientData from '../data/patientData';
import { SearchBoxPatientProviderRelationships } from '../components/SearchBox';
import { redirect } from 'react-router-dom';
import { SearchDropdown } from '../components/SearchDropdown';


function PatientProviderIntersectionPage() {

    const goToUpdatePage = useNavigate();

    // implements INSERT to process new data 
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold patient attributes
    const [attributes, setAttributes] = useState({
        patientID: "",
        providerID: "",
    });
    // obtain attributes for new entry
    const handleInsertData = (newValues) => {
        setAttributes((currentValues) => ({ ...currentValues, [newValues.target.name]: newValues.target.value }));
    };
    // handle submission of new data (attributes)
    const submitNewData = async (submit) => {
        submit.preventDefault()
        try {
            await axios.post("/sqlDataInsertPatientHasProviders", attributes)
            window.location.reload()
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    // implement SELECT to obtain all records for Patient Provider Intersection
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/sqlData/?table=Patients_has_Providers');
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
            const response = await axios.get(`/sqlData/searchPatientProviderRelationships/?userChoice=${userChoice}&userInput=${userInput}`);
            console.log(response.data)
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "searchPatient";  // hardcoded to search from Patients
            let selection = "patientID";        // hardcoded to search by patientID
            const response = await axios.get(`/sqlData/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // DELETE FROM PatientProfiles WHERE patientID = ?
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    const deleteData = async (patientID, providerID) => {
        try {
            await axios.delete("/sqlDataDeletePHP/" + patientID + "/" + providerID);
            window.location.reload()
        } catch (err) {
            console.error("Failed to delete data:", err);
        }
    };

    return (
        <div>
            <h3>Patient/Provider Relationships</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on current relationships between patients and providers from the MySQL database.</p>
                <p>Available information on the relationships between patients and providers include Patient ID and Provider ID.</p>
                <p>Lastly, this page allows you to only <b>insert</b>, or define, a relationship among entities in the following scenarios:</p>
                <ol className="userGuide">
                    <li>A new relationship can be formed between a newly created patient and a newly created provider.</li>
                    <li>A new relationship can be formed between a newly created patient and an existing provider.</li>
                    <li>A new relationship can be formed between an existing patient and a newly created provider.</li>
                    <li>A new relationship can be formed between an existing patient and an existing provider only if the two existing entities have never established a relationship before.</li>
                </ol>
                <p><b>Special Note</b>:  Once a relationship has been defined between a patient and a provider, then a visit entry can be created on List of Visits page to represent a visit occurred between the two entities.</p>
            </div>
            <div className='search-container'>
                <SearchDropdown
                    tableName="Patients_has_Providers"
                    idProperty="patientID"
                    onSelect={handleSelect} />
                <SearchBoxPatientProviderRelationships
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh Patient/Provider Relationships</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="patientproviderintersection">
                        <thead>
                            <tr>
                                <th>Patient ID (Full Name)</th>
                                <th>Provider ID (Full Name)</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.patientID}</th>
                                    <th>{item.providerID}</th>
                                    <th><RiChatDeleteFill className="icon" onClick={() => deleteData(item.patientID, item.providerID)} /></th>
                                    <th><Link to={`/sqlDataUpdatePHP/${item.patientID}/${item.providerID}`}><RiEdit2Fill /></Link></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a Relationship Between a Patient and a Provider</h4>
                        <div className="form-row">
                            <select name="patientID" id="providerID" onChange={handleInsertData} required>
                                {data.map((item, index) => (
                                    <option value={item.patientID}>{item.patientID}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <select name="providerID" id="providerID" onChange={handleInsertData} required>
                                {data.map((item, index) => (
                                    <option value={item.providerID}>{item.providerID}</option>
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

export default PatientProviderIntersectionPage;
/* 
Creates Patient Index page with working CRUD methods
Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
Code adapted to work with group 70's project.
*/

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBoxProviderProfiles } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';


function ProviderProfilesPage() {

    // implements INSERT to process new data 
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold provider attributes
    const [attributes, setAttributes] = useState({
        providerProfileID: "",
        title: "",
        specialty: "",
        providerPhoneNumber: "",
        providerID: "",
    });
    // obtain attributes for new entry
    const handleInsertData = (newValues) => {
        setAttributes((currentValues) => ({ ...currentValues, [newValues.target.name]: newValues.target.value }));
    };
    // obtain attributes for new entry
    const submitNewData = async (submit) => {
        submit.preventDefault()
        try {
            await axios.post("/sqlDataInsertProviderProfiles", attributes)
            window.location.reload()
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    // SELECT FROM ProviderProfiles
    const [providerProfileData, setProviderProfileData] = useState([]);   // Initialize state to hold fetched data

    // SELECT FROM Provider (for Inserting ID)
    const [providerData, setProviderData] = useState([]);
    useEffect(() => {
        fetchData('ProviderProfiles', setProviderProfileData);
        fetchData('Providers', setProviderData);
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

    // SELECT * FROM ProviderProfiles WHERE userChoice = ?
    const [userChoice, setUserChoice] = useState('');
    const handleChange = (choice) => {
        setUserChoice(choice.target.value);
    }
    const handleSearch = async (userInput) => {
        try {
            const response = await axios.get(`/sqlData/searchProviderProfiles?userChoice=${userChoice}&userInput=${userInput}`);
            setProviderProfileData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "searchProviderProfiles"; // hardcoded to search from ProviderProfiles
            let selection = "providerProfileID";        // hardcoded to search by providerProfileID
            const response = await axios.get(`/sqlData/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setProviderProfileData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // DELETE FROM ProviderProfiles WHERE providerID = ?
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    const deleteData = async (providerID) => {
        try {
            await axios.delete("/sqlDataDeleteProviderProfiles/" + providerID);
            window.location.reload()
        } catch (err) {
            console.error("Failed to delete data:", err);
        }
    };

    return (
        <div>
            <h3>Provider Profiles</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> detailed information for all providers from the MySQL database.</p>
                <p>Available information for each provider includes their Provider Profile ID, Title, Specialty, Phone Number, and Provider ID.</p>
                <p>Additionally, this page allows you to <b>insert</b>, or <b>add</b> information about a new provider that was created on List of Providers page.</p>
                <p>This page also allows you to <b>delete</b> information for each provider from the MySQL database.</p>
                <p>Lastly, this page also allows you to update update for each provider, including the ability to set Title, Specialty, and Phone Number as <b>NULL</b>.</p>
            </div>
            <div className='search-container'>
                <SearchDropdown
                    tableName="ProviderProfiles"
                    idProperty="providerProfileID"
                    onSelect={handleSelect} />
                <SearchBoxProviderProfiles
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={() => fetchData('ProviderProfiles', setProviderProfileData)}>Refresh Provider Profiles</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="providerdetailedinformation">
                        <thead>
                            <tr>
                                <th>Provider Profile ID</th>
                                <th>Title</th>
                                <th>Specialty</th>
                                <th>Phone Number</th>
                                <th>Provider ID</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {providerProfileData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.providerProfileID}</th>
                                    <th>{item.title}</th>
                                    <th>{item.specialty}</th>
                                    <th>{item.providerPhoneNumber}</th>
                                    <th>{item.providerID}</th>
                                    <th><RiChatDeleteFill className="icon" onClick={() => deleteData(item.providerID)} /></th>
                                    <th><Link to={`/sqlDataUpdateProviderProfiles/${item.providerID}`}><RiEdit2Fill /></Link></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add Provider Profile:</h4>
                        <div className="form-row">
                            <label for="providerID">Provider ID: </label>
                            <select name="providerID" id="providerID" onChange={handleInsertData} required>
                                {providerData.map((item, index) => (
                                    <option value={item.providerID}>{item.providerID}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="title">Title: </label>
                            <input type="text" name="title" id="title" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="specialty">Specialty: </label>
                            <input type="text" name="specialty" id="specialty" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="providerPhoneNumber">Phone Number: </label>
                            <input type="text" name="providerPhoneNumber" id="providerPhoneNumber" onChange={handleInsertData} required />
                        </div>
                        <br />
                        <button className="add-button" onClick={submitNewData}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProviderProfilesPage;
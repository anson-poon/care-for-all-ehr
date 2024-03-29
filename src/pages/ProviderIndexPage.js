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
import { DescriptionProviders } from '../components/DescriptionBox';
import { SearchBoxProviderIndex } from '../components/SearchBox';
import SearchDropdown from '../components/SearchDropdown';

/* Page to handle and display Provider Index Page */
function ProviderIndexPage() {

    // implement SELECT to obtain all records for Provider Index
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/provider-index/data');
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
            const response = await axios.get(`/provider-index/search/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "search"; // hardcoded to search from ProviderProfiles
            let selection = "providerID";        // hardcoded to search by providerProfileID
            const response = await axios.get(`/provider-index/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implements INSERT to process new data 
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold provider attributes
    const [attributes, setAttributes] = useState({
        providerID: "",
        providerFirstName: "",
        providerLastName: "",
    });
    // obtain attributes for new entry
    const handleInsertData = (newValues) => {
        setAttributes((currentValues) => ({ ...currentValues, [newValues.target.name]: newValues.target.value }));
    };
    // handle submission of new data (attributes)
    const submitNewData = async (submit) => {
        submit.preventDefault()
        try {
            await axios.post("/provider-index/create", attributes);
            window.location.reload();
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    // implements DELETE to remove a record
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // handles deletion of a record for Provider Index
    const deleteData = async (providerID) => {
        try {
            await axios.delete("/provider-index/delete/" + providerID);
            window.location.reload()
        } catch (err) {
            console.error("Failed to delete data:", err);
        }
    };

    return (
        <div>
            <h3>List of Providers</h3>
            <DescriptionProviders />
            <div className='search-container'>
                <SearchDropdown
                    route="provider-index"
                    idProperty="providerID"
                    onSelect={handleSelect} />
                <SearchBoxProviderIndex
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh List of Providers</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="providerindex">
                        <thead>
                            <tr>
                                <th>Provider ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.providerID}</th>
                                    <th>{item.providerFirstName}</th>
                                    <th>{item.providerLastName}</th>
                                    <th><RiChatDeleteFill className="icon" onClick={() => deleteData(item.providerID)} /></th>
                                    <th><Link to={`/provider-index/update/${item.providerID}`}><RiEdit2Fill /></Link></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a New Provider</h4>
                        <div className="form-row">
                            <label for="firstName">First Name: </label>
                            <input type="text" name="providerFirstName" id="firstproviderFirstNameName" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="lastName">Last Name: </label>
                            <input type="text" name="providerLastName" id="providerLastName" onChange={handleInsertData} required />
                        </div>
                        <br />
                        <button className="add-button" onClick={submitNewData}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProviderIndexPage;
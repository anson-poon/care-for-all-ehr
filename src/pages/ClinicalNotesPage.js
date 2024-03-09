// Create Clinical Notes Page that uses sample data from data directory

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBoxClinicalNotes } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';
import { redirect } from 'react-router-dom';

function ClinicalNotesPage() {

    // implement SELECT to obtain all records for Clinical Notes
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/clinical-notes/data');
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
            const response = await axios.get(`/clinical-notes/search/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "search"; // hardcoded to search from Insurance Notes
            let selection = "visitID";        // hardcoded to search by visitID
            const response = await axios.get(`/clinical-notes/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implement SELECT to obtain records for Visits that have not been associated with a clinical note
    const [noNote, setNote] = useState([]);
    useEffect(() => {
        fetchVisitWithoutNote();
    }, []);
    const fetchVisitWithoutNote = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/clinical-notes/selectiveinsert');
            // Set the fetched data to state
            setNote(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implements INSERT to process new data 
    // Code to implement INSERT learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold patient attributes
    const [attributes, setAttributes] = useState({
        clinicalNoteID: "",
        lengthOfVisit: "",
        visitID: "",
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
            await axios.post("/clinical-notes/create", attributes);
            window.location.reload();
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    return (
        <div>
            <h3>Clinical Notes</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on clinical notes that have been associated with existing visits between patients and providers in the MySQL database.</p>
                <p>Available information for each clinical note includes Clinical Note ID, Length of Visit, and Visit ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information about a clinical note for only new visits.</p>
            </div>
            <div className='search-container'>
                <SearchDropdown
                    route="clinical-notes"
                    idProperty="visitID"
                    onSelect={handleSelect} />
                <SearchBoxClinicalNotes
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh Clinical Notes</button>

            <div className="flex-container">
                <div className="flex-column1">
                    <table id="clinicalnotes">
                        <thead>
                            <tr>
                                <th>Clinical Note ID</th>
                                <th>Length of Visit</th>
                                <th>Visit ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.clinicalNoteID}</th>
                                    <th>{item.lengthOfVisit}</th>
                                    <th>{item.visitID}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a New Clinical Note</h4>
                        <div className="form-row">
                            <label for="lengthOfVisit">Length of Visit</label>
                            <input type="text" name="lengthOfVisit" id="lengthOfVisit" onChange={handleInsertData} required />
                        </div>
                        <div className="form-row">
                            <label for="visitID">Visit ID: </label>
                            <select name="visitID" id="visitID" onChange={handleInsertData} required>
                                <option value="" selected disabled hidden>Choose Attribute</option>
                                {noNote.map((item, index) => (
                                    <option value={item.visitID}>{item.visitID}</option>
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

export default ClinicalNotesPage;
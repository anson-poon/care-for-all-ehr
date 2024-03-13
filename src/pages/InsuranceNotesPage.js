import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { DescriptionInsuranceNotes } from '../components/DescriptionBox';
import { SearchBoxInsuranceNotes } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';
import { isDisabled } from '@testing-library/user-event/dist/utils';

/* Page to handle and display Insurance Notes page */
function InsuranceNotesPage() {

    // implement SELECT to obtain all records for Insurance Notes
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/insurance-notes/data');
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
            const response = await axios.get(`/insurance-notes/search/?userChoice=${userChoice}&userInput=${userInput}`);
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
            const response = await axios.get(`/insurance-notes/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implement SELECT to obtain records for Visits that have not been associated with an insurance note
    const [noNote, setNote] = useState([]);
    useEffect(() => {
        fetchVisitWithoutNote();
    }, []);

    // https://www.geeksforgeeks.org/how-to-disable-a-button-in-reactjs/ used to learn technique to create disable button with technique to inject css to change disable button color
    // https://www.shecodes.io/athena/72444-how-to-do-conditional-rendering-of-html-elements-in-react used to learn to do conditional rendering of HTML elements (custom message)
    // https://www.w3schools.com/react/react_css.asp how to do inline css to change color of custom messages
    const [disableButton, setDisableButton] = useState(false);
    const styleDisabledButton = {
        disabledButton: {
            padding: "0.5em 2em",
            fontSize: "1rem",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "ease-out 200ms",
        }
    };

    const fetchVisitWithoutNote = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/insurance-notes/selectiveinsert');
            // Set the fetched data to state
            if (response.data.length !== 0) {
                setDisableButton(false);
                setNote(response.data);
            } else {
                setDisableButton(true);
            }  
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // implements INSERT to process new data 
    // Code to implement INSERT learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    // create object to hold patient attributes
    const [attributes, setAttributes] = useState({
        insuranceNoteID: "",
        reimbursementCode: "",
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
            await axios.post("/insurance-notes/create", attributes);
            window.location.reload();
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    return (
        <div>
            <h3>Insurance Notes</h3>
            <DescriptionInsuranceNotes />
            <div className='search-container'>
                <SearchDropdown
                    route="insurance-notes"
                    idProperty="visitID"
                    onSelect={handleSelect} />
                <SearchBoxInsuranceNotes
                    userChoice={userChoice}
                    handleChange={handleChange}
                    handleSearch={handleSearch} />
            </div>
            <button className="SELECT-button" onClick={fetchData}>Refresh Insurance Notes</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="insurancenotes">
                        <thead>
                            <tr>
                                <th>Insurance Note ID</th>
                                <th>Reimbursement Code</th>
                                <th>Visit ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.insuranceNoteID}</th>
                                    <th>{item.reimbursementCode}</th>
                                    <th>{item.visitID}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add an Insurance Note for a New Visit</h4>
                        <div className="form-row">
                            <label for="reimbursementCode">Reimbursement Code: </label>
                            <input type="text" name="reimbursementCode" id="reimbursementCode" onChange={handleInsertData} required />
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
                        <button className="add-button" id="add-button" onClick={submitNewData} disabled={disableButton} style={disableButton ? styleDisabledButton.disabledButton : {}}>Add</button>
                        <div>
                            {disableButton ? <p style={{color: "red", textAlign: "center"}}>There is no visit available to be associated with a clinical note!</p> : <p style={{color: "blue", textAlign: "center"}}>A new visit is available to be associated with a clinical note!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InsuranceNotesPage;
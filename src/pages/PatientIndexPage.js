import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill} from 'react-icons/ri';
import { SearchBoxPatientIndex } from '../components/SearchBox';
// import patientData from '../data/patientData';

/*
Page returns function that shows patient index table
*/
function PatientIndexPage() {
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // SELECT * FROM Patients
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/sqlData/?table=Patients');
            // Set the fetched data to state
            setData(response.data); 
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // DE:ETE FROM Patients WHERE patientID = ?
    // technique to delete data credited to https://github.com/dhanavishnu13/CRUD_with_React_Node.js_MySQL/blob/main/frontend/src/pages/Books.jsx
    const deleteData = async (patientID) => {
        try {
            await axios.delete("/sqlDataDelete/" + patientID);
            window.location.reload()
        } catch (err){
            console.error("Failed to delete data:", err);
        }
    };

    // SELECT * FROM Patients WHERE userChoice = ?
    const [userChoice, setUserChoice] = useState('');

    const handleChange = (choice) => {
        setUserChoice(choice.target.value);
    }
    
    const handleSearch = async (userInput) => {
        try {
            const response = await axios.get(`/sqlData/searchPatient/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data); 
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    return (
        <div>
            <h3>List of Patients</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> a list of patients, if any, from the MySQL database.</p>
                <p>Available information on the list of patients from the database includes their IDs and names.</p>
                <p>Additionally, this page allows you to <b>insert</b> a new patient into the MySQL database.</p>
                <p>Lastly, this page allows you to <b>delete</b> patient(s) from the MySQL database.</p>
                <p><b>Special Note</b>:
                    Deleting a patient from the database will result in the removal of the patient's demographics from Information for Each Patient page, if any.
                    The patient's Patient ID and Patient Name, however, will not be changed for consideration of legality purposes.
                    Details of any visit the patient may have had with provider(s) will remain unchanged.
                </p>
            </div>
            <SearchBoxPatientIndex  
                userChoice={userChoice} 
                handleChange={handleChange} 
                handleSearch={handleSearch} />
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
                            </tr>
                        </thead>
                        <tbody>
                            {/* {patientData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.patientID}</th>
                                    <th>{item.patientFirstName}</th>
                                    <th>{item.patientLastName}</th>
                                    <th><RiChatDeleteFill className="icon" /></th>
                                </tr>
                            ))} */}
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.patientID}</th>
                                    <th>{item.patientFirstName}</th>
                                    <th>{item.patientLastName}</th>
                                    <th><RiChatDeleteFill className="icon" onClick={() => deleteData(item.patientID)} /></th>
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
                            <input type="text" name="firstNname" id="firstNname" required />
                        </div>
                        <div className="form-row">
                            <label for="lastName">Last Name: </label>
                            <input type="text" name="lastName" id="lastName" required />
                        </div>
                        <br />
                        <button className="add-button">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientIndexPage;
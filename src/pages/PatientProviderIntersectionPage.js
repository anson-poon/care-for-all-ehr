import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { DescriptionPatientProviderRelationships } from '../components/DescriptionBox';
import { SearchBoxPatientProviderRelationships } from '../components/SearchBox';
import { SearchDropdown } from '../components/SearchDropdown';

/* Page to handle and display Patient Provider Relationships (intersection table) page */
function PatientProviderIntersectionPage() {

    // const goToUpdatePage = useNavigate();

    // implement SELECT to obtain all records for Patient Provider Intersection
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // Fetch data from the database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/patient-provider-intersection/data');
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
            const response = await axios.get(`/patient-provider-intersection/search/?userChoice=${userChoice}&userInput=${userInput}`);
            console.log(response.data)
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // Handling search ID dropdown
    const handleSelect = async (selectionValue) => {
        try {
            let searchRoute = "search";  // hardcoded to search from Patients
            let selection = "patientID";        // hardcoded to search by patientID
            const response = await axios.get(`/patient-provider-intersection/${searchRoute}?userChoice=${selection}&userInput=${selectionValue}`);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

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
            await axios.post("/patient-provider-intersection/create", attributes)
            window.location.reload()
        } catch (err) {
            console.error("Error adding data:", err);
        }
    };

    // DELETE FROM PatientProfiles WHERE patientID = ?
    // Code citation:  Code to implement UPDATE, INSERT, DELETE learned from https://github.com/safak/youtube2022/tree/react-mysql. 
    const deleteData = async (patientID, providerID) => {
        try {
            await axios.delete("/patient-provider-intersection/delete/" + patientID + "/" + providerID);
            window.location.reload()
        } catch (err) {
            console.error("Failed to delete data:", err);
        }
    };

    return (
        <div>
            <h3>Patient/Provider Relationships</h3>
            <DescriptionPatientProviderRelationships />
            <div className='search-container'>
                <SearchDropdown
                    route="patient-provider-intersection"
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
                                    <th><Link to={`/patient-provider-intersection/update/${item.patientID}/${item.providerID}`}><RiEdit2Fill /></Link></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a Relationship Between a Patient and a Provider</h4>
                        <div className="form-row">
                            <label for="patientID">Patient ID:</label>
                            <select name="patientID" id="providerID" onChange={handleInsertData} required>
                                {data.map((item, index) => (
                                    <option value={item.patientID}>{item.patientID}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="providerID">Provider ID:</label>
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
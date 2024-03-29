// Component that allows for updating a record for Provider Index Page

import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePatientHasProviders() {
  /*
  Code citation: Group 70 learned how to create an update page that passes input values to 
  Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
  */

  // implement SELECT to obtain all records for Patient Provider Intersection
  const [patientData, setPatientData] = useState([]);   // Initialize state to hold fetched data
  const [providerData, setProviderData] = useState([]);   // Initialize state to hold fetched data

  // Fetch data from the database
  useEffect(() => {
    fetchPatientData();
    fetchProviderData();
  }, []);

  // function for fetching patient-index data
  const fetchPatientData = async () => {
    try {
      const response = await axios.get('/patient-index/data');
      setPatientData(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  // function for fetching provider-index data
  const fetchProviderData = async () => {
    try {
      const response = await axios.get('/provider-index/data');
      setProviderData(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  // go back to patient index page after submission of updated data or cancelling update of data
  const goBackToPatientProviderIntersection = useNavigate();

  // construct object to hold user entered patient's first and last name
  const [relationship, setRelationship] = useState({
    newPatientID: "",
    newProviderID: "",
  });

  //  parses URL to get patient ID
  const urlLocation = useLocation();
  const oldPatientID = urlLocation.pathname.split("/")[3];
  const oldProviderID = urlLocation.pathname.split("/")[4];

  // set user entered values for patient first name and last name 
  const setUpdateValues = (enteredValues) => {
    setRelationship((currentAttributes) => ({ ...currentAttributes, [enteredValues.target.name]: enteredValues.target.value }));
  };

  // once user submits data to update record, process data to be sent to MySQL
  const handleSubmissionOfUpdate = async (submitUpdate) => {
    submitUpdate.preventDefault();
    try {
      await axios.put(`/patient-provider-intersection/update/${oldPatientID}/${oldProviderID}`, relationship);
      goBackToPatientProviderIntersection("/patient-provider-intersection");
    } catch (err) {
      console.error("Failed to update data:", err);
    }
  };

  return (
    <div>
      <form action="" method="get" className="update-form">
        <h4>Update Provider Relationship</h4>
        <div className="form-row">
          <label for="newPatientID">Patient ID:</label>
          <select name="newPatientID" id="newPatientID" onChange={setUpdateValues} required>
            <option value="" selected disabled hidden>Choose Attribute</option>
            {patientData.map((item, index) => (
              <option value={item.patientID}>{item.patientID} ({item.patientFirstName} {item.patientLastName})</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label for="newProviderID">Provider ID:</label>
          <select name="newProviderID" id="newProviderID" onChange={setUpdateValues} required>
            <option value="" selected disabled hidden>Choose Attribute</option>
            {providerData.map((item, index) => (
              <option value={item.providerID}>{item.providerID} ({item.providerFirstName} {item.providerLastName})</option>
            ))}
          </select>
        </div>
        <br />
        <button className="add-button" onClick={handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBackToPatientProviderIntersection("/patient-provider-intersection")}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdatePatientHasProviders
// Component that allows for updating a record for Provider Index Page

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePatientIndexPage() {
  /*
  Code citation: Group 70 learned how to create an update page that passes input values to 
  Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
  */

  // go back to patient index page after submission of updated data or cancelling update of data
  const goBackToPatientIndex = useNavigate();

  // construct object to hold user entered patient's first and last name
  const [patientName, setPatientName] = useState({
    patientFirstName: "",
    patientLastName: "",
  });

  //  parses URL to get patient ID
  const urlLocation = useLocation();
  const patientID = urlLocation.pathname.split("/")[2];

  // Fetch data to prepopulate the form
  useEffect(() => {
    fetchPatientData();
  }, []);

  const fetchPatientData = async () => {
    try {
      const response = await axios.get('/sqlData/?table=Patients');
      const data = response.data;

      // Find the specific patient by ID
      const specificPatient = data.find(patients => patients.patientID === parseInt(patientID));

      // If exist, set state with that provider's first/last name
      if (specificPatient) {
        setPatientName({
          patientFirstName: specificPatient.patientFirstName,
          patientLastName: specificPatient.patientLastName
        });
      }
    } catch (err) {
      console.error("Error fetching patient data:", err);
    }
  };

  // set user entered values for patient first name and last name 
  const setUpdateValues = (enteredValues) => {
    setPatientName((currentAttributes) => ({ ...currentAttributes, [enteredValues.target.name]: enteredValues.target.value }));
  };

  // once user submits data to update record, process data to be sent to MySQL
  const handleSubmissionOfUpdate = async (submitUpdate) => {
    submitUpdate.preventDefault();
    try {
      await axios.put(`/sqlDataUpdate/${patientID}`, patientName);
      goBackToPatientIndex("/patientindex");
    } catch (err) {
      console.error("Failed to update data:", err);
    }
  };

  return (
    <div>
      <form action="" method="get" className="update-form">
        <h4>Update Patient Name</h4>
        <div className="form-row">
          <label for="patientFirstName">First Name:</label>
          <input type="text" name="patientFirstName" id="patientFirstName" value={patientName.patientFirstName} onChange={setUpdateValues} />
        </div>
        <div className="form-row">
          <label for="patientLastName">Last Name:</label>
          <input type="text" name="patientLastName" id="patientLastName" value={patientName.patientLastName} onChange={setUpdateValues} />
        </div>
        <br />
        <button className="add-button" onClick={handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBackToPatientIndex("/patientindex")}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdatePatientIndexPage
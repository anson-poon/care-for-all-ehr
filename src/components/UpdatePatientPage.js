// Component that can be imported to update a record on Patient Profiles Page

import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePatientPage () {
    
    /*
    Code citation: Group 70 learned how to create an update page that passes input values to 
    Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
    */

    // go back to patient profiles page after submission of updated data or cancelling update of data
    const goBackToPatientProfiles = useNavigate();

    // construct object to hold user entered patient's first and last name
    const [patientProfileAttributes, setPatientProfileAttributes] = useState({
        patientPhoneNumber: "",
        emailAddress: "",
        dateOfBirth: "",
      });
    
      //  parses URL to get patient ID
      const urlLocation = useLocation();
      const patientID = urlLocation.pathname.split("/")[2];
    
      // set user entered values for patient first name and last name 
      const setUpdateValues = (enteredValues) => {
        setPatientProfileAttributes((currentAttributes)=>({ ...currentAttributes, [enteredValues.target.name]:enteredValues.target.value}));
      };
    
      // once user submits data to update record, process data to be sent to MySQL
      const handleSubmissionOfUpdate = async (submitUpdate) => {
        submitUpdate.preventDefault();
        try {
          await axios.put(`/sqlDataUpdatePatientProfiles/${patientID}`, patientProfileAttributes);
          goBackToPatientProfiles("/patients");
        } catch (err) {
          console.error("Failed to update data:", err);
        }
  };


    return (
        <div>
            <form action="" method="get" className="add-form">
                <h4>Update Patient Information</h4>
                <div className="form-row">
                    <label for="patientPhoneNumber">Phone Number:</label>
                    <input type="text" name="patientPhoneNumber" id="patientPhoneNumber" onChange = {setUpdateValues} />
                </div>
                <div className="form-row">
                    <label for="emailAddress">Email Address:</label>
                    <input type="text" name="emailAddress" id="emailAddress" onChange = {setUpdateValues} />
                </div>
                <div className="form-row">
                    <label for="dateOfBirth">Date of Birth:</label>
                    <input type="text" name="dateOfBirth" id="dateOfBirth" onChange = {setUpdateValues} />
                </div>
                <br/>
                <button className="add-button" onClick = {handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBackToPatientProfiles("/patients")}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdatePatientPage
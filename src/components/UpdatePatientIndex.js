// Component that allows for updating a record for Patient Index Page

import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePatientIndexPage () {
    /*
    Code citation: Group 70 learned how to create an update page that passes input values to 
    Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
    */

    // construct object to hold user entered patient's first and last name
    const [patientName, setPatientName] = useState({
        patientFirstName: "",
        patientLastName: "",
      });
    
      //  parses URL to get patient ID
      const urlLocation = useLocation();
      const patientID = urlLocation.pathname.split("/")[2];

      // navigate user back to Patient Index page after data submitted to update record
      const goToPatientIndex = useNavigate();
      const refreshAfterRedirect = () => {goToPatientIndex(0)};
    
      // set user entered values for patient first name and last name 
      const setUpdateValues = (enteredValues) => {
        setPatientName((currentAttributes)=>({ ...currentAttributes, [enteredValues.target.name]:enteredValues.target.value}));
      };
    
      // once user submits data to update record, process data to be sent to MySQL
      const handleSubmissionOfUpdate = async (submitUpdate) => {
        submitUpdate.preventDefault();
        try {
          await axios.put(`/sqlDataUpdate/${patientID}`, patientName)
          .then(() => refreshAfterRedirect("/patientIndex"));
        } catch (err) {
          console.error("Failed to update data:", err);
        }
  };

    return (
        <div>
            <form action="" method="get" className="add-form">
                <h4>Update Patient Name</h4>
                <div className="form-row">
                    <label for="patientFirstName">First Name:</label>
                    <input type="text" name="patientFirstName" id="patientFirstName" onChange = {setUpdateValues} />
                </div>
                <div className="form-row">
                    <label for="patientLastName">Last Name:</label>
                    <input type="text" name="patientLastName" id="patientLastName" onChange = {setUpdateValues} />
                </div>
                <br/>
                <button className="add-button" onClick = {handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBack("/patients")}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdatePatientIndexPage
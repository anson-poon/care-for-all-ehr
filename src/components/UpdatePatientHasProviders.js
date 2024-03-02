// Component that allows for updating a record for Provider Index Page

import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePatientHasProviders () {
    /*
    Code citation: Group 70 learned how to create an update page that passes input values to 
    Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
    */

    // go back to patient index page after submission of updated data or cancelling update of data
    const goBackToPatientIndex = useNavigate();

    // construct object to hold user entered patient's first and last name
    const [relationship, setRelationship] = useState({
        newPatientID: "",
        newProviderID: "",
      });
    
      //  parses URL to get patient ID
      const urlLocation = useLocation();
      const oldPatientID = urlLocation.pathname.split("/")[2];
      const oldProviderID = urlLocation.pathname.split("/")[3];
    
      // set user entered values for patient first name and last name 
      const setUpdateValues = (enteredValues) => {
        setRelationship((currentAttributes)=>({ ...currentAttributes, [enteredValues.target.name]:enteredValues.target.value}));
      };
    
      // once user submits data to update record, process data to be sent to MySQL
      const handleSubmissionOfUpdate = async (submitUpdate) => {
        submitUpdate.preventDefault();
        try {
          await axios.put(`/sqlDataUpdatePHP/${oldPatientID}/${oldProviderID}`, relationship);
          goBackToPatientIndex("/patientproviderintersection");
        } catch (err) {
          console.error("Failed to update data:", err);
        }
  };

    return (
        <div>
            <form action="" method="get" className="add-form">
                <h4>Update Patient Name</h4>
                <div className="form-row">
                    <label for="newPatientID">Patient ID:</label>
                    <input type="text" name="newPatientID" id="newPatientID" onChange = {setUpdateValues} />
                </div>
                <div className="form-row">
                    <label for="newProviderID">Provider ID:</label>
                    <input type="text" name="newProviderID" id="newProviderID" onChange = {setUpdateValues} />
                </div>
                <br/>
                <button className="add-button" onClick = {handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBackToPatientIndex("/patientproviderintersection")}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdatePatientHasProviders
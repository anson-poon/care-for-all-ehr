// Component that allows for updating a record for Provider Index Page

import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateProviderIndexPage () {
    /*
    Code citation: Group 70 learned how to create an update page that passes input values to 
    Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
    */

    // go back to provider index page after submission of updated data or cancelling update of data
    const goBackToProviderIndex = useNavigate();

    // construct object to hold user entered provider's first and last name
    const [providerName, setProviderName] = useState({
        providerFirstName: "",
        providerLastName: "",
      });
    
      //  parses URL to get provider ID
      const urlLocation = useLocation();
      const providerID = urlLocation.pathname.split("/")[2];
    
      // set user entered values for Provider's first name and last name 
      const setUpdateValues = (enteredValues) => {
        setProviderName((currentAttributes)=>({ ...currentAttributes, [enteredValues.target.name]:enteredValues.target.value}));
      };
    
      // once user submits data to update record, process data to be sent to MySQL
      const handleSubmissionOfUpdate = async (submitUpdate) => {
        submitUpdate.preventDefault();
        try {
          await axios.put(`/sqlDataUpdatePI/${providerID}`, providerName);
          goBackToProviderIndex("/providerindex");
        } catch (err) {
          console.error("Failed to update data:", err);
        }
  };

    return (
        <div>
            <form action="" method="get" className="add-form">
                <h4>Update Provider Name</h4>
                <div className="form-row">
                    <label for="providerFirstName">First Name:</label>
                    <input type="text" name="providerFirstName" id="providerFirstName" onChange = {setUpdateValues} />
                </div>
                <div className="form-row">
                    <label for="providerLastName">Last Name:</label>
                    <input type="text" name="providerLastName" id="providerLastName" onChange = {setUpdateValues} />
                </div>
                <br/>
                <button className="add-button" onClick = {handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBackToProviderIndex("/providerindex")}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdateProviderIndexPage
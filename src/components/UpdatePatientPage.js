// Component that can be imported to update a record on Patient Profiles Page

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdatePatientPage () {
    
    const goBack = useNavigate();

    return (
        <div>
            <form action="" method="get" className="add-form">
                <h4>Update Patient Information</h4>
                <div className="form-row">
                    <label for="patientID">Phone Number:</label>
                    <input type="text" name="patientID" id="patientID" />
                </div>
                <div className="form-row">
                    <label for="name">Email Address:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                    <label for="name">Date of Birth:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <br/>
                <button className="add-button">Submit</button>                <button className="add-button" onClick={() => goBack("/patients")}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdatePatientPage
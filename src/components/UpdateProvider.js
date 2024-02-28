// Component to update a record for Provider Profiles page

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateProviderPage () {

    const goBack = useNavigate();

    return (
        <div>
            <form action="" method="get" className="add-form">
                <h4>Update Provider Information</h4>
                <div className="form-row">
                    <label for="patientID">Title:</label>
                    <input type="text" name="patientID" id="patientID" />
                </div>
                <div className="form-row">
                    <label for="name">Speciality:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                    <label for="name">Phone Number:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <br/>
                <button className="add-button">Submit</button>                <button className="add-button" onClick={() => goBack("/providers")}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdateProviderPage
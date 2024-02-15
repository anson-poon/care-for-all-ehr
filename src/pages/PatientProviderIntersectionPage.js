import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows patient provider intersection table
*/
function PatientProviderIntersectionPage() {
    return (
        <div>
            <h3>Patient/Provider Intersection</h3>
            <table id="patientproviderintersection">
                <thead>
                    <tr>
                        <th>patientID</th>
                        <th>providerID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0</th>
                        <th>5</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>6</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>                     
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add Link Between Patient and Provider</h4>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <input type="text" name="patientID" id="patientID" required />
                </div>
                <div className="form-row">
                    <label for="providerID">Provider ID: </label>
                    <input type="text" name="providerID" id="providerID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br/>
            <h4>Navigate to:</h4>
            <a href="/patients">Patient Details</a>
            <a href="/providers">Provider Details</a>
        </div>
    );
}

export default PatientProviderIntersectionPage;
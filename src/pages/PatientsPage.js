import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows patients table
*/
function PatientsPage() {
    return (
        <div>
            <h3>Patient Details</h3>
            <table id="patientsdetailedinformation">
                <thead>
                    <tr>
                        <th>Profile ID</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                        <th>Date of Birth</th>
                        <th>Patient ID</th>
                        <th>Visits</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>2</th>
                        <th>1112222</th>
                        <th>"a@apple.com"</th>
                        <th>1000-01-02</th>
                        <th>0</th>
                        <th>Visits</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr> 
                    <tr>
                        <th>3</th>
                        <th>2223333</th>
                        <th>"b@apple.com"</th>
                        <th>1000-01-03</th>
                        <th>1</th>
                        <th>Visits</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>               
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add New Patient</h4>
                <div className="form-row">
                    <label for="patientProfileID">Profile ID: </label>
                    <input type="text" name="patientProfileID" id="patientProfileID" required />
                </div>
                <div className="form-row">
                    <label for="phoneNumber">Phone Number: </label>
                    <input type="text" name="phoneNumber" id="phoneNumber" required />
                </div>
                <div className="form-row">
                    <label for="emailAddress">Email Address: </label>
                    <input type="text" name="emailAddress" id="emailAddress" required />
                </div>
                <div className="form-row">
                    <label for="dateOfBirth">Date of Birth: </label>
                    <input type="text" name="dateOfBirth" id="dateOfBirth" required />
                </div>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <input type="text" name="patientID" id="patientID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br/>
            <h4>Navigate to:</h4>
            <a href="/patientindex">Patient Index</a>
            <a href="/patientproviderintersection">Patient/Provider Intersection</a>
        </div>
    );
}

export default PatientsPage;
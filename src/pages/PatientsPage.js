import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { HiBell } from 'react-icons/hi2';

/*
Code citation: Code to import icons credited to https://react-icons.github.io/react-icons/
*/

/*
Page returns function that shows patients table
*/
function PatientsPage() {
    return (
        <div>
            <h3>Information for Each Patient</h3>
            <div className="stylePageDescription">
                <p>This page allows you to add a new patient with detailed information, which will also update the list of patients and intersection table with relevant attributes.</p>
                <p>Certain patient attributes, i.e., phone number, email address, and date of birth, are NULLable.</p>
                <p>Updating a patient's information will update relevant attributes in other tables.</p>
                <p>Deleting a patient will remove relevant information to this patient from other tables.</p>
                <p>The list of Visits that a patient has had with one or more providers can also be viewed by clicking on the appropriate button.</p>
            </div>
            <br></br>
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
                        <th><HiBell/></th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr> 
                    <tr>
                        <th>3</th>
                        <th>2223333</th>
                        <th>"b@apple.com"</th>
                        <th>1000-01-03</th>
                        <th>1</th>
                        <th><HiBell/></th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>               
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add a New Patient</h4>
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
        </div>
    );
}

export default PatientsPage;
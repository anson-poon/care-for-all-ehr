import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { HiBell } from 'react-icons/hi2';
import patientData from '../data/patientData';
import {SearchBoxPatientProfiles} from '../components/SearchBox';

/*
Code citation: Code to import icons credited to https://react-icons.github.io/react-icons/
*/

/*
Page returns function that shows patients table
*/
function PatientProfilesPage() {

    const goToUpdatePage = useNavigate();

    return (
        <div>
            <h3>Patient Profiles</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> detailed information for all patients from the MySQL database.</p>
                <p>Available information for each patient includes their Profile ID, Phone Number, Email Address, Date of Birth, and Patient ID.</p>
                <p>Additionally, this page allows you to <b>insert</b>, or <b>add</b> information about a new patient that was created on List of Patients page.</p>
                <p>This page also allows you to <b>delete</b> information for each patient from the MySQL database.</p>
                <p>Lastly, this page also allows you to update update for each patient, including the ability to set Phone Number, Email Address, and Date of Birth as <b>NULL</b>.</p>
            </div>
            <SearchBoxPatientProfiles />
            <button className="SELECT-button">Get Current Information for Each Patient</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="patientsdetailedinformation">
                        <thead>
                            <tr>
                                <th>Patient Profile ID</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th>Date of Birth</th>
                                <th>Patient ID</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patientData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.patientProfileID}</th>
                                    <th>{item.phoneNumber}</th>
                                    <th>{item.emailAddress}</th>
                                    <th>{item.dateOfBirth}</th>
                                    <th>{item.patientID}</th>
                                    <th><RiEdit2Fill className="icon" onClick={() => goToUpdatePage("/updatepatientpage")} /></th>
                                    <th><RiChatDeleteFill className="icon" /></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add Information for Patient ID:
                            <label for="patientID">   </label>
                            <select name="patientID">
                                <option value="0">0 (James)</option>
                                <option value="1">1 (Mary)</option>
                            </select>
                        </h4>
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
                        <br />
                        <button className="add-button">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientProfilesPage;
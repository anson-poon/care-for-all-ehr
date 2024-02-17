import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows patient index table
*/
function PatientIndexPage() {
    return (
        <div>
            <h3>List of Patients</h3>
            <div className="stylePageDescription">
                <p>This page allows you to add a new patient to an index table consisting of patients.</p>
                <p>Adding a patient to this table will add the patient to other tables with NULL attributes.</p>
                <p>Deleting a patient from this table will remove information of this patient from other tables.</p>
                <p>Updating a patient's ID and/or name from this table will update the name/ID of the patient in other tables.</p>
            </div>
            <br></br>
            <table id="patientindex">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0</th>
                        <th>James</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Mary</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add a New Patient</h4>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <input type="text" name="patientID" id="patientID" required />
                </div>
                <div className="form-row">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
        <br/>
        </div>
    );
}

export default PatientIndexPage;
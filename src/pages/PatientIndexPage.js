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
            <h3>Patient Index</h3>
            <table id="patientindex">
                <thead>
                    <tr>
                        <th>patientID</th>
                        <th>patientName</th>
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
                <h4>Add New Patient to Index</h4>
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
        <h4>Navigate to:</h4>
        <a href="/patients">Patient Details</a>
        </div>
    );
}

export default PatientIndexPage;
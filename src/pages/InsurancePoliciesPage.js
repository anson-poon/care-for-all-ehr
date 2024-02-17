import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows insurance policies table
*/
function InsurancePoliciesPage() {
    return (
        <div>
            <h3>List of Insurance Policies</h3>
            <div className="stylePageDescription">
                <p>This page will allow you to add, delete, and update an insurance policy.</p>
                <p>Adding a new insurance policy will add relevant entries in other tables.</p>
                <p>Deleting a record will remove relevant records from other tabes.</p>
                <p>Updating a record will modify existing data from other tables.</p>
            </div>
            <br></br>
            <table id="insurancepolicies">
                <thead>
                    <tr>
                        <th>Insurance ID</th>
                        <th>Insurance Type</th>
                        <th>Patient ID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>14</th>
                        <th>Anthem PPO</th>
                        <th>0</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>11</th>
                        <th>Blue Cross Blue Shield HMO</th>
                        <th>1</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>           
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add a New Insurance Policy</h4>
                <div className="form-row">
                    <label for="insuranceID">Insurance ID: </label>
                    <input type="text" name="insuranceID" id="insuranceID" required />
                </div>
                <div className="form-row">
                    <label for="insuranceType">Insurance Type: </label>
                    <input type="text" name="insuranceType" id="insuranceType" required />
                </div>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <input type="text" name="patientID" id="patientID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}

export default InsurancePoliciesPage;
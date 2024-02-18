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
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on insurance policies that have been associated with patients in the MySQL database.</p>
                <p>Available information for each insurance policy includes Insurance ID, Insurance Type, and Patient ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information about an insurance policy for an existing patient or a newly created patient.</p>
                <p><b>Special Note</b>:  If an insurance policy is already linked with a patient, then an error will occur if the insurance policy is linked with another patient.</p>
            </div>
            <br></br>
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
                    <select name="patientID">
                        <option value="0">0 (James)</option>
                        <option value="1">1 (Mary)</option>
                    </select>  
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br></br>
            <button className="SELECT-button">Get Current Information for Insurance Policies</button>
            <br></br>
            <br></br>
            <table id="insurancepolicies">
                <thead>
                    <tr>
                        <th>Insurance ID</th>
                        <th>Insurance Type</th>
                        <th>Patient ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>14</th>
                        <th>Anthem PPO</th>
                        <th>0</th>
                    </tr>
                    <tr>
                        <th>11</th>
                        <th>Blue Cross Blue Shield HMO</th>
                        <th>1</th>
                    </tr>           
                </tbody>
            </table>
        </div>
    );
}

export default InsurancePoliciesPage;
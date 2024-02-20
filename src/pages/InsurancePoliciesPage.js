import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import insuranceData from '../data/insuranceData';

/*
Page returns function that shows insurance policies table
*/
function InsurancePoliciesPage() {
    return (
        <div>
            <h3>Insurance Policies</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on insurance policies that have been associated with patients in the MySQL database.</p>
                <p>Available information for each insurance policy includes Insurance ID, Insurance Type, and Patient ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information about an insurance policy for an existing patient or a newly created patient.</p>
                <p><b>Special Note</b>:  If an insurance policy is already linked with a patient, then an error will occur if the insurance policy is linked with another patient.</p>
            </div>
            <button className="SELECT-button">Refresh List of Insurance Policies</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="insurancepolicies">
                        <thead>
                            <tr>
                                <th>Insurance ID</th>
                                <th>Insurance Type</th>
                                <th>Patient ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {insuranceData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.insuranceID}</th>
                                    <th>{item.type}</th>
                                    <th>{item.patientID}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
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
                        <br />
                        <button className="add-button">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InsurancePoliciesPage;
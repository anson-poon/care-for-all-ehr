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
            <h3>Insurance Policies</h3>
            <table id="insurancepolicies">
                <thead>
                    <tr>
                        <th>insuranceID</th>
                        <th>insuranceType</th>
                        <th>patientID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>10</th>
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
                <h4>Add New Insurance Policy</h4>
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
            <br/>
            <h4>Navigation to:</h4>
            <a href="/insurancenotes">Insurance Notes</a>
        </div>
    );
}

export default InsurancePoliciesPage;
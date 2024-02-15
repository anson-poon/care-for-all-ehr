import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows visits table
*/
function VisitsPage() {
    return (
        <div>
            <h3>All Visits</h3>
            <table id="visits">
                <thead>
                    <tr>
                        <th>visitID</th>
                        <th>visitDateTime</th>
                        <th>providerID</th>
                        <th>patientID</th>
                        <th>insuranceID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>20</th>
                        <th>1000-01-01 00:00:00</th>
                        <th>5</th>
                        <th>4</th>
                        <th>14</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>30</th>
                        <th>1000-01-02 00:10:10</th>
                        <th>6</th>
                        <th>3</th>
                        <th>13</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>     
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add New Visit</h4>
                <div className="form-row">
                    <label for="visitDateTime">Visit Date and Time: </label>
                    <input type="text" name="visitDateTime" id="visitDateTime" required />
                </div>
                <div className="form-row">
                    <label for="providerID">Provider ID: </label>
                    <input type="text" name="providerID" id="providerID" required />
                </div>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <input type="text" name="patientID" id="patientID" required />
                </div>
                <div className="form-row">
                    <label for="insuranceID">Insurance ID: </label>
                    <input type="text" name="insuranceID" id="insuranceID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br/>
            <h4>Navigate to:</h4>
            <a href='/insurancepolicies'>Insurance Policies</a>
            <a href='/clinicalnotes'>Clinical Notes</a>
        </div>
    );
}

export default VisitsPage;
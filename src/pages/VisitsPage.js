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
            <h3>List of Visits</h3>
            <div className="stylePageDescription">
                <p>This page allows you to add, delete, and update a visit.</p>
                <p>Adding a new visit will update relevant tables. If a visit is added with a provider or patient that does not exist, then the visit will not be successfully created.</p>
                <p>Updating a visit will update relevant entries from other tables.</p>
                <p>Deleting a visit will remove relevant entries from other tables.</p>
                <p>If a user searches for an insurance ID, then data will appear within the table showing information about the insurance policy, i.e., name of insurance plan.</p>
                <p>If a user searches for a visitID, then data will appear within the table showing information about the insurance reimbursement code submitted to the patient's insurance plan, along with basic information on the visit's associated clinical note, i.e., clinical note ID and length of the visit.</p>
                <p>Searching for information on visitID will also generate details of the clinical findings from the visit within the appropriate table.</p>
            </div>
            <br></br>
            <table id="visits">
                <thead>
                    <tr>
                        <th>Visit ID</th>
                        <th>Date and Time of Visit</th>
                        <th>Provider ID</th>
                        <th>Patient ID</th>
                        <th>Insurance ID</th>
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
                <h4>Add a New Visit</h4>
                <div className="form-row">
                    <label for="visitDateTime">Date and Time: </label>
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
            <form action="" method="get" className="add-form">
                <h4>Search for Insurance Policy</h4>
                <br></br>
                <label for="insurance-policy">Find more information on insurance policy for insurance ID:</label>
                <select name="insurance-policy">
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
                <p></p>
                <br></br>
                <div>
                    <table id="resizeSearch">
                        <thead>
                            <th>Insurance Type</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Anthem PPO</th>
                            </tr>
                    </tbody>
                    </table>
                </div>
            </form>
            <form action="" method="get" className="add-form">
                <h4>Get More Details</h4>
                <br></br>
                <label for="visit-id-info">Get detailed information for visit ID:</label>
                <select name="visit-id-info">
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                <p></p>
                <br></br>
                <div>
                    <table id="resizeSearch">
                        <thead>
                            <th>Reimbursement Code</th>
                            <th>Length of Visit</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>10:20:00</th>
                            </tr>
                        </tbody>
                        <br></br>
                        <thead>
                            <th>Chief Complaint</th>
                            <th>Blood Pressure</th>
                            <th>Heart Rate</th>
                            <th>Temperature</th>
                            <th>Respiratory Rate</th>
                            <th>Treatment Plan</th>
                        </thead>
                        <tbody>
                            <tr>
                            <th>"chest pain"</th>
                                <th>2</th>
                                <th>60</th>
                                <th>98</th>
                                <th>28</th>
                                <th>"History of heart disease"</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default VisitsPage;
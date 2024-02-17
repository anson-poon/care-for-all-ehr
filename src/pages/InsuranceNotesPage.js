import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows insurance notes table
*/
function InsuranceNotesPage() {
    return (
        <div>
            <h3>List of Insurance Notes</h3>
            <div className="stylePageDescription">
                <p>This page will allow you to add, delete, and update an insurance note.</p>
                <p>Adding a new insurance policy will add relevant entries in other tables.</p>
                <p>Deleting a record will remove relevant records from other tabes.</p>
                <p>Updating a record will modify existing data from other tables.</p>
            </div>
            <br></br>
            <table id="insurancenotes">
                <thead>
                    <tr>
                        <th>Insurance Note ID</th>
                        <th>Reimbursement Code</th>
                        <th>Visit ID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>500</th>
                        <th>1</th>
                        <th>20</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>600</th>
                        <th>2</th>
                        <th>30</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>           
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add a New Insurance Note</h4>
                <div className="form-row">
                    <label for="reimbursementCode">Reimbursement Code: </label>
                    <input type="text" name="reimbursementCode" id="reimbursementCode" required />
                </div>
                <div className="form-row">
                    <label for="visitID">Visit ID: </label>
                    <input type="text" name="visitID" id="visitID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}

export default InsuranceNotesPage;
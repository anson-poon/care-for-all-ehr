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
            <h3>Insurance Notes</h3>
            <table id="insurancenotes">
                <thead>
                    <tr>
                        <th>insuranceNoteID</th>
                        <th>reimbursementCode</th>
                        <th>visitID</th>
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
                        <th>visitID</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>           
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add new Insurance Note</h4>
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
            <br/>
            <a href="/insurancepolicies">Insurance Policies</a>
        </div>
    );
}

export default InsuranceNotesPage;
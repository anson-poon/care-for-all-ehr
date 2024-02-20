import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBoxInsuranceNotes } from '../components/SearchBox';

/*
Page returns function that shows insurance notes table
*/
function InsuranceNotesPage() {
    return (
        <div>
            <h3>Insurance Notes</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on insurance notes that have been associated with existing visits between patients and providers in the MySQL database.</p>
                <p>Available information for each insurance note includes Insurance Note ID, Reimbursement Code, and VisitID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information about an insurance note for only new visits.</p>
            </div>
            <SearchBoxInsuranceNotes />
            <button className="SELECT-button">Refresh Insurance Notes</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="insurancenotes">
                        <thead>
                            <tr>
                                <th>Insurance Note ID</th>
                                <th>Reimbursement Code</th>
                                <th>Visit ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>500</th>
                                <th>1</th>
                                <th>20</th>
                            </tr>
                            <tr>
                                <th>600</th>
                                <th>2</th>
                                <th>30</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add an Insurance Note for a New Visit</h4>
                        <div className="form-row">
                            <label for="reimbursementCode">Reimbursement Code: </label>
                            <input type="text" name="reimbursementCode" id="reimbursementCode" required />
                        </div>
                        <div className="form-row">
                            <label for="visitID">Visit ID: </label>
                            <select name="visitID">
                                <option value="2">2 (between Patient Jacob and Provider Alex)</option>
                                <option value="3">3 (between Patient Rapheal and Provider Tiffany)</option>
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

export default InsuranceNotesPage;
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBoxVisits } from '../components/SearchBox';
import visitData from '../data/visitData';

/*
Page returns function that shows visits table
*/
function VisitsPage() {
    return (
        <div>
            <h3>Visits</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on visits that have already been associated between patients and providers in the MySQL database.</p>
                <p>Available information for each visit includes Visit ID, Date and Time of Visit, Provider ID, Patient ID, and Insurance ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information on a new visit between a patient and a provider when the following requirements have been <b>met</b>:</p>
                <ol className="userGuide">
                    <li>The relationship between a patient and a provider have been formed on the Relationships between Patients & Providers page.</li>
                    <li>An insurance ID has been associated with a patient on the List of Insurance Policies page.</li>
                </ol>
                <p>Failure to meet these requirements will result in an error if the creation of the new visit is attempted.</p>
                <p><b>Special Note</b>:  When a provider is selected, then the appropriate form will automatically generate the patients that have a relationship with the provider. Then once the patient is selected, then the form will also automatically generate insurance policies that have been associated with the specific patient.</p>
            </div>
            <SearchBoxVisits />
            <button className="SELECT-button">Refresh Visits</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="visits">
                        <thead>
                            <tr>
                                <th>Visit ID</th>
                                <th>Date & Time</th>
                                <th>Provider ID</th>
                                <th>Patient ID</th>
                                <th>Insurance ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.visitID}</th>
                                    <th>{item.dateTime}</th>
                                    <th>{item.providerID}</th>
                                    <th>{item.patientID}</th>
                                    <th>{item.insuranceID}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a New Visit</h4>
                        <div className="form-row">
                            <label for="visitDateTime">Date and Time: </label>
                            <input type="datetime-local" name="visitDateTime" id="visitDateTime" required />
                        </div>
                        <div className="form-row">
                            <label for="providerID">Provider ID:  </label>
                            <select name="providerID">
                                <option value="5">5 (Avery)</option>
                                <option value="6">6 (Roy)</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="patientID">Patient ID:  </label>
                            <select name="patientID">
                                <option value="0">0 (James)</option>
                                <option value="1">1 (Mary)</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="insuranceID">Insurance ID: </label>
                            <select name="insuranceID">
                                <option value="11">11 (Anthem PPO)</option>
                                <option value="14">14 (Blue Cross Blue Shield HMO)</option>
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

export default VisitsPage;
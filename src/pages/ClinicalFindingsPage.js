import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBarClinicalFindings } from '../components/SearchBox';

/*
Page returns function that shows clinical findings table
*/
function ClinicalFindingsPage() {
    return (
        <div>
            <h3>List of Clinical Findings</h3>
            <div className="stylePageDescription">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on clinical findings that have been associated with existing clinical note IDs in the MySQL database.</p>
                <p>Available information for each clinical findings note includes Clinical Finding ID, Chief Complaint, Patient Blood Pressure, Patient Heart Rate, Patient Temperature, Patient Respiratory Rate, Treatment Plan, and Clinical Note ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information on clinical findings for only a new clinical note ID.</p>
            </div>
            <SearchBarClinicalFindings/>
            <form action="" method="get" className="add-form">
                <h4>Add Clinical Findings to a New Clinical Note</h4>
                <div className="form-row">
                    <label for="chiefComplaint">Chief Complaint: </label>
                    <input type="text" name="chiefComplaint" id="chiefComplaint" required />
                </div>
                <div className="form-row">
                    <label for="patientBloodPressure">Patient Blood Pressure: </label>
                    <input type="text" name="patientBloodPressure" id="patientBloodPressure" required />
                </div>
                <div className="form-row">
                    <label for="patientHeartRate">Patient Heart Rate: </label>
                    <input type="text" name="patientHeartRate" id="patientHeartRate" required />
                </div>
                <div className="form-row">
                    <label for="patientTemperature">Patient Temperature: </label>
                    <input type="text" name="patientTemperature" id="patientTemperature" required />
                </div>
                <div className="form-row">
                    <label for="patientRespiratoryRate">Patient Respiratory Rate: </label>
                    <input type="text" name="patientRespiratoryRate" id="patientRespiratoryRate" required />
                </div>
                <div className="form-row">
                    <label for="narrativeTreatmentPlan">Narrative Treatment Plan: </label>
                    <input type="text" name="narrativeTreatmentPlan" id="narrativeTreatmentPlan" required />
                </div>
                <div className="form-row">
                    <label for="clinicalNoteID">Clinical Note ID:</label>
                    <select name="clinicalNoteID">
                        <option value="13">13 (between Patient Jacob and Provider Alex)</option>
                        <option value="14">14 (between Patient Rapheal and Provider Tiffany)</option>
                    </select>  
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br></br>
            <button className="SELECT-button">Get Current Information for Clinical Findings</button>
            <br></br>
            <br></br>
            <table id="clinicalfindings">
                <thead>
                    <tr>
                        <th>Clinical Finding ID</th>
                        <th>Chief Complaint</th>
                        <th>Blood Pressure</th>
                        <th>Heart Rate</th>
                        <th>Temperature</th>
                        <th>Respiratory Rate</th>
                        <th>Treatment Plan</th>
                        <th>Clinical Note ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>11</th>
                        <th>"chest pain"</th>
                        <th>2</th>
                        <th>60</th>
                        <th>98</th>
                        <th>28</th>
                        <th>"History of heart disease"</th>
                        <th>20</th>
                    </tr>
                    <tr>
                        <th>12</th>
                        <th>"stomach pain"</th>
                        <th>1</th>
                        <th>40</th>
                        <th>95</th>
                        <th>22</th>
                        <th>"Complains of severe abdominal pain, left lower..."</th>
                        <th>13</th>
                    </tr>         
                </tbody>
            </table>
        </div>
    );
}

export default ClinicalFindingsPage;
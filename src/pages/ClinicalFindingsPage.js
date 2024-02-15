import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows clinical findings table
*/
function ClinicalFindingsPage() {
    return (
        <div>
            <h3>Clinical Findings</h3>
            <table id="clinicalfindings">
                <thead>
                    <tr>
                        <th>clinicalFindingID</th>
                        <th>chiefComplaint</th>
                        <th>patientBloodPressure</th>
                        <th>patientHeartRate</th>
                        <th>patientTemperature</th>
                        <th>patientRespiratoryRate</th>
                        <th>narrativeTreatmentPlan</th>
                        <th>clinicalNoteID</th>
                        <th>Update</th>
                        <th>Delete</th>
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
                        <th>12</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
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
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>         
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add New Clinical Finding</h4>
                <div className="form-row">
                    <label for="clinicalFindingID">Clinical Finding ID: </label>
                    <input type="text" name="clinicalFindingID" id="clinicalFindingID" required />
                </div>
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
                    <label for="clinicalNoteID">Clinical Note ID: </label>
                    <input type="text" name="clinicalNoteID" id="clinicalNoteID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br/>
            <h4>Navigation to:</h4>
            <a href="/clinicalnotes">Clinical Notes</a>
        </div>
    );
}

export default ClinicalFindingsPage;
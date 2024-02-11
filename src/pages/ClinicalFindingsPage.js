import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ClinicalFindingsPage() {
    return (
        <div>
            <h4>Clinical Findings Page</h4>
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
        <a href="/clinicalnotes">go to clinical notes page</a>
        <a href="/visits">go to visits page</a>
        <a href="/addupdatedeleteclinicalfindings">go to add, update, or delete clinical findings page</a>
        </div>
    );
}

export default ClinicalFindingsPage;
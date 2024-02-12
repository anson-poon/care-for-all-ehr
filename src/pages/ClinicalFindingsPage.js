import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

function ClinicalFindingsPage() {
    return (
        <div>
            <h4>Clinical Findings</h4>
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
            <tr>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
            </tr>
            <button>Add new clinical findings</button>
        </table>
        <a href="/clinicalnotes">Clinical Notes</a>
        </div>
    );
}

export default ClinicalFindingsPage;
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientIndexPage() {
    return (
        <div>
            <h4>Patient Index Page</h4>
            <table id="patientindex">
            <thead>
                <tr>
                    <th>patientID</th>
                    <th>patientName</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>0</th>
                    <th>James</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>Mary</th>
                </tr>                 
            </tbody>
        </table>
        <a href="/patients">go to detailed patient information page</a>
        <a href="/addupdatedeletepatientindex">go to add, update, or delete patient index page</a>
        </div>
    );
}

export default PatientIndexPage;
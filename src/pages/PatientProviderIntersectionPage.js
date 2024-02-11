import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientProviderIntersectionPage() {
    return (
        <div>
            <h4>Patient Provider Intersection Page</h4>
            <table id="patientproviderintersection">
            <thead>
                <tr>
                    <th>patientID</th>
                    <th>providerID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>0</th>
                    <th>5</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>6</th>
                </tr>                 
            </tbody>
        </table>
        <a href="/patients">go to patients page</a>
        <a href="/providers">go to providers page</a>
        <a href="/addupdatedeletepatientproviderintersection">go to add, update, or delete patient provider intersection page</a>
        </div>
    );
}

export default PatientProviderIntersectionPage;
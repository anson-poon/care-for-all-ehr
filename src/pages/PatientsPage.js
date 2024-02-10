import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientsPage() {
    return (
        <div>
            <h4>Patients</h4>
            <table id="patients">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Temp</th>
                    <th>Temp</th>
                    <th>Temp</th>
                    <th>Temp</th>
                    <th>Temp</th>
                </tr>           
            </tbody>
        </table>
        </div>
    );
}

export default PatientsPage;
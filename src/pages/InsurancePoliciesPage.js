import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InsurancePoliciesPage() {
    return (
        <div>
            <h4>Insurance Policies Page</h4>
            <table id="insurancepolicies">
            <thead>
                <tr>
                    <th>insuranceID</th>
                    <th>insuranceType</th>
                    <th>patientID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>10</th>
                    <th>Anthem PPO</th>
                    <th>0</th>
                </tr>
                <tr>
                    <th>11</th>
                    <th>Blue Cross Blue Shield HMO</th>
                    <th>1</th>
                </tr>                
            </tbody>
        </table>
        <a href="/insurancenotes">go to insurance notes page</a>
        <a href="/visits">go to visits page</a>
        <a href="/addupdatedeleteinsurancepolicies">go to add, update, or delete insurance policies page</a>
        </div>
    );
}

export default InsurancePoliciesPage;
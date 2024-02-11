import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InsuranceNotesPage() {
    return (
        <div>
            <h4>Insurance Notes Page</h4>
            <table id="insurancenotes">
            <thead>
                <tr>
                    <th>insuranceNoteID</th>
                    <th>reimbursementCode</th>
                    <th>visitID</th>
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
                    <th>visitID</th>
                </tr>                
            </tbody>
        </table>
        <a href="/insurancepolicies">go to insurance policies page</a>
        <a href="/visits">go to visits page</a>
        <a href="/addupdatedeleteinsurancenotes">go to add, update, or delete insurance notes page</a>
        </div>
    );
}

export default InsuranceNotesPage;
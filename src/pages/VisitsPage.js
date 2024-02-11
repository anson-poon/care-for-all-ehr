import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VisitsPage() {
    return (
        <div>
            <h4>Visits</h4>
            <table id="visits">
            <thead>
                <tr>
                    <th>visitID</th>
                    <th>visitDateTime</th>
                    <th>providerID</th>
                    <th>patientID</th>
                    <th>insurancEID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>20</th>
                    <th>1000-01-01 00:00:00</th>
                    <th>5</th>
                    <th>4</th>
                    <th>14</th>
                </tr>
                <tr>
                    <th>30</th>
                    <th>1000-01-02 00:10:10</th>
                    <th>6</th>
                    <th>3</th>
                    <th>13</th>
                </tr>                
            </tbody>
        </table>
        <a href='/insurancepolicies'>go to insurance policies page</a>
        <a href='/clinicalnotes'>go to clinical notes page</a>
        <a href="/addupdatedeletevisits">go to add, update, or delete visits page</a>
        </div>
    );
}

export default VisitsPage;
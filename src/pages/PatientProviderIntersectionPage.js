import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

function PatientProviderIntersectionPage() {
    return (
        <div>
            <h4>Patient/Provider Intersection</h4>
            <table id="patientproviderintersection">
            <thead>
                <tr>
                    <th>patientID</th>
                    <th>providerID</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>0</th>
                    <th>5</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>6</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr>
                <tr>
                    <th>
                        <input type="text"/>
                    </th> 
                    <th>
                        <input type="text"/>
                    </th>       
                </tr>                       
            </tbody>
        </table>
        <button className="add-button">Add Link Between Patient and Provider</button>
        <br/>
        <a href="/patients">Patient Details</a>
        <a href="/providers">Provider Details</a>
        </div>
    );
}

export default PatientProviderIntersectionPage;
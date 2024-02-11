import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

function PatientProviderIntersectionPage() {
    return (
        <div>
            <h4>Patient Provider Intersection Page</h4>
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
            <button>Add link between a patient and provider</button>
        </table>

        <a href="/patients">go to patients page</a>
        <a href="/providers">go to providers page</a>
        </div>
    );
}

export default PatientProviderIntersectionPage;
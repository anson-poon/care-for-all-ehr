import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows patients table
*/
function PatientsPage() {
    return (
        <div>
            <h3>Patient Details</h3>
            <table id="patientsdetailedinformation">
            <thead>
                <tr>
                    <th>patientProfileID</th>
                    <th>patientPhoneNumber</th>
                    <th>emailAddress</th>
                    <th>dateOfBirth</th>
                    <th>patientID</th>
                    <th>Visits</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>2</th>
                    <th>1112222</th>
                    <th>"a@apple.com"</th>
                    <th>1000-01-02</th>
                    <th>0</th>
                    <th>Visits</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr> 
                <tr>
                    <th>3</th>
                    <th>2223333</th>
                    <th>"b@apple.com"</th>
                    <th>1000-01-03</th>
                    <th>1</th>
                    <th>Visits</th>
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
            </tbody>
        </table>
        <button className="add-button">Add New Patient</button>
        <br/>
        <a href="/patientindex">Patient Index</a>
        <a href="/patientproviderintersection">Patient/Provider Intersection</a>
        </div>
    );
}

export default PatientsPage;
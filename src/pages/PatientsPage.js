import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

function PatientsPage() {
    return (
        <div>
            <h4>Patients Detailed Information Page</h4>
            <table id="patientsdetailedinformation">
            <thead>
                <tr>
                    <th>patientProfileID</th>
                    <th>patientPhoneNumber</th>
                    <th>emailAddress</th>
                    <th>dateOfBirth</th>
                    <th>patientID</th>
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
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr> 
                <tr>
                    <th>3</th>
                    <th>2223333</th>
                    <th>"b@apple.com"</th>
                    <th>1000-01-03</th>
                    <th>1</th>
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
            <button>Add information about a new patient</button>
            <a href="/patientindex">go to patient index page</a>
            <a href="/patientproviderintersection">go to patient provider intersection page</a>
        </table>
        </div>
    );
}

export default PatientsPage;
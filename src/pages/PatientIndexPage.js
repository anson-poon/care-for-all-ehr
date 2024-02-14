import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows patient index table
*/
function PatientIndexPage() {
    return (
        <div>
            <h4>Patient Index</h4>
            <table id="patientindex">
            <thead>
                <tr>
                    <th>patientID</th>
                    <th>patientName</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>0</th>
                    <th>James</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>Mary</th>
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
        <button className="add-button">Add New Patient to Index</button>
        <br/>
        <a href="/patients">Patient Details</a>
        </div>
    );
}

export default PatientIndexPage;
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows insurance notes table
*/
function InsuranceNotesPage() {
    return (
        <div>
            <h3>Insurance Notes</h3>
            <table id="insurancenotes">
            <thead>
                <tr>
                    <th>insuranceNoteID</th>
                    <th>reimbursementCode</th>
                    <th>visitID</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>500</th>
                    <th>1</th>
                    <th>20</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr>
                <tr>
                    <th>600</th>
                    <th>2</th>
                    <th>visitID</th>
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
                </tr>                    
            </tbody>
        </table>
        <button className="add-button">Add new insurance note</button>
        <br/>
        <a href="/insurancepolicies">Insurance Policies</a>
        </div>
    );
}

export default InsuranceNotesPage;
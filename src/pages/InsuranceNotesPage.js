import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

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
            <button>Add new insurance note</button>
        </table>
        <a href="/insurancepolicies">go to insurance policies page</a>
        <a href="/visits">go to visits page</a>
        </div>
    );
}

export default InsuranceNotesPage;
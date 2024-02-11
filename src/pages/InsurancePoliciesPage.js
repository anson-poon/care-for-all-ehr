import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

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
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>10</th>
                    <th>Anthem PPO</th>
                    <th>0</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr>
                <tr>
                    <th>11</th>
                    <th>Blue Cross Blue Shield HMO</th>
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
                </tr>             
            </tbody>
            <button>Add new insurance policy</button>
        </table>
        <a href="/insurancenotes">go to insurance notes page</a>
        <a href="/visits">go to visits page</a>
        </div>
    );
}

export default InsurancePoliciesPage;
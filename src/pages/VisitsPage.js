import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

function VisitsPage() {
    return (
        <div>
            <h4>All Visits</h4>
            <table id="visits">
            <thead>
                <tr>
                    <th>visitID</th>
                    <th>visitDateTime</th>
                    <th>providerID</th>
                    <th>patientID</th>
                    <th>insuranceID</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>20</th>
                    <th>1000-01-01 00:00:00</th>
                    <th>5</th>
                    <th>4</th>
                    <th>14</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr>
                <tr>
                    <th>30</th>
                    <th>1000-01-02 00:10:10</th>
                    <th>6</th>
                    <th>3</th>
                    <th>13</th>
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
        <button>Add New Visit</button>
        <a href='/insurancepolicies'>Insurance Policies</a>
        <a href='/clinicalnotes'>Clinical Notes</a>
        </div>
    );
}

export default VisitsPage;
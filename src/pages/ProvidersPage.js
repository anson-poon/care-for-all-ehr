import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows providers table
*/
function ProvidersPage() {
    return (
        <div>
            <h4>Provider Details</h4>
            <table id="providerdetailedinformation">
            <thead>
                <tr>
                    <th>providerProfileID</th>
                    <th>title</th>
                    <th>specialty</th>
                    <th>providerPhoneNumber</th>
                    <th>providerID</th>
                    <th>Visits</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>2</th>
                    <th>MD</th>
                    <th>General Surgeon</th>
                    <th>234567</th>
                    <th>5</th>
                    <th>Visits</th>
                    <th><RiEdit2Fill/></th>
                    <th><RiChatDeleteFill/></th>
                </tr>    
                <tr>
                    <th>3</th>
                    <th>DO</th>
                    <th>General Hospitalist</th>
                    <th>234568</th>
                    <th>6</th>
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
        <button className="add-button">Add New Provider</button>
        <br/>
        <a href="/providerindex">Provider Index</a>
        <a href="/patientproviderintersection">Patient/Provider Intersection</a>
        </div>
    );
}

export default ProvidersPage;
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
            <h3>Provider Details</h3>
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
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add New Provider</h4>
                <div className="form-row">
                    <label for="title">Title: </label>
                    <input type="text" name="title" id="title" required />
                </div>
                <div className="form-row">
                    <label for="specialty">Specialty: </label>
                    <input type="text" name="specialty" id="specialty" required />
                </div>
                <div className="form-row">
                    <label for="providerPhoneNumber">Phone Number: </label>
                    <input type="text" name="providerPhoneNumber" id="providerPhoneNumber" required />
                </div>
                <div className="form-row">
                    <label for="providerID">Provider ID: </label>
                    <input type="text" name="providerID" id="providerID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br/>
            <h4>Navigate to:</h4>
            <a href="/providerindex">Provider Index</a>
            <a href="/patientproviderintersection">Patient/Provider Intersection</a>
        </div>
    );
}

export default ProvidersPage;
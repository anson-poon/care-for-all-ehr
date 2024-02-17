import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { HiBell } from 'react-icons/hi2';

/*
Code citation: Code to import icons credited to https://react-icons.github.io/react-icons/
*/

/*
Page returns function that shows providers table
*/
function ProvidersPage() {
    return (
        <div>
            <h3>Information for Each Provider</h3>
            <div className="stylePageDescription">
                <p>This page allows you to add a new provider, update information about a provider, and remove a provider.</p>
                <p>Adding a new provider with relevant details, such as specialty, will create a new provider entry in appropriate tables.</p>
                <p>Deleting a provider will remove relevant entries from other tables.</p>
                <p>Updating a provider will update information from other entries, as appropriate.</p>
                <p>The list of Visits that a provider has had with one or more patients can also be viewed by clicking on the appropriate button.</p>
            </div>
            <br></br>
            <table id="providerdetailedinformation">
                <thead>
                    <tr>
                        <th>Provider Profile ID</th>
                        <th>Title</th>
                        <th>Specialty</th>
                        <th>Phone Number</th>
                        <th>Provider ID</th>
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
                        <th><HiBell/></th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>    
                    <tr>
                        <th>3</th>
                        <th>DO</th>
                        <th>General Hospitalist</th>
                        <th>234568</th>
                        <th>6</th>
                        <th><HiBell/></th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>      
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add a New Provider</h4>
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
        </div>
    );
}

export default ProvidersPage;
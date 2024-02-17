import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows clinical notes table
*/
function ClinicalNotesPage() {
    return (
        <div>
            <h3>List of Clinical Notes</h3>
            <div className="stylePageDescription">
                <p>This page will allow you to add, delete, and update a clinical note.</p>
                <p>Adding a new clinical note will add relevant entries in other tables.</p>
                <p>Deleting a record will remove relevant records from other tabes.</p>
                <p>Updating a record will modify existing data from other tables.</p>
            </div>
            <br></br>
            <table id="clinicalnotes">
                <thead>
                    <tr>
                        <th>Clinical Note ID</th>
                        <th>Length of Visit</th>
                        <th>Visit ID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>12</th>
                        <th>10:20:00</th>
                        <th>20</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>13</th>
                        <th>10:30:00</th>
                        <th>30</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr> 
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add New Clinical Note</h4>
                <div className="form-row">
                    <label for="visitID">Visit ID: </label>
                    <input type="text" name="visitID" id="visitID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}

export default ClinicalNotesPage;
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
            <h3>Clinical Notes</h3>
            <table id="clinicalnotes">
                <thead>
                    <tr>
                        <th>clinicalNoteID</th>
                        <th>visitID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>12</th>
                        <th>20</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>13</th>
                        <th>30</th>
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
            <form action="" method="get" className="add-form">
                <h4>Add New Clinical Note</h4>
                <div className="form-row">
                    <label for="clinicalNoteID">Clinical Note ID: </label>
                    <input type="text" name="clinicalNoteID" id="clinicalNoteID" required />
                </div>
                <div className="form-row">
                    <label for="visitID">Visit ID: </label>
                    <input type="text" name="visitID" id="visitID" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br/>
            <h4>Navigation to:</h4>
            <a href="/clinicalfindings">Clinical Findings</a>
        </div>
    );
}

export default ClinicalNotesPage;
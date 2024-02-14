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
        <button className="add-button">Add New Clinical Note</button>
        <br/>
        <a href="/clinicalfindings">Clinical Findings</a>
        </div>
    );
}

export default ClinicalNotesPage;
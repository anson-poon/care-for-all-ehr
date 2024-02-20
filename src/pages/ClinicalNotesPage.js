import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBoxClinicalNotes } from '../components/SearchBox';

/*
Page returns function that shows clinical notes table
*/
function ClinicalNotesPage() {
    return (
        <div>
            <h3>List of Clinical Notes</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on clinical notes that have been associated with existing visits between patients and providers in the MySQL database.</p>
                <p>Available information for each clinical note includes Clinical Note ID, Length of Visit, and Visit ID.</p>
                <p>Lastly, this page allows you to <b>insert</b>, or <b>add</b> information about a clinical note for only new visits.</p>
            </div>
            <SearchBoxClinicalNotes/>
            <form action="" method="get" className="add-form">
                <h4>Add a New Clinical Note</h4>
                <div className="form-row">
                    <label for="visitID">Length of Visit</label>
                    <input type="text" name="visitID" id="visitID" required />
                </div>
                <div className="form-row">
                    <label for="visitID">Visit ID: </label>
                    <select name="visitID">
                        <option value="2">2 (between Patient Jacob and Provider Alex)</option>
                        <option value="3">3 (between Patient Rapheal and Provider Tiffany)</option>
                    </select>  
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br></br>
            <button className="SELECT-button">Get Current Information for Clinical Notes</button>
            <br></br>
            <br></br>
            <table id="clinicalnotes">
                <thead>
                    <tr>
                        <th>Clinical Note ID</th>
                        <th>Length of Visit</th>
                        <th>Visit ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>12</th>
                        <th>10:20:00</th>
                        <th>20</th>
                    </tr>
                    <tr>
                        <th>13</th>
                        <th>10:30:00</th>
                        <th>30</th>
                    </tr> 
                </tbody>
            </table>
        </div>
    );
}

export default ClinicalNotesPage;
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows patient index table
*/
function PatientIndexPage() {
    return (
        <div>
            <h3>List of Patients</h3>
            <div className="stylePageDescription">
                <p>This page allows you to <b>get</b> and <b>refresh</b> a list of patients, if any, from the MySQL database.</p>
                <p>Available information on the list of patients from the database includes their IDs and names.</p>
                <p>Additionally, this page allows you to <b>insert</b> a new patient into the MySQL database.</p>
                <p>Lastly, this page allows you to <b>delete</b> patient(s) from the MySQL database.</p>
                <p><b>Special Note</b>:  
                    Deleting a patient from the database will result in the removal of the patient's demographics from Information for Each Patient page, if any. 
                    The patient's Patient ID and Patient Name, however, will not be changed for consideration of legality purposes.
                    Details of any visit the patient may have had with provider(s) will remain unchanged.
                </p>
            </div>
            <form action="" method="get" className="add-form">
                <h4>Add a New Patient</h4>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <input type="text" name="patientID" id="patientID" required />
                </div>
                <div className="form-row">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br></br>
            <br></br>
            <button className="SELECT-button">Get Current List of Patients</button>
            <br></br>
            <br></br>
            <table id="patientindex">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0</th>
                        <th>James</th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Mary</th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                </tbody>
            </table>
        <br/>
        </div>
    );
}

export default PatientIndexPage;
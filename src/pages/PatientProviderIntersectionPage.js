import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows patient provider intersection table
*/
function PatientProviderIntersectionPage() {
    return (
        <div>
            <h3>Relationships between Patients and Providers</h3>
            <div className="stylePageDescription">
                <p>This page allows you to <b>get</b> and <b>refresh</b> information on current relationships between patients and providers from the MySQL database.</p>
                <p>Available information on the relationships between patients and providers include Patient ID and Provider ID.</p>
                <p>Lastly, this page allows you to only <b>insert</b>, or define, a relationship among entities in the following scenarios:</p>
                <ol className="userGuide">
                    <li>A new relationship can be formed between a newly created patient and a newly created provider.</li>
                    <br></br>
                    <li>A new relationship can be formed between a newly created patient and an existing provider.</li>
                    <br></br>
                    <li>A new relationship can be formed between an existing patient and a newly created provider.</li>
                    <br></br>
                    <li>A new relationship can be formed between an existing patient and an existing provider only if the two existing entities have never established a relationship before.</li>
                </ol>
                <p><b>Special Note</b>:  Once a relationship has been defined between a patient and a provider, then a visit entry can be created on List of Visits page to represent a visit occurred between the two entities.</p>
            </div>
            <br></br>
            <form action="" method="get" className="add-form">
                <h4>Add a Relationship Between a Patient and a Provider</h4>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <select name="patientID">
                        <option value="0">0 (James)</option>
                        <option value="1">1 (Mary)</option>
                    </select>  
                </div>
                <div className="form-row">
                    <label for="providerID">Provider ID: </label>
                    <select name="providerID">
                        <option value="0">5 (Avery)</option>
                        <option value="1">6 (Roy)</option>
                    </select>  
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
            <br></br>
            <button className="SELECT-button">Get Current Relationships between Patients and Providers</button>
            <br></br>
            <br></br>
            <table id="patientproviderintersection">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Provider ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0</th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>6</th>
                    </tr>                     
                </tbody>
            </table>
        </div>
    );
}

export default PatientProviderIntersectionPage;
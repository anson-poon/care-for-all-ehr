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
                <p>This page will show the current relationships among various patients and providers.</p>
                <p>Additionally, this page allows you to form a relationship between a new/existing Patient and a new/existing Provider.</p>
                <p>If a new patient and/or provider is added, then this will form one or more entries in relevant tables.</p>
                <p>The implication of establishing a relationship between a patient and provider is that the patient has had at least one visit with the provider and vice versa.</p>
                <p>A patient can have one or more providers. Likewise, a provider can have one or more patients.</p>
                <p>Updating the patientID and/or ProviderID will update relevant data in other tables. Data will not be updated if a matching ID is not available in the index of patients or index of providers.</p>
                <p>Deleting a relationship between a patient and provider will remove relevant information from other tables, as appropriate.</p>
            </div>
            <br></br>
            <table id="patientproviderintersection">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Provider ID</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0</th>
                        <th>5</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>6</th>
                        <th><RiEdit2Fill/></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>                     
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add a Relationship Between a Patient and a Provider</h4>
                <div className="form-row">
                    <label for="patientID">Patient ID: </label>
                    <input type="text" name="patientID" id="patientID" required />
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

export default PatientProviderIntersectionPage;
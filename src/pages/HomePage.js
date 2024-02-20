import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/*
Page returns function that shows home page
*/
function HomePage() {
    return (
        <div>
            <h3>Care For All</h3>
            <h4>Electronic Health Record</h4>
            <div className="page-description">
                <p>Care for All is an electronic health record (EHR) system that provides 100,000 healthcare organizations with a system to record patient encounters for reimbursement and continuity of care purposes.</p>
                <p>Care for All’s database-oriented website that records Visits between Providers and Patients. With all encounters (visits) between Providers and Patients, healthcare organizations collect information on various data.</p>
                <p>InsurancePolicies (including HMO, PPO, and EPO), InsuranceNotes, and ClinicalNotes, including ClinicalFindings, to submit for reimbursement from health insurance carriers and for continuity of care to promote patient outcomes.</p>
                <p>Various functions will be available for the database user to manipulate each table on different pages of the site.</p>
                <p>Proper utilization of this website will promote the user's experience, thus it is recommended for the user to read the following guide:</p>
                <ol className="userGuide">
                    <li>A patient must first be added to the database on the List of Patients page.</li>
                    <br></br>
                    <li>A provider then must be added to the database on the List of Providers page.</li>
                    <br></br>
                    <li>It is optional to add detailed information for a patient or a provider on the following pages, respectively:  Information for Each Patient and Information for Each Provider.</li>
                    <br></br>
                    <li>A patient can have one or more providers. Similarly, a provider can have one or more patients. In order for a visit to be created between a patient and a provider, the relationship must first be defined.</li>
                    <br></br>
                    <li>A relationship between an existing or new patient and an existing or new provider can be defined by going to the Relationsips between Patients and Providers page.</li>
                    <br></br>
                    <li>Afterward, a visit can then be made by going to List of Visits.</li>
                    <br></br>
                    <li>It is mandatory to add detailed information for a visit, including information on insurance policy and insurance note. Information for these two pages can be added on List of Insurance Policies and List of Insurance Notes pages, respectively.</li>
                    <br></br>
                    <li>Other mandatory information for a visit includes information on clinical notes and clinical findings. It is mandatory to add information on a visit's clinical note by going to List of Clinical Notes page first. Then detailed information from the visit, i.e., clinical findings, can be added by going to the List of Clinical Findings page.</li>
                </ol>
            </div>
        </div>
    );
}

export default HomePage;
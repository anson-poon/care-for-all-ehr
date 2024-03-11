import React from 'react';

/* HomePage is the landing page with an introduction and guide to using the site*/
function HomePage() {
    return (
        <div>
            <h3>Care For All - Electronic Health Record</h3>
            <div className="page-description">
                <p>Care for All is an electronic health record (EHR) system that provides healthcare organizations with a system to record patient encounters for reimbursement and continuity of care purposes.</p>
                <p>Care for All's database-oriented website records encounters (visits) between Providers and Patients for healthcare organizations to collect information on various data.</p>
                <p>Insurance Policies (including HMO, PPO, and EPO), Insurance Notes, and Clinical Notes, including Clinical Findings, are used to submit for reimbursement from health insurance carriers and for continuity of care to promote patient outcomes.</p>
                <p>Various functions will be available for the database user to manipulate the table on each pages of the site.</p>
                <p><b>Proper utilization of this website will promote the user's experience, thus it is recommended for the user to read the following guide:</b></p>
                <ol className="userGuide">
                    <li>A patient must first be added to the database on the List of Patients page.</li>
                    <br></br>
                    <li>A provider then must be added to the database on the List of Providers page.</li>
                    <br></br>
                    <li>It is optional to add details for a patient or a provider on the Profile pages after creating an entry on the List pages</li>
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
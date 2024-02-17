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
            <div className="stylePageDescription">
                <p>Care for All is an electronic health record (EHR) system that provides 100,000 healthcare organizations with a system to record patient encounters for reimbursement and continuity of care purposes.</p>
                <p>Care for All’s database-oriented website records Visits between Providers and Patients. With all encounters (visits) between Providers and Patients, healthcare organizations collect information on InsurancePolicies (including HMO, PPO, and EPO), InsuranceNotes, and ClinicalNotes to submit for reimbursement from health insurance carriers and for continuity of care to promote patient outcomes.</p>
                <p>Tables related to Patients, Providers, Intersection Table, and Visits can be viewed by using the navigation bar at the top. Each table related to these entities have multiple functions, including add, deleting, and updating data.</p>
                <p>Functions for each table includes the ability to add new data, update existing data, and deleting data. Each function will update the database accordingly to hold data permanently over time.</p>
            </div>
        </div>
    );
}

export default HomePage;
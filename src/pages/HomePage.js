import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/*
Page returns function that shows home page
*/
function HomePage() {
    return (
        <div>
            <h3>Care For All - Electronic Health Record</h3>
            <p>Care for All is an electronic health record (EHR) system that provides 100,000 healthcare organizations with a system to record patient encounters for reimbursement and continuity of care purposes. Care for All’s database-oriented website records Visits between Providers and Patients. With all encounters between Providers and Patients, healthcare organizations collect information on InsurancePolicies (including HMO, PPO, and EPO), InsuranceNotes, and ClinicalNotes to submit for reimbursement from health insurance carriers and for continuity of care to promote patient outcomes.</p>
            <div>
                <a className="landing-button" href="/patients">Patient Details</a>
                <a className="landing-button" href="/providers">Provider Details</a>
                <a className="landing-button" href="/visits">All Visits</a>
            </div>
        </div>
    );
}

export default HomePage;
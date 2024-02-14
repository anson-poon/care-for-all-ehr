import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h3>Welcome!</h3>
            <p className="text">Care For All is an electronic health record (EHR) system that provides healthcare organizations with a system to record patient encounters for reimbursement and continuity of care purposes.</p>
            <div>
                <a className="landing-button" href="/patients">Patient Details</a>
                <a className="landing-button" href="/providers">Provider Details</a>
                <a className="landing-button" href="/visits">All Visits</a>
            </div>

        </div>
    );
}

export default HomePage;
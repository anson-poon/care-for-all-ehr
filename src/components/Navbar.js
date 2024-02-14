/* 
Code citation:  
Dropdown code obtained and modified from documentation of source url:  https://www.w3schools.com/howto/howto_css_dropdown.asp 
*/

import React from "react";

function Navbar() {
    return(
        <div>
            <div className="dropdown">
                <button className="dropdown-button">Patients</button>
                <div className="dropdown-content">
                    <a href="/patients">Patient Details</a>
                    <a href="/patientindex">Patient Index</a>
                    <a href="/patientproviderintersection">Patient/Provider Intersection</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Providers</button>
                <div className="dropdown-content">
                    <a href="/providers">Provider Details</a>
                    <a href="/providerindex">Provider Index</a>
                    <a href="/patientproviderintersection">Patient/Provider Intersection</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Visits</button>
                <div className="dropdown-content">
                    <a href="/visits">All Visits</a>
                    <a href="/insurancepolicies">Insurance Policies</a>
                    <a href="/clinicalnotes">Clinical Notes</a>
                </div>
            </div>            
        </div>    
    );
};

export default Navbar
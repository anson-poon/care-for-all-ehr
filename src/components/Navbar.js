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
                    <a href="/patientindex">List of Patients</a>
                    <a href="/patients">Information for Each Patient</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Providers</button>
                <div className="dropdown-content">
                    <a href="/providerindex">List of Providers</a>
                    <a href="/providers">Information for Each Provider</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Intersection Table</button>
                <div className="dropdown-content">
                    <a href="/patientproviderintersection">Relationships between Patients & Providers</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Visits</button>
                <div className="dropdown-content">
                    <a href="/visits">List of Visits</a>
                    <a href="/insurancepolicies">List of Insurance Policies</a>
                    <a href="/insurancenotes">List of Insurance Notes</a>
                    <a href="/clinicalnotes">List of Clinical Notes</a>
                    <a href="/clinicalfindings">List of Clinical Findings</a>
                </div>
            </div>            
        </div>    
    );
};

export default Navbar
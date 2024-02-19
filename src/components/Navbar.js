/* 
Code citation:  
Dropdown code obtained and modified from documentation of source url:  https://www.w3schools.com/howto/howto_css_dropdown.asp 
*/

import React from "react";

function Navbar() {
    return(
        <div>
            <div className="dropdown">
                <button className="dropdown-button">Patients ▾</button>
                <div className="dropdown-content">
                    <a href="/patientindex" className="dropdown-link" >List of Patients</a>
                    <a href="/patients" className="dropdown-link" >Information for Each Patient</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Providers ▾</button>
                <div className="dropdown-content">
                    <a href="/providerindex" className="dropdown-link" >List of Providers</a>
                    <a href="/providers" className="dropdown-link" >Information for Each Provider</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Intersection Table</button>
                <div className="dropdown-content">
                    <a href="/patientproviderintersection" className="dropdown-link" >Relationships between Patients & Providers</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Visits</button>
                <div className="dropdown-content">
                    <a href="/visits" className="dropdown-link" >List of Visits</a>
                    <a href="/insurancepolicies" className="dropdown-link" >List of Insurance Policies</a>
                    <a href="/insurancenotes" className="dropdown-link" >List of Insurance Notes</a>
                    <a href="/clinicalnotes" className="dropdown-link" >List of Clinical Notes</a>
                    <a href="/clinicalfindings" className="dropdown-link" >List of Clinical Findings</a>
                </div>
            </div>            
        </div>    
    );
};

export default Navbar
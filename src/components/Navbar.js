/* 
Component that creates a navigation bar next to logo that allows users to navigate web pages easier
Code citation:  Dropdown code obtained and modified from documentation courtesy of w3schools:  https://www.w3schools.com/howto/howto_css_dropdown.asp 
*/

import React from "react";
import ToggleComponent from "./DarkModeToggle";

function Navbar(props) {
    return (
        <div>
            <ToggleComponent />
            <div className="dropdown-bar">
                <div className="dropdown">
                    <button className="dropdown-button">Patients ▾</button>
                    <div className="dropdown-content">
                        <a href="/patientindex" className="dropdown-link" >List of Patients</a>
                        <a href="/patients" className="dropdown-link" >Patient Profiles</a>
                        <a href="/insurancepolicies" className="dropdown-link" >Insurance Policies</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-button">Providers ▾</button>
                    <div className="dropdown-content">
                        <a href="/providerindex" className="dropdown-link" >List of Providers</a>
                        <a href="/providers" className="dropdown-link" >Provider Profiles</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/patientproviderintersection" className="dropdown-button" >Patient/Provider Relationships</a>
                </div>
                <div className="dropdown">
                    <a href="/visits" className="dropdown-button" >Visits</a>
                </div>
                <div className="dropdown">
                    <a href="/insurancenotes" className="dropdown-button">Insurance Notes</a>
                </div>
                <div className="dropdown">
                    <button className="dropdown-button">Clinical Notes ▾</button>
                    <div className="dropdown-content">
                        <a href="/clinicalnotes" className="dropdown-link" >List of Clinical Notes</a>
                        <a href="/clinicalfindings" className="dropdown-link" >List of Clinical Findings</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
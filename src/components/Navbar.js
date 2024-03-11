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
                        <a href="/patient-index" className="dropdown-link" >List of Patients</a>
                        <a href="/patient-profiles" className="dropdown-link" >Patient Profiles</a>
                        <a href="/insurance-policies" className="dropdown-link" >Insurance Policies</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-button">Providers ▾</button>
                    <div className="dropdown-content">
                        <a href="/provider-index" className="dropdown-link" >List of Providers</a>
                        <a href="/provider-profiles" className="dropdown-link" >Provider Profiles</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/patient-provider-intersection" className="dropdown-button" >Patient/Provider Relationships</a>
                </div>
                <div className="dropdown">
                    <a href="/visits" className="dropdown-button" >Visits</a>
                </div>
                <div className="dropdown">
                    <a href="/insurance-notes" className="dropdown-button">Insurance Notes</a>
                </div>
                <div className="dropdown">
                    <button className="dropdown-button">Clinical Notes ▾</button>
                    <div className="dropdown-content">
                        <a href="/clinical-notes" className="dropdown-link" >List of Clinical Notes</a>
                        <a href="/clinical-findings" className="dropdown-link" >List of Clinical Findings</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
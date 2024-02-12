import React from "react";
/*import { Link } from "react-router-dom";*/
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

/* dropdown code obtained and modified from documentation of source url:  https://www.w3schools.com/howto/howto_css_dropdown.asp */
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
        
        /* v1
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="/patientindex">Index of Patients</Dropdown.Item>
            <Dropdown.Item href="/providerindex">Index of Providers</Dropdown.Item>
            <Dropdown.Item href="/patientproviderintersection">Intersection of Patient and Provider</Dropdown.Item>
            <Dropdown.Item href="/visits">Visits</Dropdown.Item>
        </DropdownButton>
        */

        /* original code
        <nav className='App-nav'>
            <Link to="/">Home</Link>
            <Link to="/patients">Patients</Link>
            <Link to="/providers">Providers</Link>
            <Link to="/visits">Visits</Link>
        </nav> */
    );
};

export default Navbar
import React from "react";
/*import { Link } from "react-router-dom";*/
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

/* code obtained and modified from documentation of source url:  https://react-bootstrap.netlify.app/docs/components/dropdowns/ */
function Navbar() {
    return(
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="/patientindex">Index of Patients</Dropdown.Item>
            <Dropdown.Item href="/providerindex">Index of Providers</Dropdown.Item>
            <Dropdown.Item href="/patientproviderintersection">Intersection of Patient and Provider</Dropdown.Item>
            <Dropdown.Item href="/visits">Visits</Dropdown.Item>
        </DropdownButton>
        /* original code
        <nav className='App-nav'>
            <Link to="/">Home</Link>
            <Link to="/patients">Patients</Link>
            <Link to="/providers">Providers</Link>
            <Link to="/visits">Visits</Link>
        </nav> */
    );
}

export default Navbar
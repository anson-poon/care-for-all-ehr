import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className='App-nav'>
            <Link to="/">Home</Link>
            <Link to="/patients">Patients</Link>
            <Link to="/providers">Providers</Link>
            <Link to="/visits">Visits</Link>
        </nav>
    );
}

export default Navbar
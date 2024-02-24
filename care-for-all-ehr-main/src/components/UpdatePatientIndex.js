import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

/*
Component to update patient page
*/

function UpdatePatientIndexPage () {
    /*
    page logic credit to https://github.com/safak/youtube2022/blob/react-mysql/client/src/pages/Update.jsx
    */
    const goBack = useNavigate();

    const [patientName, setPatientName] = useState({
        patientFirstName: "",
        patientLastName: "",
      });
      const [error,setError] = useState(false)
    
      const location = useLocation();
      const navigate = useNavigate();
    
      const patientID = location.pathname.split("/")[2];
    
      const handleChange = (e) => {
        setPatientName((prev)=>({ ...prev, [e.target.name]:e.target.value}));
      };
    
      const handleClick = async (e) => {
        e.preventDefault()
        try {
          axios.put(`/sqlDataUpdate/${patientID}`, patientName);
          navigate("/patientindex")
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };

    return (
        <div>
            <form action="" method="get" className="add-form">
                <h4>Update Patient Name</h4>
                <div className="form-row">
                    <label for="patientFirstName">First Name:</label>
                    <input type="text" name="patientFirstName" id="patientFirstName" onChange = {handleChange} />
                </div>
                <div className="form-row">
                    <label for="patientLastName">Last Name:</label>
                    <input type="text" name="patientLastName" id="patientLastName" onChange = {handleChange} />
                </div>
                <br/>
                <button className="add-button" onClick = {handleClick}>Submit</button>                <button className="add-button" onClick={() => goBack("/patients")}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdatePatientIndexPage
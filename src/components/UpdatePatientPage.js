// Component that can be imported to update a record on Patient Profiles Page

import React from 'react';
import axios from "axios";
import moment from "moment";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePatientPage() {

  /*
  Code citation: Group 70 learned how to create an update page that passes input values to 
  Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
  */

  // go back to patient profiles page after submission of updated data or cancelling update of data
  const goBackToPatientProfiles = useNavigate();

  // construct object to hold user entered patient's first and last name
  const [patientProfileAttributes, setPatientProfileAttributes] = useState({
    patientPhoneNumber: "",
    emailAddress: "",
    dateOfBirth: "",
  });

  //  parses URL to get patient ID
  const urlLocation = useLocation();
  const patientID = urlLocation.pathname.split("/")[3];

  // Fetch data to prepopulate the form
  useEffect(() => {
    fetchPatientProfilesData();
  }, []);

  const fetchPatientProfilesData = async () => {
    try {
      const response = await axios.get('/patient-profiles/data');
      console.log(response);
      const data = response.data;
      console.log(response.data);

      // Find the specific patient by ID
      const specificPatientProfile = data.find(patientProfiles => parseInt(patientProfiles.patientID) === parseInt(patientID));

      // If exist, set state with that patient profile's attributes
      if (specificPatientProfile) {
        setPatientProfileAttributes({
          patientPhoneNumber: specificPatientProfile.patientPhoneNumber,
          emailAddress: specificPatientProfile.emailAddress,
          dateOfBirth: moment(specificPatientProfile.dateOfBirth).utc().format('YYYY-MM-DD')
        });
      }
    } catch (err) {
      console.error("Error fetching patient profile data:", err);
    }
  };

  // set user entered values for patient first name and last name 
  const setUpdateValues = (enteredValues) => {
    setPatientProfileAttributes((currentAttributes) => ({ ...currentAttributes, [enteredValues.target.name]: enteredValues.target.value }));
  };

  // once user submits data to update record, process data to be sent to MySQL
  const handleSubmissionOfUpdate = async (submitUpdate) => {
    submitUpdate.preventDefault();
    try {
      await axios.put(`/patient-profiles/update/${patientID}`, patientProfileAttributes);
      goBackToPatientProfiles("/patient-profiles");
    } catch (err) {
      console.error("Failed to update data:", err);
    }
  };


  return (
    <div>
      <form action="" method="get" className="update-form">
        <h4>Update Patient Information</h4>
        <div className="form-row">
          <label for="patientPhoneNumber">Phone Number:</label>
          <input type="text" name="patientPhoneNumber" id="patientPhoneNumber" value={patientProfileAttributes.patientPhoneNumber} onChange={setUpdateValues} />
        </div>
        <div className="form-row">
          <label for="emailAddress">Email Address:</label>
          <input type="text" name="emailAddress" id="emailAddress" value={patientProfileAttributes.emailAddress} onChange={setUpdateValues} />
        </div>
        <div className="form-row">
          <label for="dateOfBirth">Date of Birth:</label>
          <input type="date" name="dateOfBirth" id="dateOfBirth" value={patientProfileAttributes.dateOfBirth} onChange={setUpdateValues} />
        </div>
        <br />
        <button className="add-button" onClick={handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBackToPatientProfiles("/patient-profiles")}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdatePatientPage
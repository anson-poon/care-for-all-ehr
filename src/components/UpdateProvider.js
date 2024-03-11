// Component to update a record for Provider Profiles page

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateProviderPage() {

  /*
  Code citation: Group 70 learned how to create an update page that passes input values to 
  Express app for delivering to MySql database from https://github.com/safak/youtube2022/tree/react-mysql
  */

  // go back to patient profiles page after submission of updated data or cancelling update of data
  const goBackToProviderProfiles = useNavigate();

  // construct object to hold user entered patient's first and last name
  const [providerProfileAttributes, setProviderProfileAttributes] = useState({
    title: "",
    specialty: "",
    providerPhoneNumber: "",
  });

  //  parses URL to get patient ID
  const urlLocation = useLocation();
  const providerID = urlLocation.pathname.split("/")[3];

  // Fetch data to prepopulate the form
  useEffect(() => {
    fetchProviderData();
  }, []);

  const fetchProviderData = async () => {
    try {
      const response = await axios.get('/provider-profiles/data');
      const data = response.data;

      // Find the specific provider by ID
      const specificProviderProfile = data.find(providerProfiles => parseInt(providerProfiles.providerID) === parseInt(providerID));

      // If exist, set state with that provider's first/last name
      if (specificProviderProfile) {
        setProviderProfileAttributes({
          title: specificProviderProfile.title,
          specialty: specificProviderProfile.specialty,
          providerPhoneNumber: specificProviderProfile.providerPhoneNumber
        });
      }
    } catch (err) {
      console.error("Error fetching provider data:", err);
    }
  };

  // set user entered values for patient first name and last name
  const setUpdateValues = (enteredValues) => {
    setProviderProfileAttributes((currentAttributes) => ({ ...currentAttributes, [enteredValues.target.name]: enteredValues.target.value }));
  };

  // once user submits data to update record, process data to be sent to MySQL
  const handleSubmissionOfUpdate = async (submitUpdate) => {
    submitUpdate.preventDefault();
    try {
      await axios.put(`/provider-profiles/update/${providerID}`, providerProfileAttributes);
      goBackToProviderProfiles("/provider-profiles");
    } catch (err) {
      console.error("Failed to update data:", err);
    }
  };

  return (
    <div>
      <form action="" method="get" className="update-form">
        <h4>Update Provider Information</h4>
        <div className="form-row">
          <label for="title">Title:</label>
          <input type="text" name="title" id="title" value={providerProfileAttributes.title} onChange={setUpdateValues} />
        </div>
        <div className="form-row">
          <label for="specialty">Speciality:</label>
          <input type="text" name="specialty" id="specialty" value={providerProfileAttributes.specialty} onChange={setUpdateValues} />
        </div>
        <div className="form-row">
          <label for="providerPhoneNumber">Phone Number:</label>
          <input type="text" name="providerPhoneNumber" id="providerPhoneNumber" value={providerProfileAttributes.providerPhoneNumber} onChange={setUpdateValues} />
        </div>
        <br />
        <button className="add-button" onClick={handleSubmissionOfUpdate}>Submit</button>                <button className="add-button" onClick={() => goBackToProviderProfiles("/provider-profiles")}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdateProviderPage
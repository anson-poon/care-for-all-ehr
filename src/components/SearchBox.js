import React from "react";

export function SearchBoxProviderProfiles() {
    return (
        <div className="search-box">
            <select name="attributes" id="attributes">
                <option value="providerProfileID">Provider Profile ID</option>
                <option value="title">Title</option>
                <option value="speciality">Specialty</option>
                <option value="phoneNumber">Phone Number</option>
                <option value="providerID">Provider ID</option>
            </select>
            <input type="text" placeholder="Search Provider Profiles" />
            <button>Search</button>
        </div>
    );
};

export function SearchBoxPatientProfiles() {
    return (
        <div>

        </div>
    );
}

export default SearchBoxProviderProfiles;
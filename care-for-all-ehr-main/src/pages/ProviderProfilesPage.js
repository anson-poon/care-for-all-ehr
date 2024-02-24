import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import { SearchBoxProviderProfiles } from '../components/SearchBox';
import providerData from '../data/providerData';

/*
Code citation: Code to import icons credited to https://react-icons.github.io/react-icons/
*/

/*
Page returns function that shows providers table
*/
function ProviderProfilesPage() {

    const goToUpdatePage = useNavigate();

    return (
        <div>
            <h3>Provider Profiles</h3>
            <div className="page-description">
                <p>This page allows you to <b>get</b> and <b>refresh</b> detailed information for all providers from the MySQL database.</p>
                <p>Available information for each provider includes their Provider Profile ID, Title, Specialty, Phone Number, and Provider ID.</p>
                <p>Additionally, this page allows you to <b>insert</b>, or <b>add</b> information about a new provider that was created on List of Providers page.</p>
                <p>This page also allows you to <b>delete</b> information for each provider from the MySQL database.</p>
                <p>Lastly, this page also allows you to update update for each provider, including the ability to set Title, Specialty, and Phone Number as <b>NULL</b>.</p>
            </div>
            <SearchBoxProviderProfiles />
            <button className="SELECT-button">Refresh Provider Profiles</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="providerdetailedinformation">
                        <thead>
                            <tr>
                                <th>Provider Profile ID</th>
                                <th>Title</th>
                                <th>Specialty</th>
                                <th>Phone Number</th>
                                <th>Provider ID</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {providerData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.providerProfileID}</th>
                                    <th>{item.title}</th>
                                    <th>{item.specialty}</th>
                                    <th>{item.phoneNumber}</th>
                                    <th>{item.providerID}</th>
                                    <th><RiEdit2Fill className="icon" onClick={() => goToUpdatePage("/updateproviderpage")} /></th>
                                    <th><RiChatDeleteFill className="icon" /></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add Provider Profile:</h4>
                        <div className="form-row">
                            <label for="providerID">Provider ID: </label>
                            <select name="providerID" id="providerID">
                                {providerData.map((item, index) => (
                                    <option value={item.providerID}>{item.providerID} ({item.providerLastName})</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label for="title">Title: </label>
                            <input type="text" name="title" id="title" required />
                        </div>
                        <div className="form-row">
                            <label for="specialty">Specialty: </label>
                            <input type="text" name="specialty" id="specialty" required />
                        </div>
                        <div className="form-row">
                            <label for="providerPhoneNumber">Phone Number: </label>
                            <input type="text" name="providerPhoneNumber" id="providerPhoneNumber" required />
                        </div>
                        <br />
                        <button className="add-button">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProviderProfilesPage;
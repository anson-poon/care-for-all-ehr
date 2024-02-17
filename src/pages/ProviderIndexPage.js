import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows provider index table
*/
function ProviderIndexPage() {

    const goToUpdatePage = useNavigate();

    return (
        <div>
            <h3>List of Providers</h3>
            <div className="stylePageDescription">
                <p>This page allows you to add a new provider to the index of providers table.</p>
                <p>Adding a new provider will allow the provider to be added in the intersection table.</p>
                <p>Updating a provider ID and/or name will update relevant entries in other tables, as appropriate. A demo of how update page for provider looks like is available for provider ID 5 by clicking the appropriate icon.</p>
                <p>Deleting a provider will remove relevant entries from the other tabels.</p>
            </div>
            <br></br>
            <table id="providerindex">
                <thead>
                    <tr>
                        <th>Provider ID</th>
                        <th>Provider Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>5</th>
                        <th>Avery</th>
                        <th><RiEdit2Fill onClick={() => goToUpdatePage("/updateproviderindex")} /></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>Roy</th>
                        <th><RiEdit2Fill onClick={() => goToUpdatePage("/updateproviderindex")} /></th>
                        <th><RiChatDeleteFill/></th>
                    </tr>                 
                </tbody>
            </table>
            <form action="" method="get" className="add-form">
                <h4>Add a New Provider</h4>
                <div className="form-row">
                    <label for="providerID">Provider ID: </label>
                    <input type="text" name="providerID" id="providerID" required />
                </div>
                <div className="form-row">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}

export default ProviderIndexPage;
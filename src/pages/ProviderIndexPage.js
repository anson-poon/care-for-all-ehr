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
            <h3>Provider Index</h3>
            <table id="providerindex">
                <thead>
                    <tr>
                        <th>providerID</th>
                        <th>providerName</th>
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
                <h4>Add New Provider to Index</h4>
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
        <br/>
        <h4>Navigate to:</h4>
        <a href="/providers">Provider Details</a>
        </div>
    );
}

export default ProviderIndexPage;
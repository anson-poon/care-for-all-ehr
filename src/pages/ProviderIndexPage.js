import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

/*
Page returns function that shows provider index table
*/
function ProviderIndexPage() {
    return (
        <div>
            <h3>List of Providers</h3>
            <div className="stylePageDescription">
                <p>This page allows you to <b>get</b> and <b>refresh</b> a list of providers, if any, from the MySQL database.</p>
                <p>Available information on the list of providers from the database includes their IDs and names.</p>
                <p>Additionally, this page allows you to <b>insert</b> a new provider into the MySQL database.</p>
                <p>Lastly, this page allows you to <b>delete</b> provider(s) from the MySQL database.</p>
                <p><b>Special Note</b>:  
                    Deleting a provider from the database will result in the removal of the provider's demographics from Information for Each Provider page, if any. 
                    The provider's Provider ID and Provider Name, however, will not be changed for consideration of legality purposes.
                    Details of any visit the provider may have had with patient(s) will remain unchanged.
                </p>
            </div>
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
            <br></br>
            <br></br>
            <button className="SELECT-button">Get Current List of Providers</button>
            <br></br>
            <br></br>
            <table id="providerindex">
                <thead>
                    <tr>
                        <th>Provider ID</th>
                        <th>Provider Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>5</th>
                        <th>Avery</th>
                        <th><RiChatDeleteFill/></th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>Roy</th>
                        <th><RiChatDeleteFill/></th>
                    </tr>                 
                </tbody>
            </table>
        </div>
    );
}

export default ProviderIndexPage;
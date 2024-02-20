import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import providerData from '../data/providerData';
import {SearchBoxProviderIndex} from '../components/SearchBox';

/*
Page returns function that shows provider index table
*/
function ProviderIndexPage() {
    return (
        <div>
            <h3>List of Providers</h3>
            <div className="page-description">
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
            <SearchBoxProviderIndex />
            <button className="SELECT-button">Refresh List of Providers</button>
            <div className="flex-container">
                <div className="flex-column1">
                    <table id="providerindex">
                        <thead>
                            <tr>
                                <th>Provider ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {providerData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.providerID}</th>
                                    <th>{item.providerFirstName}</th>
                                    <th>{item.providerLastName}</th>
                                    <th><RiChatDeleteFill className="icon" /></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex-column2">
                    <form action="" method="get" className="add-form">
                        <h4>Add a New Provider</h4>
                        <div className="form-row">
                            <label for="firstName">First Name: </label>
                            <input type="text" name="firstName" id="firstName" required />
                        </div>
                        <div className="form-row">
                            <label for="lastName">Last Name: </label>
                            <input type="text" name="lastName" id="lastName" required />
                        </div>
                        <br/>
                        <button className="add-button">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProviderIndexPage;
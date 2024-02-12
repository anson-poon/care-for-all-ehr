import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

function ProviderIndexPage() {

    const goToUpdatePage = useNavigate();

    return (
        <div>
            <h4>Provider Index</h4>
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
            <tr>
                <th>
                    <input type="text"/>
                </th>
                <th>
                    <input type="text"/>
                </th>
            </tr>
            <button className="add-button">Add Provider to Index</button>
        </table>
        <a href="/providers">Provider Details</a>
        </div>
    );
}

export default ProviderIndexPage;
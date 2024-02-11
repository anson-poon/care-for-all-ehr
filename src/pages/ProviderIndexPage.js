import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProviderIndexPage() {
    return (
        <div>
            <h4>Provider Index Page</h4>
            <table id="providerindex">
            <thead>
                <tr>
                    <th>providerID</th>
                    <th>providerName</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>5</th>
                    <th>Avery</th>
                </tr>
                <tr>
                    <th>6</th>
                    <th>Roy</th>
                </tr>                 
            </tbody>
        </table>
        <a href="/providers">go to detailed provider information page</a>
        <a href="/addupdatedeleteproviderindex">go to add, update, or delete provider index page</a>
        </div>
    );
}

export default ProviderIndexPage;
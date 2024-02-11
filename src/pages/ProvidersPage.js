import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProvidersPage() {
    return (
        <div>
            <h4>Providers Detailed Information Page</h4>
            <table id="providerdetailedinformation">
            <thead>
                <tr>
                    <th>providerProfileID</th>
                    <th>title</th>
                    <th>specialty</th>
                    <th>providerPhoneNumber</th>
                    <th>providerID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>2</th>
                    <th>MD</th>
                    <th>General Surgeon</th>
                    <th>234567</th>
                    <th>5</th>
                </tr>    
                <tr>
                    <th>3</th>
                    <th>DO</th>
                    <th>General Hospitalist</th>
                    <th>234568</th>
                    <th>6</th>
                </tr>              
            </tbody>
        </table>
        <a href="/providerindex">go to provider index page</a>
        <a href="/patientproviderintersection">go to patient provider intersection page</a>
        <a href="/addupdatedeleteproviders">go to add, update, or delete providers page</a>
        </div>
    );
}

export default ProvidersPage;
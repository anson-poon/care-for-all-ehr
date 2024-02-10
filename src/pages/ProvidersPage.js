import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProvidersPage() {
    return (
        <div>
            <h4>Providers</h4>
            <table id="providers">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Specialty</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Temp</th>
                    <th>Temp</th>
                    <th>Temp</th>
                    <th>Temp</th>
                    <th>Temp</th>
                </tr>           
            </tbody>
        </table>
        </div>
    );
}

export default ProvidersPage;
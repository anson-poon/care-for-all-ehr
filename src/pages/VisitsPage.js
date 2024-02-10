import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VisitsPage() {
    return (
        <div>
            <h4>Visits</h4>
            <table id="visits">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date/Time</th>
                    <th>Clinical Notes</th>
                    <th>Insurance Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
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

export default VisitsPage;
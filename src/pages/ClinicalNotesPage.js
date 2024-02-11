import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ClinicalNotesPage() {
    return (
        <div>
            <h4>Clinical Notes Page</h4>
            <table id="clinicalnotes">
            <thead>
                <tr>
                    <th>clinicalNoteID</th>
                    <th>visitID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>12</th>
                    <th>20</th>
                </tr>
                <tr>
                    <th>13</th>
                    <th>30</th>
                </tr>           
            </tbody>
        </table>
        <a href="/clinicalfindings">go to clinical findings page</a>
        <a href="/visits">go to visits page</a>
        <a href="/addupdatedeleteclinicalnotes">go to add, update, or delete clinical notes page</a>
        </div>
    );
}

export default ClinicalNotesPage;
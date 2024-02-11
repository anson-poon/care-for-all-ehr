import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateProviderIndex () {
    return (
        <div>
            <h4>Update Provider Information</h4>
            <form>
                <p>
                <label for="providerID">
                    Update Provider ID
                    <input type="text" id="updateProviderID" name="newProviderID"></input>  
                </label>
                </p>
                <p>
                <label for="providerName">
                    Update Provider Name
                    <input type="text" id="updateProviderName" name="newProviderName"></input>  
                </label>
                </p>
            </form>
            <button>Submit</button>
        </div>
    );
}

export default UpdateProviderIndex
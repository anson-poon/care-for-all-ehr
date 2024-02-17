import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*
Component to update provider index
*/
function UpdateProviderIndex () {
    return (
        <div>
            <h4>Update Provider Information</h4>
            <form className="add-form">
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
            <button>Submit</button><button>Cancel</button>
        </div>
    );
}

export default UpdateProviderIndex
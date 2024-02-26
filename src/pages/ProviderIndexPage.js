import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';
import providerData from '../data/providerData';
import { SearchBoxProviderIndex } from '../components/SearchBox';

/*
Page returns function that shows provider index table
*/
function ProviderIndexPage() {
    const [data, setData] = useState([]);   // Initialize state to hold fetched data

    // SELECT * FROM Providers
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // fetch data from sqlData route
            const response = await axios.get('/sqlData/?table=Providers');
            // Set the fetched data to state
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    // DE:ETE FROM Providers WHERE providerID = ?
    // technique to delete data credited to https://github.com/dhanavishnu13/CRUD_with_React_Node.js_MySQL/blob/main/frontend/src/pages/Books.jsx
    const deleteData = async (providerID) => {
        try {
            await axios.delete("/sqlDataDelete/providers/" + providerID);
            window.location.reload()
        } catch (err){
            console.error("Failed to delete data:", err);
        }
    };

    // SELECT * FROM Providers WHERE userChoice = ?
    const [userChoice, setUserChoice] = useState('');

    const handleChange = (choice) => {
        setUserChoice(choice.target.value);
    }
    
    const handleSearch = async (userInput) => {
        try {
            const response = await axios.get(`/sqlData/searchProvider/?userChoice=${userChoice}&userInput=${userInput}`);
            setData(response.data); 
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

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
            <SearchBoxProviderIndex 
                userChoice={userChoice} 
                handleChange={handleChange} 
                handleSearch={handleSearch} />
            <button className="SELECT-button" onClick={fetchData}>Refresh List of Providers</button>
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
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.providerID}</th>
                                    <th>{item.providerFirstName}</th>
                                    <th>{item.providerLastName}</th>
                                    <th><RiChatDeleteFill className="icon"  onClick={() => deleteData(item.providerID)}/></th>
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
                        <br />
                        <button className="add-button">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProviderIndexPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SearchDropdown({ route, idProperty, onSelect }) {

    // State to store the fetched data
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    // Fetch data from the specified table
    useEffect(() => {
        fetchData(route, setData);
    }, [route]);

    const fetchData = async (route, setData) => {
        try {
            // Fetch data from the specified table
            console.log(`/?route=${route}/data`)
            const response = await axios.get(`/${route}/data`);
            // Set the fetched data to state
            setData(response.data);
        } catch (err) {
            console.error(`Error fetching ${route} data:`, err);
        }
    };

    // Handle the change event of the select element
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
        onSelect(selectedValue);
    }

    return (
        <div className="search-dropdown">
            <select name="id" value={selectedValue} onChange={handleSelectChange}>
                <option value="" selected disabled hidden>Search by ID</option>
                {data.map((item, index) => (
                    <option key={index} value={item[idProperty]}>{item[idProperty]}</option>
                ))}
            </select>
            {/* <p>selectedValue: {selectedValue}</p> */}
        </div>
    );
}

export default SearchDropdown;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SearchDropdown({ tableName, idProperty, onSelect }) {

    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        fetchData(tableName, setData);
    }, [tableName]);

    const fetchData = async (tableName, setData) => {
        try {
            // Fetch data from the specified table
            const response = await axios.get(`/sqlData/?table=${tableName}`);
            // Set the fetched data to state
            setData(response.data);
        } catch (err) {
            console.error(`Error fetching ${tableName} data:`, err);
        }
    };

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
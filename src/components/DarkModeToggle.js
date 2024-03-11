import React, { useState, useEffect } from 'react';
import lightModeBtn from "./assets/toggle-icon-light.svg";
import darkModeBtn from "./assets/toggle-icon-dark.svg";

/* Persistent tggle compoenent for switching between dlight/dark mode*/
function ToggleComponent() {
    // Set dark mode based on the value from local storage
    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem('darkMode');
        return storedMode ? JSON.parse(storedMode) : false;
    });

    // Set the initial state of the isToggled to false
    const [isToggled, setIsToggled] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsToggled(true);
        setDarkMode(prevDarkMode => !prevDarkMode);
        // document.documentElement.classList.add('fade-in');
    };

    // Add or remove the 'dark-mode' class for ducment element and body based on the darkMode state
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('dark-mode', darkMode);
        document.documentElement.classList.toggle('light-mode', !darkMode);

        // If isToggled is true, add the 'fade-in' class to the document element and body for smooth transition
        if (isToggled) {
            document.documentElement.classList.add('fade-in');
            document.body.classList.add('fade-in');
            setIsToggled(false); // Reset isToggled after adding the 'fade-in' class
        }
    }, [darkMode, isToggled]);

    // Return the dark mode toggle button
    return (
        <div className="dark-mode-toggle">
            <img
                onClick={toggleDarkMode}
                src={darkMode ? lightModeBtn : darkModeBtn}
                alt="toggle"
            />
        </div>

    );
}

export default ToggleComponent;
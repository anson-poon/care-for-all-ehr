import React, { useState, useEffect } from 'react';
import lightModeBtn from "./assets/toggle-icon-light.svg";
import darkModeBtn from "./assets/toggle-icon-dark.svg";

// const [darkMode, setDarkMode] = React.useState(true)

// function toggleDarkMode() {
//     setDarkMode(prevDarkMode => !prevDarkMode)
// }

function ToggleComponent() {
    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem('darkMode');
        return storedMode ? JSON.parse(storedMode) : false;
    });

    const [isToggled, setIsToggled] = useState(false);

    const toggleDarkMode = () => {
        setIsToggled(true);
        setDarkMode(prevDarkMode => !prevDarkMode);
        // document.documentElement.classList.add('fade-in');
    };

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('dark-mode', darkMode);
        document.documentElement.classList.toggle('light-mode', !darkMode);

        if (isToggled) {
            document.documentElement.classList.add('fade-in');
            document.body.classList.add('fade-in');
            setIsToggled(false); // Reset isToggled after adding the 'fade-in' class
        }
    }, [darkMode, isToggled]);

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
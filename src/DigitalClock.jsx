// Challenge 11: Create a React component called DigitalClock that displays the current time in digital format. The component should update the displayed time every second to reflect the current time.

// You can use the Date object to get the current time and update the clock every second using setInterval.

import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div>
            <h2>Digital Clock</h2>
            <div>{formattedTime}</div>
        </div>
    );
};

export default DigitalClock;

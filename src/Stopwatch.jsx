
// Here's your next challenge:

// Challenge 10: Create a React component called Stopwatch that functions as a stopwatch. The component should have start, stop, and reset buttons, and it should display the elapsed time in hours, minutes, seconds, and milliseconds.

// You can use the Date object to track the elapsed time. The stopwatch should start counting when the start button is clicked, pause when the stop button is clicked, and reset to 0 when the reset button is clicked.

import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            const startTime = Date.now() - elapsedTime;
            intervalId = setInterval(() => {
                const now = Date.now();
                setElapsedTime(now - startTime);
            }, 10);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, elapsedTime]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor(time % 1000);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    };

    return (
        <div>
            <h2>Stopwatch</h2>
            <div>{formatTime(elapsedTime)}</div>
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handleStop} disabled={!isRunning}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;

// Challenge 5: Create a React component called RotatingText that displays a rotating text effect. 
// The component should accept an array of strings and display them one by one, changing the text every few seconds to create an animation effect.

// You can start with an array of strings like ["Hello", "World", "React"]. Use state to manage the current text to display and a 
// timer to rotate through the array.

import React, { useState, useEffect } from 'react';

const RotatingText = ({ texts, interval = 1000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [texts.length, interval]);

    return <div>{texts[index]}</div>;
};

export default RotatingText;

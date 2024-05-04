// Challenge 6: Create a React component called AnimatedNumber that animates the transition of a number from one value to another. 
// The component should accept a start and an end number, as well as a duration in milliseconds for the animation. 
// The number should smoothly transition from the start value to the end value over the specified duration.

// You can use CSS transitions or libraries like react-spring to achieve the animation effect.

import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ start, end, duration }) => {
    const { number } = useSpring({
        from: { number: start },
        to: async (next) => {
            await next({ number: end });
        },
        config: { duration }
    });

    return <animated.span>{number.to((val) => Math.floor(val))}</animated.span>;
};

export default AnimatedNumber;

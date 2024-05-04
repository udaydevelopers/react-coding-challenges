// Challenge 7: Create a React component called ImageSlider that displays a slideshow of images. 
// The component should accept an array of image URLs and automatically cycle through them, displaying each image for a few 
// seconds before moving to the next one.

// You can start with an array of image URLs like ["url1", "url2", "url3"]. Use state to manage the index of the current image 
// being displayed and a timer to advance to the next image.

import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [images.length, interval]);

    return <img src={images[index]} alt={`Slide ${index + 1}`} />;
};

export default ImageSlider;

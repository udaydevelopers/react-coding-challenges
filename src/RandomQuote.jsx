// Challenge 8: Create a React component called RandomQuote that fetches and displays a random quote from an API. 
// The component should have a button that, when clicked, fetches a new random quote and displays it. 
// You can use the Quotable API for this challenge.

import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error(error);
        }
    };
useEffect(()=>{
    fetchQuote();
},[]);

    return (
        <div>
            <blockquote>
                <p>{quote}</p>
                <footer>- {author}</footer>
            </blockquote>
            <button onClick={fetchQuote}>New Quote</button>
        </div>
    );
};

export default RandomQuote;

// Challenge 1: Create a React component called Counter that displays a number and two buttons: one to increment the number and one to decrement it. 
// The initial number should be 0.

// When the increment button is clicked, the number should increase by 1. When the decrement button is clicked, 
//the number should decrease by 1. The number should never go below 0.

import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	const handleIncrement = () => {
		setCount((prev) => prev + 1)
	}

	const handleDecrement = () => {
		setCount((prev) => (prev > 0 ? prev - 1 : 0))
	}

	return (
		<div>
			<div>Counter: {count}</div>
			<button onClick={handleIncrement}>Increment ++</button>
			<button onClick={handleDecrement}>Decrement --</button>
		</div>
	)
}

export default Counter

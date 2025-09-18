import { useState } from "react";

export default function Counter() {
	const counterStyle = {
		border: "2px solid yellow",
		marginBottom: "10px",
	};

	// state:
	const [count, setCount] = useState(0);

	// count handle with arrow function:
	const handleCount = () => {
		// setCount(101);
		const newValue = count + 1;
		setCount(newValue);
	};

	return (
		<div style={counterStyle}>
			<h3>Count: {count}</h3>
			<button onClick={handleCount}>Add</button>
		</div>
	);
}

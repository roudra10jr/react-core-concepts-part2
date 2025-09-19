import { useState } from "react";

export default function Counter2() {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		return setCount(count + 1);
	};
	const decrementCount = () => {
		if (count === 0) {
			return alert(
				`No decrement process possible anymore.bcz current count value is: ${count}`
			);
		}

		return setCount(count - 1);
	};
	const setReset = () => {
		return setCount(0);
	};
	return (
		<div className="card">
			<h3>Dynamic Count: {count}</h3>
			<button onClick={incrementCount}>Increment</button>
			<button onClick={decrementCount}>Decrement</button>
			<button onClick={setReset}>Reset</button>
		</div>
	);
}

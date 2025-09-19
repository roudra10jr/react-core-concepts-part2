import { useState } from "react";

export default function Toggle() {
	const [greetings, setGreetings] = useState(" ");

	const showMessage = () => {
		const newMessage = "Hello, React Learner!!";
		return setGreetings(newMessage);
	};

	const hideMessage = () => {
		return setGreetings(" ");
	};

	return (
		<div className="card">
			<h3>{greetings}</h3>
			<button onClick={showMessage}>Show</button>
			<button onClick={hideMessage}>Hide</button>
		</div>
	);
}

import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";

function App() {
	//declaration function: click me(1)
	function handleClickOne() {
		alert("Clicked on one (1)");
	}

	// arrow function : click me(2)
	const handleClickTwo = () => {
		alert("Clicked on two (2)");
	};

	// WITH PARAMETER:
	const handleAdd5 = (num) => {
		const newNum = num + 5;
		alert(`adding 5 with ${num} the value will be: ${newNum}`);
	};

	return (
		<>
			<h1>Vite + React</h1>

			<Batsman></Batsman>
			<Counter></Counter>

			<button onClick={handleClickOne}>Click Me (1)</button>
			<button onClick={handleClickTwo}>Click Me (2)</button>
			<button onClick={() => alert("Clicked on three (3)")}>
				Click Me (3)
			</button>

			<button onClick={() => handleAdd5(10)}>Click ADD 5</button>
		</>
	);
}

export default App;

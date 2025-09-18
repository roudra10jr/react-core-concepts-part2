import { useState } from "react";

export default function Batsman() {
	const [runs, setRuns] = useState(0);
	const [fours, setFours] = useState(0);
	const [sixes, setSixes] = useState(0);

	// handle for single run:
	const handleSingle = () => {
		const updatedRuns = runs + 1;
		setRuns(updatedRuns);
	};

	// handle four
	const handleFours = () => {
		const totalFour = fours + 1;
		setFours(totalFour);

		const updatedRuns = runs + 4;
		setRuns(updatedRuns);
	};

	// handle sixes:
	const handleSixes = () => {
		const totalSix = sixes + 1;
		setSixes(totalSix);

		const updatedRuns = runs + 6;
		setRuns(updatedRuns);
	};
	return (
		<div style={{ border: "2px solid salmon", marginBottom: "20px" }}>
			<h3>Player: Liton Kumar Das</h3>

			{runs >= 50 && <p>Congratulate half century</p>}

			<p style={{ border: "1px dotted" }}>
				Total Fours: {fours} <br></br> Total Sixes: {sixes}
			</p>
			<h1>Score: {runs}</h1>

			<button onClick={handleSingle}>Singles</button>
			<button onClick={handleFours}>Fours</button>
			<button onClick={handleSixes}>Sixes</button>
		</div>
	);
}

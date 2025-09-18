export default function Friend({ friend }) {
	// console.log(friend);

	const { name, email, website } = friend; //destructuring from object;

	return (
		<div className="card">
			<h3>Name: {name}</h3>
			<p>Email: {email}</p>
			<p>Website: {website}</p>
		</div>
	);
}

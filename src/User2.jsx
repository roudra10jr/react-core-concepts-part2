export default function User2({ user }) {
	// console.log(user);

	return (
		<div className="card1">
			<h3>Name: {user.name}</h3>
			<p>Company Name: {user.company.name}</p>
			<p>City: {user.address.city}</p>
		</div>
	);
}

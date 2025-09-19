export default function User2({ user }) {
	// console.log(user);

	return (
		<div className="card1">
			<h3>{user.name}</h3>
			<p>{user.company.name}</p>
			<p>{user.address.city}</p>
		</div>
	);
}

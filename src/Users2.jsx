import { use } from "react";
import User2 from "./User2";

export default function Users2({ fetchUser2 }) {
	const users = use(fetchUser2);
	// console.log(users);

	return (
		<div className="card">
			<h3>User's Info: {users.length}</h3>

			{
				// ..........
				users.map((user) => (
					<User2 key={user.id} user={user}></User2>
				))
			}
		</div>
	);
}

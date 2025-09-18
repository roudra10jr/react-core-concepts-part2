import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

// direct api fetch using variable
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
	(res) => res.json()
);

// fetch using arrow function: async(), await method:
const fetchFriends = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	return res.json();
};

// fetch posts: async() wait:
const fetchPosts = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	return res.json();
};

function App() {
	const postsPromise = fetchPosts();
	console.log(postsPromise);

	const friendsPromise = fetchFriends();
	// console.log(friendsPromise);

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

			{/* Posts Component */}
			<Suspense fallback={<p>Posts is coming......</p>}>
				<Posts postsPromise={postsPromise}></Posts>
			</Suspense>

			{/* Friends Component */}
			<Suspense fallback={<p>Waiting for the friends treat</p>}>
				<Friends friendsPromise={friendsPromise}></Friends>
			</Suspense>

			{/* User Component */}
			{/* <Suspense fallback={<h3>Loading....</h3>}>
				<Users fetchUsers={fetchUsers}></Users>
			</Suspense> */}

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

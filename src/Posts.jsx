import { use } from "react";
import Post from "./Post";

export default function Posts({ postsPromise }) {
	const posts = use(postsPromise);
	console.log(posts);

	return (
		<div
			style={{
				border: "2px solid green",
				margin: "10px",
				padding: "15px",
				borderRadius: "15px",
			}}
		>
			<h3>Posts: {posts.length}</h3>

			{
				// map:
				posts.map((post) => (
					<Post key={post.id} post={post}></Post>
				))
			}
		</div>
	);
}

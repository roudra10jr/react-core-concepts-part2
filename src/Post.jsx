export default function Post({ post }) {
	// console.log(post);

	return (
		<div className="card1">
			<h5>{post.title}</h5>
			<p>{post.body}</p>
		</div>
	);
}

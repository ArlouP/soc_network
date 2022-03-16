import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
	
	let posts = props.posts.map(post => {
		return (<Post key={post.id} message={post.message} likes={post.likes} />)
	});

	let newPostElement = React.createRef();

	let newPost = () => {
		props.updateNewPost();
	}

	let newPostText = () => {
		let textPost = newPostElement.current.value;
		props.updateNewPostText(textPost);
	}

	return (
		<div>
			<div>
				<textarea onChange={newPostText} ref={newPostElement} value={props.currentText} />
				<button onClick={newPost} >add</button>
			</div>
			{posts}
		</div>

	);

	
}

export default Posts;
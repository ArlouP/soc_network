
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div key={props.id}>
			<p>{props.message}</p>
			<span>{props.likes}</span>
		</div >
	);
}

export default Post;
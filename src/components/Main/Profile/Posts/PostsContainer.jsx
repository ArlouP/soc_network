
import { addPostActionCreator, addTextPostActionCreator } from '../../../../state/profileReduser';
import Posts from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		currentText: state.profile.currentText,
		posts: state.profile.posts,
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (textPost) => {
			dispatch(addTextPostActionCreator(textPost));
		}
	}
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
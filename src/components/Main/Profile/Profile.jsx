import PostsContainer from "./Posts/PostsContainer";
import Description from './Description/Description';
import s from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={s.content}>
			<img className={s.profileFon} src="https://fotovdom.ru/upload/iblock/97c/97cf3dde0d4a29278637b17eced13911.jpg" alt="фон" />
			<Description carrentProfile={props.carrentProfile} />
			<PostsContainer />
		</div>
	)

}

export default Profile;
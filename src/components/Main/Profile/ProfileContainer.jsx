import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setСarrentProfile } from '../../../state/profileReduser';
import Preloader from "../../../common/Preloader/Preloader";
// import { useMatch } from "react-router-dom";
import { BASE_URL } from "../../../common/BASE_URL/BASE_URL";
import { useMatch } from "react-router-dom";


// это контейнер3
class ProfileContainer extends React.Component {

	componentDidMount() {
		// функция useMatch читает урл и возвращает либо объект либо нал
		let userId = this.props.match ? this.props.match.params.userId : 2;
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setСarrentProfile(response.data);
			});
	}

	render() {
		return (
			<Profile
				// вот это пока не надо передавать {...this.props}
				carrentProfile={this.props.carrentProfile}
				/>

			// Может тут лучше сделать перлоадер?
			// <>
			// 	{
			// 		this.props.carrentProfile === null
			// 			? <Preloader />
			// 			: <Profile 
			// 			// вот это пока не надо передавать {...this.props}
			// 			 carrentProfile={this.props.carrentProfile} />
			// 	}
			// </>
		)
	};

}


const mapStateToProps = (state) => {
	return { carrentProfile: state.profile.carrentProfile, }
};

const mapDispatchToProps = {
	setСarrentProfile,
};

// это контейнер2
const ProfileURLMatch = (props) => {

	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} />;

}
// это контейнер 1
export default connect(mapStateToProps, mapDispatchToProps)(ProfileURLMatch);





// class ProfileContainer extends React.Component {

//   componentDidMount() {
//     let userId = this.props.match ? this.props.match.params.userId : 'My ID';
//     axios.get(`${BASE_URL}/profile/${userId}`).then(({ data }) => {
//       this.props.setUserProfile(data);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Profile {...this.props} profile={this.props.profile} />
//       </div>
//     );
//   }
// }

// const ProfileURLMatch = (props) => {
//   const match = useMatch('/profile/:userId/');
//   return <ProfileContainer {...props} match={match} />;
// }

// const mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
// });

// export default connect(mapStateToProps, { setUserProfile })(ProfileURLMatch);
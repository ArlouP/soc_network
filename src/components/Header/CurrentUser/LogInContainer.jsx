import LogIn from "./LogIn";
import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from '../../../state/headerReduser';

// измени на аутх ркедьюсер
class LogInContainer extends React.Component {

	componentDidMount() {

		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
			.then(response => {
				if (response.data.resultCode) this.props.setCurrentUser(response.data.data);
				
			});
	}

	render() {
		return (
			<LogIn {...this.props.currentUser} />
		)
	};

}


const mapStateToProps = (state) => {
	return { currentUser: state.header.currentUser, }
};

const mapDispatchToProps = {
	setCurrentUser,
};

// это контейнер 1

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);



import Header from "./Header";
import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../state/authReduser";



class HeaderContainer extends React.Component {

	componentDidMount() {
		// withCredentials разрешает при кросдоменных запросах кидать куки
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
			.then(response => {
				let  { id, email, login }=response.data.data;
				if (response.data.resultCode===0) this.props.setCurrentUser(id, email, login);
			});
	}
	render() {
		return (
			<Header logIn={this.props.logIn} isEnter={this.props.isEnter} />
		)
	};

}


const mapStateToProps = (state) => {
	return {
		id: state.auth.id,
		email: state.auth.email,
		logIn: state.auth.login,
		isEnter: state.auth.isEnter,

	}
};

const mapDispatchToProps = {
	setCurrentUser,
};

// это контейнер 1

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);



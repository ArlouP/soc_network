
import { follow, unfollow, setTotalCount, setCarrentPage, cnangeiIsFetching, setUsers } from '../../../state/usersReduser';
import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../../common/Preloader/Preloader';

class UsersApiComponent extends React.Component {

	//если расширяем родительский класс, но при этом не передаем доп свойства можно контсруктор не писать
	// он скопирует свойства авттоматически
	// constructor(props) {
	// 	super(props);
	// 	axios.get('https://social-network.samuraijs.com/api/1.0/users')
	// 		.then(response => this.props.setUsers(response.data.items));

	// };

	componentDidMount() {
		console.log(this.props)
		this.props.cnangeiIsFetching(true);
		// настраиваем запрос на получение юзеров page это номер страницы, count колчиство вызываемых юзеров на странице
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
		${this.props.carrentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.cnangeiIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalCount(response.data.totalCount);
				// console.log(response.data)
			});
	}

	changeCarrentPage = (page) => {
		this.props.cnangeiIsFetching(true);
		this.props.setCarrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.cnangeiIsFetching(false);
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					changeCarrentPage={this.changeCarrentPage}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					totalCount={this.props.totalCount}
					pageSize={this.props.pageSize}
					carrentPage={this.props.carrentPage}
				/>
			</>

		)
	}
};

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
		totalCount: state.users.totalCount,
		pageSize: state.users.pageSize,
		carrentPage: state.users.carrentPage,
		isFetching: state.users.isFetching,
	};
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (id) => {
// 			dispatch(followAC(id));
// 		},
// 		unfollow: (id) => {
// 			dispatch(unfollowAC(id));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setTotalCount: (totalCount) => {
// 			dispatch(setTotalCountAC(totalCount));
// 		},
// 		setCarrentPage: (carrentPage) => {
// 			dispatch(setCarrentPageAC(carrentPage));
// 		},
// 		cnangeiIsFetching: (isFetching) => {
// 			dispatch(cnangeiIsFetchingAC(isFetching));
// 		}

// 	}
// }

const mapDispatchToProps = {
	follow,
	unfollow,
	setUsers,
	setTotalCount,
	setCarrentPage,
	cnangeiIsFetching,
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;
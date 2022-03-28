// редьюсеры только изменяют стейт

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CARRENT_PAGE = 'SET_CARRENT_PAGE';
const IS_FETCING = 'IS_FETCING';

let initialState = {
	users: [],
	totalCount: '',
	pageSize: 100,
	carrentPage: 1,
	isFetching: false,

};

const usersReduser = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: true }
					}
					return user;
				})
			}
		// попробуй консоль
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: false }
					}
					return user;
				})
			}
		case SET_USERS:
			return {
				...state,
				// надо ли тут раскукоживать action.users в возврате???...action.users
				users: action.users,
			}
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			}
		case SET_CARRENT_PAGE:
			return {
				...state,
				carrentPage: action.carrentPage,
			}
		case IS_FETCING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		default:
			return state;
	};

}

// Это утилиты, которые помогают нам не ошибиться,
// их не надо прокидывать через пропсы тк они не влияют на бизнес логику!!!!!!!
// export const followAC = (id) => ({ type: FOLLOW, id });
// export const unfollowAC = (id) => ({ type: UNFOLLOW, id });
// export const setUsersAC = (users) => ({ type: SET_USERS, users });
// export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
// export const setCarrentPageAC = (carrentPage) => ({ type: SET_CARRENT_PAGE, carrentPage });
// export const cnangeiIsFetchingAC = (isFetching) => ({ type: IS_FETCING, isFetching });


export const follow = (id) => ({ type: FOLLOW, id });
export const unfollow = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setCarrentPage = (carrentPage) => ({ type: SET_CARRENT_PAGE, carrentPage });
export const cnangeiIsFetching = (isFetching) => ({ type: IS_FETCING, isFetching });


export default usersReduser;
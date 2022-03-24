const LOGIN_BY_CURRENT_USER = 'LOGIN_BY_CURRENT_USER';


let initialState = {
	currentUser: null,
};

const headerReduser = (state = initialState, action) => {

	switch (action.type) {
		case LOGIN_BY_CURRENT_USER:
			return {
				...state,
				currentUser: action.currentUser
			}
		default:
			return state;
	};

}

export const setCurrentUser = (currentUser) => ({ type: LOGIN_BY_CURRENT_USER, currentUser });


export default headerReduser;
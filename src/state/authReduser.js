const LOGIN_BY_CURRENT_USER = 'LOGIN_BY_CURRENT_USER';


let initialState = {
	id: null,
	email: null,
	login: null,
	isEnter: false,
};

const authReduser = (state = initialState, action) => {

	switch (action.type) {
		case LOGIN_BY_CURRENT_USER:
			return {
				...state,
				...action.data,
				isEnter: true,

			}
		default:
			return state;
	};
}

export const setCurrentUser = (id, email, login) => ({ type: LOGIN_BY_CURRENT_USER, data: { id, email, login } });


export default authReduser;
authReduser
// редьюсеры только изменяют стейт

const ADDTEXADD_TEXT_POST = 'ADD-TEXT-POST';
const ADD_POST = 'ADD-POST';
const SET_CARRENT_PROFILE = 'SET_CARRENT_PROFILE';

let initialState = {
	posts: [
		{ message: 'bla-bla', id: 123, likes: 12 },
		{ message: 'Ola!', id: 124, likes: 11 },
		{ message: 'Comas-tass', id: 125, likes: 14 },
	],
	currentText: 'Enter text here',
	carrentProfile: null,
};

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADDTEXADD_TEXT_POST:
			return {
				...state,
				currentText: action.textPost,
			}
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { message: state.currentText, id: 7, likes: 0, }],
				currentText: '',
			}
		case SET_CARRENT_PROFILE:
			return {
				...state,
				carrentProfile: action.carrentProfile,
			}
		default:
			return state;
	};

}

// Это утилиты, которые помогают нам не ошибиться,
// их не надо прокидывать через пропсы тк они не влияют на бизнес логику!!!!!!!
export const addPostActionCreator = () => ({ type: ADD_POST, });
export const addTextPostActionCreator = (textPost) => ({ type: ADDTEXADD_TEXT_POST, textPost: textPost, });
export const setСarrentProfile = (carrentProfile) => ({ type: SET_CARRENT_PROFILE, carrentProfile });

export default profileReduser;
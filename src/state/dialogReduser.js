// редьюсеры только изменяют стейт

const ADDTEXADD_TEXT_MESSAGE = 'ADD-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-ADD_MESSAGE';

let initialState = {
	dialogs: [
		{ user: 'Pablo', id: 4, avatar: '1' },
		{ user: 'Olga', id: 1, avatar: '1' },
		{ user: 'Tonny', id: 2, avatar: '1' },
		{ user: 'Polly', id: 3, avatar: '1' },
	],
	messages: [
		{ user: 'I', message: 'bla-bla1', id: 123, date: 111, avatar: '1' },
		{ user: 'User', message: 'bla-bla2', id: 124, date: 222, avatar: '1' },
		{ user: 'I', message: 'bla-bla3', id: 125, date: 333, avatar: '1' },
	],
	currentText: 'Ente you text here',
};

const dialogReduser = (state = initialState, action) => {

	switch (action.type) {
		case ADDTEXADD_TEXT_MESSAGE:
			return {
				...state,
				currentText: action.textPost
			}
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, { message: state.currentText, id: 1, }],
				currentText: '',
			}
		default:
			return state;
	};

}

// Это утилиты, которые помогают нам не ошибиться,
// их не надо прокидывать через пропсы тк они не влияют на бизнес логику!!!!!!!
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, });
export const addTextMessageActionCreator = (textMessage) => {
	return {
		type: ADDTEXADD_TEXT_MESSAGE,
		textPost: textMessage,
	}
}

export default dialogReduser;
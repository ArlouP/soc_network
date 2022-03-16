import profileReduser from './profileReduser';
import dialogReduser from './dialogReduser';

let store = {
	_state: {
		navbar: [
			{ user: 'Pablo', id: 1, avatar: '1' },
			{ user: 'Pablo', id: 2, avatar: '2' },
			{ user: 'Pablo', id: 3, avatar: '1' },
		],
		dialogPages: {
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
		},
		profilePage: {
			posts: [
				{ message: 'bla-bla', id: 123, likes: 12 },
				{ message: 'Ola!', id: 124, likes: 11 },
				{ message: 'Comas-tass', id: 125, likes: 14 },
			],
			currentText: 'Enter text here'
		}
	},
	_collSubscriber() {
		console.log('hi');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._collSubscriber = observer;
	},


	dispatch(action) {

		this._state.profilePage = profileReduser(this._state.profilePage, action);
		this._state.dialogPages = dialogReduser(this._state.dialogPages, action);

		this._collSubscriber();
	},

}


export default store;


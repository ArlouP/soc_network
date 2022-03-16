
import profileReduser from './profileReduser';
import dialogReduser from './dialogReduser';
import usersReduser from './usersReduser';
import { combineReducers, createStore } from 'redux';


let redusers = combineReducers({
	profile: profileReduser,
	dialog: dialogReduser,
	users: usersReduser,
});

let store = createStore(redusers);



export default store;
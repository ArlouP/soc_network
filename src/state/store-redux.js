
import profileReduser from './profileReduser';
import dialogReduser from './dialogReduser';
import usersReduser from './usersReduser';
import { combineReducers, createStore } from 'redux';
import authReduser from './authReduser';


let redusers = combineReducers({
	profile: profileReduser,
	dialog: dialogReduser,
	users: usersReduser,
	auth: authReduser

});

let store = createStore(redusers);



export default store;
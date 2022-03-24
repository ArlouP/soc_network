
import profileReduser from './profileReduser';
import dialogReduser from './dialogReduser';
import usersReduser from './usersReduser';
import { combineReducers, createStore } from 'redux';
import headerReduser from './headerReduser';


let redusers = combineReducers({
	profile: profileReduser,
	dialog: dialogReduser,
	users: usersReduser,
	header: headerReduser

});

let store = createStore(redusers);



export default store;
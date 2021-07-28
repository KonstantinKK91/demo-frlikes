import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reducerNav from "./reducerNav";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerFriends from "./reducerFriends";
import reducerUsersAll from "./reducerUsersAll";
import reducerAuthMe from "./reducerAuthMe";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import reducerApp from "./reducerApp";

let reducers = combineReducers({
	profilePage: reducerProfile,
	dialogsPage: reducerDialogs,
	navPage: reducerNav,
	friendsPage: reducerFriends,
	UsersAllPage: reducerUsersAll,
	auth: reducerAuthMe,
	form: formReducer,
	app: reducerApp
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;

window.store = store.getState();
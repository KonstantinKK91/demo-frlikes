import {authMeAPI} from "../serverAPI(DAL)/api";
import {stopSubmit} from "redux-form";

const TYPE_SET_AUTH_DATA = 'TYPE-SET-AUTH-DATA';

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
}

const reducerAuthMe = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_SET_AUTH_DATA:
			return {
				...state,
				...action.data,
			}
		default:
			return state;
	}
}
export let setAuthDataAC = (id, login, email, isAuth) => ({type: TYPE_SET_AUTH_DATA, data: {id, login, email, isAuth}});

//Makes a request to authorize the current user
export const authMeApiThunk = () => {
	return async (dispatch) => {
		let response = await authMeAPI.authMeData()
		if (response.data.resultCode === 0) {
			let {id, login, email} = response.data.data;
			dispatch(setAuthDataAC(id, login, email, true));
		}
		return response;
	}
}

//Makes a request to login a user
export const authLoginThunk = (email, password, rememberMe) => {
	return async (dispatch) => {
		let response = await authMeAPI.authLogin(email, password, rememberMe);
		if (response.data.resultCode === 0) dispatch(authMeApiThunk());
		else dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
	}
}

//Makes a request to logout a user
export const authLogoutThunk = () => {
	return async (dispatch) => {
		let response = await authMeAPI.authLogout();
		if (response.data.resultCode === 0) dispatch(setAuthDataAC(null, null, null, false));
	}
}

export default reducerAuthMe;
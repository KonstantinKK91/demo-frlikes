import {authMeAPI} from "../serverAPI(DAL)/api";
import {stopSubmit} from "redux-form";
import {securityAPI} from "../serverAPI(DAL)/api"

const TYPE_SET_AUTH_DATA = 'TYPE-SET-AUTH-DATA';
const TYPE_SET_CAPTCHA_URL = 'TYPE-SET-CAPTCHA-URL';

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	captchaUrl: null
}

const reducerAuthMe = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_SET_AUTH_DATA:
			return {
				...state,
				...action.data,
			}
		case TYPE_SET_CAPTCHA_URL:
			return {
				...state,
				captchaUrl: action.url,
			}
		default:
			return state;
	}
}

export let setAuthDataAC = (id, login, email, isAuth) => ({type: TYPE_SET_AUTH_DATA, data: {id, login, email, isAuth}});
export let setCaptchaUrlAC = (url) => ({type: TYPE_SET_CAPTCHA_URL, url});

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
export const authLoginThunk = (email, password, rememberMe,captcha) => {
	return async (dispatch) => {
		let response = await authMeAPI.authLogin(email, password, rememberMe,captcha);
		if (response.data.resultCode === 0) dispatch(authMeApiThunk());
		else if (response.data.resultCode === 10) {
			dispatch(getCaptchaThunk())
		} else dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
	}
}

//Makes a request to logout a user
export const authLogoutThunk = () => {
	return async (dispatch) => {
		let response = await authMeAPI.authLogout();
		if (response.data.resultCode === 0) dispatch(setAuthDataAC(null, null, null, false));
	}
}

//Captcha request
export const getCaptchaThunk = () => {
	return async (dispatch) => {
		let response = await securityAPI.getCaptcha();
		dispatch(setCaptchaUrlAC(response.data.url));
		dispatch(stopSubmit('login', {_error:`Invalid username or password` }));
	}
}

export default reducerAuthMe;
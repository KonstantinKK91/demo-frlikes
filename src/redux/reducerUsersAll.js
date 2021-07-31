import {followedAPI, usersAPI} from "../serverAPI(DAL)/api";

const TYPE_SET_USERS = "SET-USERS";
const TYPE_ADD_USER = "ADD-USER";
const TYPE_REMOVE_USER = "REMOVE-USER";
const TYPE_TOTAL_COUNT_USER = 'TOTAL-COUNT-USER';
const TYPE_SHOW_NEXT_PAGE = 'SHOW-NEXT-PAGE';
const TYPE_TOGGLE_IS_PRELOAD = 'TOGGLE-IS-PRELOAD';
const TYPE_TOGGLE_IS_DISABLED_BUTTON = 'TOGGLE-IS-DISABLED-BUTTON';


let initialState = {
	users: [],
	totalCountUsers: 0,
	countUsers: 30,
	currentPage: 1,
	isPreload: false,
	isDisabledButton: [],
}

const reducerUsersAll = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_ADD_USER:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			}
		case TYPE_REMOVE_USER:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id == action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
			}
		case TYPE_SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		case TYPE_TOTAL_COUNT_USER:
			return {
				...state,
				totalCountUsers: action.totalUsers
			}
		case TYPE_SHOW_NEXT_PAGE:
			return {
				...state,
				users: [...state.users, ...action.users],
				currentPage: action.page
			}
		case TYPE_TOGGLE_IS_PRELOAD:
			return {
				...state,
				isPreload: action.isPreload
			}
		case TYPE_TOGGLE_IS_DISABLED_BUTTON:
			return {
				...state,
				isDisabledButton: action.disabled
					? [...state.isDisabledButton, action.userId]
					: []
			}
		default:
			return state;
	}
}

export let setUsersAC = (users) => ({type: TYPE_SET_USERS, users});
export let addUserAC = (userId) => ({type: TYPE_ADD_USER, userId});
export let removeUserAC = (userId) => ({type: TYPE_REMOVE_USER, userId});
export let setTotalCountUsersAC = (totalUsers) => ({type: TYPE_TOTAL_COUNT_USER, totalUsers});
export let showNextPageAC = (users, page) => ({type: TYPE_SHOW_NEXT_PAGE, users, page});
export let togglePreloadAC = (isPreload) => ({type: TYPE_TOGGLE_IS_PRELOAD, isPreload});
export let toggleDisableButtonAC = (disabled, userId) => ({type: TYPE_TOGGLE_IS_DISABLED_BUTTON, disabled, userId});

//Request to get users
export const getUserThunk = (countUsers, currentPage) => {
	return async (dispatch) => {
		try {
			dispatch(togglePreloadAC(true));
			let response = await usersAPI.getUsers(countUsers, currentPage);
			dispatch(togglePreloadAC(false));
			dispatch(setUsersAC(response.data.items));
			dispatch(setTotalCountUsersAC(response.data.totalCount));
		} catch (e) {
			window.reject(e);
		}
	}
}

// Request to get users from next page
export const addUsersFromNextPageThunk = (countUsers, currentPage) => {
	return async (dispatch) => {
		try {
			dispatch(togglePreloadAC(true));
			let response = await usersAPI.getUsers(countUsers, currentPage);
			dispatch(togglePreloadAC(false));
			dispatch(showNextPageAC(response.data.items, currentPage));
		} catch (e) {
			window.reject(e);
		}
	}
}

//User subscription
export const followThunk = (userId) => {
	return async (dispatch) => {
		try {
			dispatch(toggleDisableButtonAC(true, userId));
			let response = await followedAPI.userFollow(userId);
			if (response.data.resultCode == 0) dispatch(addUserAC(userId));
			dispatch(toggleDisableButtonAC(false, userId));
		} catch (e) {
			window.reject(e);
		}
	}
}

//Unsubscribing from a user
export const unfollowThunk = (userId) => {
	return async (dispatch) => {
		try {
			dispatch(toggleDisableButtonAC(true, userId));
			let response = await followedAPI.userUnfollow(userId);
			if (response.data.resultCode == 0) dispatch(removeUserAC(userId));
			dispatch(toggleDisableButtonAC(false, userId));
		} catch (e) {
			window.reject(e);
		}
	}
}

export default reducerUsersAll;


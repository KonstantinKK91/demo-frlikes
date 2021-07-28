import {profileAPI} from "../serverAPI(DAL)/api";

const TYPE_ADD_POST = "ADD-POST";
const TYPE_SET_USERS_PROFILE = 'TYPE-USERS-PROFILE';
const TYPE_SET_STATUS = 'SET-STATUS';

let initialState = {
	dataPost: [],
	personData: null,
	status: ""
}

const reducerProfile = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_ADD_POST:
			return {
				...state,
				dataPost: [...state.dataPost, {
					id: state.dataPost.length + 1,
					post: action.post,
					name: "Konstantin",
				}],
			}
		case TYPE_SET_USERS_PROFILE:
			return {
				...state,
				personData: {...action.profile}
			}
		case TYPE_SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state;
	}
}

export let addPostAC = (post) => ({type: TYPE_ADD_POST, post});
export let setUsersProfileAC = (profile) => ({type: TYPE_SET_USERS_PROFILE, profile});
export let setStatusAC = (status) => ({type: TYPE_SET_STATUS, status});

export const profileAPIThunk = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.getProfileData(userId);
		dispatch(setUsersProfileAC(response.data));
	}
}

export const setStatusThunk = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.getStatus(userId);
		dispatch(setStatusAC(response.data));
	}
}

export const updateStatusThunk = (status) => {
	return async (dispatch) => {
		let response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) dispatch(setStatusAC(status));
	}
}

export default reducerProfile;
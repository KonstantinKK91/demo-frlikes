import {profileAPI} from "../serverAPI(DAL)/api";
import {stopSubmit} from "redux-form";

const TYPE_ADD_POST = "ADD-POST";
const TYPE_SET_USERS_PROFILE = 'USERS-PROFILE';
const TYPE_SET_STATUS = 'SET-STATUS';
const TYPE_SET_PHOTO = 'SET-PHOTO';
const TYPE_IS_SUCCESS_SUBMIT_PROFILE_DATA = 'SET-IS-SUCCESS';

let initialState = {
	dataPost: [],
	personData: null,
	status: "",
	isSuccessSubmit: ''
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
		case TYPE_SET_PHOTO:
			return {
				...state,
				personData: {...state.personData, photos: action.photos}
			}
		case TYPE_IS_SUCCESS_SUBMIT_PROFILE_DATA:
			return {
				...state,
				isSuccessSubmit: action.isSuccess
			}
		default:
			return state;
	}
}

export let addPostAC = (post) => ({type: TYPE_ADD_POST, post});
export let setUsersProfileAC = (profile) => ({type: TYPE_SET_USERS_PROFILE, profile});
export let setStatusAC = (status) => ({type: TYPE_SET_STATUS, status});
export let setPhotoAC = (photos) => ({type: TYPE_SET_PHOTO, photos});
export let setIsSuccessSubmitProfileDataAC = (isSuccess) => ({type: TYPE_IS_SUCCESS_SUBMIT_PROFILE_DATA, isSuccess});

//Request to get user data by id
export const profileAPIThunk = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.getProfileData(userId);
		dispatch(setUsersProfileAC(response.data));
	}
}

//Request to get user status by id
export const setStatusThunk = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.getStatus(userId);
		dispatch(setStatusAC(response.data));
	}
}

//Request to put user status
export const updateStatusThunk = (status) => {
	return async (dispatch) => {
		let response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) dispatch(setStatusAC(status));
	}
}

//Request to put user photo
export const updatePhotoThunk = (file) => {
	return async (dispatch) => {
		let response = await profileAPI.updatePhoto(file);
		if (response.data.resultCode === 0) {
			dispatch(setPhotoAC(response.data.data.photos));
		}
	}
}

//Request to put profile
export const updateProfileThunk = (profile) => {
	return async (dispatch, getState) => {
		let userId = getState().auth.id;
		let response = await profileAPI.updateProfile(profile);
		if (response.data.resultCode === 0) {
			dispatch(profileAPIThunk(userId));
			dispatch(setIsSuccessSubmitProfileDataAC('success'));
		} else {
			dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
			dispatch(setIsSuccessSubmitProfileDataAC('fail'));
		}
	}
}

export default reducerProfile;
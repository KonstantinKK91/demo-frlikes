import {profileAPI} from "../serverAPI(DAL)/api";

const TYPE_ADD_POST = "ADD-POST";
const TYPE_SET_USERS_PROFILE = 'TYPE-USERS-PROFILE';
const TYPE_SET_STATUS = 'SET-STATUS';
const TYPE_SET_PHOTO = 'SET-PHOTO';

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
		case TYPE_SET_PHOTO:
			return {
				...state,
				personData: {...state.personData, photos:action.photos}
			}
		default:
			return state;
	}
}

export let addPostAC = (post) => ({type: TYPE_ADD_POST, post});
export let setUsersProfileAC = (profile) => ({type: TYPE_SET_USERS_PROFILE, profile});
export let setStatusAC = (status) => ({type: TYPE_SET_STATUS, status});
export let setPhotoAC = (photos) => ({type: TYPE_SET_PHOTO, photos});

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

export default reducerProfile;
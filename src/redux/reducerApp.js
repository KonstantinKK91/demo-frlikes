import {authMeApiThunk} from "./reducerAuthMe";

const TYPE_INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
	isInitialized: false,
}

const reducerApp = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_INITIALIZED_SUCCESS:
			return {
				...state,
				isInitialized: true,
			}
		default:
			return state;
	}
}
export let setInitializedSuccessAC = () => ({type: TYPE_INITIALIZED_SUCCESS});

//Application initialization
export const initializedThunk = () => {
	return (dispatch) => {
		try {
			dispatch(authMeApiThunk()).then(()=>{
				dispatch(setInitializedSuccessAC());
			})
		}catch (e) {
			window.reject(e);
		}
	}
}

export default reducerApp;
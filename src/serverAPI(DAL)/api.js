import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {'API-KEY': 'b5c3e73e-8418-4ceb-b3e6-20bd4dcb3b27'}
})

//api request: https://social-network.samuraijs.com/api/1.0/users
export const usersAPI = {
	getUsers(countUsers, currentPage) {
		return instance.get(`users?count=${countUsers}&page=${currentPage}`);
	}
}

//api request: https://social-network.samuraijs.com/api/1.0/profile
export const profileAPI = {
	getProfileData(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status){
		return instance.put(`profile/status`,{status:status});
	},
	updatePhoto(file){
		let formData = new FormData();
		formData.append("image", file);
		return instance.put('profile/photo',formData,{
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}

}
//api request: https://social-network.samuraijs.com/api/1.0/follow
export const followedAPI = {
	userUnfollow(id) {
		return instance.delete(`follow/${id}`);
	},
	userFollow(id) {
		return instance.post(`follow/${id}`);
	}
}
//api request: https://social-network.samuraijs.com/api/1.0/auth
export const authMeAPI = {
	authMeData() {
		return instance.get(`auth/me`);
	},
	authLogin(email,password,rememberMe=false){
		return instance.post(`auth/login`,{email,password,rememberMe});
	},
	authLogout(){
		return instance.post(`auth/logout`);
	}
}

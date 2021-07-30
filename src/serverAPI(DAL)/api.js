import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {'API-KEY': '5559b8ac-99cf-4cda-8d08-14d987b513db'}
})

//api request: https://social-network.samuraijs.com/api/1.0/security/get-captcha-url
export const securityAPI = {
	getCaptcha() {
		return instance.get('security/get-captcha-url');
	}
}

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
	updateStatus(status) {
		return instance.put(`profile/status`, {status: status});
	},
	updatePhoto(file) {
		let formData = new FormData();
		formData.append("image", file);
		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	updateProfile(profile) {
		return instance.put(`profile`, profile);
	},

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
	authLogin(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, {email, password, rememberMe, captcha});
	},
	authLogout() {
		return instance.post(`auth/logout`);
	}
}

export const usersSelector = state => {
	return state.UsersAllPage.users;
}
export const totalCountUsers = state => {
	return state.UsersAllPage.totalCountUsers
}
export const countUsers = state => {
	return state.UsersAllPage.countUsers;
}
export const currentPage = state => {
	return state.UsersAllPage.currentPage;
}
export const isPreload = state => {
	return state.UsersAllPage.isPreload;
}
export const isDisabledButton = state => {
	return state.UsersAllPage.isDisabledButton;
}
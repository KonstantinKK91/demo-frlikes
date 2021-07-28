import {connect} from "react-redux";
import {
	addUsersFromNextPageThunk,
	followThunk,
	getUserThunk,
	unfollowThunk,
} from "../../redux/reducerUsersAll";
import * as React from "react";
import Users from "./Users";
import {compose} from "redux";
import {
	countUsers,
	currentPage,
	isDisabledButton,
	isPreload,
	totalCountUsers,
	usersSelector
} from "../../selectors/usersSelectors";


class usersRequestAPI extends React.Component {
	componentDidMount() {
		this.props.getUser(this.props.countUsers, this.props.currentPage)
	}

	getNextPage = () => {
		this.props.addNextUsers(this.props.countUsers, this.props.currentPage + 1)
	}

	render() {
		return (
			<Users
				{...this.props}
				getNextPage={this.getNextPage}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: usersSelector(state),
		totalCountUsers: totalCountUsers(state),
		countUsers: countUsers(state),
		currentPage: currentPage(state),
		isPreload: isPreload(state),
		isDisabledButton: isDisabledButton(state)
	}
}
export default compose(connect(mapStateToProps,
	{
		follow: followThunk,
		unfollow: unfollowThunk,
		getUser: getUserThunk,
		addNextUsers: addUsersFromNextPageThunk,
	}))(usersRequestAPI)

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(addUserAC(userId))
// 		},
// 		unfollow: (userId) => {
// 			dispatch(removeUserAC(userId))
// 		},
// 		setUser: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		totalCount: (totalUsers) => {
// 			dispatch(setTotalCountUsersAC(totalUsers))
// 		},
// 		nextPage: (users, page) => {
// 			dispatch(showNextPageAC(users, page))
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleFetchingAC(isFetching))
// 		}
// 	}
// }

// let authRedirectContainer = withAuthRedirect(usersRequestAPI) //High Order Component

// export default connect(mapStateToProps,
// 	{
// 		follow: followThunk,
// 		unfollow: unfollowThunk,
// 		getUser: getUserThunk,
// 		addNextUsers: addUsersFromNextPageThunk,
// 	})(authRedirectContainer);


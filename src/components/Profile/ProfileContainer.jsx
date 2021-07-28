import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPostAC, profileAPIThunk, setStatusThunk, updateStatusThunk} from "../../redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {dataPost, personData, statusSelector} from "../../selectors/profileSelectors";
import {authUserIdSelector, isAuth} from "../../selectors/authSelectors";


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;//props from withRouter
		if (!userId) {
			userId = this.props.userId;
			if(!userId) this.props.history.push('/login')
		}
		this.props.profileAPIThunk(userId)
		this.props.setStatusThunk(userId)
	}

	render() {
		return (
			<Profile updateStatusThunk={this.props.updateStatusThunk}
			         status={this.props.status}
			         profile={this.props.profile}
			         addPost={this.props.addPost}
			         dataPost={this.props.dataPost}
			/>)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: personData(state),
		status: statusSelector(state),
		dataPost:dataPost(state),
		userId:authUserIdSelector(state),
		isAuth:isAuth(state)
	}
}

export default compose(connect(mapStateToProps, {
		profileAPIThunk,
		setStatusThunk,
		updateStatusThunk,
		addPost: addPostAC
	}),
	withAuthRedirect,
	withRouter)(ProfileContainer)

// let urlDataWithRouterComponent = withRouter(ProfileContainer) //HOC withRouter
// let authRedirectContainer = withAuthRedirect(urlDataWithRouterComponent) //HOC withAuthRedirect
// export default connect(mapStateToProps, {profileAPIThunk})(authRedirectContainer)
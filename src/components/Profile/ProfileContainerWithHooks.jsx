import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPostAC, profileAPIThunk, setStatusThunk, updateStatusThunk,updatePhotoThunk,updateProfileThunk} from "../../redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {dataPost, personData, statusSelector} from "../../selectors/profileSelectors";
import {authUserIdSelector, isAuth} from "../../selectors/authSelectors";
import {useEffect} from "react";

function ProfileContainer(props) {

	//Sets user id and calls thunk to get user data by id
	useEffect(()=>{
		let userId = props.match.params.userId;//props from withRouter
		if (!userId) {
		userId = props.userId;
		if(!userId) props.history.push('/login')
	}
	props.profileAPIThunk(userId)
	props.setStatusThunk(userId)
	},[props.match.params.userId,props.userId])

	return (
		<Profile updateStatusThunk={props.updateStatusThunk}
		         updatePhotoThunk={props.updatePhotoThunk}
		         updateProfileThunk={props.updateProfileThunk}
		         status={props.status}
		         profile={props.profile}
		         addPost={props.addPost}
		         dataPost={props.dataPost}
		         isOwnProfile = {!props.match.params.userId}
		/>)
}

let mapStateToProps = (state) => {
	return {
		profile: personData(state),
		status: statusSelector(state),
		dataPost:dataPost(state),
		userId:authUserIdSelector(state),
		isAuth:isAuth(state),
	}
}

// withRouter is used to get data from url

export default compose(connect(mapStateToProps, {
		profileAPIThunk,
		setStatusThunk,
		updateStatusThunk,
		addPost: addPostAC,
		updatePhotoThunk,
		updateProfileThunk
	}),
	withAuthRedirect,
	withRouter)(ProfileContainer)

// let urlDataWithRouterComponent = withRouter(ProfileContainer) //HOC withRouter
// let authRedirectContainer = withAuthRedirect(urlDataWithRouterComponent) //HOC withAuthRedirect
// export default connect(mapStateToProps, {profileAPIThunk})(authRedirectContainer)
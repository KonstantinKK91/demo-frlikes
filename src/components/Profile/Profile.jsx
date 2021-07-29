import cl from './Profile.module.css';
import Info from "./Info/Info";
import FriendsListContainer from "./FriendsList/FriendsListContainer";
import Posts from "./Posts/Posts";
import * as React from "react";


function Profile(props) {
	return (
		<div className={cl.main__content}>
			<div className={cl.main__section}>
				<Info updateStatusThunk={props.updateStatusThunk}
				      updatePhotoThunk={props.updatePhotoThunk}
				      updateProfileThunk={props.updateProfileThunk}
				      status={props.status}
				      profile={props.profile}
				      isOwnProfile = {props.isOwnProfile}
				/>
				<div className={cl.items}>
					<FriendsListContainer/>
					<Posts addPost={props.addPost} dataPost={props.dataPost}/>
				</div>
			</div>
		</div>
	)
}

export default Profile;
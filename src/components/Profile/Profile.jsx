import cl from './Profile.module.css';
import Image from "./Image/Image";
import Info from "./Info/Info";
import FriendsListContainer from "./FriendsList/FriendsListContainer";
import Posts from "./Posts/Posts";
import * as React from "react";


function Profile(props) {
	return (
		<div className={cl.main__content}>
			<div className={cl.main__section}>
				{/*<Image/>*/}
				<Info updateStatusThunk={props.updateStatusThunk} status={props.status} profile={props.profile}/>
				<div className={cl.items}>
					<FriendsListContainer/>
					<Posts addPost={props.addPost} dataPost={props.dataPost}/>
				</div>
			</div>
		</div>
	)
}

export default Profile;
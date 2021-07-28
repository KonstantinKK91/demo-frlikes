import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCogs,
	faEnvelope,
	faUsers,
	faHouseUser,
	faMusic,
	faNewspaper,
	faUserFriends
} from "@fortawesome/free-solid-svg-icons";

let initialState = {
	itemsNav: [
		{url: '/profile', item: "My profile", icon: <FontAwesomeIcon icon={faHouseUser}/>},
		{url: '/usersAll', item: "All people", icon: <FontAwesomeIcon icon={faUsers}/>},
		{url: '/dialogs', item: "Messages", icon: <FontAwesomeIcon icon={faEnvelope}/>},
		{url: '/friends', item: "Friends", icon: <FontAwesomeIcon icon={faUserFriends}/>},
		{url: '/news', item: "News", icon: <FontAwesomeIcon icon={faNewspaper}/>},
		{url: '/photos', item: "Photos", icon: <FontAwesomeIcon icon={faCamera}/>},
		{url: '/music', item: "Music", icon: <FontAwesomeIcon icon={faMusic}/>},
		{url: '/setting', item: "Setting", icon: <FontAwesomeIcon icon={faCogs}/>},
	],
}

const reducerNav = (state=initialState,action) => {
	return state;
}
export default reducerNav;
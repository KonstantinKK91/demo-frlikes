import {connect} from "react-redux";
import FriendsList from "./FriendsList";
import {friendsList} from "../../../selectors/friendsSelectors";

let mapStateToProps=(state)=>{
	return {
		state:friendsList(state)
	}
}

export default connect(mapStateToProps)(FriendsList);
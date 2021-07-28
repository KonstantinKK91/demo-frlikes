import Friends from "./Friends";
import {connect} from "react-redux";
import {compose} from "redux";
import {friendsList} from "../../selectors/friendsSelectors";

let mapStateToProps = (state) => {
	return {
		friendsCount: friendsList(state)
	}
}


export default compose(connect(mapStateToProps))(Friends);
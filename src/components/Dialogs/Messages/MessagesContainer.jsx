import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessagesAC} from "../../../redux/reducerDialogs";
import {dataMessages} from "../../../selectors/dialogsSelectors";

let mapStateToProps = (state) => {
	return {
		messages: dataMessages(state),
	}
}

export default connect(mapStateToProps, {onAddMessages: addMessagesAC})(Messages);
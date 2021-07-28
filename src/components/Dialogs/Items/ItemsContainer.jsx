import {connect} from "react-redux";
import Items from "./Items";
import {compose} from "redux";
import {dataDialogs} from "../../../selectors/dialogsSelectors";

let mapStateToProps=(state)=>{
	return {
		state:dataDialogs(state)
	}
}

export default compose(connect(mapStateToProps))(Items);



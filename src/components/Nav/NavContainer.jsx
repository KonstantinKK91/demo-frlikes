import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		store: state.navPage.itemsNav
	}
}

export default connect(mapStateToProps)(Nav);
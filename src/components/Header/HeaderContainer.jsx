import Header from "./Header";
import {connect} from "react-redux";
import {authLogoutThunk} from "../../redux/reducerAuthMe";
import * as React from "react";
import {compose} from "redux";
import {isAuth, login} from "../../selectors/authSelectors";

class HeaderContainer extends React.Component {
	render() {
		return (
			<Header {...this.props}/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		login: login(state),
		isAuth: isAuth(state),
	}
}

export default compose(connect(mapStateToProps, {authLogoutThunk}))(HeaderContainer)

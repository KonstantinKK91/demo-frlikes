import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isAuth} from "../../selectors/authSelectors";

export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login'/>
			return <Component {...this.props}/>
		}
	}
	let mapStateToPropsForRedirect = (state)=>{
		return {
			isAuth:isAuth(state)
		}
	}
	return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
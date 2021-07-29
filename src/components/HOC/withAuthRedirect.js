import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isAuth} from "../../selectors/authSelectors";

//If the user is not logged in then HOC redirect to the login page
export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login'/>
			return <Component {...this.props}/>
		}
	}
	let mapStateToPropsForRedirect = (state)=>{
		return {
			isAuth:isAuth(state) // true/false
		}
	}
	return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
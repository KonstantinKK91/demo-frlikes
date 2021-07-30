import cl from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {compose} from "redux";
import {connect} from "react-redux";
import * as React from "react";
import {authLoginThunk} from "../../redux/reducerAuthMe";
import {Input} from "../common/FormsValidationElements/FormsElementsForValidation";
import {email, required} from "../../validationForms/validation";
import {Redirect} from "react-router-dom";
import {isAuth,getCaptchaSelector} from "../../selectors/authSelectors";

class LoginForm extends React.Component {

	onSubmit(formData) {
		console.log(formData)
		this.props.authLoginThunk(formData.login, formData.password, formData.checkbox, formData.captcha)
	}

	render() {
		if (this.props.isAuth) return <Redirect to='/profile'/>
		return (
			<div className={cl.form}>
				<div className={cl.wrapper}>
					<div className={cl.title}>FrLikes</div>
					<div className={cl.sign}>SIGN IN</div>
					{/*form start*/}
					<form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
						<div>
							<Field component={Input}
							       type="text"
							       name='login'
							       placeholder='login'
							       validate={[required, email]}>
							</Field>
						</div>
						<div>
							<Field component={Input}
							       type="password"
							       name='password'
							       placeholder='password'
							       validate={[required]}>
							</Field>
						</div>

						{/*stopSubmit _error*/}
						{this.props.error &&
						<div className={cl.generalError}>
							<span>{this.props.error}</span>
						</div>
						}
						{/*==================*/}
						<div className={cl.inputCheckbox}>
							<Field component="input" type="checkbox" name='checkbox'></Field>
							<label htmlFor="login">Remember me</label>
						</div>
						<div>
							<button className={cl.btn} type="submit">Sign In</button>
						</div>
						{/*==================CAPTCHA===================*/}
						{ this.props.captchaUrl && <div className={cl.captcha}>
							<div className={cl.captchaImg}>
								<img src={this.props.captchaUrl} alt=""/>
							</div>
							<div className={cl.captchaInput}>
								<Field component='input' type="text" name='captcha' placeholder='Captcha'></Field>
							</div>
						</div>}

					</form>
					{/*form end*/}
				</div>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: isAuth(state),
		captchaUrl:getCaptchaSelector(state)
	}
}

export default compose(connect(mapStateToProps, {authLoginThunk}), reduxForm({form: 'login'}))(LoginForm);


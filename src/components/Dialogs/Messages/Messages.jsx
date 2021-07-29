import cl from "./Messages.module.css"
import React from "react";
import { Field, reduxForm } from 'redux-form'
import {minLength1, required} from "../../../validationForms/validation";

//=====Component return block with messages====================
function PersonMessage(props) {
	return (
		<div className={cl.message}>
			<div className={cl.info}>
				<div className={cl.avatar}>
					<img src="https://shoowbiz.ru/news/wp-content/uploads/2021/05/unnamed-8.jpg" alt=""/>
				</div>
				<span>Konstantin</span>
			</div>
			<p>{props.text}</p>
		</div>
	)
}

//==================================================
function Messages(props) {

	let onSubmit = formData => {
		console.log(formData);
		props.onAddMessages(formData.message);
	}

	let messages = props.messages.map(m => <PersonMessage text={m.messages}/>)
	return (
		<div className={cl.person__messages}>
				<div className={cl.wrapper__messages}>
					{messages}
				</div>

			<div className={cl.send__messages}>
				<form onSubmit={props.handleSubmit(onSubmit)}>
					<Field component='textarea'
					       placeholder="new message..."
					       name='message'
					       validate={[required,minLength1]}/>
					<button type="submit">SEND</button>
				</form>
			</div>
		</div>
	)
}

export default reduxForm({form:'newMessage'})(Messages);
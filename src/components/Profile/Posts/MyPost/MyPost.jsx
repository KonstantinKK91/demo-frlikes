import cl from './MyPost.module.css';
import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {minLength1, required} from "../../../../validationForms/validation";

function MyPost(props) {

	let onSubmit = (formData) => {
		console.log(formData);
		props.addPost(formData.post)
	}


	return (
		<div className={cl.wrapper}>
			<form onSubmit={props.handleSubmit(onSubmit)}>
				<Field component='textarea'
				       placeholder="add a post..."
				       name='post'
				       validate={[required,minLength1]}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

let MyPostReduxForm = reduxForm({form: 'myPost'})(MyPost)

export default MyPostReduxForm;
import cl from './PersonData.module.css';
import {Field, reduxForm} from 'redux-form'
import {useState} from "react";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PersonDataEditForm({handleSubmit,profile,...props}) {

	return (
		<form onSubmit={handleSubmit}>

			<div className={cl.fullName}>
				<label htmlFor="editProfile"><b>Your Name: </b></label>
				<Field component='input' name='fullName'></Field>
			</div>

			<div className={cl.aboutMe}>
				<label htmlFor="editProfile"><b>About me: </b></label>
				<Field component='textarea' name='aboutMe'></Field>
			</div>

			<div className={cl.aboutMe}>
				<label htmlFor="editProfile"><b>Your skills: </b></label>
				<Field component='textarea' name='lookingForAJobDescription'></Field>
			</div>

			<div className={cl.facebook}>
				<label htmlFor="editProfile"><b>facebook: </b></label>
				<Field component='input' name='contacts.facebook'></Field>
			</div>

			<div className={cl.vk}>
				<label htmlFor="editProfile"><b>vk: </b></label>
				<Field component='input' name='contacts.vk'></Field>
			</div>

			<div className={cl.website}>
				<label htmlFor="editProfile"><b>website: </b></label>
				<Field component='input' name='contacts.website'></Field>
			</div>

			<div className={cl.twitter}>
				<label htmlFor="editProfile"><b>twitter: </b></label>
				<Field component='input' name='contacts.twitter'></Field>
			</div>

			<div className={cl.instagram}>
				<label htmlFor="editProfile"><b>instagram: </b></label>
				<Field component='input' name='contacts.instagram'></Field>
			</div>

			<div className={cl.youtube}>
				<label htmlFor="editProfile"><b>youtube: </b></label>
				<Field component='input' name='contacts.youtube'></Field>
			</div>

			<div className={cl.github}>
				<label htmlFor="editProfile"><b>github: </b></label>
				<Field component='input' name='contacts.github'></Field>
			</div>

			<div className={cl.inputCheckbox}>
				<label htmlFor="editProfile"><b>looking for a job: </b></label>
				<Field component="input" type="checkbox" name='lookingForAJob'></Field>
			</div>

			{/*stopSubmit _error*/}
			{props.error &&
			<div className={cl.error}>
				<span>{props.error} </span>
				<span> <FontAwesomeIcon icon={faExclamationCircle}/></span>
			</div>
			}

			<button className={cl.buttonForm} type='submit'>SAVE</button>

		</form>
	)
}


export default reduxForm({form: 'editProfile'})(PersonDataEditForm);


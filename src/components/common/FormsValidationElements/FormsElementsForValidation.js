import cl from './FormsElementsForValidation.module.css'
import React from "react";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Input = ({input, meta, ...props}) => {
	return (
		<>
			<div>
				<input {...input} {...props} className={`${cl.input} ${meta.error && meta.touched ? cl.error : ''}`}/>
				{meta.error && meta.touched &&
				<span className={cl.exclamation}><FontAwesomeIcon icon={faExclamationCircle}/></span>
				}
			</div>
			{meta.error && meta.touched &&
			<div>
				<div className={cl.triangle}></div>
				<div className={cl.errorMessage}><span>{meta.error}</span></div>
			</div>
			}
		</>
	)
}
import cl from './HttpErrorNotification.module.css';
import * as React from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const HttpErrorNotification = props => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.container}>
				<div className={cl.title}><span>Notification:</span></div>
				<div className={cl.closeBtn}>
					<button onClick={props.closeWindowError}><FontAwesomeIcon icon={faTimesCircle}/></button>
				</div>
			</div>
			<div className={cl.textError}><span>{props.error}</span></div>
		</div>
	)
}


export default HttpErrorNotification;
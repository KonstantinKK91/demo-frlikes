import cl from './Status.module.css'
import * as React from "react";
import {useEffect, useState} from "react";

const StatusWithHooks = (props) => {

	const [editStatus, setEditStatus] = useState(false);
	const [status, setStatus] = useState(props.status);

	// Shows input for entering status
	const activatedEditStatus = () => {
		setEditStatus(true);
	}
	// Shows status and add data on server
	const deactivatedEditStatus = () => {
		setEditStatus(false);
		props.updateStatusThunk(status);
	}

	const onChangeStatus = (e) => {
		setStatus(e.target.value);
	}

	//useEffect Saves the current status to input
	useEffect(() => {
		setStatus(props.status);
	}, [props.status])

	return <>
		{editStatus
			? <input onChange={onChangeStatus}
			         maxLength={300}
			         autoFocus={true}
			         onBlur={deactivatedEditStatus}
			         value={status}
			         className={cl.input}
			         type="text"/>
			: <div onDoubleClick={activatedEditStatus}
			       className={cl.status}>{props.status || 'add your status...'}
			</div>
		}
	</>

}

export default StatusWithHooks;
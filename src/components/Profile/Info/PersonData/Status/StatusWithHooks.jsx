import cl from './Status.module.css'
import * as React from "react";
import {useEffect, useState} from "react";

const StatusWithHooks = (props) => {

	const [editStatus, setEditStatus] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activatedEditStatus = () => {
		setEditStatus(true);
	}

	const onChangeStatus = (e) => {
		setStatus(e.target.value);
	}

	const deactivatedEditStatus = () => {
		setEditStatus(false);
		props.updateStatusThunk(status);
	}

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
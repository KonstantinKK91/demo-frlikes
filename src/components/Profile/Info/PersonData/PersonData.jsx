import cl from './PersonData.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {faThumbsUp, faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import StatusWithHooks from "./Status/StatusWithHooks";
import PersonDataInfo from './PersonDataInfo';
import PersonDataEditForm from './PersonDataEditForm';
import {useState} from "react";

function PersonData(props) {

	const [editMode, setEditMode] = useState(false)
	const onSubmit = formData => {
		props.updateProfileThunk(formData);
		if (props.isSuccess==='success'){
			setEditMode(false);
		}
	}

	return (
		<div className={cl.wrapper__info}>
			{editMode
				? <PersonDataEditForm initialValues={props.profile} onSubmit={onSubmit}/>
				: <PersonDataInfo updateStatusThunk={props.updateStatusThunk}
				                  status={props.status}
				                  profile={props.profile}
				                  isOwnProfile={props.isOwnProfile}
				                  setEditMode={setEditMode}
				/>}

		</div>
	)
}

export default PersonData;


import cl from './PersonData.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {faThumbsUp, faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import StatusWithHooks from "./Status/StatusWithHooks";

//The component returns the user's contact list
const ContactList = props => {
	return (
		<div className={cl.contacts}>
			{props.contactTitle} : <span>{props.contactResourse}</span>
		</div>
	)

}

//=============================================

function PersonDataInfo(props) {
	//If the data is not loaded or will show Preloader
	if (!props.profile) {
		return <Preloader/>
	}

	return <>
		<div className={cl.section__name}>
			{props.profile.fullName}
			<StatusWithHooks updateStatusThunk={props.updateStatusThunk} status={props.status}/>
		</div>

		<div className={cl.section__data}>
			<p>About Me: <span>{props.profile.aboutMe ? props.profile.aboutMe : 'no information'}</span></p>
			<p>Looking for a job: <span>{props.profile.lookingForAJob ? <FontAwesomeIcon icon={faThumbsUp}/> : 'no'}</span>
			</p>
			<p>My skills
				: <span>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'no information'}</span>
			</p>
			<p>Contacts:{Object.keys(props.profile.contacts).map(key => {
				if (key !== "mainLink")
					return <ContactList contactTitle={key}
					                    key={key}
					                    contactResourse={props.profile.contacts[`${key}`]
						                    ? props.profile.contacts[`${key}`]
						                    : 'no information'}/>
			})}
			</p>
		</div>

		{props.isOwnProfile && <div className={cl.edit}>
			<button onDoubleClick={() => {
				props.setEditMode(true)
			}}>
				Edit <FontAwesomeIcon icon={faEdit}/>
			</button>
		</div>}
	</>


}

export default PersonDataInfo;


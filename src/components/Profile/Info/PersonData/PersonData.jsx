import cl from './PersonData.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import StatusWithHooks from "./Status/StatusWithHooks";


function PersonData(props) {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div>
			<div className={cl.section__name}>
				{props.profile.fullName}
				<StatusWithHooks updateStatusThunk={props.updateStatusThunk} status={props.status}/>
			</div>

			<div className={cl.section__data}>
				<p>About Me: <span>{props.profile.aboutMe ? props.profile.aboutMe : 'no information'}</span></p>
				<p>looking for a job: <span>{props.profile.lookingForAJob ? <FontAwesomeIcon icon={faThumbsUp}/> : 'no information'}</span></p>
				<p>facebook: <span>{props.profile.contacts.facebook ? props.profile.contacts.facebook : 'no information'}</span></p>
				<p>vk: <span>{props.profile.contacts.vk ? props.profile.contacts.vk : 'no information'}</span></p>
			</div>
		</div>
	)
}

export default PersonData;


import cl from './Info.module.css';
import Avatar from "./Avatar/Avatar";
import PersonData from "./PersonData/PersonData";

function Info(props) {
	return (
		<div className={cl.section__info}>
			<Avatar profile={props.profile}
			        updatePhotoThunk={props.updatePhotoThunk}
			        isOwnProfile = {props.isOwnProfile}
			/>
			<PersonData updateStatusThunk={props.updateStatusThunk}
			            status={props.status}
			            profile={props.profile}/>
		</div>
	)
}

export default Info;
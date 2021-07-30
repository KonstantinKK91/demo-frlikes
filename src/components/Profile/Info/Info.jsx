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
			            profile={props.profile}
			            isOwnProfile = {props.isOwnProfile}
			            updateProfileThunk={props.updateProfileThunk}
			            isSuccess={props.isSuccess}
			/>
		</div>
	)
}

export default Info;
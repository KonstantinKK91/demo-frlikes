import avatar from "../../../../image/anonym.jpg";
import cl from './Avatar.module.css';
import Preloader from "../../../common/Preloader/Preloader";

function Avatar(props) {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className={cl.section__foto}>
			<img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt=""/>
		</div>
	)
}

export default Avatar;
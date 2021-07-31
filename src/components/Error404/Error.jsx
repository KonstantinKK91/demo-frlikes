import cl from './Error.module.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBug,faArrowDown} from "@fortawesome/free-solid-svg-icons";

const ErrorPage = props => {
	return (
		<div className={cl.errorPageNotFound}>
			<div className={cl.errorIcon}>
				<FontAwesomeIcon icon={faBug}/>
			</div>
			<div className={cl.textError}>
				<div className={cl.item1}>ERROR <b>404</b></div>
				<div className={cl.item2}>Page not found</div>
				<div className={cl.arrow}><FontAwesomeIcon icon={faArrowDown}/></div>
				<Link to='/'>homepage</Link>
			</div>
		</div>
	)
}

export default ErrorPage;
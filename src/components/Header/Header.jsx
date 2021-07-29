import logo from "../../image/logo.png";
import cl from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Header(props) {

	let logout = () => {
		props.authLogoutThunk()
	}

	return (
		<header className={cl.header}>
			<div className={cl.logo}>
				<a href="#"><img src={logo} alt="logo"/></a>
			</div>
			<div className={cl.header__title}>
				<p className={cl.title}>FrLikes</p>
				<p className={cl.subtitle}>Stay in touch</p>
			</div>
			<div className={cl.login}>{props.isAuth
				? <div>
					<NavLink to='/profile'>{props.login}</NavLink>
					<div className={cl.exit}>
						<button onClick={logout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</button>
					</div>
				</div>
				: <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header;


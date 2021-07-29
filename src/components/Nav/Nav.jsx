import cl from "./Nav.module.css"
import {NavLink} from "react-router-dom";

//Returns a block with NavLink
function Links(props) {
	return (
		<li>
			<NavLink to={props.url} activeClassName={cl.active}>
				<div className={cl.items}>
					<p>{props.icon}</p>
					<span>{props.item}</span>
				</div>
			</NavLink>
		</li>
	)
}
//map state from reducerNav and renders to the Links component
function Nav(props) {
	let link = props.store.map(i => <Links url={i.url} icon={i.icon} item={i.item}/>)
	return (
		<nav className={cl.main__nav}>
			<ul>
				{link}
			</ul>
		</nav>
	)
}

export default Nav;
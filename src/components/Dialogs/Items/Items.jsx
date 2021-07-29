import cl from "./Items.module.css";
import {NavLink} from "react-router-dom";

//=====Component return links with avatar+name====================
function DialogsItems(props) {
	return (
		<div className={cl.person}>
			<img src={props.img} alt=""/>
			<NavLink to={`/dialogs/id=${props.id}`} activeClassName={cl.active}>{props.name}</NavLink>
		</div>
	)
}
//===============================================================
function Items(props) {
	let dialogsMap = props.state.map(d => <DialogsItems name={d.name} id={d.id} img={d.img}/>)
	return (
		<div className={cl.dialogs__items}>
			{dialogsMap}
		</div>
	)
}

export default Items;



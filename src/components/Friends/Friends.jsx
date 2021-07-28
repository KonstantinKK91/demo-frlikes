import cl from './Friends.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
	return (
		<div className={cl.info}>
			<div className={cl.photo}>
				<img src={props.img} alt=""/>
			</div>
			<div className={cl.name}>
				{props.name}
			</div>
			<div className={cl.actions}>
				<p>To write a message</p>
				<p>Remove from friends</p>
			</div>
		</div>
	)
}


const Friends = (props) => {

	let friends = props.friendsCount.map(f => <Item img={f.img} name={f.name}/>)
	return (
		<div className={cl.section}>
			<div className={cl.input}>
				<input type="text" placeholder="Start typing your friend's name"/>
				<span><FontAwesomeIcon icon={faSearch}/></span>
			</div>
			{friends}
		</div>
	)
}

export default Friends;
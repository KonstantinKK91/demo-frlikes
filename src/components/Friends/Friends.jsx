import cl from './Friends.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

//====Return a block with information about a friend in the Friends component=======
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

//====Renders an Item and a map of friends from reducerFriends to the component + block search======
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
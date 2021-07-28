import cl from './FriendsList.module.css';
import {Link} from "react-router-dom";

const FriendItem = (props) => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.section}>
				<img src={props.img} alt=""/>
			</div>
			<div className={cl.name}>{props.name}</div>
		</div>
	)
}

const FriendsList = (props) => {
	let friendItem = props.state.map(f => <FriendItem img={f.img} name={f.name}/>)
	return (
		<div className={cl.friendsList}>
			<p><Link exact to="/friends">Friends</Link> {props.state.length}</p>
			<div className={cl.items}>
				{friendItem}
			</div>
		</div>
	)
}
export default FriendsList
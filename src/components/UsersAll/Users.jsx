import cl from './Users.module.css';
import defaultPhoto from '../../image/user.png'
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import React from "react";

const Users = (props) => {
	return <>
		{props.isPreload ? <Preloader/> : null}
		<div className={cl.wrapper}>
			<p>People <span>{props.totalCountUsers}</span></p>
			{props.users.map(u =>
				(<div className={cl.user}>
					<div className={cl.photo}>
						<NavLink to={`/profile/${u.id}`}><img src={u.photos.small === null ? defaultPhoto : u.photos.small} alt=""/></NavLink>
					</div>
					<div className={cl.info}>
						<div className={cl.name}>
							<NavLink to={`/profile/${u.id}`}><span>{u.name}</span></NavLink>
							{/*<span>{u.surname}</span>*/}
						</div>
						<div className={cl.location}>
							<span>'city', 'country'</span>
							{/*<span>{u.location.city}, {u.location.country}</span>*/}
						</div>
					</div>
					<div className={cl.btn}>
						{u.followed
							? <button disabled={props.isDisabledButton.some(id=>id==u.id)} onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
							: <button disabled={props.isDisabledButton.some(id=>id==u.id)} onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
					</div>
				</div>)
			)}
			<button onClick={() => {
				props.getNextPage()
			}} className={cl.showUser}>Show more...
			</button>
		</div>
	</>
}


export default Users;
import cl from "./Post.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import avatar from '../../../../image/image.jpg'

function Post(props) {
	return (
		<div className={cl.wrapper}>
			{/*====container==============*/}
			<div className={cl.container}>
				{/*=====avatar+name=======*/}
				<div className={cl.image}>
					<img src={avatar} alt=""/>
					<div className={cl.name}>{props.name}</div>
				</div>
				{/*=====post============*/}
				<div className={cl.post}>
					<span>{props.text}</span>
				</div>
				{/*=======like============*/}
				<div className={cl.like}>
					<span className={cl.icon}><FontAwesomeIcon icon={faThumbsUp}/></span>
					<span className={cl.count_like}>0</span>
				</div>
			</div>
		</div>
	)
}

export default Post;
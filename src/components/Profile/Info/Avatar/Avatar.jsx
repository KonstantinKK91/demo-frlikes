import avatar from "../../../../image/anonym.jpg";
import cl from './Avatar.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {useState, useEffect} from "react";
import loaderGIF from '../../../../image/Preloader/iphoneLoader.gif'

function Avatar(props) {
	//local state
	const [isChangeFile, setIsChangeFile] = useState(false);

	//When the value of input changes, call thunk and make a put request to update the photo on the server
	const onChange = e => {
		if (!!e.target.files.length) {
			setIsChangeFile(true);
			props.updatePhotoThunk(e.target.files[0]);
		}
	}

	//useEffect Show preloader until download is complete
	useEffect(() => {
		setIsChangeFile(false);
	}, [props.profile])

	//If the data is not loaded or will show Preloader
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div className={cl.section__foto}>
			{isChangeFile
				? <div className={cl.loaderImg}><img src={loaderGIF} alt=""/></div>
				: <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt=""/>}
			{props.isOwnProfile &&
			<div className={cl.inputWrapper}>
				<input onChange={onChange} type="file" name='file' id='file'/>
				<label htmlFor='file'>Update photo <FontAwesomeIcon icon={faDownload}/> </label>
			</div>}
		</div>
	)
}

export default Avatar;
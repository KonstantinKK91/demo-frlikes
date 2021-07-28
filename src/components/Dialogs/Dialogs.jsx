import cl from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import React from "react";
import ItemsContainer from "./Items/ItemsContainer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

function Dialogs(props) {
	return (
		<div className={cl.dialogs}>
			<ItemsContainer/>
			<MessagesContainer/>
		</div>
	)
}

export default compose(withAuthRedirect)(Dialogs)


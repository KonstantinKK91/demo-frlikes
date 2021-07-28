const TYPE_ADD_MESSAGES = "ADD-MESSAGES";

let initialState = {
	dataMessages: [
		{id: 2, messages: "Good"},
		{id: 3, messages: "Yo"},
	],
	dataDialogs: [
		{id: 3, name: 'Roma', img: "https://forexdengi.com/attachment.php?attachmentid=2474955&d=1549378078"},
		{id: 4, name: 'Dima', img: "https://i.artfile.ru/2048x1430_677036_[www.ArtFile.ru].jpg"},
	],
}

const reducerDialogs = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_ADD_MESSAGES:
				return {
					...state,
					dataMessages: [...state.dataMessages,{
						id: state.dataMessages.length + 1,
						messages: action.message,
					}],
				}
		default:
			return state;
	}
}

export let addMessagesAC = (message) => ({type: TYPE_ADD_MESSAGES,message});

export default reducerDialogs;


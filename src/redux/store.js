import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faCamera, faCogs,
	faEnvelope,
	faHouseUser,
	faMusic,
	faNewspaper,
	faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import reducerProfile from "./reducerProfile";
import reducerNav from "./reducerNav";
import reducerDialogs from "./reducerDialogs";

let store = {
	//==============data============================
	_state: {
		dialogsPage: {
			dataMessages: [
				{
					id: 1,
					messages: "По умолчанию длинные слова не переносятся, если на то нет явных указаний с помощью дефиса, и начинаются с новой строки.\n" +
						"\n" +
						"Для того, чтобы игнорировались черточки, сразу видимые глазу, вносим word-break: keep-all;.\n" +
						"\n" +
						"Для того, чтобы браузер не обращал внимания и на мягкий дефис, вставляем hyphens: none;.\n" +
						"\n" +
						"Если требуется перенос слов, то word-wrap: break-word; советую применять всегда, поскольку он понимается всеми браузерами. Он отличается от word-break: break-all;, которое является приоритетным, тем, что слова, которые не помещаются в блок, начинаются с новой строки и учитывается рекомендация мягкого дефиса.\n" +
						"\n" +
						"При совместном использовании word-break: break-all; с hyphens: auto;, последнее игнорируется. hyphens: auto; расставляет любые дефисы по своему усмотрению. Но для того, чтобы оно работало, нужно обозначить свой язык, указав в div атрибут lang=\"ru\"."
				},
				{id: 2, messages: "Good"},
				{id: 3, messages: "Yo"},
				{
					id: 4,
					messages: "JavaScript является самым популярным языком программирования, используемым для разработки веб-приложений на стороне клиента (англ.). Возможности языка. JavaScript является объектно-ориентированным языком, но используемое в языке прототипирование обуславливает отличия в работе с объектами по сравнению с традиционными класс-ориентированными языками."
				},
				{
					id: 5,
					messages: "Programmer Programmer Programmer ProgrammerProgrammerProgrammerProgrammerProgrammervProgrammerProgrammerProgrammerProgrammerProgrammer ProgrammerProgrammer Programmer"
				},

				// {id: 1, messages: "Hello"},
				// {id: 2, messages: "Good"},
				// {id: 3, messages: "Yo"},
				// {id: 4, messages: "Yes"},
				// {id: 5, messages: "Programmer"},
				// {id: 1, messages: "Hello"},
				// {id: 2, messages: "Good"},
				// {id: 3, messages: "Yo"},
				// {id: 4, messages: "Yes"},
				// {id: 5, messages: "Programmer"},
				// {id: 1, messages: "Hello"},
				// {id: 2, messages: "Good"},
				// {id: 3, messages: "Yo"},
				// {id: 4, messages: "Yes"},
				// {id: 5, messages: "Programmer"},
				// {id: 1, messages: "Hello"},
				// {id: 2, messages: "Good"},
				// {id: 3, messages: "Yo"},
				// {id: 4, messages: "Yes"},
				// {id: 5, messages: "Programmer"},

			],
			dataDialogs: [
				{
					id: 1,
					name: 'Den',
					img: "https://dogcatdog.ru/wp-content/uploads/3/8/c/38cb8868922298d14e584e937004afc9.jpeg"
				},
				{
					id: 2,
					name: 'Evgeny',
					img: "https://nastol.net/wallpaper/big/87/4619305-krasnaya-panda-derevo-vetki-zhivotnye.jpg"
				},
				{id: 3, name: 'Roma', img: "https://forexdengi.com/attachment.php?attachmentid=2474955&d=1549378078"},
				{id: 4, name: 'Dima', img: "https://i.artfile.ru/2048x1430_677036_[www.ArtFile.ru].jpg"},
			],
			updateDataMessages: '',
		},

		navPage: {
			itemsNav: [
				{url: '/profile', item: "My profile", icon: <FontAwesomeIcon icon={faHouseUser}/>},
				{url: '/dialogs', item: "Messages", icon: <FontAwesomeIcon icon={faEnvelope}/>},
				{url: '/friends', item: "Friends", icon: <FontAwesomeIcon icon={faUserFriends}/>},
				{url: '/news', item: "News", icon: <FontAwesomeIcon icon={faNewspaper}/>},
				{url: '/photos', item: "Photos", icon: <FontAwesomeIcon icon={faCamera}/>},
				{url: '/music', item: "Music", icon: <FontAwesomeIcon icon={faMusic}/>},
				{url: '/setting', item: "Setting", icon: <FontAwesomeIcon icon={faCogs}/>},
			],
		},

		profilePage: {
			friendsList: [
				{
					id: 1,
					name: 'Den',
					img: "https://dogcatdog.ru/wp-content/uploads/3/8/c/38cb8868922298d14e584e937004afc9.jpeg"
				},

			],
			personData: {
				personName: 'Konstantin Kozlov',
				['Date of birth']: "04 october",
				Education: "BGTY",
				Profession: 'Programmer',
				Country: 'Russia',
				City: 'Bryansk',
			},
			dataPost: [
				{id: 1, post: 'Hello', name: 'Konstantin', like: 0,}
			],
			textareaValue: '',
		},

	},
	getState() {
		return this._state;
	},
	//==========callback function - renderTree (for render DOM) from index.js=======================
	_renderTree() {
	},
	subscribe(observer) {
		this._renderTree = observer;
	},
	//==========dispatcher(action)===============================
	dispatch(action) {
		reducerProfile(this._state.profilePage, action);
		reducerDialogs(this._state.dialogsPage, action);
		reducerNav(this._state.navPage, action)
		this._renderTree();
	}
}

export default store;
// window.store = store;
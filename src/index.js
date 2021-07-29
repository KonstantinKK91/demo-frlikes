import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";

//HashRouter is used to make the app work properly on GitHub page
// Provider is used to implement the Context api
ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);





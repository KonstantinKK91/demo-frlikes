import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);





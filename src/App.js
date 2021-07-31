import './css/App.css';
import './css/null.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Footer from "./components/Footer/Footer";
// import Dialogs from "./components/Dialogs/Dialogs";
// import UsersContainer from "./components/UsersAll/UsersContainer";
import StartPage from './components/StartPage/StartPage'
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavContainer from "./components/Nav/NavContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainerWithHooks";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ErrorPage from "./components/Error404/Error";
import HttpErrorNotification from "./components/HttpErrorNotification/HttpErrorNotification";
import * as React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PreloaderTwo from "./components/common/PreloaderTwo/PreloaderTwo";
import {initializedThunk} from "./redux/reducerApp";
import {Suspense, useEffect, useState} from "react";
import {withSuspense} from "./components/HOC/withSuspense";

const UsersContainer = React.lazy(() => import('./components/UsersAll/UsersContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

function App(props) {

	let [error, setError] = useState('');

	//Add the reject method to the window object
	window.__proto__.reject = (e)=>{
		setError(`${e}`);
	}

	const closeWindowError = () => {
		setError('');
	}

	useEffect(() => {
		props.initializedThunk();
	}, [props.initializedThunk()])

	if (!props.isInitialized) {
		return <PreloaderTwo/>
	}

	return (
		<div className="app-wrapper">
			<HeaderContainer/>
			{error && <HttpErrorNotification closeWindowError={closeWindowError} error={error}/>}
			<div className="main">
				<NavContainer/>
				<Switch>
					<Route exact path='/' render={() => <StartPage/>}/>
					<Route path='/dialogs' render={() => withSuspense(Dialogs)}/>
					<Route path='/usersAll' render={() => withSuspense(UsersContainer)}/>
					<Route path='/login' render={() => <Login/>}/>
					<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
					<Route path='/friends' render={() => <FriendsContainer/>}/>
					<Route path='/news' render={() => <News/>}/>
					<Route path='/music' render={() => <Music/>}/>
					<Route path='/setting' render={() => <Setting/>}/>
					<Route path='*' render={() => <ErrorPage/>}/>
					{/*<Route path='/photos' render={Photos}/>*/}
				</Switch>
			</div>
			<Footer/>
		</div>
	)
}

let mapStateToProps = state => {
	return {
		isInitialized: state.app.isInitialized,
	}
}

export default compose(withRouter, connect(mapStateToProps, {initializedThunk}))(App);

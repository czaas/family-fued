import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import HomeScreen from './components/home-screen.js';
import EditGame from './components/edit-index.js';

ReactDom.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeScreen} />
			<Route path="/edit-game/:gameId" component={EditGame} />
		</Route>
	</Router>, 
	document.getElementById('main')
);
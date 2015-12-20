import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router';

import { Wrapper } from './components/wrapper.js';
import { HomeScreen } from './components/home-screen.js';
import { AddAnswer } from './components/answers/index.js';

ReactDom.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={Wrapper}>
			<IndexRoute component={HomeScreen} />
			<Route path="/add-answer/:id" component={AddAnswer} />
		</Route>
	</Router>, 
	document.getElementById('main')
);
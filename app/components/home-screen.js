import React from 'react';
import { Link } from 'react-router'

import store from '../store/main.js';
import { newGame } from '../store/main.js';
import { AddQuestion } from './questions/index.js';

export class HomeScreen extends React.Component {

	constructor() {
		super();
		this.state = store.getState();
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(question) {
		store.dispatch(newGame(question));

		this.setState(store.getState());
	}

	render() {
		let questions = this.state.games.map((question)=>{
			return <div key={question.id}><h2><Link to={"/add-answer/" + question.id}>{question.name}</Link></h2></div>;
		});
		return (
			<div>
				<AddQuestion handleAdd={this.handleAdd} />
				{questions}
			</div>
		);
	}
}
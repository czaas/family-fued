import React from 'react';
import { Link } from 'react-router';
//import Firebase from 'firebase';

import store from '../store/main.js';
import { newGame, deleteQuestion } from '../store/main.js';
import { AddQuestion } from './questions/index.js';
import { ShowQuestions } from './questions/show-questions.js';

export class HostPage extends React.Component {

	constructor() {
		super();
		this.state = store.getState();
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
	}

	handleDeleteQuestion(questionId) {

		var questionToDelete = {
			gameId: questionId
		};

		store.dispatch(deleteQuestion(questionToDelete));

		this.setState(store.getState());
	}

	handleAdd(question) {
		store.dispatch(newGame(question));

		this.setState(store.getState());
	}

	render() {
		return (
			<div>
				<AddQuestion handleAdd={this.handleAdd} />
				<ShowQuestions questions={this.state.games} deleteQuestion={this.handleDeleteQuestion} />
			</div>
		);
	}
}
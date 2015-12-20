// handles state
import React from 'react';
import store from '../../store/main.js';
import { newAnswer, deleteAnswer } from '../../store/main.js';

import { AddAnswerForm } from './add-answer.js';
import ShowAnswers from './show-answers.js';

export class AddAnswer extends React.Component {
	constructor(){
		super();
		this.handleAnswer = this.handleAnswer.bind(this);
		this.handleDelete = this.handleDelete.bind(this);

		this.state = store.getState();
	}

	handleDelete(answerId){
		let answer = {
			answerId: answerId,
			gameId: this.props.params.id
		};

		store.dispatch(deleteAnswer(answer));
		this.setState(store.getState());
	}

	handleAnswer(obj) {

		let action = {
			...obj,
			gameId: this.props.params.id
		};

		store.dispatch(newAnswer(action));
		this.setState(store.getState()); 
	}

	render() {
		return (
			<div>
				<AddAnswerForm handleAnswer={this.handleAnswer} />
				<ShowAnswers 
					question={this.state.games[this.props.params.id].name}
					answers={this.state.games[this.props.params.id].answers}
					handleDelete={this.handleDelete}
				/>
			</div>
		);
	}
}
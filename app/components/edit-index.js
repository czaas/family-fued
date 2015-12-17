// handles state
import React from 'react';
import store from '../store/main.js';
import { newAnswer } from '../store/main.js';

import Answer from './edit-game';
import ShowAnswers from './show-answers.js';

class index extends React.Component {
	constructor(){
		super();
		this.handleAnswer = this.handleAnswer.bind(this);

		this.state = store.getState();
		console.log(this.state);
	}

	handleAnswer(obj){
		let action = {
			...obj,
			gameId: this.props.params.gameId
		}
		store.dispatch(newAnswer(action));
		console.log(store.getState());
		this.setState(store.getState()); 
	}

	render() {
		return (
			<div>
				<Answer handleAnswer={this.handleAnswer} />
				<h2>Answers</h2>
				<ShowAnswers answers={this.state.games[this.props.params.gameId].answers} />
			</div>
		);
	}
}

export default index;
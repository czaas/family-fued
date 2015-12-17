// handles state
import React from 'react';
import store from '../store/main.js';
import { newAnswer } from '../store/main.js';

import { EditAnswer } from './edit-game';
import ShowAnswers from './show-answers.js';

class index extends React.Component {
	constructor(){
		super();
		this.handleAnswer = this.handleAnswer.bind(this);

		this.state = store.getState();
	}

	handleAnswer(obj){
		let action = {
			...obj,
			gameId: this.props.params.gameId
		}
		store.dispatch(newAnswer(action));
		this.setState(store.getState()); 
	}

	render() {
		return (
			<div>
				<EditAnswer handleAnswer={this.handleAnswer} />
				<ShowAnswers 
					question={this.state.games[this.props.params.gameId].name} 
					answers={this.state.games[this.props.params.gameId].answers} 
				/>
			</div>
		);
	}
}

export default index;
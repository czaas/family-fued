import React from 'react';

export class AddGame extends React.Component {

	constructor() {
		super();
		this.handleAddGame = this.handleAddGame.bind(this);
	}

	handleAddGame(e) {
		e.preventDefault();

		this.props.handleAddGame(this.refs.game.value);

		this.refs.addGameForm.reset();
	}

	render() {
		return (
			<div>
				<h2>Add Question to game</h2>
				<form ref='addGameForm' onSubmit={this.handleAddGame}>
					<input type='text' ref='game' placeholder='New Question' />
					<button>Add Game</button>
				</form>
			</div>
		);
	}
}

export class EditAnswer extends React.Component {

	constructor(){
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();

		let newAnswer = {
			answer: this.refs.answer.value,
			points: this.refs.points.value
		};
		this.props.handleAnswer(newAnswer);

		this.refs.answerForm.reset();
	}

	render() {

		return (
			<div>
				<form ref='answerForm' onSubmit={this.handleSubmit}>
					<input type='text' ref='answer' placeholder='New Answer' />
					<input type='number' ref='points' min='0' max='100' placeholder='points' />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default EditAnswer
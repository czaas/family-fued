import React from 'react';

export class AddQuestion extends React.Component {

	constructor() {
		super();
		this.handleAddGame = this.handleAddGame.bind(this);
	}

	handleAddGame(e) {
		e.preventDefault();

		this.props.handleAdd(this.refs.game.value);

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
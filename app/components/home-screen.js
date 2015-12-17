import React from 'react';
import { Link } from 'react-router'

import store from '../store/main.js';
import { newGame } from '../store/main.js';
import { AddGame } from './edit-game.js';

export class HomeScreen extends React.Component {

	constructor() {
		super();
		this.state = store.getState();
		this.handleAddGame = this.handleAddGame.bind(this);
	}

	handleAddGame(gameName) {
		store.dispatch(newGame(gameName));

		this.setState(store.getState());
	}

	render() {
		let gameNames = this.state.games.map((game)=>{
			return <div><h2><Link to={"/edit-game/" + game.id}>{game.name}</Link></h2></div>;
		});
		return (

			<div>
				<AddGame handleAddGame={this.handleAddGame} />
				{gameNames}
			</div>
		);
	}
}


export default HomeScreen;
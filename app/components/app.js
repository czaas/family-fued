import React from 'react';

import store from './../store/main.js';

export class App extends React.Component {

	constructor(){
		super();
		
		this.state = store.getState();
		console.log(this.state);
	}

	componentWillMount(){

	}

	render() {
		let games = this.state.games.map((game)=>{
			return <h2>{game.name}</h2>
		});
		return (
			<div>
				<h1>Family Fued</h1>
				{games}
			</div>
		);
	}
}


export default App;
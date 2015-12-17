import { combineReducers } from 'redux';

let gameReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_GAME':

			action.newGame.id = state.length;
			return [
				...state,
				action.newGame
			];
			
			break;
		case 'ADD_ANSWER':
			let games = state.map((game) => {

				// looks for state game id vs incoming request id
				if (game.id === parseInt(action.gameId, 10)) {

					// adds new answer with old answers
					let allAnswers = [...game.answers, {answer: action.newAnswer, points: action.points}];

						// creating a new copy of game and answers object in new object
					return Object.assign({}, game, { answers: allAnswers});
				} else {
					return game;
				}
				
			});
			
			return games;
			
		default:
			return state;
	}
}

let allReducers = combineReducers({ games: gameReducer });



export default allReducers;